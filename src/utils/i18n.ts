import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      English: {
        translation: {
          // Your English translations
        },
      },
      Bangla: {
        translation: {
          // Your Bangla translations
        },
      },

      China: {
        translation: {
          // Your Bangla translations
        },
      },
    },
    lng: 'English', // Default language
    fallbackLng: 'English', // Fallback language
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
