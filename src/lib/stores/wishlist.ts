import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Initialize from localStorage if available
const storedWishlist = browser ? localStorage.getItem('wishlist') : null;
const initialWishlist: string[] = storedWishlist ? JSON.parse(storedWishlist) : [];

export const wishlist = writable<string[]>(initialWishlist);

// Subscribe to changes and update localStorage
if (browser) {
    wishlist.subscribe((value) => {
        localStorage.setItem('wishlist', JSON.stringify(value));
    });
}

// Helper functions
export const addToWishlist = (productId: string) => {
    wishlist.update((items) => {
        if (!items.includes(productId)) {
            return [...items, productId];
        }
        return items;
    });
};

export const removeFromWishlist = (productId: string) => {
    wishlist.update((items) => items.filter((id) => id !== productId));
};

export const toggleWishlist = (productId: string) => {
    wishlist.update((items) => {
        if (items.includes(productId)) {
            return items.filter((id) => id !== productId);
        }
        return [...items, productId];
    });
};

// Derived helper (usage: $wishlist.includes(id)) can be used directly in components
