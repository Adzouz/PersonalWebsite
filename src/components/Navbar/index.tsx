// Libraries
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

// Components
import { FranceFlag, SpainFlag, UKFlag } from '../Languages';

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

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  const currentLang = i18n.language;
  const availableLanguages = Array.isArray(i18n.options.supportedLngs)
    ? i18n.options.supportedLngs?.filter((lang) => lang !== 'cimode')
    : [];
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
      <div className={styles.right}>
        <button onClick={() => setShowLanguages(!showLanguages)}>
          {getLangFlag(currentLang)} {currentLang.toUpperCase()}
        </button>
        <ul
          className={clsx([styles.listLanguages, showLanguages && styles.show])}
        >
          {otherLanguages.map((lang) => (
            <li key={`flag_${lang}`}>
              <a href={`/${lang}`}>
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
