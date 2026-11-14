// The high-score table, shared by the game and the API in /api. There is no
// React and no browser or Node.js API here, so both sides can import it.

export interface ScoreEntry {
  initials: string;
  score: number;
}

// How many scores the table keeps
export const TOP_SIZE = 10;

// reCAPTCHA action of a score submission, checked by the server
export const RECAPTCHA_ACTION = 'bugsquash';

// Initials that would show something rude to every visitor
// prettier-ignore
const BLOCKED_INITIALS = new Set([
  'ASS', 'CUL', 'CUM', 'DIC', 'DIK', 'FAG', 'FCK', 'FUC', 'FUK', 'FUQ',
  'GAY', 'JEW', 'KKK', 'KYS', 'NAZ', 'NIG', 'NGR', 'PDE', 'PUT', 'SEX',
  'SHT', 'SUC', 'TIT', 'VAG', 'WTF', 'XXX',
]);

export type InitialsError = 'format' | 'blocked';

// Three letters, A to Z, like an arcade cabinet
export const checkInitials = (initials: string): InitialsError | null => {
  if (!/^[A-Z]{3}$/.test(initials)) return 'format';
  return BLOCKED_INITIALS.has(initials) ? 'blocked' : null;
};

// Whether `score` earns a place in a table holding `scores`, best first
export const makesTheTable = (score: number, scores: ScoreEntry[]) =>
  score > 0 &&
  (scores.length < TOP_SIZE || score > scores[scores.length - 1].score);
