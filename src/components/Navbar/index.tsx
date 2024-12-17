// Libraries
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

// Components
import { FranceFlag, UKFlag } from '../Languages';

// Styles
import styles from './Navbar.module.scss';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  const lang = i18n.language;

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
        MENU
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
          {lang === 'fr' ? <FranceFlag /> : <UKFlag />} {lang.toUpperCase()}
        </button>
        <ul
          className={clsx([styles.listLanguages, showLanguages && styles.show])}
        >
          <li>
            <a href={`/${lang === 'fr' ? 'en' : 'fr'}`}>
              {lang === 'fr' ? <UKFlag /> : <FranceFlag />}{' '}
              {lang === 'fr' ? 'EN' : 'FR'}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
