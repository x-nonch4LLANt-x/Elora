<script lang="ts">
    import {
        filteredProducts,
        activeCategory,
        sortBy,
    } from "$lib/stores/products";
    import { t } from "$lib/stores/i18n";
    import { fade } from "svelte/transition";
    import { triggerAddToCartAnimation, cart } from "$lib/stores/cart";
    import { toggleWishlist, wishlist } from "$lib/stores/wishlist";
    import QuickViewModal from "$lib/components/shared/QuickViewModal.svelte";
    import type { Product } from "$lib/stores/products";

    function handleAddToCart(e: MouseEvent, product: Product) {
        const target = e.target as HTMLElement;
        const rect = target.getBoundingClientRect();

        // Trigger animation
        triggerAddToCartAnimation(product.image, rect);

        // Update cart state
        cart.update((items) => {
            const existing = items.find((i) => i.id === product.id);
            if (existing) {
                return items.map((i) =>
                    i.id === product.id
                        ? { ...i, quantity: i.quantity + 1 }
                        : i,
                );
            }
            return [...items, { ...product, quantity: 1 }];
        });
    }

    let selectedProduct = $state<Product | null>(null);
</script>

<div class="flex gap-8 py-8">
    <!-- Sidebar Filters -->
    <aside class="w-64 shrink-0 flex flex-col gap-8 sticky top-24 h-fit">
        <div>
            <h3 class="font-bold text-lg text-slate-900 dark:text-white mb-4">
                Categories
            </h3>
            <div class="flex flex-col gap-2">
                {#each ["all", "mini", "smart", "outdoor", "accessories"] as cat}
                    <button
                        class="text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group {$activeCategory ===
                        cat
                            ? 'bg-primary/10 text-primary'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}"
                        onclick={() => activeCategory.set(cat as any)}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        <span
                            class="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity"
                            >chevron_right</span
                        >
                    </button>
                {/each}
            </div>
        </div>

        <!-- Price Range Placeholder -->
        <div>
            <h3 class="font-bold text-lg text-slate-900 dark:text-white mb-4">
                Price Range
            </h3>
            <div
                class="h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-sm text-slate-400"
            >
                Slider Component
            </div>
        </div>
    </aside>

    <!-- Main Grid -->
    <div class="flex-1">
        <div class="flex items-center justify-between mb-6">
            <h1 class="text-2xl font-bold text-slate-900 dark:text-white">
                All Products
            </h1>
            <div class="flex items-center gap-2">
                <span class="text-sm text-slate-500">Sort by:</span>
                <select
                    bind:value={$sortBy}
                    class="bg-transparent text-sm font-bold text-slate-900 dark:text-white border-none focus:ring-0 cursor-pointer"
                >
                    <option value="rating">Recommended</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                </select>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-6">
            {#each $filteredProducts as product (product.id)}
                <div
                    class="group bg-white dark:bg-surface-dark rounded-2xl p-4 border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all hover:-translate-y-1"
                    in:fade
                >
                    <!-- Link to PDP -->
                    <a href="/products/{product.id}" class="block">
                        <div
                            class="aspect-square bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden relative mb-4"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                class="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal transition-transform duration-700 group-hover:scale-110"
                            />

                            <!-- Quick Action Overlay -->
                            <div
                                class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2"
                            >
                                <button
                                    class="bg-white text-slate-900 h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                                    onclick={(e) => {
                                        e.preventDefault();
                                        handleAddToCart(e, product);
                                    }}
                                    title="Add to Cart"
                                >
                                    <span class="material-symbols-outlined"
                                        >add_shopping_cart</span
                                    >
                                </button>
                                <button
                                    class="bg-white text-slate-900 h-10 w-10 rounded-full flex items-center justify-center hover:text-primary transition-colors"
                                    onclick={(e) => {
                                        e.preventDefault();
                                        selectedProduct = product;
                                    }}
                                    title="Quick View"
                                >
                                    <span class="material-symbols-outlined"
                                        >visibility</span
                                    >
                                </button>
                                <button
                                    class="bg-white text-slate-900 h-10 w-10 rounded-full flex items-center justify-center hover:text-red-500 transition-colors"
                                    onclick={(e) => {
                                        e.preventDefault();
                                        toggleWishlist(product.id);
                                    }}
                                    title="Add to Wishlist"
                                >
                                    <span
                                        class="material-symbols-outlined fill-1 {$wishlist.includes(
                                            product.id,
                                        )
                                            ? 'text-red-500'
                                            : 'text-slate-400'}">favorite</span
                                    >
                                </button>
                            </div>
                        </div>
                    </a>

                    <div>
                        <div class="flex justify-between items-start mb-1">
                            <h3
                                class="font-bold text-lg text-slate-900 dark:text-white"
                            >
                                {product.name}
                            </h3>
                            <div class="flex items-center gap-1 text-amber-400">
                                <span
                                    class="material-symbols-outlined text-[16px] fill-1"
                                    >star</span
                                >
                                <span
                                    class="text-xs font-bold text-slate-600 dark:text-slate-400"
                                    >{product.rating}</span
                                >
                            </div>
                        </div>
                        <p
                            class="text-sm text-slate-500 line-clamp-2 h-10 mb-3"
                        >
                            {product.description}
                        </p>
                        <p class="text-lg font-bold text-primary">
                            {$t("currency")}
                            {product.price.toLocaleString()}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
