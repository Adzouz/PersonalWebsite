// POST /api/games: a game starts. Its id is a single-use ticket that the score
// submission must bring back, and its start time bounds the score.
import { json, keys, rateLimited, redis } from './_shared';

// A game cannot score after 2.5 minutes of game time, but the game clock stops
// in a hidden tab, so a ticket lives longer than that
const TICKET_SECONDS = 60 * 60;

export async function POST(request: Request) {
  if (await rateLimited(request, 'game', 30)) {
    return json({ error: 'rate' }, 429);
  }
  const id = crypto.randomUUID();
  await redis.set(keys.game(id), Date.now(), { ex: TICKET_SECONDS });
  return json({ id });
}
