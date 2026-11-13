// Libraries
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { type Hole, hit, LIVES, multiplier, newGame, tick } from './game';
import { makesTheTable, type ScoreEntry } from './scores';
import { fetchScores, startGame } from '../HighScores/api';

// Components
import HighScores from '../HighScores';

// Styles
import styles from './BugSquash.module.scss';

// Longest step of game time between two frames. The browser stops the loop in
// a hidden tab, so the game waits there instead of jumping ahead.
const MAX_FRAME_MS = 100;

// Key of each hole, laid out like a numpad. The number row works too.
const KEYS = [7, 8, 9, 4, 5, 6, 1, 2, 3];

const EMOJIS: Record<Hole['content'], string> = {
  bug: '🐛',
  feature: '✨',
  squashed: '💥',
  shipped: '🔥',
  broken: '💔',
};

const BugSquash = () => {
  const { t } = useTranslation();
  const [game, setGame] = useState(newGame);
  // Game time in ms. It only moves while the loop below runs.
  const clock = useRef(0);
  // Page time of the frame that last moved the clock
  const lastFrame = useRef(0);
  const actionRef = useRef<HTMLButtonElement>(null);
  const initialsRef = useRef<HTMLInputElement>(null);
  const [scores, setScores] = useState<ScoreEntry[] | 'loading' | 'error'>(
    'loading'
  );
  // The server's ticket for the current game, needed to save its score
  const [ticket, setTicket] = useState<string | null>(null);
  const [saved, setSaved] = useState<ScoreEntry | null>(null);
  // Counts games, so a late ticket of an earlier game is ignored
  const gameCount = useRef(0);
  const playing = game.status === 'playing';
  const over = game.status === 'over';
  const entry =
    over && ticket && Array.isArray(scores) && makesTheTable(game.score, scores)
      ? { game: ticket, score: game.score }
      : null;
  const keyPrefix = 'sections.notFound.game';

  // Events made by a script (`click()`, `dispatchEvent`) are not trusted:
  // they do not count. The hit happens at the game time of the event, not of
  // the last frame, so a critter is out of reach as soon as its time is up.
  const squash = (index: number, event: Event) => {
    if (!event.isTrusted) return;
    const sinceFrame = event.timeStamp - lastFrame.current;
    const now = clock.current + Math.min(Math.max(sinceFrame, 0), MAX_FRAME_MS);
    setGame((current) => hit(current, index, now));
  };

  useEffect(() => {
    if (!playing) return;

    let frame = 0;
    let last: number | undefined;
    clock.current = 0;

    const loop = (time: number) => {
      if (last !== undefined) {
        clock.current += Math.min(time - last, MAX_FRAME_MS);
      }
      last = time;
      lastFrame.current = time;
      const now = clock.current;
      const pick = Math.random();
      const roll = Math.random();
      setGame((current) => tick(current, now, pick, roll));
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(frame);
  }, [playing]);

  useEffect(() => {
    if (!playing) return;

    // `code` is the physical key, so the number row works on every layout
    // (AZERTY needs Shift to type a digit)
    const onKeyDown = (event: KeyboardEvent) => {
      const digit = /^(?:Digit|Numpad)([1-9])$/.exec(event.code)?.[1];
      if (!digit || event.repeat || event.metaKey || event.ctrlKey) return;
      event.preventDefault();
      squash(KEYS.indexOf(Number(digit)), event);
    };
    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [playing]);

  // The table on opening, and again at the end of each game, since other
  // visitors may have played meanwhile
  useEffect(() => {
    if (playing) return;
    let current = true;
    fetchScores().then(
      (next) => current && setScores(next),
      () =>
        current &&
        setScores((previous) => (previous === 'loading' ? 'error' : previous))
    );
    return () => {
      current = false;
    };
  }, [playing]);

  // The holes are disabled outside a game, so move the focus: to the initials
  // of a new high score, or to the button that starts a game. When the game
  // opens, the page that opened it decides how to scroll. When a game ends,
  // the focused field must come into view.
  const hasEntry = entry !== null;
  useEffect(() => {
    if (game.status === 'playing') return;
    if (hasEntry) {
      initialsRef.current?.focus();
    } else {
      actionRef.current?.focus({ preventScroll: game.status === 'idle' });
    }
  }, [game.status, hasEntry]);

  const start = () => {
    const count = ++gameCount.current;
    setGame(newGame('playing'));
    setTicket(null);
    setSaved(null);
    // Without a ticket the game is played all the same, but not saved
    startGame().then(
      (id) => count === gameCount.current && setTicket(id),
      () => {}
    );
  };

  const onSaved = (next: ScoreEntry[], mine: ScoreEntry) => {
    setScores(next);
    setSaved(mine);
    setTicket(null);
  };

  return (
    <div className={styles.game}>
      <div className={styles.hud}>
        <div className={styles.stat}>
          <span>{t(`${keyPrefix}.score`)}</span>
          <output>{game.score}</output>
        </div>
        <div className={styles.stat}>
          <span>{t(`${keyPrefix}.combo`)}</span>
          <strong>x{multiplier(game.streak)}</strong>
        </div>
        <div
          className={styles.stat}
          role="img"
          aria-label={`${t(`${keyPrefix}.lives`)}: ${game.lives}`}
        >
          <span>{t(`${keyPrefix}.lives`)}</span>
          <span className={styles.lives}>
            {Array.from({ length: LIVES }, (_, index) => (
              <span
                key={index}
                className={clsx(index >= game.lives && styles.lost)}
              >
                ❤️
              </span>
            ))}
          </span>
        </div>
      </div>
      <div className={styles.board}>
        {game.holes.map((hole, index) => (
          <button
            key={index}
            type="button"
            className={styles.hole}
            disabled={!playing}
            onPointerDown={(event) => squash(index, event.nativeEvent)}
            // Keyboards and assistive technology click without a pointer
            onClick={(event) =>
              event.detail === 0 && squash(index, event.nativeEvent)
            }
          >
            {hole && (
              <span
                key={hole.until}
                className={clsx(styles.content, styles[hole.content])}
              >
                {EMOJIS[hole.content]}
                {hole.points && <small>+{hole.points}</small>}
              </span>
            )}
            <kbd>{KEYS[index]}</kbd>
          </button>
        ))}
      </div>
      <div className={styles.actions}>
        <div className={styles.status} role="status">
          {game.status === 'over' && t(`${keyPrefix}.over`)}
        </div>
        <button
          ref={actionRef}
          type="button"
          disabled={playing}
          onClick={start}
        >
          {t(`${keyPrefix}.${game.status === 'over' ? 'again' : 'start'}`)}
        </button>
        <ul className={styles.legend}>
          <li>
            {EMOJIS.bug} {t(`${keyPrefix}.legend.bug`)}
          </li>
          <li>
            {EMOJIS.feature} {t(`${keyPrefix}.legend.feature`)}
          </li>
        </ul>
      </div>
      <HighScores
        scores={scores}
        entry={entry}
        saved={saved}
        onSaved={onSaved}
        inputRef={initialsRef}
      />
    </div>
  );
};

export default BugSquash;
