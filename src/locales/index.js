import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en_US';
// import es from './es_ES';
import pt from './pt_BR';

const option = {
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  debug: false,
  lng: 'en',
  resources: {
    en: {
      tranlation: en,
    },
    // es: {
    //   tranlation: es,
    // },
    pt: {
      tranlation: pt,
    },
  },
  fallbackLng: 'en',
  ns: ['tranlation'],
  defaultNS: 'tranlation',
  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default',
  },
};

i18n.use(initReactI18next).init(option);

export default i18n;
