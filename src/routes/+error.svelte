<script lang="ts">
    import { page } from "$app/stores";
    import Logo from "$lib/components/shared/Logo.svelte";
    import { fade } from "svelte/transition";

    const errorMessages: Record<number, { title: string; message: string }> = {
        404: {
            title: "Page Not Found",
            message:
                "Oops! The page you're looking for doesn't exist. It might have been moved or deleted.",
        },
        500: {
            title: "Server Error",
            message:
                "Something went wrong on our end. We're working to fix it. Please try again later.",
        },
        403: {
            title: "Access Denied",
            message: "You don't have permission to access this page.",
        },
    };

    const status = $derived($page.status);
    const error = $derived(
        errorMessages[status] || {
            title: "Something Went Wrong",
            message: "An unexpected error occurred. Please try again.",
        },
    );
</script>

<svelte:head>
    <title>{error.title} | Elora Tech</title>
</svelte:head>

<div
    class="min-h-screen bg-background-light dark:bg-background-dark flex items-center justify-center px-4"
    in:fade
>
    <div class="max-w-2xl w-full">
        <!-- Glass Card -->
        <div
            class="glass p-8 sm:p-12 rounded-3xl text-center space-y-8 border border-slate-200 dark:border-slate-800"
        >
            <!-- Logo and Brand -->
            <div class="flex flex-col items-center gap-4">
                <Logo className="h-16 w-16" />
                <h2 class="text-2xl font-bold text-slate-900 dark:text-white">
                    ELORA Tech
                </h2>
            </div>

            <!-- Error Status -->
            <div class="space-y-2">
                <div
                    class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 mb-4"
                >
                    <span
                        class="material-symbols-outlined text-red-600 dark:text-red-400 text-[48px]"
                        >{status === 404 ? "search_off" : "error"}</span
                    >
                </div>
                <h1
                    class="text-6xl sm:text-7xl font-bold text-slate-900 dark:text-white"
                >
                    {status}
                </h1>
                <h2
                    class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white"
                >
                    {error.title}
                </h2>
            </div>

            <!-- Error Message -->
            <p
                class="text-lg text-slate-600 dark:text-slate-400 max-w-md mx-auto"
            >
                {error.message}
            </p>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                    href="/"
                    class="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95"
                >
                    <span class="material-symbols-outlined text-[20px]"
                        >home</span
                    >
                    Back to Home
                </a>
                <a
                    href="/catalog"
                    class="inline-flex items-center justify-center gap-2 px-8 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95"
                >
                    <span class="material-symbols-outlined text-[20px]"
                        >shopping_bag</span
                    >
                    View Catalog
                </a>
            </div>

            <!-- Helpful Links -->
            {#if status === 404}
                <div
                    class="pt-8 border-t border-slate-200 dark:border-slate-700"
                >
                    <p class="text-sm text-slate-500 mb-4">
                        Looking for something specific?
                    </p>
                    <div class="flex flex-wrap justify-center gap-3">
                        {#each [{ label: "Projectors", href: "/catalog" }, { label: "Accessories", href: "/accessories" }, { label: "About Us", href: "/about" }, { label: "Contact", href: "/contact" }] as link}
                            <a
                                href={link.href}
                                class="text-sm text-primary hover:underline font-medium"
                            >
                                {link.label}
                            </a>
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>
