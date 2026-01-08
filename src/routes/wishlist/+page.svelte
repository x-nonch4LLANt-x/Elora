<script lang="ts">
    import { wishlist, toggleWishlist } from "$lib/stores/wishlist";
    import { products } from "$lib/stores/products";
    import { fade, fly } from "svelte/transition";
    import { triggerAddToCartAnimation, cart } from "$lib/stores/cart";

    // Derive wishlist products
    let wishlistItems = $derived(
        $products.filter((p) => $wishlist.includes(p.id)),
    );

    function handleAddToCart(e: MouseEvent, product: any) {
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

<div class="min-h-screen bg-background-light dark:bg-background-dark pb-24">
    <!-- Header -->
    <div
        class="sticky top-0 z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm px-4 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4"
    >
        <a
            href="/"
            class="p-2 -ml-2 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
        >
            <span class="material-symbols-outlined">arrow_back</span>
        </a>
        <h1 class="text-xl font-bold text-slate-900 dark:text-white">
            My Wishlist
        </h1>
        <span class="ml-auto text-sm font-medium text-slate-500">
            {wishlistItems.length} items
        </span>
    </div>

    <!-- Content -->
    <div class="p-4 max-w-7xl mx-auto">
        {#if wishlistItems.length === 0}
            <div
                class="flex flex-col items-center justify-center min-h-[50vh] text-center p-8"
            >
                <div
                    class="w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6"
                >
                    <span
                        class="material-symbols-outlined text-4xl text-slate-400"
                        >favorite</span
                    >
                </div>
                <h2
                    class="text-2xl font-bold text-slate-900 dark:text-white mb-2"
                >
                    Your wishlist is empty
                </h2>
                <p class="text-slate-500 mb-8 max-w-sm">
                    Tap the heart icon on any product to save it here for later.
                </p>
                <a
                    href="/catalog"
                    class="btn-primary px-8 py-3 rounded-full font-bold"
                >
                    Start Shopping
                </a>
            </div>
        {:else}
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {#each wishlistItems as product (product.id)}
                    <div
                        class="flex gap-4 p-4 bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 relative group"
                        transition:fly={{ y: 20, duration: 300 }}
                    >
                        <!-- Link to PDP -->
                        <a
                            href="/products/{product.id}"
                            class="absolute inset-0 z-0 rounded-2xl"
                            aria-label="View {product.name}"
                        ></a>

                        <div
                            class="w-24 h-24 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden relative z-10"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                class="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"
                            />
                        </div>

                        <div
                            class="flex flex-col justify-between flex-1 z-10 pointer-events-none"
                        >
                            <div class="flex justify-between items-start">
                                <h3
                                    class="font-bold text-slate-900 dark:text-white line-clamp-2 text-sm"
                                >
                                    {product.name}
                                </h3>
                                <button
                                    class="text-red-500 hover:text-red-600 transition-colors pointer-events-auto p-1 -mt-1 -mr-1"
                                    onclick={(e) => {
                                        e.preventDefault();
                                        toggleWishlist(product.id);
                                    }}
                                >
                                    <span
                                        class="material-symbols-outlined text-[20px] fill-1"
                                        >favorite</span
                                    >
                                </button>
                            </div>

                            <div class="flex items-center justify-between mt-2">
                                <span class="font-bold text-primary"
                                    >Rp {product.price.toLocaleString()}</span
                                >
                                <button
                                    class="bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg p-2 flex items-center justify-center active:scale-95 transition-transform pointer-events-auto shadow-lg"
                                    onclick={(e) => {
                                        // e.preventDefault() is implicit if z-index handles click, but safe here
                                        handleAddToCart(e, product);
                                    }}
                                >
                                    <span
                                        class="material-symbols-outlined text-[20px]"
                                        >add_shopping_cart</span
                                    >
                                </button>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>
