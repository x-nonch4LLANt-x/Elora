<script lang="ts">
    import { theme, toggleTheme } from "$lib/stores/theme";
    import { language, toggleLanguage, t } from "$lib/stores/i18n";
    import { fade } from "svelte/transition";

    let notificationsEnabled = $state(true);
    let locationEnabled = $state(false);
</script>

<div class="min-h-screen bg-background-light dark:bg-background-dark pb-24">
    <!-- Header -->
    <div
        class="sticky top-0 z-40 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800 px-4 py-3 flex items-center gap-3"
    >
        <a
            href="/"
            class="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white active:scale-90 transition-all"
        >
            <span class="material-symbols-outlined text-[20px]">arrow_back</span
            >
        </a>
        <h1 class="text-xl font-bold text-slate-900 dark:text-white">
            Settings
        </h1>
    </div>

    <div class="p-4 space-y-6 max-w-2xl mx-auto" in:fade>
        <!-- Profile Header -->
        <div class="flex flex-col items-center justify-center py-6">
            <div
                class="w-24 h-24 rounded-full bg-slate-100 dark:bg-slate-800 mb-4 overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl"
            >
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU2DYwp5YFA7yBXyWGZlrWehmFEzVn8-3izSaANqc--HquHgTpSBaXTxS4JzAfO5uBj85ENMS64siSSMsp1orgF40S_xqJYXYvTB1SgUXEaeEKb2ctTGtWgtSHN0b-aICLaFa71oV28SHL6Tsp8eFaPm17Po09QtDQxw4tjQEy8mHNBuNcZeRLy111UtQ7SRGxxYio_ogQLNk6Fy3qL3x7WhSXhXrsUP_Ap-0SUJVf_jYfkKa5nhZPCicdD9o2Y6ikPLY-Q5wxlGc"
                    alt="Profile"
                    class="w-full h-full object-cover"
                />
            </div>
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">
                Elora Tech
            </h2>
            <p class="text-sm text-slate-500">allan.doe@eloratech.com</p>
        </div>

        <!-- Account Section -->
        <section
            class="bg-white dark:bg-surface-dark rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden"
        >
            <div
                class="px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50"
            >
                <h2 class="font-bold text-slate-900 dark:text-white">
                    Account
                </h2>
            </div>
            <div class="divide-y divide-slate-100 dark:divide-slate-800">
                <a
                    href="/settings/profile"
                    class="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                    <div class="flex items-center gap-3">
                        <div
                            class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center"
                        >
                            <span class="material-symbols-outlined">person</span
                            >
                        </div>
                        <div class="font-medium text-slate-900 dark:text-white">
                            Profile Details
                        </div>
                    </div>
                    <span class="material-symbols-outlined text-slate-400"
                        >chevron_right</span
                    >
                </a>
                <a
                    href="/settings/orders"
                    class="flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                    <div class="flex items-center gap-3">
                        <div
                            class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center"
                        >
                            <span class="material-symbols-outlined"
                                >shopping_bag</span
                            >
                        </div>
                        <div class="font-medium text-slate-900 dark:text-white">
                            My Orders
                        </div>
                    </div>
                    <span class="material-symbols-outlined text-slate-400"
                        >chevron_right</span
                    >
                </a>
            </div>
        </section>

        <!-- Appearance Section -->
        <section
            class="bg-white dark:bg-surface-dark rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden"
        >
            <div
                class="px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50"
            >
                <h2 class="font-bold text-slate-900 dark:text-white">
                    App Settings
                </h2>
            </div>

            <div class="divide-y divide-slate-100 dark:divide-slate-800">
                <!-- Theme Toggle -->
                <button
                    onclick={toggleTheme}
                    class="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                    <div class="flex items-center gap-3">
                        <div
                            class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center"
                        >
                            <span class="material-symbols-outlined">
                                {$theme === "dark" ? "dark_mode" : "light_mode"}
                            </span>
                        </div>
                        <div class="text-left">
                            <div
                                class="font-medium text-slate-900 dark:text-white"
                            >
                                Theme
                            </div>
                            <div class="text-xs text-slate-500">
                                {$theme === "dark" ? "Dark Mode" : "Light Mode"}
                            </div>
                        </div>
                    </div>
                    <div
                        class="relative w-12 h-7 bg-slate-200 dark:bg-slate-700 rounded-full transition-colors duration-300"
                    >
                        <div
                            class="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300"
                            class:translate-x-5={$theme === "dark"}
                        ></div>
                    </div>
                </button>

                <!-- Language Toggle -->
                <button
                    onclick={toggleLanguage}
                    class="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                >
                    <div class="flex items-center gap-3">
                        <div
                            class="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center"
                        >
                            <span class="material-symbols-outlined"
                                >translate</span
                            >
                        </div>
                        <div class="text-left">
                            <div
                                class="font-medium text-slate-900 dark:text-white"
                            >
                                Language
                            </div>
                            <div class="text-xs text-slate-500">
                                {$language === "en" ? "English" : "Kiswahili"}
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-sm font-bold text-primary"
                            >{$language.toUpperCase()}</span
                        >
                        <span class="material-symbols-outlined text-slate-400"
                            >chevron_right</span
                        >
                    </div>
                </button>
            </div>
        </section>

        <!-- Preferences Section -->
        <section
            class="bg-white dark:bg-surface-dark rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden"
        >
            <div
                class="px-6 py-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50"
            >
                <h2 class="font-bold text-slate-900 dark:text-white">
                    Preferences
                </h2>
            </div>

            <div class="divide-y divide-slate-100 dark:divide-slate-800">
                <!-- Notifications -->
                <div class="flex items-center justify-between p-4">
                    <div class="flex items-center gap-3">
                        <div
                            class="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center"
                        >
                            <span class="material-symbols-outlined"
                                >notifications</span
                            >
                        </div>
                        <div>
                            <div
                                class="font-medium text-slate-900 dark:text-white"
                            >
                                Notifications
                            </div>
                            <div class="text-xs text-slate-500">
                                Order updates & offers
                            </div>
                        </div>
                    </div>
                    <button
                        onclick={() =>
                            (notificationsEnabled = !notificationsEnabled)}
                        aria-label="Toggle notifications"
                        class="relative w-12 h-7 rounded-full transition-colors duration-300 {notificationsEnabled
                            ? 'bg-primary'
                            : 'bg-slate-200 dark:bg-slate-700'}"
                    >
                        <div
                            class="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300"
                            class:translate-x-5={notificationsEnabled}
                        ></div>
                    </button>
                </div>

                <!-- Location -->
                <div class="flex items-center justify-between p-4">
                    <div class="flex items-center gap-3">
                        <div
                            class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center"
                        >
                            <span class="material-symbols-outlined"
                                >location_on</span
                            >
                        </div>
                        <div>
                            <div
                                class="font-medium text-slate-900 dark:text-white"
                            >
                                Location
                            </div>
                            <div class="text-xs text-slate-500">
                                For better delivery estimates
                            </div>
                        </div>
                    </div>
                    <button
                        onclick={() => (locationEnabled = !locationEnabled)}
                        aria-label="Toggle location"
                        class="relative w-12 h-7 rounded-full transition-colors duration-300 {locationEnabled
                            ? 'bg-primary'
                            : 'bg-slate-200 dark:bg-slate-700'}"
                    >
                        <div
                            class="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300"
                            class:translate-x-5={locationEnabled}
                        ></div>
                    </button>
                </div>
            </div>
        </section>

        <!-- About App -->
        <section
            class="bg-white dark:bg-surface-dark rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden"
        >
            <div
                class="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
            >
                <div class="flex items-center gap-3">
                    <div
                        class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center"
                    >
                        <span class="material-symbols-outlined">info</span>
                    </div>
                    <div>
                        <div class="font-medium text-slate-900 dark:text-white">
                            Version
                        </div>
                        <div class="text-xs text-slate-500">
                            1.0.0 (Build 2026.1)
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
