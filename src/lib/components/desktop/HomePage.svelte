<script lang="ts">
    import { t } from "$lib/stores/i18n";
    import { triggerAddToCartAnimation, cart } from "$lib/stores/cart";
    import { goto } from "$app/navigation";

    let { products = [] }: { products?: any[] } = $props();

    function handleImageError(e: Event) {
        const target = e.target as HTMLImageElement;
        target.src = "https://placehold.co/800x600?text=No+Image";
    }

    function triggerAddToCart(e: MouseEvent, product: any) {
        e.stopPropagation(); // Prevent navigation if inside a link

        const target = e.currentTarget as HTMLElement;
        // Try to find the image in the same card to use as start point
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

<div class="flex flex-col gap-12">
    <!-- Desktop Hero -->
    <div
        class="relative h-[600px] w-full overflow-hidden rounded-3xl bg-slate-900"
    >
        <div
            class="absolute inset-0 h-full w-full bg-cover bg-center"
            style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDeUdZQ4iw9OFNCUOM0gnLfRX6IOYXTINe3LGBcEKpicNni9WMy2Kl2R4jTonXRI4HE3XlA8TvZCsuPLvnwVdfLRgHbs_odj-mB3UFi41e8mH3Q2e0Yv96yw8y-fVHeroqECcMyE1S2rt-67rA4EcgphDmoYot0n4MIwVEBhF3AFdHcViqK9A2SMWoa6U9yoAxuuoeZM1ftdR7nWGRvDF3Ew77zhfgowXvZnZpLgEihQv0pDJwbGU6tL3jjtIoyJsyfscaETNfS2ZA');"
        ></div>
        <div
            class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"
        ></div>

        <div
            class="relative z-10 flex h-full max-w-2xl flex-col justify-center p-16 gap-6"
        >
            <span
                class="inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-bold text-primary w-fit backdrop-blur-md"
            >
                New Generation 2026
            </span>
            <h1
                class="text-7xl font-bold tracking-tight text-white leading-[1.1]"
            >
                {$t("home.hero.title")}
            </h1>
            <p class="text-xl text-slate-300">
                {$t("home.hero.subtitle")} Transform your living space into an immersive
                theater with 4K clarity and Dolby Atmos sound.
            </p>
            <div class="flex gap-4 pt-4">
                <a
                    href="/catalog"
                    class="h-14 px-8 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-lg transition-all shadow-lg shadow-primary/30 flex items-center gap-2 active:scale-95"
                >
                    Shop Projectors
                    <span class="material-symbols-outlined">arrow_forward</span>
                </a>
                <button
                    class="h-14 px-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-lg backdrop-blur-sm transition-all flex items-center gap-2 active:scale-95"
                >
                    <span class="material-symbols-outlined">play_circle</span>
                    Watch Demo
                </button>
            </div>
        </div>
    </div>

    <!-- Features / Categories -->
    <div class="grid grid-cols-4 gap-6">
        {#each ["Mini Projectors", "Smart Home", "Outdoor Cinema", "Accessories"] as category}
            <button
                class="group relative h-40 w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 p-6 flex items-center justify-between cursor-pointer hover:shadow-xl transition-all text-left active:scale-[0.98]"
            >
                <h3
                    class="text-xl font-bold text-slate-900 dark:text-white z-10"
                >
                    {category}
                </h3>
                <div
                    class="absolute right-[-20px] bottom-[-20px] h-24 w-24 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all"
                ></div>
            </button>
        {/each}
    </div>

    <!-- Trending Grid -->
    <div>
        <div class="flex items-center justify-between mb-8">
            <h2 class="text-3xl font-bold text-slate-900 dark:text-white">
                {$t("home.trending")}
            </h2>
            <a href="/catalog" class="text-primary font-bold hover:underline"
                >View All Collection</a
            >
        </div>
        <div class="grid grid-cols-4 gap-8">
            {#each products as product}
                <div class="group relative">
                    <!-- Link to PDP -->
                    <a
                        href="/products/{product.id}"
                        class="absolute inset-0 z-0 rounded-2xl"
                    ></a>

                    <div
                        class="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 mb-4 z-10 pointer-events-none"
                    >
                        <img
                            src={product.image}
                            class="h-full w-full object-cover transition-duration-700 group-hover:scale-110"
                            alt={product.name}
                            onerror={handleImageError}
                        />
                        <div
                            class="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0"
                        >
                            <button
                                onclick={(e) => triggerAddToCart(e, product)}
                                class="bg-white text-slate-900 px-6 py-2 rounded-full font-bold shadow-lg hover:bg-primary hover:text-white transition-colors pointer-events-auto"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    <h3
                        class="text-lg font-bold text-slate-900 dark:text-white z-10 relative pointer-events-none"
                    >
                        {product.name}
                    </h3>
                    <p class="text-slate-500">{product.description}</p>
                    <p class="text-lg font-bold text-primary mt-1">
                        {$t("currency")}
                        {product.price.toLocaleString()}
                    </p>
                </div>
            {/each}
        </div>
    </div>
</div>
