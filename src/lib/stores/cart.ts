import { writable, derived } from 'svelte/store';
import type { Product } from './products';

export type CartItem = Product & {
    quantity: number;
};

export const cart = writable<CartItem[]>([]);

export const cartCount = derived(cart, ($cart) =>
    $cart.reduce((total, item) => total + item.quantity, 0)
);

export const cartTotal = derived(cart, ($cart) =>
    $cart.reduce((total, item) => total + (item.price * item.quantity), 0)
);

export function addToCart(product: Product) {
    cart.update(items => {
        const existingItem = items.find(item => item.id === product.id);
        if (existingItem) {
            return items.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        }
        return [...items, { ...product, quantity: 1 }];
    });
}

export function removeFromCart(productId: string) {
    cart.update(items => items.filter(item => item.id !== productId));
}

export function updateQuantity(productId: string, quantity: number) {
    cart.update(items => {
        return items.map(item => {
            if (item.id === productId) {
                return { ...item, quantity: Math.max(0, quantity) };
            }
            return item;
        }).filter(item => item.quantity > 0);
    });
}

export type FlyingItem = {
    id: number;
    src: string;
    startRect: DOMRect;
    targetRect: DOMRect;
};

export const flyingItems = writable<FlyingItem[]>([]);

let nextId = 0;

export function triggerAddToCartAnimation(src: string, startRect: DOMRect) {
    // We assume the target is #cart-icon
    const cartIcon = document.getElementById('cart-icon');
    if (!cartIcon) {
        return;
    }

    const targetRect = cartIcon.getBoundingClientRect();

    const id = nextId++;
    flyingItems.update(items => [...items, { id, src, startRect, targetRect }]);
}

export function removeFlyingItem(id: number) {
    flyingItems.update(items => items.filter(i => i.id !== id));
}
