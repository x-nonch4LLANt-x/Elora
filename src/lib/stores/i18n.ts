import { writable, derived } from 'svelte/store';

export type Language = 'en' | 'sw';

import { browser } from '$app/environment';

const getInitialLanguage = (): Language => {
    if (browser) {
        const stored = localStorage.getItem('language') as Language;
        if (stored === 'en' || stored === 'sw') return stored;
    }
    return 'en';
};

export const language = writable<Language>(getInitialLanguage());

if (browser) {
    language.subscribe((value) => {
        localStorage.setItem('language', value);
    });
}

const translations = {
    en: {
        'nav.home': 'Home',
        'nav.catalog': 'Catalog',
        'nav.saved': 'Saved',
        'nav.profile': 'Profile',
        'home.hero.title': 'Cinema in Your Pocket',
        'home.hero.subtitle': 'Experience big screen magic at home.',
        'home.trending': 'Trending Projectors',
        'currency': 'KES'
    },
    sw: {
        'nav.home': 'Nyumbani',
        'nav.catalog': 'Katalogi',
        'nav.saved': 'Vipendwa',
        'nav.profile': 'Wasifu',
        'home.hero.title': 'Sinema Mfukoni Mwako',
        'home.hero.subtitle': 'Furahia uchawi wa skrini kubwa nyumbani.',
        'home.trending': 'Projekta Zinazotamba',
        'currency': 'KES'
    }
};

export const t = derived(language, ($language) => (key: keyof typeof translations['en']) => {
    return translations[$language][key] || key;
});

export const toggleLanguage = () => {
    language.update(l => l === 'en' ? 'sw' : 'en');
};
