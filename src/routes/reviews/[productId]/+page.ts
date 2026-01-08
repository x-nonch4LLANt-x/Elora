import { products } from "$lib/stores/products";
import { error } from "@sveltejs/kit";
import { get } from "svelte/store";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
    const allProducts = get(products);
    const product = allProducts.find((p) => p.id === params.productId);

    if (!product) {
        throw error(404, "Product not found");
    }

    return {
        product,
    };
};
