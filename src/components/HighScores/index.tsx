// Libraries
import { type FormEvent, type Ref, useId, useState } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import {
  checkInitials,
  type InitialsError,
  RECAPTCHA_ACTION,
  type ScoreEntry,
} from '../BugSquash/scores';
import { recaptchaToken } from '../../utils/recaptcha';
import { type SubmitError, submitScore } from './api';

// Styles
import styles from './HighScores.module.scss';

interface HighScoresProps {
  scores: ScoreEntry[] | 'loading' | 'error';
  // The game that just ended, when its score earns a place in the table
  entry: { game: string; score: number } | null;
  // Rank of the score this visitor just saved, to highlight it
  savedRank: number | null;
  onSaved: (scores: ScoreEntry[], rank: number | null) => void;
  inputRef: Ref<HTMLInputElement>;
}

const MEDALS = ['🥇', '🥈', '🥉'];

// The global high-score table, and the initials form of a new high score
const HighScores = ({
  scores,
  entry,
  savedRank,
  onSaved,
  inputRef,
}: HighScoresProps) => {
  const { t } = useTranslation();
  // Kept between games, like an arcade cabinet that remembers the last player
  const [initials, setInitials] = useState('');
  const [error, setError] = useState<InitialsError | SubmitError | null>(null);
  const [saving, setSaving] = useState(false);
  const id = useId();
  const keyPrefix = 'sections.notFound.game.scores';

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!entry || saving) return;
    const problem = checkInitials(initials);
    setError(problem);
    if (problem) return;

    setSaving(true);
    try {
      const token = await recaptchaToken(RECAPTCHA_ACTION);
      const { scores: next, rank } = await submitScore({
        ...entry,
        initials,
        token,
      });
      onSaved(next, rank);
    } catch (submitError) {
      setError(
        submitError === 'initials'
          ? 'blocked'
          : typeof submitError === 'string'
            ? (submitError as SubmitError)
            : 'failed'
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className={styles.highScores}>
      <h3 className={styles.title}>{t(`${keyPrefix}.title`)}</h3>
      {entry && (
        <form className={styles.form} onSubmit={submit} noValidate>
          <label htmlFor={`${id}-initials`}>
            {t(`${keyPrefix}.newHigh`, { score: entry.score })}
          </label>
          <div className={styles.fields}>
            <input
              ref={inputRef}
              id={`${id}-initials`}
              value={initials}
              onChange={(event) => {
                setError(null);
                setInitials(
                  event.target.value
                    .toUpperCase()
                    .replace(/[^A-Z]/g, '')
                    .slice(0, 3)
                );
              }}
              maxLength={3}
              placeholder="AAA"
              autoComplete="off"
              autoCapitalize="characters"
              spellCheck={false}
              aria-invalid={error !== null}
              aria-describedby={error ? `${id}-error` : undefined}
            />
            <button type="submit" disabled={saving}>
              {t(`${keyPrefix}.${saving ? 'saving' : 'save'}`)}
            </button>
          </div>
          {error && (
            <p id={`${id}-error`} className={styles.error} role="alert">
              {t(`${keyPrefix}.errors.${error}`)}
            </p>
          )}
        </form>
      )}
      {Array.isArray(scores) && scores.length > 0 ? (
        <ol className={styles.table}>
          {scores.map((row, index) => (
            <li
              key={index}
              className={clsx(index === savedRank && styles.saved)}
            >
              <span>#{index + 1}</span>
              <span aria-hidden="true">{MEDALS[index]}</span>
              <span>{row.initials}</span>
              <span>{row.score}</span>
            </li>
          ))}
        </ol>
      ) : (
        <p className={styles.message}>
          {t(
            `${keyPrefix}.${scores === 'loading' ? 'loading' : scores === 'error' ? 'failed' : 'empty'}`
          )}
        </p>
      )}
    </div>
  );
};

export default HighScores;
