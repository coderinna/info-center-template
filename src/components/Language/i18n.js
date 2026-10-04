import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './translations/en.json';
import fiTranslation from './translations/fi.json';

const getSavedLanguage = () => {
  const savedLanguage = localStorage.getItem('language');
  return savedLanguage ? savedLanguage : 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      fi: {
        translation: fiTranslation
      }
    },
    lng: getSavedLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });


const setLanguage = (language) => {
  i18n.changeLanguage(language);
  localStorage.setItem('language', language); 
};

export { setLanguage };
export default i18n;