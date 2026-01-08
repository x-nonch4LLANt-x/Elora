<script lang="ts">
    import { fade, slide } from "svelte/transition";
    import { toast } from "$lib/stores/toast";

    let {
        productId,
        productName,
        onSubmit = () => {},
    }: {
        productId: string;
        productName: string;
        onSubmit?: () => void;
    } = $props();

    let rating = $state(0);
    let hoverRating = $state(0);
    let userName = $state("");
    let comment = $state("");
    let isSubmitting = $state(false);

    async function handleSubmit(e: Event) {
        e.preventDefault();

        if (rating === 0) {
            toast.add("Please select a rating", "error");
            return;
        }

        if (!userName.trim()) {
            toast.add("Please enter your name", "error");
            return;
        }

        if (!comment.trim()) {
            toast.add("Please write a review", "error");
            return;
        }

        isSubmitting = true;

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        toast.add("Review submitted successfully!", "success");

        // Reset form
        rating = 0;
        userName = "";
        comment = "";
        isSubmitting = false;

        onSubmit();
    }
</script>

<form
    onsubmit={handleSubmit}
    class="bg-white dark:bg-surface-dark rounded-2xl border border-slate-100 dark:border-slate-800 p-6 space-y-6"
    transition:fade
>
    <div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Write a Review
        </h3>
        <p class="text-sm text-slate-500">for {productName}</p>
    </div>

    <!-- Rating -->
    <div>
        <label
            for="rating-group"
            class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
            >Your Rating *</label
        >
        <div
            class="flex gap-2"
            role="radiogroup"
            aria-labelledby="rating-group"
            id="rating-group"
        >
            {#each Array(5) as _, i}
                <button
                    type="button"
                    class="group focus:outline-none"
                    onmouseenter={() => (hoverRating = i + 1)}
                    onmouseleave={() => (hoverRating = 0)}
                    onclick={() => (rating = i + 1)}
                    aria-label="{i + 1} star{i > 0 ? 's' : ''}"
                    role="radio"
                    aria-checked={rating === i + 1}
                >
                    <svg
                        class="w-10 h-10 transition-all {i <
                        (hoverRating || rating)
                            ? 'text-yellow-400 fill-current scale-110'
                            : 'text-slate-300 dark:text-slate-700 fill-current'}"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                </button>
            {/each}
        </div>
        {#if rating > 0}
            <p class="text-sm text-slate-500 mt-2" transition:slide>
                {rating === 1
                    ? "Poor"
                    : rating === 2
                      ? "Fair"
                      : rating === 3
                        ? "Good"
                        : rating === 4
                          ? "Very Good"
                          : "Excellent"}
            </p>
        {/if}
    </div>

    <!-- Name -->
    <div>
        <label
            for="reviewer-name"
            class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
            >Your Name *</label
        >
        <input
            id="reviewer-name"
            type="text"
            bind:value={userName}
            required
            placeholder="John Doe"
            class="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
        />
    </div>

    <!-- Comment -->
    <div>
        <label
            for="review-comment"
            class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
            >Your Review *</label
        >
        <textarea
            id="review-comment"
            bind:value={comment}
            required
            rows="5"
            placeholder="Share your experience with this product..."
            class="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
        ></textarea>
        <p class="text-xs text-slate-500 mt-1">
            {comment.length} / 500 characters
        </p>
    </div>

    <!-- Submit -->
    <div class="flex gap-3 pt-2">
        <button
            type="submit"
            disabled={isSubmitting}
            class="flex-1 bg-primary text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
            {#if isSubmitting}
                <div
                    class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                ></div>
                Submitting...
            {:else}
                Submit Review
            {/if}
        </button>
    </div>
</form>
