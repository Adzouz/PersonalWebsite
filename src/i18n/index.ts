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

const initTranslations = () => {
  // `location` is missing when the page is prerendered at build time
  const pathParts =
    typeof location !== 'undefined' ? location.pathname.split('/') : [];
  const selectedLanguage =
    pathParts.find((part) => availableLanguages.includes(part)) ||
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
