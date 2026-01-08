<script lang="ts">
    import { t } from "$lib/stores/i18n";
    import { triggerAddToCartAnimation, cart } from "$lib/stores/cart";
    import { goto } from "$app/navigation";

    let { products = [] }: { products?: any[] } = $props();

    let activeCategory = $state("All");
    const categories = ["All", "Mini", "Smart", "Outdoor"];

    function handleImageError(e: Event) {
        const target = e.target as HTMLImageElement;
        target.src = "https://placehold.co/600x400?text=No+Image";
    }

    function triggerAddToCart(e: MouseEvent, product: any) {
        e.preventDefault();
        e.stopPropagation(); // Stop event so we don't navigate if inside a link

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
    <!-- Hero Section -->
    <div class="px-4 pt-4">
        <div
            class="relative flex h-[480px] w-full flex-col justify-end overflow-hidden rounded-2xl bg-slate-200"
        >
            <div
                class="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeUdZQ4iw9OFNCUOM0gnLfRX6IOYXTINe3LGBcEKpicNni9WMy2Kl2R4jTonXRI4HE3XlA8TvZCsuPLvnwVdfLRgHbs_odj-mB3UFi41e8mH3Q2e0Yv96yw8y-fVHeroqECcMyE1S2rt-67rA4EcgphDmoYot0n4MIwVEBhF3AFdHcViqK9A2SMWoa6U9yoAxuuoeZM1ftdR7nWGRvDF3Ew77zhfgowXvZnZpLgEihQv0pDJwbGU6tL3jjtIoyJsyfscaETNfS2ZA');"
            ></div>
            <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
            ></div>
            <div class="relative z-10 flex flex-col gap-5 p-6">
                <div class="space-y-2">
                    <h2
                        class="text-sm font-medium uppercase tracking-widest text-primary"
                    >
                        Upgrade Your View
                    </h2>
                    <h3
                        class="text-4xl font-bold leading-none tracking-tight text-white"
                    >
                        {$t("home.hero.title")}
                    </h3>
                    <p
                        class="text-slate-200 text-sm max-w-[85%] pt-2 leading-relaxed"
                    >
                        {$t("home.hero.subtitle")}
                    </p>
                </div>
                <a
                    href="/catalog"
                    class="mt-2 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 font-bold text-white transition-all hover:bg-blue-600 active:scale-95"
                >
                    Shop Now
                    <span class="material-symbols-outlined text-[20px]"
                        >arrow_forward</span
                    >
                </a>
            </div>
        </div>
    </div>

    <!-- Categories -->
    <div class="flex w-full gap-3 overflow-x-auto px-4 pb-2 no-scrollbar">
        {#each categories as category}
            <button
                onclick={() => (activeCategory = category)}
                class="flex h-10 shrink-0 items-center justify-center rounded-full px-6 transition-all duration-300 active:scale-95 {activeCategory ===
                category
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 font-medium hover:bg-slate-200 dark:hover:bg-slate-700'}"
            >
                <span class="text-sm">{category}</span>
            </button>
        {/each}
    </div>

    <!-- Trending -->
    <div class="flex flex-col pt-2">
        <div class="flex items-center justify-between px-4 pb-5">
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">
                {$t("home.trending")}
            </h2>
            <a href="/catalog" class="text-sm font-medium text-primary"
                >See All</a
            >
        </div>
        <div class="grid grid-cols-2 gap-5 px-4">
            {#each products as product}
                <div class="group flex flex-col gap-3 relative">
                    <!-- Link to PDP -->
                    <a
                        href="/products/{product.id}"
                        class="absolute inset-0 z-0 rounded-2xl"
                        aria-label="View {product.name}"
                    ></a>

                    <div
                        class="relative aspect-square w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 z-10 pointer-events-none"
                    >
                        <img
                            src={product.image}
                            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            alt={product.name}
                            onerror={handleImageError}
                        />
                        <button
                            onclick={(e) => triggerAddToCart(e, product)}
                            class="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 dark:bg-black/50 backdrop-blur-sm text-slate-900 dark:text-white active:scale-95 transition-transform pointer-events-auto z-20"
                            aria-label="Add to Cart"
                        >
                            <span class="material-symbols-outlined text-[20px]"
                                >shopping_cart</span
                            >
                        </button>
                    </div>
                    <div class="z-10 pointer-events-none">
                        <h3
                            class="text-base font-bold text-slate-900 dark:text-white"
                        >
                            {product.name}
                        </h3>
                        <p class="text-base font-bold text-primary">
                            {$t("currency")}
                            {product.price.toLocaleString()}
                        </p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>
