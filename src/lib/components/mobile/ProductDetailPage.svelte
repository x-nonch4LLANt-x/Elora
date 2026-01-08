<script lang="ts">
    import type { Product } from "$lib/stores/products";
    import { fade, fly, scale } from "svelte/transition";
    import { cart } from "$lib/stores/cart";
    import { wishlist, toggleWishlist } from "$lib/stores/wishlist";
    import { toast } from "$lib/stores/toast";
    import { goto } from "$app/navigation";
    import { onMount, onDestroy } from "svelte";

    let { product }: { product: Product } = $props();

    let selectedImageIndex = $state(0);
    let showSpecs = $state(false);
    let showAddedModal = $state(false);
    let showLightbox = $state(false);

    // Auto-play Gallery Logic
    let autoplayInterval: any;
    let isPaused = false;

    function startAutoplay() {
        if (autoplayInterval) clearInterval(autoplayInterval);
        autoplayInterval = setInterval(() => {
            if (!isPaused && !showLightbox && !showAddedModal) {
                selectedImageIndex =
                    (selectedImageIndex + 1) % (product.gallery.length || 1);
            }
        }, 3000);
    }

    onMount(() => {
        if (product.gallery.length > 1) {
            startAutoplay();
        }
    });

    onDestroy(() => {
        if (autoplayInterval) clearInterval(autoplayInterval);
    });

    function addToCart() {
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
        showAddedModal = true;
    }

    function formatMoney(amount: number) {
        return new Intl.NumberFormat("en-KE", {
            style: "currency",
            currency: "KES",
        }).format(amount);
    }
</script>

<!-- Lightbox Overlay -->
{#if showLightbox}
    <div
        class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-xl"
        transition:fade={{ duration: 200 }}
        onclick={() => (showLightbox = false)}
        role="button"
        tabindex="0"
        onkeydown={(e) => e.key === "Escape" && (showLightbox = false)}
        aria-label="Close lightbox"
    >
        <button
            class="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            onclick={() => (showLightbox = false)}
            aria-label="Close"
        >
            <span class="material-symbols-outlined text-3xl">close</span>
        </button>

        <img
            src={product.gallery[selectedImageIndex] || product.image}
            alt={product.name}
            class="max-w-full max-h-[90vh] object-contain shadow-2xl rounded-lg"
            onclick={(e) => e.stopPropagation()}
        />
    </div>
{/if}

<!-- Added to Cart Modal -->
{#if showAddedModal}
    <div
        class="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4"
        transition:fade={{ duration: 200 }}
    >
        <div
            class="w-full max-w-sm bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-100 dark:border-slate-800"
            transition:fly={{ y: 20, duration: 300 }}
        >
            <div class="flex flex-col items-center text-center mb-6">
                <div
                    class="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-4"
                >
                    <span class="material-symbols-outlined text-3xl">check</span
                    >
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white">
                    Added to Cart!
                </h3>
                <p class="text-slate-500 mt-1">
                    {product.name} is now in your cart.
                </p>
                <div class="mt-2 text-lg font-bold text-primary">
                    {formatMoney(product.price)}
                </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
                <button
                    onclick={() => (showAddedModal = false)}
                    class="py-3 px-4 rounded-xl border border-slate-200 dark:border-slate-700 font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                    Continue
                </button>
                <button
                    onclick={() => goto("/checkout")}
                    class="py-3 px-4 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors"
                >
                    Checkout
                </button>
            </div>
        </div>
    </div>
{/if}

<div
    class="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-32"
>
    <!-- Header with Back Button -->
    <div
        class="sticky top-0 z-40 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800 px-4 py-3 flex items-center gap-3"
    >
        <a
            href="/catalog"
            class="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white active:scale-90 transition-all"
        >
            <span class="material-symbols-outlined text-[20px]">arrow_back</span
            >
        </a>
        <h1
            class="text-base font-bold text-slate-900 dark:text-white line-clamp-1"
        >
            {product.name}
        </h1>
    </div>

    <!-- Image Gallery -->
    <div
        class="relative group cursor-zoom-in"
        onmouseenter={() => (isPaused = true)}
        onmouseleave={() => (isPaused = false)}
        onclick={() => (showLightbox = true)}
        aria-label="View image in full screen"
        role="button"
        tabindex="0"
        onkeydown={(e) => e.key === "Enter" && (showLightbox = true)}
    >
        {#key selectedImageIndex}
            <div
                class="w-full aspect-square bg-white dark:bg-slate-900 relative"
                in:fade={{ duration: 500 }}
            >
                <img
                    src={product.gallery[selectedImageIndex] || product.image}
                    alt={product.name}
                    class="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                />
                <div
                    class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                >
                    <span
                        class="bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-md"
                        >Tap to Zoom</span
                    >
                </div>
            </div>
        {/key}

        <!-- Thumbnail Dots -->
        {#if product.gallery.length > 1}
            <div
                class="absolute bottom-4 left-0 right-0 flex justify-center gap-2"
            >
                {#each product.gallery as _, i}
                    <button
                        onclick={(e) => {
                            e.stopPropagation();
                            selectedImageIndex = i;
                        }}
                        class="w-2 h-2 rounded-full transition-all {selectedImageIndex ===
                        i
                            ? 'bg-primary w-6'
                            : 'bg-slate-300 dark:bg-slate-600'}"
                        aria-label="View image {i + 1}"
                    ></button>
                {/each}
            </div>
        {/if}

        <!-- Favorite Button -->
        <button
            onclick={(e) => {
                e.stopPropagation();
                toggleWishlist(product.id);
            }}
            class="absolute top-4 right-4 w-11 h-11 bg-white/90 dark:bg-black/50 backdrop-blur rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-all"
            aria-label={$wishlist.includes(product.id)
                ? "Remove from wishlist"
                : "Add to wishlist"}
        >
            <span
                class="material-symbols-outlined text-[24px] {$wishlist.includes(
                    product.id,
                )
                    ? 'text-red-500 fill-1'
                    : 'text-slate-700 dark:text-slate-300'}">favorite</span
            >
        </button>
    </div>

    <!-- Product Info -->
    <div class="flex flex-col gap-6 p-4">
        <!-- Category Badge -->
        <div>
            <span
                class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 capitalize"
            >
                {product.category}
            </span>
        </div>

        <!-- Product Name & Rating -->
        <div>
            <h1 class="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {product.name}
            </h1>
            <div class="flex items-center gap-3">
                <div class="flex text-yellow-400">
                    {#each Array(5) as _, i}
                        <svg
                            class="w-4 h-4 {i < Math.floor(product.rating)
                                ? 'fill-current'
                                : 'text-slate-300 dark:text-slate-700 fill-current'}"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                            />
                        </svg>
                    {/each}
                </div>
                <span class="text-sm font-medium text-slate-900 dark:text-white"
                    >{product.rating}</span
                >
                <span class="text-sm text-slate-500"
                    >({product.reviews.length} reviews)</span
                >
            </div>
        </div>

        <!-- Price -->
        <div class="flex items-baseline gap-2">
            <span class="text-3xl font-bold text-primary"
                >{formatMoney(product.price)}</span
            >
        </div>

        <!-- Description -->
        <div>
            <h2 class="font-bold text-slate-900 dark:text-white mb-2">
                Description
            </h2>
            <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                {product.description}
            </p>
        </div>

        <!-- Features -->
        {#if product.features && product.features.length > 0}
            <div>
                <h2 class="font-bold text-slate-900 dark:text-white mb-3">
                    Key Features
                </h2>
                <div class="space-y-2">
                    {#each product.features as feature}
                        <div class="flex items-start gap-2">
                            <span
                                class="material-symbols-outlined text-primary text-[20px] mt-0.5"
                                >check_circle</span
                            >
                            <span
                                class="text-sm text-slate-700 dark:text-slate-300"
                                >{feature}</span
                            >
                        </div>
                    {/each}
                </div>
            </div>
        {/if}

        <!-- Specifications Toggle -->
        <button
            onclick={() => (showSpecs = !showSpecs)}
            class="w-full flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 transition-all active:scale-98"
        >
            <span class="font-bold text-slate-900 dark:text-white"
                >Specifications</span
            >
            <span
                class="material-symbols-outlined transition-transform {showSpecs
                    ? 'rotate-180'
                    : ''}">expand_more</span
            >
        </button>

        {#if showSpecs}
            <div class="space-y-2 -mt-4" in:fly={{ y: -20, duration: 300 }}>
                {#each Object.entries(product.specs || {}) as [key, value]}
                    <div
                        class="flex justify-between p-3 bg-white dark:bg-surface-dark rounded-lg border border-slate-100 dark:border-slate-800"
                    >
                        <span class="text-sm text-slate-600 dark:text-slate-400"
                            >{key}</span
                        >
                        <span
                            class="text-sm font-medium text-slate-900 dark:text-white text-right"
                            >{value}</span
                        >
                    </div>
                {/each}
            </div>
        {/if}

        <!-- Reviews Link -->
        <a
            href="/reviews/{product.id}"
            class="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700 transition-all active:scale-98"
        >
            <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary"
                    >rate_review</span
                >
                <div>
                    <div class="font-bold text-slate-900 dark:text-white">
                        Customer Reviews
                    </div>
                    <div class="text-xs text-slate-500">
                        {product.reviews.length} review{product.reviews
                            .length !== 1
                            ? "s"
                            : ""}
                    </div>
                </div>
            </div>
            <span class="material-symbols-outlined text-slate-400"
                >chevron_right</span
            >
        </a>
    </div>

    <!-- Fixed Bottom Bar - Add to Cart -->
    <div
        class="fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-surface-dark border-t border-slate-200 dark:border-slate-700 z-50 safe-area-bottom"
    >
        <button
            onclick={addToCart}
            class="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95 flex items-center justify-center gap-2"
        >
            <span class="material-symbols-outlined text-[24px]"
                >shopping_cart</span
            >
            <span>Add to Cart</span>
        </button>
    </div>
</div>
