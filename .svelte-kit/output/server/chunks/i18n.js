import { d as derived, w as writable } from "./index.js";
const getInitialLanguage = () => {
  return "en";
};
const language = writable(getInitialLanguage());
const translations = {
  en: {
    "nav.home": "Home",
    "nav.catalog": "Catalog",
    "nav.saved": "Saved",
    "nav.profile": "Profile",
    "home.hero.title": "Cinema in Your Pocket",
    "home.hero.subtitle": "Experience big screen magic at home.",
    "home.trending": "Trending Projectors",
    "currency": "KES"
  },
  sw: {
    "nav.home": "Nyumbani",
    "nav.catalog": "Katalogi",
    "nav.saved": "Vipendwa",
    "nav.profile": "Wasifu",
    "home.hero.title": "Sinema Mfukoni Mwako",
    "home.hero.subtitle": "Furahia uchawi wa skrini kubwa nyumbani.",
    "home.trending": "Projekta Zinazotamba",
    "currency": "KES"
  }
};
const t = derived(language, ($language) => (key) => {
  return translations[$language][key] || key;
});
export {
  language as l,
  t
};
