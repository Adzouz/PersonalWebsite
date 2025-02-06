import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './languages/en';
import es from './languages/es';
import fr from './languages/fr';

const initTranslations = () => {
  const availableLanguages = ['en', 'es', 'fr'];
  const defaultLanguage = availableLanguages[0];

  const pathParts = location.pathname.split('/');
  const selectedLanguage = pathParts.find((part) => availableLanguages.includes(part)) || defaultLanguage;

  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: {
            ...en
          }
        },
        es: {
          translation: {
            ...es
          }
        },
        fr: {
          translation: {
            ...fr
          }
        }
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
