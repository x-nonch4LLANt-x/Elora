<script lang="ts">
    import { searchQuery } from "$lib/stores/products";
    import { goto } from "$app/navigation";
    import { products } from "$lib/stores/products";
    import { fade } from "svelte/transition";
    import { t } from "$lib/stores/i18n";

    import { untrack } from "svelte";

    let query = $state($searchQuery);
    let showSuggestions = $state(false);

    // Sync from store to local state (external changes)
    $effect(() => {
        const storeValue = $searchQuery;
        untrack(() => {
            if (query !== storeValue) {
                query = storeValue;
            }
        });
    });

    // Sync from local state to store (internal changes)
    $effect(() => {
        const localValue = query;
        untrack(() => {
            searchQuery.set(localValue);
        });
    });

    // Derived suggestions based on local query state
    let suggestions = $derived(
        query.length > 1
            ? $products
                  .filter((p) =>
                      p.name.toLowerCase().includes(query.toLowerCase()),
                  )
                  .slice(0, 5)
            : [],
    );

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === "Enter") {
            showSuggestions = false;
            goto(`/catalog?search=${query}`);
        }
    }

    function selectSuggestion(id: string) {
        showSuggestions = false;
        goto(`/products/${id}`);
    }

    // click outside to close
    function handleClickOutside(node: Node) {
        const handleClick = (e: MouseEvent) => {
            if (
                node &&
                !node.contains(e.target as Node) &&
                !e.defaultPrevented
            ) {
                showSuggestions = false;
            }
        };
        document.addEventListener("click", handleClick, true);
        return {
            destroy() {
                document.removeEventListener("click", handleClick, true);
            },
        };
    }
</script>

<div class="relative w-full max-w-md" use:handleClickOutside>
    <div class="relative group">
        <input
            type="text"
            placeholder="Search products..."
            bind:value={query}
            onkeydown={handleKeydown}
            onfocus={() => (showSuggestions = query.length > 1)}
            class="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white dark:focus:bg-slate-900 transition-all text-sm text-slate-900 dark:text-white"
        />
        <span
            class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]"
            >search</span
        >

        {#if query.length > 0}
            <button
                onclick={() => {
                    query = "";
                    searchQuery.set("");
                }}
                class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-[18px]"
                >close</button
            >
        {/if}
    </div>

    {#if showSuggestions && suggestions.length > 0}
        <div
            class="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden z-50 origin-top"
            transition:fade={{ duration: 150 }}
        >
            <div class="p-2">
                <p
                    class="text-xs font-semibold text-slate-400 px-3 py-2 uppercase tracking-wider"
                >
                    Suggestions
                </p>
                {#each suggestions as product}
                    <button
                        class="w-full text-left p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg flex items-start gap-4 transition-colors group"
                        onclick={() => selectSuggestion(product.id)}
                    >
                        <div
                            class="w-12 h-12 shrink-0 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden"
                        >
                            <img
                                src={product.image}
                                alt=""
                                class="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"
                            />
                        </div>

                        <div class="flex-1 min-w-0">
                            <h4
                                class="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-primary transition-colors"
                            >
                                {product.name}
                            </h4>
                            <p class="text-xs text-primary font-bold mt-0.5">
                                {$t("currency")}{product.price.toLocaleString()}
                            </p>
                        </div>
                    </button>
                {/each}
            </div>
        </div>
    {/if}
</div>
