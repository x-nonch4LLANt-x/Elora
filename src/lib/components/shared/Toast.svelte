<script lang="ts">
    import { toast } from "$lib/stores/toast";
    import { fly, fade } from "svelte/transition";
    import { flip } from "svelte/animate";
</script>

<div
    class="fixed top-24 right-4 z-[100] flex flex-col gap-2 pointer-events-none"
>
    {#each $toast as t (t.id)}
        <div
            animate:flip={{ duration: 300 }}
            in:fly={{ x: 100, duration: 300 }}
            out:fade={{ duration: 300 }}
            class="pointer-events-auto min-w-[300px] max-w-sm rounded-xl shadow-lg border p-4 flex items-start gap-3 bg-white dark:bg-surface-dark backdrop-blur-md
            {t.type === 'success'
                ? 'border-green-200 dark:border-green-800/30'
                : t.type === 'error'
                  ? 'border-red-200 dark:border-red-800/30'
                  : 'border-blue-200 dark:border-blue-800/30'}"
        >
            <div
                class="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5
                {t.type === 'success'
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                    : t.type === 'error'
                      ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'
                      : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'}"
            >
                <span class="material-symbols-outlined text-[16px]">
                    {t.type === "success"
                        ? "check"
                        : t.type === "error"
                          ? "error"
                          : "info"}
                </span>
            </div>
            <div class="flex-1 pt-0.5">
                <p
                    class="text-sm font-medium text-slate-800 dark:text-slate-100"
                >
                    {t.message}
                </p>
            </div>
            <button
                onclick={() => toast.remove(t.id)}
                class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                aria-label="Close"
            >
                <span class="material-symbols-outlined text-[18px]">close</span>
            </button>
        </div>
    {/each}
</div>
