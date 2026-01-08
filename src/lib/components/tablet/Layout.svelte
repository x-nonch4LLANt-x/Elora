<script lang="ts">
    import type { Snippet } from "svelte";
    import "../../../app.css";

    import { language, toggleLanguage } from "$lib/stores/i18n";

    import Logo from "$lib/components/shared/Logo.svelte";

    let { children }: { children: Snippet } = $props();
</script>

<div
    class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark"
>
    <!-- Tablet Header -->
    <nav
        class="sticky top-0 z-50 flex items-center justify-between bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm p-4 border-b border-slate-100 dark:border-slate-800"
    >
        <div class="flex items-center gap-4">
            <button class="text-slate-900 dark:text-white hover:text-primary">
                <span class="material-symbols-outlined">menu</span>
            </button>
            <div class="flex items-center gap-2">
                <Logo className="h-8 w-8" />
                <h1
                    class="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
                >
                    ELORA Tech
                </h1>
            </div>
        </div>

        <div class="flex items-center gap-4">
            <button
                class="text-slate-900 dark:text-white hover:text-primary transition-colors"
            >
                <span class="material-symbols-outlined">search</span>
            </button>
            <button
                class="text-xs font-bold text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded px-2 py-1"
                onclick={toggleLanguage}
            >
                {$language.toUpperCase()}
            </button>
            <button
                class="relative text-slate-900 dark:text-white hover:text-primary transition-colors"
            >
                <span class="material-symbols-outlined">shopping_cart</span>
                <span
                    class="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white"
                    >2</span
                >
            </button>
        </div>
    </nav>

    <!-- Sidebar? No, maybe just main content for now. Tablet usually looks like big mobile or small desktop. -->
    <main class="flex-1 px-6 py-6">
        {@render children()}
    </main>

    <!-- Tablet Footer (Simplified) -->
    <footer
        class="bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 p-6 flex flex-col items-center gap-4"
    >
        <p class="text-sm text-slate-500">© 2026 ELORA Tech.</p>
    </footer>
</div>
