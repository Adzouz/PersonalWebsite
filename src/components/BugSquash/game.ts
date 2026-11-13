// Rules of Bug Squash. There is no React here: the component only renders the
// state. Every function is pure, so time and randomness come in as arguments.

export const LIVES = 3;

const HOLE_COUNT = 9;
const BUG_POINTS = 10;
// Squashing this many bugs in a row raises the multiplier by one
const STREAK_STEP = 5;
const MAX_MULTIPLIER = 5;
const FIRST_SPAWN_MS = 600;
// No human sees a critter and hits it faster than this. A quicker hit comes
// from a script, or from tapping a hole before anything is in it: it counts as
// a hit on an empty hole. So a bot cannot outscore the best human player.
export const MIN_REACTION_MS = 100;
// How long a hole shows what just happened in it
const FEEDBACK_MS = 400;

type Critter = 'bug' | 'feature';
// What just happened in a hole: a bug was squashed, a bug shipped to production
// because nobody squashed it, or a feature was hit by mistake
type Feedback = 'squashed' | 'shipped' | 'broken';

export interface Hole {
  content: Critter | Feedback;
  // Game time, in ms, at which the content came into the hole
  since: number;
  // Game time, in ms, at which the content leaves the hole
  until: number;
  // Points just won, for `squashed`
  points?: number;
}

export interface Game {
  status: 'idle' | 'playing' | 'over';
  holes: (Hole | null)[];
  score: number;
  // Bugs squashed in a row, without any mistake
  streak: number;
  lives: number;
  // Game time, in ms, at which the next critter comes out
  nextSpawnAt: number;
}

export const newGame = (status: Game['status'] = 'idle'): Game => ({
  status,
  holes: Array<Hole | null>(HOLE_COUNT).fill(null),
  score: 0,
  streak: 0,
  lives: LIVES,
  nextSpawnAt: FIRST_SPAWN_MS,
});

export const multiplier = (streak: number) =>
  Math.min(MAX_MULTIPLIER, 1 + Math.floor(streak / STREAK_STEP));

// Every this many seconds, critters stay out and come out e times faster
const SPEEDUP_SECONDS = 55;
// At the start: how long a critter stays out, and the delay before the next
const START_STAY_MS = 1500;
const START_GAP_MS = 950;

// The game has no end: it speeds up without limit until nobody, human or bot,
// can keep up. A critter stays out less than MIN_REACTION_MS after about 2.5
// minutes, so from then on every bug ships and the last lives go fast.
const pace = (now: number) => {
  const seconds = now / 1000;
  const speed = Math.exp(-seconds / SPEEDUP_SECONDS);
  return {
    // How long a critter stays out
    stayMs: START_STAY_MS * speed,
    // Delay before the next critter
    gapMs: START_GAP_MS * speed,
    featureChance: Math.min(0.35, 0.15 + 0.004 * seconds),
  };
};

const withHole = (holes: Game['holes'], index: number, hole: Hole | null) =>
  holes.map((current, i) => (i === index ? hole : current));

const isCritter = (hole: Hole | null) =>
  hole?.content === 'bug' || hole?.content === 'feature';

// Takes a life because of what happened in the hole at `index`, and shows it
// there. With the last life the game is over, and the critters still out leave
// the board, so only what ended the game stays on it.
const loseLife = (
  game: Game,
  index: number,
  content: Feedback,
  now: number
): Game => {
  const lives = game.lives - 1;
  const over = lives === 0;
  return {
    ...game,
    lives,
    streak: 0,
    status: over ? 'over' : 'playing',
    holes: game.holes.map((hole, i) => {
      if (i === index) {
        return { content, since: now, until: now + FEEDBACK_MS };
      }
      return over && isCritter(hole) ? null : hole;
    }),
  };
};

// Moves the game forward to `now`. `pick` and `roll` are random numbers in
// [0, 1) that choose the hole and the kind of the next critter. The same
// object comes back when nothing happened.
export const tick = (
  game: Game,
  now: number,
  pick: number,
  roll: number
): Game => {
  if (game.status !== 'playing') return game;
  let next = game;

  // Empty the holes whose time is up. A bug that nobody squashed ships.
  for (const [index, hole] of game.holes.entries()) {
    if (!hole || hole.until > now) continue;
    if (hole.content === 'bug') {
      next = loseLife(next, index, 'shipped', now);
      if (next.status === 'over') return next;
    } else {
      next = { ...next, holes: withHole(next.holes, index, null) };
    }
  }

  if (now >= next.nextSpawnAt) {
    const free = next.holes.flatMap((hole, index) => (hole ? [] : [index]));
    if (free.length > 0) {
      const { stayMs, gapMs, featureChance } = pace(now);
      next = {
        ...next,
        holes: withHole(next.holes, free[Math.floor(pick * free.length)], {
          content: roll < featureChance ? 'feature' : 'bug',
          since: now,
          until: now + stayMs,
        }),
        nextSpawnAt: now + gapMs,
      };
    }
  }

  return next;
};

// The player hits a hole
export const hit = (game: Game, index: number, now: number): Game => {
  if (game.status !== 'playing') return game;
  const hole = game.holes[index];

  // What has left the hole is gone, even before the next tick clears it. A
  // critter hit too soon after it came out was not seen yet.
  if (
    !hole ||
    hole.until <= now ||
    (isCritter(hole) && now - hole.since < MIN_REACTION_MS)
  ) {
    // An empty hole breaks the streak, so hitting every hole does not pay off
    return game.streak === 0 ? game : { ...game, streak: 0 };
  }

  switch (hole.content) {
    case 'bug': {
      const points = BUG_POINTS * multiplier(game.streak);
      return {
        ...game,
        score: game.score + points,
        streak: game.streak + 1,
        holes: withHole(game.holes, index, {
          content: 'squashed',
          since: now,
          until: now + FEEDBACK_MS,
          points,
        }),
      };
    }
    case 'feature':
      return loseLife(game, index, 'broken', now);
    default:
      // The hole still shows what just happened in it
      return game;
  }
};

// The most points anyone can have after `gameMs` of game time: every critter a
// bug, every bug squashed at the top multiplier. The server rejects any score
// above it. Each spawn waits at least the gap of its own time, and the gap only
// shrinks, so the spawns up to `t` number at most 1 + ∫ ds / gap(s). No bug
// can be squashed once it stays out less than MIN_REACTION_MS.
export const maxScore = (gameMs: number) => {
  const speedupMs = SPEEDUP_SECONDS * 1000;
  const lastHittableMs = speedupMs * Math.log(START_STAY_MS / MIN_REACTION_MS);
  const t = Math.min(gameMs, lastHittableMs);
  if (t < FIRST_SPAWN_MS) return 0;
  const spawns =
    1 +
    (speedupMs / START_GAP_MS) *
      (Math.exp(t / speedupMs) - Math.exp(FIRST_SPAWN_MS / speedupMs));
  return Math.floor(spawns) * BUG_POINTS * MAX_MULTIPLIER;
};
