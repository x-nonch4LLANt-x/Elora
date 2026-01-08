<script lang="ts">
    import type { Product } from "$lib/stores/products";
    import { fade } from "svelte/transition";
    import ReviewCard from "$lib/components/shared/ReviewCard.svelte";
    import ReviewForm from "$lib/components/shared/ReviewForm.svelte";

    let { product }: { product: Product } = $props();

    let showReviewForm = $state(false);
    let sortBy = $state<"recent" | "highest" | "lowest">("recent");

    const sortedReviews = $derived(() => {
        const reviews = [...product.reviews];
        if (sortBy === "highest") {
            return reviews.sort((a, b) => b.rating - a.rating);
        } else if (sortBy === "lowest") {
            return reviews.sort((a, b) => a.rating - b.rating);
        } else {
            return reviews.sort(
                (a, b) =>
                    new Date(b.date).getTime() - new Date(a.date).getTime(),
            );
        }
    });

    function formatMoney(amount: number) {
        return new Intl.NumberFormat("en-KE", {
            style: "currency",
            currency: "KES",
        }).format(amount);
    }

    function getRatingDistribution() {
        const dist = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        product.reviews.forEach((r) => {
            dist[r.rating as keyof typeof dist]++;
        });
        return dist;
    }

    const ratingDist = $derived(getRatingDistribution());
    const totalReviews = $derived(product.reviews.length);
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
            <a
                href="/products/{product.id}"
                class="hover:text-primary transition-colors">{product.name}</a
            >
            <span class="mx-2">/</span>
            <span class="text-slate-900 dark:text-white">Reviews</span>
        </nav>

        <!-- Product Header -->
        <div
            class="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 mb-8"
        >
            <div class="flex items-center gap-6">
                <div
                    class="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden shrink-0"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        class="w-full h-full object-cover"
                    />
                </div>
                <div class="flex-1">
                    <h1
                        class="text-2xl font-bold text-slate-900 dark:text-white mb-2"
                    >
                        {product.name}
                    </h1>
                    <p class="text-lg font-bold text-primary">
                        {formatMoney(product.price)}
                    </p>
                </div>
                <a
                    href="/products/{product.id}"
                    class="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                >
                    Back to Product
                </a>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Sidebar - Rating Summary & Filters -->
            <div class="lg:col-span-1 space-y-6">
                <!-- Rating Summary -->
                <div
                    class="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 sticky top-24"
                >
                    <h2 class="font-bold text-slate-900 dark:text-white mb-6">
                        Rating Summary
                    </h2>

                    <div
                        class="text-center mb-6 pb-6 border-b border-slate-200 dark:border-slate-700"
                    >
                        <div
                            class="text-6xl font-bold text-slate-900 dark:text-white mb-2"
                        >
                            {product.rating.toFixed(1)}
                        </div>
                        <div class="flex justify-center text-yellow-400 mb-3">
                            {#each Array(5) as _, i}
                                <svg
                                    class="w-6 h-6 {i <
                                    Math.floor(product.rating)
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
                        <div class="text-sm text-slate-500">
                            Based on {totalReviews} review{totalReviews !== 1
                                ? "s"
                                : ""}
                        </div>
                    </div>

                    <div class="space-y-3">
                        {#each [5, 4, 3, 2, 1] as star}
                            {@const count =
                                ratingDist[star as keyof typeof ratingDist]}
                            {@const percentage =
                                totalReviews > 0
                                    ? (count / totalReviews) * 100
                                    : 0}
                            <div class="flex items-center gap-3">
                                <span
                                    class="text-sm text-slate-600 dark:text-slate-400 w-8"
                                    >{star} ★</span
                                >
                                <div
                                    class="flex-1 h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden"
                                >
                                    <div
                                        class="h-full bg-yellow-400 transition-all duration-300"
                                        style="width: {percentage}%"
                                    ></div>
                                </div>
                                <span
                                    class="text-sm text-slate-500 w-10 text-right"
                                    >{count}</span
                                >
                            </div>
                        {/each}
                    </div>

                    <button
                        onclick={() => (showReviewForm = !showReviewForm)}
                        class="w-full mt-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95 flex items-center justify-center gap-2"
                    >
                        <span class="material-symbols-outlined text-[20px]"
                            >edit</span
                        >
                        <span>Write a Review</span>
                    </button>
                </div>
            </div>

            <!-- Main Content - Reviews -->
            <div class="lg:col-span-2 space-y-6">
                <!-- Review Form -->
                {#if showReviewForm}
                    <div in:fade>
                        <ReviewForm
                            productId={product.id}
                            productName={product.name}
                            onSubmit={() => (showReviewForm = false)}
                        />
                    </div>
                {/if}

                <!-- Sort & Filter Bar -->
                <div
                    class="flex items-center justify-between bg-white dark:bg-surface-dark p-4 rounded-xl border border-slate-100 dark:border-slate-800"
                >
                    <h3 class="font-bold text-slate-900 dark:text-white">
                        All Reviews ({totalReviews})
                    </h3>
                    <select
                        bind:value={sortBy}
                        class="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    >
                        <option value="recent">Most Recent</option>
                        <option value="highest">Highest Rated</option>
                        <option value="lowest">Lowest Rated</option>
                    </select>
                </div>

                <!-- Reviews List -->
                {#if totalReviews === 0}
                    <div
                        class="text-center py-16 bg-white dark:bg-surface-dark rounded-2xl border border-slate-100 dark:border-slate-800"
                    >
                        <span
                            class="material-symbols-outlined text-slate-300 dark:text-slate-700 text-[80px]"
                            >rate_review</span
                        >
                        <p class="text-slate-500 mt-4 text-lg">
                            No reviews yet. Be the first to review!
                        </p>
                    </div>
                {:else}
                    <div class="space-y-4">
                        {#each sortedReviews() as review (review.id)}
                            <ReviewCard {review} />
                        {/each}
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>
