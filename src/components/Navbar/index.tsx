// Libraries
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { availableLanguages, languagePath, pathInLanguage } from '../../i18n';

// Components
import { FranceFlag, SpainFlag, UKFlag } from '../Languages';
import ThemeToggle from '../ThemeToggle';

// Styles
import styles from './Navbar.module.scss';

const getLangFlag = (lang: string) => {
  switch (lang) {
    case 'fr':
      return <FranceFlag />;
    case 'es':
      return <SpainFlag />;
    default:
      return <UKFlag />;
  }
};

interface NavbarProps {
  // On the 404 page, the navbar keeps only the theme toggle and the languages:
  // the links lead to the sections of the home page. Changing the language
  // stays on the same missing page.
  notFound?: boolean;
}

// The 404 page is never prerendered, so it may read `location`
const languageHref = (lang: string, notFound: boolean) =>
  notFound
    ? pathInLanguage(location.pathname, lang) + location.search
    : languagePath(lang);

const Navbar = ({ notFound = false }: NavbarProps) => {
  const { t, i18n } = useTranslation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  const currentLang = i18n.language;
  const otherLanguages = availableLanguages.filter(
    (lang) => lang !== currentLang
  );

  useEffect(() => {
    const onScroll = () => {
      if (document.documentElement.scrollTop > 0 && !showBackground) {
        setShowBackground(true);
      }
      if (document.documentElement.scrollTop === 0 && showBackground) {
        setShowBackground(false);
      }
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [showBackground]);
  return (
    <div
      className={clsx([
        showBackground && styles.withBackground,
        showMobileMenu && styles.mobileMenuDisplayed,
      ])}
      id={styles.navbar}
    >
      {!notFound && (
        <>
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className={styles.mobileMenuButton}
          >
            {t('navbar.menu')}
          </button>
          <ul className={clsx([styles.left, showMobileMenu && styles.visible])}>
            <li>
              <a href="#clients">{t('navbar.clients')}</a>
            </li>
            <li>
              <a href="#about">{t('navbar.about')}</a>
            </li>
            <li>
              <a href="#showcase">{t('navbar.showcase')}</a>
            </li>
            <li>
              <a href="#contact">{t('navbar.contact')}</a>
            </li>
          </ul>
        </>
      )}
      <ThemeToggle />
      <div className={styles.right}>
        <button onClick={() => setShowLanguages(!showLanguages)}>
          {getLangFlag(currentLang)} {currentLang.toUpperCase()}
        </button>
        <ul
          className={clsx([styles.listLanguages, showLanguages && styles.show])}
        >
          {otherLanguages.map((lang) => (
            <li key={`flag_${lang}`}>
              <a href={languageHref(lang, notFound)}>
                {getLangFlag(lang)} {lang.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
