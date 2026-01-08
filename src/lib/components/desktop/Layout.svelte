<script lang="ts">
    import type { Snippet } from "svelte";
    import "../../../app.css";
    import { language, toggleLanguage } from "$lib/stores/i18n";
    import CartFlyAnimation from "$lib/components/CartFlyAnimation.svelte";
    import { cartCount } from "$lib/stores/cart";

    import Logo from "$lib/components/shared/Logo.svelte";
    import Search from "$lib/components/shared/Search.svelte";

    let { children }: { children: Snippet } = $props();
</script>

<CartFlyAnimation />

<div
    class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark"
>
    <!-- Desktop Header -->
    <header
        class="sticky top-0 z-50 w-full bg-surface-light/95 dark:bg-surface-dark/95 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800 transition-colors duration-300"
    >
        <div
            class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between"
        >
            <div class="flex items-center gap-8">
                <div class="flex items-center gap-3">
                    <Logo className="h-10 w-10" />
                    <h1
                        class="text-2xl font-bold tracking-tight text-slate-900 dark:text-white"
                    >
                        ELORA Tech
                    </h1>
                </div>
                <nav class="hidden md:flex gap-6">
                    <a
                        href="/"
                        class="text-sm font-medium text-slate-900 dark:text-white hover:text-primary transition-colors"
                        >Home</a
                    >
                    <a
                        href="/catalog"
                        class="text-sm font-medium text-slate-500 hover:text-primary transition-colors"
                        >Projectors</a
                    >
                    <a
                        href="/accessories"
                        class="text-sm font-medium text-slate-500 hover:text-primary transition-colors"
                        >Accessories</a
                    >
                    <a
                        href="/about"
                        class="text-sm font-medium text-slate-500 hover:text-primary transition-colors"
                        >About Us</a
                    >
                </nav>
            </div>

            <div class="flex items-center gap-4">
                <Search />

                <button
                    class="relative text-slate-900 dark:text-white hover:text-primary transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                    <span class="material-symbols-outlined">favorite</span>
                </button>

                <a
                    href="/cart"
                    id="cart-icon"
                    class="relative text-slate-900 dark:text-white hover:text-primary transition-colors p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                    <span class="material-symbols-outlined">shopping_cart</span>
                    {#if $cartCount > 0}
                        <span
                            class="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white scale-in-center"
                            >{$cartCount}</span
                        >
                    {/if}
                </a>

                <div class="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>

                <button
                    class="text-sm font-bold text-slate-900 dark:text-white hover:text-primary transition-colors"
                    onclick={toggleLanguage}
                >
                    {$language.toUpperCase()}
                </button>

                <button
                    class="text-sm font-medium text-primary hover:text-blue-600"
                    >Login</button
                >
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
        {@render children()}
    </main>

    <!-- Desktop Footer -->
    <footer
        class="bg-surface-light dark:bg-surface-dark border-t border-slate-200 dark:border-slate-800 mt-auto"
    >
        <div class="max-w-7xl mx-auto px-4 py-12 grid grid-cols-4 gap-8">
            <div class="col-span-1">
                <h1
                    class="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
                >
                    ELORA Tech
                </h1>
                <p class="text-sm text-slate-500 mb-4">
                    Experience big screen magic at home with our award-winning
                    smart projectors.
                </p>
                <div class="flex gap-4">
                    <!-- Social Icons placeholders -->
                    <div
                        class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800"
                    ></div>
                    <div
                        class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800"
                    ></div>
                </div>
            </div>
            <div>
                <h4 class="font-bold text-slate-900 dark:text-white mb-4">
                    Shop
                </h4>
                <ul class="space-y-2 text-sm text-slate-500">
                    <li>
                        <a
                            href="/catalog?category=mini"
                            class="hover:text-primary">Mini Projectors</a
                        >
                    </li>
                    <li>
                        <a
                            href="/catalog?category=smart"
                            class="hover:text-primary">Smart Projectors</a
                        >
                    </li>
                    <li>
                        <a
                            href="/catalog?category=outdoor"
                            class="hover:text-primary">Outdoor</a
                        >
                    </li>
                    <li>
                        <a href="/accessories" class="hover:text-primary"
                            >Accessories</a
                        >
                    </li>
                </ul>
            </div>
            <div>
                <h4 class="font-bold text-slate-900 dark:text-white mb-4">
                    Company
                </h4>
                <ul class="space-y-2 text-sm text-slate-500">
                    <li>
                        <a href="/about" class="hover:text-primary">About Us</a>
                    </li>
                    <li>
                        <a href="/contact" class="hover:text-primary">Contact</a
                        >
                    </li>
                    <li><a href="/blog" class="hover:text-primary">Blog</a></li>
                </ul>
            </div>
            <div>
                <h4 class="font-bold text-slate-900 dark:text-white mb-4">
                    Contact
                </h4>
                <ul class="space-y-2 text-sm text-slate-500">
                    <li class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-[18px]"
                            >call</span
                        > 0759 360 423
                    </li>
                    <li class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-[18px]"
                            >location_on</span
                        > Superior Centre, Shop F20
                    </li>
                </ul>
            </div>
        </div>
        <div
            class="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-sm text-slate-500"
        >
            © 2026 ELORA Tech. All rights reserved.
        </div>
    </footer>
</div>
