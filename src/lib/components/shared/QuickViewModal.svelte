<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import type { Product } from "$lib/stores/products";
    import { triggerAddToCartAnimation, cart } from "$lib/stores/cart";
    import { toggleWishlist, wishlist } from "$lib/stores/wishlist";
    import { toast } from "$lib/stores/toast";
    import { t } from "$lib/stores/i18n";

    let { product, onClose }: { product: Product; onClose: () => void } =
        $props();

    function handleAddToCart(e: MouseEvent) {
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

        toast.add(`Added ${product.name} to cart`, "success");
        onClose();
    }
</script>

<div
    class="fixed inset-0 z-[60] flex items-center justify-center p-4"
    role="dialog"
    aria-modal="true"
>
    <!-- Backdrop -->
    <button
        class="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-default"
        transition:fade
        onclick={onClose}
        aria-label="Close modal"
    ></button>

    <!-- Modal Content -->
    <div
        class="relative bg-white dark:bg-surface-dark rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:h-auto"
        transition:fly={{ y: 20, duration: 300 }}
    >
        <button
            class="absolute top-4 right-4 z-10 p-2 bg-white/80 dark:bg-black/50 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onclick={onClose}
        >
            <span class="material-symbols-outlined">close</span>
        </button>

        <!-- Image Section -->
        <div
            class="w-full md:w-1/2 bg-slate-100 dark:bg-slate-800 p-8 flex items-center justify-center relative"
        >
            <img
                src={product.image}
                alt={product.name}
                class="w-full h-auto object-contain max-h-[300px] md:max-h-[400px] mix-blend-multiply dark:mix-blend-normal"
            />
        </div>

        <!-- Details Section -->
        <div class="w-full md:w-1/2 p-8 flex flex-col overflow-y-auto">
            <div class="mb-auto">
                <div class="flex items-center gap-2 mb-2">
                    <span
                        class="px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase"
                    >
                        {product.category}
                    </span>
                    {#if $wishlist.includes(product.id)}
                        <span
                            class="text-xs text-red-500 font-bold flex items-center gap-1"
                        >
                            <span
                                class="material-symbols-outlined text-[14px] fill-1"
                                >favorite</span
                            >
                            Saved
                        </span>
                    {/if}
                </div>

                <h2
                    class="text-3xl font-bold text-slate-900 dark:text-white mb-2"
                >
                    {product.name}
                </h2>

                <div class="flex items-center gap-2 mb-6">
                    <div class="flex text-amber-400">
                        {product.rating}
                        <span
                            class="material-symbols-outlined text-[20px] fill-1 ml-1"
                            >star</span
                        >
                    </div>
                    <span class="text-slate-400">•</span>
                    <span class="text-slate-500"
                        >{product.reviews.length} reviews</span
                    >
                </div>

                <p
                    class="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6"
                >
                    {product.description}
                </p>

                <div class="space-y-3 mb-8">
                    {#each product.features.slice(0, 3) as feature}
                        <div
                            class="flex items-center gap-3 text-slate-700 dark:text-slate-200"
                        >
                            <span
                                class="material-symbols-outlined text-green-500"
                                >check_circle</span
                            >
                            {feature}
                        </div>
                    {/each}
                </div>
            </div>

            <div
                class="pt-6 border-t border-slate-100 dark:border-slate-800 mt-6"
            >
                <div class="flex items-end justify-between mb-6">
                    <div>
                        <p class="text-sm text-slate-500 mb-1">Price</p>
                        <p class="text-3xl font-bold text-primary">
                            {$t("currency")}
                            {product.price.toLocaleString()}
                        </p>
                    </div>
                </div>

                <div class="flex gap-4">
                    <button
                        class="flex-1 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95 flex items-center justify-center gap-2"
                        onclick={handleAddToCart}
                    >
                        <span class="material-symbols-outlined"
                            >add_shopping_cart</span
                        >
                        Add to Cart
                    </button>

                    <button
                        class="px-4 py-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        onclick={() => toggleWishlist(product.id)}
                    >
                        <span
                            class="material-symbols-outlined {$wishlist.includes(
                                product.id,
                            )
                                ? 'text-red-500 fill-1'
                                : 'text-slate-400'}">favorite</span
                        >
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
