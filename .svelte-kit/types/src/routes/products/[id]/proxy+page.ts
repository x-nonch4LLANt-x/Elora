// @ts-nocheck
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { products } from '$lib/stores/products';
import { get } from 'svelte/store';

export const load = ({ params }: Parameters<PageLoad>[0]) => {
    const allProducts = get(products);
    const product = allProducts.find((p) => p.id === params.id);

    if (!product) {
        throw error(404, 'Product not found');
    }

    return {
        product
    };
};
