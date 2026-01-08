<script lang="ts">
    import { t } from "$lib/stores/i18n";
    import { triggerAddToCartAnimation, cart } from "$lib/stores/cart";

    let { products = [] }: { products?: any[] } = $props();

    function handleImageError(e: Event) {
        const target = e.target as HTMLImageElement;
        target.src = "https://placehold.co/600x400?text=No+Image";
    }

    function triggerAddToCart(e: MouseEvent, product: any) {
        e.preventDefault();
        e.stopPropagation();

        const target = e.currentTarget as HTMLElement;
        const card = target.closest(".group");
        const img = card?.querySelector("img");
        const rect = img
            ? img.getBoundingClientRect()
            : target.getBoundingClientRect();

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

<div class="flex flex-col gap-6">
    <!-- Hero (Smaller than Desktop, larger than Mobile) -->
    <div
        class="relative h-[400px] w-full overflow-hidden rounded-2xl bg-slate-900"
    >
        <div
            class="absolute inset-0 h-full w-full bg-cover bg-center"
            style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeUdZQ4iw9OFNCUOM0gnLfRX6IOYXTINe3LGBcEKpicNni9WMy2Kl2R4jTonXRI4HE3XlA8TvZCsuPLvnwVdfLRgHbs_odj-mB3UFi41e8mH3Q2e0Yv96yw8y-fVHeroqECcMyE1S2rt-67rA4EcgphDmoYot0n4MIyVEBhF3AFdHcViqK9A2SMWoa6U9yoAxuuoeZM1ftdR7nWGRvDF3Ew77zhfgowXvZnZpLgEihQv0pDJwbGU6tL3jjtIoyJsyfscaETNfS2ZA');"
        ></div>
        <div
            class="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"
        ></div>
        <div
            class="relative z-10 flex flex-col justify-center h-full p-10 gap-4 max-w-lg"
        >
            <h1 class="text-5xl font-bold text-white">
                {$t("home.hero.title")}
            </h1>
            <p class="text-lg text-slate-200">{$t("home.hero.subtitle")}</p>
            <a
                href="/catalog"
                class="mt-4 flex h-12 w-fit items-center justify-center gap-2 px-8 rounded-xl bg-primary text-white font-bold transition-all hover:bg-blue-600 active:scale-95"
                >Shop Now
                <span class="material-symbols-outlined text-[20px]"
                    >arrow_forward</span
                >
            </a>
        </div>
    </div>

    <!-- Grid 3 Cols -->
    <div class="grid grid-cols-3 gap-6">
        {#each products as product}
            <!-- Product -->
            <div class="group flex flex-col gap-3 relative">
                <!-- Link to PDP -->
                <a
                    href="/products/{product.id}"
                    class="absolute inset-0 z-0 rounded-xl"
                    aria-label="View {product.name}"
                ></a>

                <div
                    class="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 z-10 pointer-events-none"
                >
                    <img
                        src={product.image}
                        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        alt={product.name}
                        onerror={handleImageError}
                    />
                    <!-- Add Cart Overlay if needed, or button -->
                    <button
                        onclick={(e) => triggerAddToCart(e, product)}
                        class="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-sm text-slate-900 dark:text-white shadow-lg active:scale-95 transition-transform pointer-events-auto z-20"
                        aria-label="Add to Cart"
                    >
                        <span class="material-symbols-outlined text-[20px]"
                            >add_shopping_cart</span
                        >
                    </button>
                </div>
                <div class="z-10 pointer-events-none">
                    <h3
                        class="text-lg font-bold text-slate-900 dark:text-white"
                    >
                        {product.name}
                    </h3>
                    <p class="text-lg font-bold text-primary">
                        {$t("currency")}
                        {product.price.toLocaleString()}
                    </p>
                </div>
            </div>
        {/each}
    </div>
</div>
