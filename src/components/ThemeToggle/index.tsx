// Libraries
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Styles
import styles from './ThemeToggle.module.scss';

type Theme = 'light' | 'dark';

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="4" />
    <path
      strokeLinecap="round"
      d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
    />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
  </svg>
);

const ThemeToggle = () => {
  const { t } = useTranslation();
  // index.html sets data-theme before React mounts. `document` is missing
  // when the page is prerendered at build time.
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document !== 'undefined' &&
    document.documentElement.dataset.theme === 'dark'
      ? 'dark'
      : 'light'
  );

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem('theme', nextTheme);
    } catch {
      // Storage unavailable (private mode): the choice lasts for this visit
    }
    setTheme(nextTheme);
  };

  return (
    <label className={styles.toggle}>
      <input
        type="checkbox"
        role="switch"
        checked={theme === 'dark'}
        onChange={toggleTheme}
        aria-label={t('navbar.darkMode')}
      />
      <span className={styles.track} aria-hidden="true">
        <span className={styles.thumb}>
          {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
        </span>
      </span>
    </label>
  );
};

export default ThemeToggle;
