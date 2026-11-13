// Calls to the Bug Squash API in /api
import type { ScoreEntry } from '../BugSquash/scores';

export type SubmitError = 'rate' | 'expired' | 'initials' | 'failed';

const request = async <T>(path: string, init?: RequestInit) => {
  const response = await fetch(path, {
    ...init,
    headers: { 'Content-Type': 'application/json' },
  });
  // `npm run dev` has no functions and answers /api with the HTML page
  const body = (await response.json().catch(() => {
    throw new Error('failed');
  })) as T & { error?: string };
  if (!response.ok) throw new Error(body.error ?? 'failed');
  return body;
};

export const fetchScores = async () =>
  (await request<{ scores: ScoreEntry[] }>('/api/scores')).scores;

// A ticket for the game that starts now. The server needs it with the score.
export const startGame = async () =>
  (await request<{ id: string }>('/api/games', { method: 'POST' })).id;

export const submitScore = async (submission: {
  game: string;
  initials: string;
  score: number;
  token: string;
}) => {
  try {
    const body = await request<{ scores: ScoreEntry[] }>('/api/scores', {
      method: 'POST',
      body: JSON.stringify(submission),
    });
    return body.scores;
  } catch (error) {
    const code = (error as Error).message;
    throw (
      ['rate', 'expired', 'initials'].includes(code) ? code : 'failed'
    ) as SubmitError;
  }
};
