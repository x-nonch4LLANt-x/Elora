<script lang="ts">
    import type { Review } from "$lib/stores/products";
    import { fade } from "svelte/transition";

    let {
        review,
        compact = false,
    }: {
        review: Review;
        compact?: boolean;
    } = $props();

    let helpfulCount = $state(0);
    let hasMarkedHelpful = $state(false);

    function toggleHelpful() {
        if (hasMarkedHelpful) {
            helpfulCount--;
            hasMarkedHelpful = false;
        } else {
            helpfulCount++;
            hasMarkedHelpful = true;
        }
    }

    function formatDate(dateString: string) {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 7) {
            return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
        } else if (diffDays < 30) {
            const weeks = Math.floor(diffDays / 7);
            return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
        } else {
            return date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
            });
        }
    }
</script>

<div
    class="p-{compact
        ? '4'
        : '6'} bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-slate-800 {compact
        ? ''
        : 'shadow-sm'}"
    transition:fade
>
    <div class="flex justify-between items-start mb-3">
        <div class="flex items-center gap-3">
            <div
                class="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-sm"
            >
                {review.user.charAt(0).toUpperCase()}
            </div>
            <div>
                <div class="font-bold text-slate-900 dark:text-white">
                    {review.user}
                </div>
                <div class="text-xs text-slate-500">
                    {formatDate(review.date)}
                </div>
            </div>
        </div>
        <div class="flex text-yellow-400">
            {#each Array(5) as _, i}
                <svg
                    class="w-4 h-4 {i < review.rating
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
    </div>

    <p
        class="text-slate-700 dark:text-slate-300 leading-relaxed {compact
            ? 'text-sm'
            : ''}"
    >
        {review.comment}
    </p>

    {#if !compact}
        <div
            class="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800"
        >
            <button
                onclick={toggleHelpful}
                class="flex items-center gap-2 text-sm font-medium transition-colors {hasMarkedHelpful
                    ? 'text-primary'
                    : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}"
            >
                <span class="material-symbols-outlined text-[18px]"
                    >{hasMarkedHelpful ? "thumb_up" : "thumb_up_off_alt"}</span
                >
                <span
                    >Helpful {helpfulCount > 0 ? `(${helpfulCount})` : ""}</span
                >
            </button>
        </div>
    {/if}
</div>
