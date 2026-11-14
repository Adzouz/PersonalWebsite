// Helpers of the Bug Squash API. Files starting with `_` are not routes.
import { Redis } from '@upstash/redis';
import {
  type ScoreEntry,
  TOP_SIZE,
} from '../src/components/BugSquash/scores.js';

// Reads KV_REST_API_URL and KV_REST_API_TOKEN, set by the Upstash integration
export const redis = Redis.fromEnv();

export const keys = {
  // Start time of a game, until its score is submitted
  game: (id: string) => `bugsquash:game:${id}`,
  // Sorted set scored by points, of `<tie-breaker>:<initials>:<game id>`
  // members (see `scoreMember`)
  scores: 'bugsquash:scores',
  rate: (action: string, ip: string) => `bugsquash:rate:${action}:${ip}`,
};

export const json = (body: unknown, status = 200) =>
  Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });

export const clientIp = (request: Request) =>
  request.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';

// At most `limit` calls of `action` per minute from one IP address
export const rateLimited = async (
  request: Request,
  action: string,
  limit: number
) => {
  const key = keys.rate(action, clientIp(request));
  // One transaction: the counter can never exist without its expiry, which
  // would block the address for good
  const [, count] = await redis
    .multi()
    .set(key, 0, { nx: true, ex: 60 })
    .incr(key)
    .exec<[unknown, number]>();
  return count > limit;
};

// Redis orders equal scores by member, and the table drops its lowest member
// first. The tie-breaker shrinks as time passes, so among equal scores the
// newest one is dropped and the oldest one is listed first.
const TIE_BREAKER_BASE = 10 ** 15;
export const scoreMember = (initials: string, game: string) =>
  `${String(TIE_BREAKER_BASE - Date.now()).padStart(15, '0')}:${initials}:${game}`;

// Scores saved before the tie-breaker existed are `<initials>:<game id>`
const initialsOf = (member: string) => {
  const parts = member.split(':');
  return parts.length === 3 ? parts[1] : parts[0];
};

// Best first
export const topScores = async (): Promise<ScoreEntry[]> => {
  const flat = await redis.zrange<(string | number)[]>(
    keys.scores,
    0,
    TOP_SIZE - 1,
    { rev: true, withScores: true }
  );
  const scores: ScoreEntry[] = [];
  for (let i = 0; i < flat.length; i += 2) {
    scores.push({
      initials: initialsOf(String(flat[i])),
      score: Number(flat[i + 1]),
    });
  }
  return scores;
};
