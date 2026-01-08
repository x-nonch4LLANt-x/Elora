import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

const getInitialTheme = (): Theme => {
    if (browser) {
        const stored = localStorage.getItem('theme') as Theme;
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
};

export const theme = writable<Theme>(getInitialTheme());

if (browser) {
    // Listen for system changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
        if (!localStorage.getItem('theme')) {
            theme.set(e.matches ? 'dark' : 'light');
        }
    };
    mediaQuery.addEventListener('change', handleChange);

    theme.subscribe((value) => {
        localStorage.setItem('theme', value);
        if (value === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    });
}

export const toggleTheme = () => {
    theme.update((t) => (t === 'light' ? 'dark' : 'light'));
};
