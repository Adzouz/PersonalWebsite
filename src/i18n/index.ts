import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './languages/en';
import es from './languages/es';
import fr from './languages/fr';

export const availableLanguages = ['en', 'es', 'fr'];
export const defaultLanguage = availableLanguages[0];

// The default language lives at the root URL, the others under /<lang>
export const languagePath = (lang: string) =>
  lang === defaultLanguage ? '/' : `/${lang}`;

// The language is the first segment of the path, if it is one
const pathLanguage = (pathname: string) => {
  const segment = pathname.split('/')[1];
  return availableLanguages.includes(segment) ? segment : undefined;
};

// The same path in another language: `/fr/nope` becomes `/es/nope`, or
// `/nope` for the default language
export const pathInLanguage = (pathname: string, lang: string) => {
  const rest = pathLanguage(pathname)
    ? pathname.replace(/^\/[^/]+/, '')
    : pathname;
  const prefix = lang === defaultLanguage ? '' : `/${lang}`;
  return `${prefix}${rest}` || '/';
};

// The site has no router. Its only pages are the language roots, so any other
// path is a 404.
export const isKnownPath = (pathname: string) => {
  const path = pathname.replace(/\/(index\.html)?$/, '');
  return path === '' || availableLanguages.some((lang) => path === `/${lang}`);
};

const initTranslations = () => {
  // `location` is missing when the page is prerendered at build time
  const selectedLanguage =
    (typeof location !== 'undefined' && pathLanguage(location.pathname)) ||
    defaultLanguage;

  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: { ...en } },
      es: { translation: { ...es } },
      fr: { translation: { ...fr } },
    },
    supportedLngs: availableLanguages,
    lng: selectedLanguage,
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false,
    },
  });
};

initTranslations();

export default i18n;
