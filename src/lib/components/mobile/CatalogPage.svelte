<script lang="ts">
    import {
        filteredProducts,
        activeCategory,
        products,
        sortBy,
    } from "$lib/stores/products";
    import type { Product } from "$lib/stores/products";
    import { t } from "$lib/stores/i18n";
    import { fade, fly } from "svelte/transition";
    import { triggerAddToCartAnimation, cart } from "$lib/stores/cart";
    import { toggleWishlist, wishlist } from "$lib/stores/wishlist";
    import QuickViewModal from "$lib/components/shared/QuickViewModal.svelte";

    let showFilters = $state(false);
    let selectedProduct = $state<Product | null>(null);

    function handleAddToCart(e: MouseEvent, product: Product) {
        const target = e.target as HTMLElement;
        const rect = target.getBoundingClientRect();

        triggerAddToCartAnimation(product.image, rect);

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
</script>

<div
    class="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24"
>
    <!-- Header -->
    <div
        class="sticky top-16 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between"
    >
        <h1 class="text-lg font-bold text-slate-900 dark:text-white">
            {$t("nav.catalog")}
            <span class="text-slate-400 text-sm font-normal"
                >({$filteredProducts.length})</span
            >
        </h1>
        <button
            class="flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full"
            onclick={() => (showFilters = true)}
        >
            <span class="material-symbols-outlined text-[18px]"
                >filter_list</span
            >
            Filter
        </button>
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-1 gap-5 px-4 py-4 pb-6">
        {#each $filteredProducts as product (product.id)}
            <div
                class="flex gap-4 p-4 bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 relative"
                in:fade
            >
                <!-- Clickable Area for PDP -->
                <a
                    href="/products/{product.id}"
                    class="absolute inset-0 z-0 rounded-2xl"
                    aria-label="View {product.name}"
                ></a>

                <button
                    class="absolute top-3 right-3 z-20 w-9 h-9 bg-white/90 dark:bg-black/50 backdrop-blur rounded-full flex items-center justify-center text-slate-900 dark:text-white shadow-sm active:scale-90 transition-all"
                    onclick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        selectedProduct = product;
                    }}
                >
                    <span class="material-symbols-outlined text-[20px]"
                        >visibility</span
                    >
                </button>

                <div
                    class="w-36 h-36 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden relative z-10 pointer-events-none"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        class="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"
                    />
                </div>
                <div
                    class="flex flex-col justify-between py-2 flex-1 z-10 pointer-events-none min-w-0"
                >
                    <div class="space-y-2">
                        <div class="flex justify-between items-start gap-2">
                            <h3
                                class="font-bold text-base text-slate-900 dark:text-white line-clamp-2 leading-tight"
                            >
                                {product.name}
                            </h3>
                            <button
                                class="text-slate-400 hover:text-red-500 transition-colors pointer-events-auto shrink-0"
                                onclick={(e) => {
                                    e.preventDefault();
                                    toggleWishlist(product.id);
                                }}
                                ><span
                                    class="material-symbols-outlined text-[22px] {$wishlist.includes(
                                        product.id,
                                    )
                                        ? 'text-red-500 fill-1'
                                        : ''}">{`favorite`}</span
                                ></button
                            >
                        </div>
                        <p
                            class="text-xs text-slate-500 line-clamp-2 leading-relaxed"
                        >
                            {product.description}
                        </p>
                    </div>
                    <div class="flex items-center justify-between mt-4 pt-2">
                        <span class="font-bold text-lg text-primary"
                            >{$t("currency")}
                            {product.price.toLocaleString()}</span
                        >
                        <button
                            class="bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg p-2.5 flex items-center justify-center active:scale-95 transition-transform pointer-events-auto shrink-0"
                            onclick={(e) => {
                                // e.stopPropagation() is implicit if we put z-index correct, but button is on top
                                handleAddToCart(e, product);
                            }}
                        >
                            <span class="material-symbols-outlined text-[22px]"
                                >add_shopping_cart</span
                            >
                        </button>
                    </div>
                </div>
            </div>
        {/each}
    </div>

    <!-- Filter Bottom Sheet -->
    {#if showFilters}
        <button
            class="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm cursor-default"
            transition:fade
            onclick={() => (showFilters = false)}
            aria-label="Close filters"
        ></button>
        <div
            class="fixed bottom-0 left-0 width-full w-full bg-white dark:bg-surface-dark rounded-t-3xl z-[70] p-6 flex flex-col gap-6 max-h-[80vh] overflow-y-auto"
            transition:fly={{ y: 100, duration: 300 }}
        >
            <div class="flex items-center justify-between">
                <h2 class="text-xl font-bold text-slate-900 dark:text-white">
                    Filters
                </h2>
                <button
                    onclick={() => (showFilters = false)}
                    class="p-2 bg-slate-100 dark:bg-slate-800 rounded-full"
                    ><span class="material-symbols-outlined">close</span
                    ></button
                >
            </div>
            <div>
                <h3 class="font-bold text-slate-900 dark:text-white mb-3">
                    Category
                </h3>
                <div class="flex flex-wrap gap-2">
                    {#each ["all", "mini", "smart", "outdoor", "accessories"] as cat}
                        <button
                            class="px-4 py-2 rounded-full text-sm font-medium transition-colors {$activeCategory ===
                            cat
                                ? 'bg-primary text-white'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}"
                            onclick={() => activeCategory.set(cat as any)}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    {/each}
                </div>
            </div>

            <div>
                <h3 class="font-bold text-slate-900 dark:text-white mb-3">
                    Sort By
                </h3>
                <div class="flex flex-col gap-2">
                    {#each [{ label: "Recommended", value: "rating" }, { label: "Price: Low to High", value: "price-asc" }, { label: "Price: High to Low", value: "price-desc" }] as sortOption}
                        <button
                            class="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between
                            {$sortBy === sortOption.value
                                ? 'bg-primary/10 text-primary border border-primary/20'
                                : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-transparent'}"
                            onclick={() => {
                                sortBy.set(sortOption.value as any);
                                showFilters = false;
                            }}
                        >
                            {sortOption.label}
                            {#if $sortBy === sortOption.value}
                                <span
                                    class="material-symbols-outlined text-[18px]"
                                    >check</span
                                >
                            {/if}
                        </button>
                    {/each}
                </div>
            </div>
        </div>
    {/if}

    <!-- Quick View Modal -->
    {#if selectedProduct}
        <QuickViewModal
            product={selectedProduct}
            onClose={() => (selectedProduct = null)}
        />
    {/if}
</div>
