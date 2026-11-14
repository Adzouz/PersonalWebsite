// Libraries
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { languagePath } from '../../i18n';
import { LIVES } from '../../components/BugSquash/game';

// Components
import BugSquash from '../../components/BugSquash';
import Chatbot from '../../components/Chatbot';

// Styles
import aboutStyles from '../About/About.module.scss';
import styles from './NotFound.module.scss';

type Mode = 'ask' | 'play';

const MAX_PATH_LENGTH = 60;

// The path the visitor asked for, made readable. It comes straight from the
// URL, so it must only ever be rendered as text, never as HTML.
const requestedPath = () => {
  let path = location.pathname;
  try {
    path = decodeURIComponent(path);
  } catch {
    // Malformed escape sequence: show the path as it is
  }
  return path.length > MAX_PATH_LENGTH
    ? `${path.slice(0, MAX_PATH_LENGTH)}…`
    : path;
};

const NotFound = () => {
  const { t, i18n } = useTranslation();
  const [mode, setMode] = useState<Mode | null>(null);
  const [path] = useState(requestedPath);
  const messagesRef = useRef<HTMLUListElement>(null);
  const keyPrefix = 'sections.notFound';

  // Like a chat, bring what the chosen option just added into view
  useEffect(() => {
    if (!mode) return;
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    messagesRef.current?.lastElementChild?.scrollIntoView({
      block: 'nearest',
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
  }, [mode]);

  const toggleMode = (nextMode: Mode) =>
    setMode(mode === nextMode ? null : nextMode);

  return (
    <section className={clsx(aboutStyles.section, styles.section)}>
      <h1 className={styles.title}>404</h1>
      <p>{t(`${keyPrefix}.subtitle`)}</p>
      <ul
        ref={messagesRef}
        className={clsx(aboutStyles.messages, styles.messages)}
      >
        <li className={aboutStyles.question}>
          {t(`${keyPrefix}.question`, { path })}
        </li>
        <li className={aboutStyles.answer}>{t(`${keyPrefix}.answer`)}</li>
        <li className={styles.options}>
          <a href={languagePath(i18n.language)}>
            {t(`${keyPrefix}.options.home`)}
          </a>
          <button
            type="button"
            aria-pressed={mode === 'ask'}
            onClick={() => toggleMode('ask')}
          >
            {t(`${keyPrefix}.options.ask`)}
          </button>
          <button
            type="button"
            aria-pressed={mode === 'play'}
            onClick={() => toggleMode('play')}
          >
            {t(`${keyPrefix}.options.play`)}
          </button>
        </li>
        {mode === 'ask' && (
          <>
            <li className={aboutStyles.answer}>{t(`${keyPrefix}.ask`)}</li>
            <Chatbot />
          </>
        )}
        {mode === 'play' && (
          <>
            <li className={aboutStyles.answer}>
              {t(`${keyPrefix}.game.rules`, { lives: LIVES })}
            </li>
            <li className={styles.game}>
              <BugSquash />
            </li>
          </>
        )}
      </ul>
    </section>
  );
};

export default NotFound;
