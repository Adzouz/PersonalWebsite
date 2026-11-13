// Helpers of the Bug Squash API. Files starting with `_` are not routes.
import { Redis } from '@upstash/redis';
import { type ScoreEntry, TOP_SIZE } from '../src/components/BugSquash/scores';

// Reads KV_REST_API_URL and KV_REST_API_TOKEN, set by the Upstash integration
export const redis = Redis.fromEnv();

export const keys = {
  // Start time of a game, until its score is submitted
  game: (id: string) => `bugsquash:game:${id}`,
  // Sorted set of `<initials>:<game id>` members, scored by points
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
  const count = await redis.incr(key);
  if (count === 1) await redis.expire(key, 60);
  return count > limit;
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
      initials: String(flat[i]).slice(0, 3),
      score: Number(flat[i + 1]),
    });
  }
  return scores;
};
