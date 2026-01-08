<script lang="ts">
    import type { Product } from "$lib/stores/products";
    import { fade, slide } from "svelte/transition";
    import { cart } from "$lib/stores/cart";
    import { wishlist, toggleWishlist } from "$lib/stores/wishlist";
    import { toast } from "$lib/stores/toast";

    let { product }: { product: Product } = $props();

    let selectedImageIndex = $state(0);
    let activeTab = $state<"specs" | "features">("specs");

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
        toast.add("Added to cart!", "success");
    }

    function formatMoney(amount: number) {
        return new Intl.NumberFormat("en-KE", {
            style: "currency",
            currency: "KES",
        }).format(amount);
    }
</script>

<div
    class="min-h-screen bg-background-light dark:bg-background-dark py-8 px-6 lg:px-8"
>
    <div class="max-w-7xl mx-auto">
        <!-- Breadcrumbs -->
        <nav class="flex mb-8 text-sm text-slate-500">
            <a href="/" class="hover:text-primary transition-colors">Home</a>
            <span class="mx-2">/</span>
            <a href="/catalog" class="hover:text-primary transition-colors"
                >Catalog</a
            >
            <span class="mx-2">/</span>
            <span class="text-slate-900 dark:text-white">{product.name}</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <!-- Gallery Section -->
            <div class="space-y-4">
                <!-- Main Image -->
                <div
                    class="relative aspect-square overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
                >
                    {#key selectedImageIndex}
                        <img
                            src={product.gallery[selectedImageIndex] ||
                                product.image}
                            alt={product.name}
                            class="w-full h-full object-contain p-12 transition-all duration-300"
                            in:fade={{ duration: 200 }}
                        />
                    {/key}
                </div>

                <!-- Thumbnails -->
                <div class="flex gap-3">
                    {#each product.gallery as img, i}
                        <button
                            class="relative w-24 h-24 rounded-lg overflow-hidden border-2 transition-all duration-200 {selectedImageIndex ===
                            i
                                ? 'border-primary ring-2 ring-primary/30'
                                : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'}"
                            onclick={() => (selectedImageIndex = i)}
                        >
                            <img
                                src={img}
                                alt=""
                                class="w-full h-full object-cover"
                            />
                        </button>
                    {/each}
                </div>
            </div>

            <!-- Product Info Section -->
            <div class="flex flex-col">
                <div class="mb-4">
                    <span
                        class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 capitalize"
                    >
                        {product.category}
                    </span>
                </div>

                <h1
                    class="text-4xl font-bold text-slate-900 dark:text-white mb-4"
                >
                    {product.name}
                </h1>

                <div class="flex items-center gap-4 mb-6">
                    <div class="flex text-yellow-400">
                        {#each Array(5) as _, i}
                            <svg
                                class="w-5 h-5 {i < Math.floor(product.rating)
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
                    <span
                        class="text-lg font-medium text-slate-900 dark:text-white"
                        >{product.rating}</span
                    >
                    <a
                        href="/reviews/{product.id}"
                        class="text-sm text-primary hover:underline"
                    >
                        ({product.reviews.length} reviews)
                    </a>
                </div>

                <p
                    class="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8"
                >
                    {product.description}
                </p>

                <div class="mb-8">
                    <h3 class="font-bold text-slate-900 dark:text-white mb-3">
                        Key Features
                    </h3>
                    <div class="space-y-2">
                        {#each product.features || [] as feature}
                            <div class="flex items-start gap-2">
                                <span
                                    class="material-symbols-outlined text-primary text-[20px] mt-0.5"
                                    >check_circle</span
                                >
                                <span class="text-slate-700 dark:text-slate-300"
                                    >{feature}</span
                                >
                            </div>
                        {/each}
                    </div>
                </div>

                <div
                    class="flex items-baseline gap-4 mb-8 pt-6 border-t border-slate-200 dark:border-slate-700"
                >
                    <span class="text-4xl font-bold text-primary"
                        >{formatMoney(product.price)}</span
                    >
                </div>

                <div class="flex gap-4">
                    <button
                        onclick={addToCart}
                        class="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
                    >
                        <span class="material-symbols-outlined text-[24px]"
                            >shopping_cart</span
                        >
                        <span>Add to Cart</span>
                    </button>
                    <button
                        onclick={() => toggleWishlist(product.id)}
                        class="px-6 py-4 rounded-xl border-2 transition-all {$wishlist.includes(
                            product.id,
                        )
                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                            : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'}"
                    >
                        <span
                            class="material-symbols-outlined text-2xl {$wishlist.includes(
                                product.id,
                            )
                                ? 'text-red-500 fill-1'
                                : 'text-slate-700 dark:text-slate-300'}"
                            >favorite</span
                        >
                    </button>
                </div>
            </div>
        </div>

        <!-- Details Tabs -->
        <div class="mt-16">
            <div
                class="flex border-b border-slate-200 dark:border-slate-700 mb-8"
            >
                <button
                    class="px-8 py-4 text-lg font-medium transition-colors relative {activeTab ===
                    'specs'
                        ? 'text-primary'
                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}"
                    onclick={() => (activeTab = "specs")}
                >
                    Specifications
                    {#if activeTab === "specs"}
                        <div
                            class="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                            transition:slide={{ axis: "x", duration: 200 }}
                        ></div>
                    {/if}
                </button>
                <a
                    href="/reviews/{product.id}"
                    class="px-8 py-4 text-lg font-medium transition-colors text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-2"
                >
                    Reviews
                    <span class="text-sm">({product.reviews.length})</span>
                </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                {#each Object.entries(product.specs || {}) as [key, value]}
                    <div
                        class="flex justify-between p-4 rounded-lg bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-800"
                        in:fade={{ duration: 200 }}
                    >
                        <span class="text-slate-600 dark:text-slate-400"
                            >{key}</span
                        >
                        <span
                            class="font-medium text-slate-900 dark:text-white text-right"
                            >{value}</span
                        >
                    </div>
                {/each}
            </div>
        </div>
    </div>
</div>
