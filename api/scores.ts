// GET /api/scores: the high-score table, best first.
// POST /api/scores: submits the score of a game, then returns the table.
//
// The browser reports the score, so the checks below make cheating hard, not
// impossible: a human-like reCAPTCHA score, a single-use game ticket, a score
// no higher than the game rules allow in the time since the game started, and
// a rate limit. Remove a bad entry from the Upstash console.
import { maxScore } from '../src/components/BugSquash/game.js';
import {
  checkInitials,
  makesTheTable,
  RECAPTCHA_ACTION,
  TOP_SIZE,
} from '../src/components/BugSquash/scores.js';
import {
  clientIp,
  json,
  keys,
  rateLimited,
  redis,
  scoreMember,
  topScores,
} from './_shared.js';

// The ticket is made a little after the game starts, by one network trip
const START_SLACK_MS = 2000;
const MIN_RECAPTCHA_SCORE = 0.5;

interface Submission {
  game: string;
  initials: string;
  score: number;
  token: string;
}

const isSubmission = (body: unknown): body is Submission => {
  const value = body as Partial<Submission> | null;
  return (
    typeof value?.game === 'string' &&
    value.game.length <= 64 &&
    typeof value.initials === 'string' &&
    typeof value.token === 'string' &&
    Number.isSafeInteger(value.score) &&
    (value.score as number) > 0
  );
};

const isHuman = async (token: string, request: Request) => {
  const secret = process.env.GOOGLE_RECAPTCHA_SECRET_KEY;
  if (!secret) {
    // Only `vercel dev` may run without the key: Vercel sets VERCEL_ENV on
    // every deployment, and a deployment without the key refuses every score
    // rather than trusting them all
    const deployed = ['production', 'preview'].includes(
      process.env.VERCEL_ENV ?? ''
    );
    return !deployed;
  }
  const response = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      body: new URLSearchParams({
        secret,
        response: token,
        remoteip: clientIp(request),
      }),
    }
  );
  const result = (await response.json()) as {
    success?: boolean;
    action?: string;
    score?: number;
  };
  return (
    result.success === true &&
    result.action === RECAPTCHA_ACTION &&
    (result.score ?? 0) >= MIN_RECAPTCHA_SCORE
  );
};

export async function GET() {
  return json({ scores: await topScores() });
}

export async function POST(request: Request) {
  if (await rateLimited(request, 'score', 5)) {
    return json({ error: 'rate' }, 429);
  }
  const body: unknown = await request.json().catch(() => null);
  if (!isSubmission(body)) return json({ error: 'invalid' }, 400);
  if (checkInitials(body.initials)) return json({ error: 'initials' }, 400);
  if (!(await isHuman(body.token, request))) {
    return json({ error: 'captcha' }, 403);
  }

  // Taken, so the same game cannot submit twice
  const startedAt = await redis.getdel<number>(keys.game(body.game));
  if (startedAt === null) return json({ error: 'expired' }, 410);
  const elapsedMs = Date.now() - Number(startedAt) + START_SLACK_MS;
  if (body.score > maxScore(elapsedMs) || body.score % 10 !== 0) {
    return json({ error: 'implausible' }, 422);
  }

  // Same rule as the game, which only offers to save a score that beats the
  // last one in the table. Someone else may have beaten it meanwhile.
  if (!makesTheTable(body.score, await topScores())) {
    return json({ error: 'beaten' }, 409);
  }

  const member = scoreMember(body.initials, body.game);
  await redis.zadd(keys.scores, { score: body.score, member });
  // Keep only the best TOP_SIZE
  await redis.zremrangebyrank(keys.scores, 0, -(TOP_SIZE + 1));
  // Where the new score sits, so the game highlights that row and not an
  // equal score of someone else. Null if a better one pushed it out meanwhile.
  const rank = await redis.zrevrank(keys.scores, member);
  return json({ scores: await topScores(), rank });
}
