import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './languages/en.tsx';
import fr from './languages/fr.tsx';

const initTranslations = () => {
  const language = window.location.pathname.includes('/en') ? 'en' : 'fr';

  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: {
            ...en
          }
        },
        fr: {
          translation: {
            ...fr
          }
        }
      },
      lng: language,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });
};

initTranslations();

export default i18n;
