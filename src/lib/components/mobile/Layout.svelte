<script lang="ts">
    import type { Snippet } from "svelte";
    import "../../../app.css"; // Ensure CSS is available if not globally
    import { language, toggleLanguage } from "$lib/stores/i18n";
    import { theme, toggleTheme } from "$lib/stores/theme";

    import CartFlyAnimation from "$lib/components/CartFlyAnimation.svelte";
    import { cartCount } from "$lib/stores/cart";

    import Logo from "$lib/components/shared/Logo.svelte";

    import Search from "$lib/components/shared/Search.svelte";
    import { fade, fly } from "svelte/transition";
    import { page } from "$app/stores";

    let { children }: { children: Snippet } = $props();
    let showMobileSearch = $state(false);
    let showMenu = $state(false);

    // Check current path for active state
    let isActive = $derived.by(() => {
        return (path: string) => $page.url.pathname === path;
    });
</script>

<CartFlyAnimation />

<!-- Mobile Search Overlay -->
{#if showMobileSearch}
    <div
        class="fixed inset-0 z-[60] bg-white dark:bg-slate-900"
        transition:fly={{ y: -20, duration: 200 }}
    >
        <div
            class="p-4 flex items-center gap-4 border-b border-slate-100 dark:border-slate-800"
        >
            <button
                onclick={() => (showMobileSearch = false)}
                class="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
            >
                <span class="material-symbols-outlined">arrow_back</span>
            </button>
            <div class="flex-1">
                <!-- Using the shared search component but letting it control itself -->
                <Search />
            </div>
        </div>
        <!-- Recent searches or trending could go here -->
        <div class="p-6 text-center text-slate-400 text-sm">
            Start typing to find products...
        </div>
    </div>
{/if}

<!-- Menu Drawer -->
{#if showMenu}
    <button
        class="fixed inset-0 z-[60] bg-black/50"
        onclick={() => (showMenu = false)}
        transition:fade={{ duration: 200 }}
        aria-label="Close menu"
    ></button>
    <div
        class="fixed top-0 right-0 bottom-0 w-72 bg-white dark:bg-slate-900 z-[70] shadow-2xl flex flex-col"
        transition:fly={{ x: 300, duration: 300 }}
    >
        <div
            class="flex justify-between items-center p-6 border-b border-slate-200 dark:border-slate-800"
        >
            <h2 class="text-lg font-bold text-slate-900 dark:text-white">
                Menu
            </h2>
            <button
                onclick={() => (showMenu = false)}
                class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800"
            >
                <span class="material-symbols-outlined text-[20px]">close</span>
            </button>
        </div>

        <nav class="flex-1 overflow-y-auto p-4 space-y-1">
            <!-- Main Navigation -->
            <a
                href="/wishlist"
                class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-colors"
            >
                <span class="material-symbols-outlined text-[22px]"
                    >favorite</span
                >
                <span>Wishlist</span>
            </a>
            <a
                href="/reviews/all"
                class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-colors"
            >
                <span class="material-symbols-outlined text-[22px]"
                    >thumb_up</span
                >
                <span>Happy Customers</span>
            </a>
            <a
                href="/notifications"
                class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-colors"
            >
                <span class="material-symbols-outlined text-[22px]"
                    >notifications</span
                >
                <span>Notifications</span>
            </a>

            <div class="h-px bg-slate-200 dark:bg-slate-800 my-2"></div>

            <a
                href="/about"
                class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-colors"
            >
                <span class="material-symbols-outlined text-[22px]">info</span>
                <span>About Us</span>
            </a>
            <a
                href="/contact"
                class="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white transition-colors"
            >
                <span class="material-symbols-outlined text-[22px]">mail</span>
                <span>Contact</span>
            </a>
        </nav>

        <!-- Settings Section (Bottom) -->
        <div
            class="p-4 border-t border-slate-200 dark:border-slate-800 space-y-3"
        >
            <!-- Language Switcher -->
            <div
                class="flex items-center justify-between px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800"
            >
                <div class="flex items-center gap-3">
                    <span
                        class="material-symbols-outlined text-[22px] text-slate-700 dark:text-slate-300"
                        >language</span
                    >
                    <span
                        class="text-sm font-medium text-slate-900 dark:text-white"
                        >Language</span
                    >
                </div>
                <button
                    onclick={toggleLanguage}
                    class="px-3 py-1 text-xs font-bold bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors"
                >
                    {$language.toUpperCase()}
                </button>
            </div>

            <!-- Dark Mode Toggle -->
            <div
                class="flex items-center justify-between px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800"
            >
                <div class="flex items-center gap-3">
                    <span
                        class="material-symbols-outlined text-[22px] text-slate-700 dark:text-slate-300"
                    >
                        {document.documentElement.classList.contains("dark")
                            ? "dark_mode"
                            : "light_mode"}
                    </span>
                    <span
                        class="text-sm font-medium text-slate-900 dark:text-white"
                        >Dark Mode</span
                    >
                </div>
                <button
                    onclick={() => {
                        const isDark =
                            document.documentElement.classList.toggle("dark");
                        localStorage.setItem(
                            "theme",
                            isDark ? "dark" : "light",
                        );
                    }}
                    class="relative w-11 h-6 bg-slate-300 dark:bg-primary rounded-full transition-colors"
                >
                    <div
                        class="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform {document.documentElement.classList.contains(
                            'dark',
                        )
                            ? 'translate-x-5'
                            : ''}"
                    ></div>
                </button>
            </div>

            <!-- Settings Link -->
            <a
                href="/settings"
                class="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
            >
                <span class="material-symbols-outlined text-[22px]"
                    >settings</span
                >
                <span class="font-medium">Settings</span>
            </a>
        </div>
    </div>
{/if}

<div
    class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark"
>
    <!-- Top Navigation -->
    <nav
        class="sticky top-0 z-50 flex items-center justify-between bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm p-4 border-b border-slate-100 dark:border-slate-800 transition-colors duration-300"
    >
        <div class="flex items-center gap-2">
            <Logo className="h-10 w-10" />
            <h1
                class="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
                ELORA Tech
            </h1>
        </div>
        <div class="flex items-center gap-4">
            <button
                class="text-slate-900 dark:text-white hover:text-primary transition-colors"
                onclick={() => (showMobileSearch = true)}
            >
                <span class="material-symbols-outlined">search</span>
            </button>
            <!-- Language Toggle -->
            <button
                class="text-xs font-bold text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 rounded px-2 py-1"
                onclick={toggleLanguage}
            >
                {$language.toUpperCase()}
            </button>
            <a
                href="/cart"
                id="cart-icon"
                class="relative text-slate-900 dark:text-white hover:text-primary transition-colors"
            >
                <span class="material-symbols-outlined">shopping_cart</span>
                {#if $cartCount > 0}
                    <span
                        class="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white scale-in-center"
                        >{$cartCount}</span
                    >
                {/if}
            </a>
            <button
                class="text-slate-900 dark:text-white hover:text-primary transition-colors"
                onclick={() => (showMenu = true)}
            >
                <span class="material-symbols-outlined">menu</span>
            </button>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-1 pb-24">
        <!-- pb-24 for bottom nav space (increased from pb-20) -->
        {@render children()}
    </main>

    <!-- Bottom Tab Bar (Mobile Only) -->
    <nav
        class="fixed bottom-0 left-0 right-0 z-50 flex w-full items-center justify-around border-t border-slate-200 bg-surface-light/95 dark:border-slate-800 dark:bg-surface-dark/95 backdrop-blur-sm p-3 pb-safe shadow-lg"
    >
        <a
            href="/"
            class="flex flex-col items-center gap-1 transition-colors {isActive(
                '/',
            )
                ? 'text-primary'
                : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
        >
            <span
                class="material-symbols-outlined {isActive('/')
                    ? 'fill-1'
                    : ''}">home</span
            >
            <span class="text-[10px] font-medium">Home</span>
        </a>
        <a
            href="/catalog"
            class="flex flex-col items-center gap-1 transition-colors {isActive(
                '/catalog',
            )
                ? 'text-primary'
                : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
        >
            <span
                class="material-symbols-outlined {isActive('/catalog')
                    ? 'fill-1'
                    : ''}">category</span
            >
            <span class="text-[10px] font-medium">Catalog</span>
        </a>
        <a
            href="/wishlist"
            class="flex flex-col items-center gap-1 transition-colors {isActive(
                '/wishlist',
            )
                ? 'text-primary'
                : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
        >
            <span
                class="material-symbols-outlined {isActive('/wishlist')
                    ? 'fill-1'
                    : ''}">favorite</span
            >
            <span class="text-[10px] font-medium">Saved</span>
        </a>
        <a
            href="/dashboard"
            class="flex flex-col items-center gap-1 transition-colors {isActive(
                '/dashboard',
            )
                ? 'text-primary'
                : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'}"
        >
            <span
                class="material-symbols-outlined {isActive('/dashboard')
                    ? 'fill-1'
                    : ''}">person</span
            >
            <span class="text-[10px] font-medium">Profile</span>
        </a>
    </nav>
</div>
