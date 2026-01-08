// @ts-nocheck
import { getProducts } from '$lib/server/products';
import type { PageServerLoad } from './$types';

export const load = async () => {
    const products = await getProducts();
    return {
        products
    };
};
;null as any as PageServerLoad;