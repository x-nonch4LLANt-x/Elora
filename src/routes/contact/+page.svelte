<script lang="ts">
    import { fade } from "svelte/transition";
    import FloatingLabelInput from "$lib/components/shared/FloatingLabelInput.svelte";
    import Map from "$lib/components/shared/Map.svelte";
    import { toast } from "$lib/stores/toast";

    let formData = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };

    let isSubmitting = false;

    function handleSubmit(e: Event) {
        e.preventDefault();

        if (
            formData.name &&
            formData.email &&
            formData.subject &&
            formData.message
        ) {
            isSubmitting = true;
            toast.add("Sending message...", "info");

            // Simulate API call
            setTimeout(() => {
                isSubmitting = false;
                toast.add("Message sent successfully!", "success");
                formData = { name: "", email: "", subject: "", message: "" };
            }, 1500);
        } else {
            toast.add("Please fill in all fields", "error");
        }
    }
</script>

<div
    class="min-h-screen bg-background-light dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8"
>
    <div in:fade class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Contact Form -->
            <div class="glass p-8 rounded-2xl">
                <div class="text-center mb-8">
                    <h1
                        class="text-3xl font-bold text-slate-900 dark:text-white mb-2"
                    >
                        Get in Touch
                    </h1>
                    <p class="text-slate-500">
                        We'd love to hear from you. Fill out the form below.
                    </p>
                </div>

                <form onsubmit={handleSubmit} class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <FloatingLabelInput
                                label="Your Name"
                                bind:value={formData.name}
                                required
                            />
                        </div>
                        <div class="space-y-2">
                            <FloatingLabelInput
                                label="Email Address"
                                type="email"
                                bind:value={formData.email}
                                required
                            />
                        </div>
                    </div>

                    <div class="space-y-2">
                        <FloatingLabelInput
                            label="Subject"
                            bind:value={formData.subject}
                            required
                        />
                    </div>

                    <div class="space-y-2">
                        <div class="relative pt-2">
                            <div class="relative">
                                <textarea
                                    bind:value={formData.message}
                                    required
                                    rows="5"
                                    class="peer w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-white outline-none transition-all placeholder-transparent border-slate-300 dark:border-slate-600 focus:border-primary focus:ring-2 focus:ring-primary/20"
                                    placeholder="Your Message"
                                    id="message"
                                ></textarea>
                                <label
                                    for="message"
                                    class="absolute left-4 transition-all duration-200 pointer-events-none
                            {formData.message
                                        ? '-top-2.5 text-xs bg-white dark:bg-slate-900 px-1 text-primary'
                                        : 'top-3.5 text-base text-slate-500 dark:text-slate-400'}"
                                >
                                    Your Message <span
                                        class="text-red-500 ml-0.5">*</span
                                    >
                                </label>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        class="w-full py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {#if isSubmitting}
                            <span
                                class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                            ></span>
                            Sending...
                        {:else}
                            Send Message
                        {/if}
                    </button>
                </form>
            </div>

            <!-- Map & Info -->
            <div class="space-y-8">
                <!-- Advanced Map Card -->
                <div
                    class="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800"
                >
                    <!-- Map Component (Simulating Google Terrain) -->
                    <Map />

                    <!-- Overlay Location Card -->
                    <div
                        class="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-start gap-4"
                    >
                        <div
                            class="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center shrink-0"
                        >
                            <span class="material-symbols-outlined text-[24px]"
                                >storefront</span
                            >
                        </div>
                        <div>
                            <h3
                                class="font-bold text-slate-900 dark:text-white"
                            >
                                Elora Tech
                            </h3>
                            <p
                                class="text-sm text-slate-600 dark:text-slate-400 mt-1"
                            >
                                Superior House, First Floor<br />
                                Shop F20, Nairobi
                            </p>
                            <a
                                href="https://maps.app.goo.gl/r4yuR87uF8oeobGy9"
                                target="_blank"
                                class="inline-flex items-center gap-1 text-primary text-xs font-bold mt-2 hover:underline"
                            >
                                <span>Open in Google Maps</span>
                                <span
                                    class="material-symbols-outlined text-[14px]"
                                    >open_in_new</span
                                >
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Contact Details Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <!-- Phone -->
                    <a
                        href="tel:0759360423"
                        class="glass-card p-6 rounded-xl hover:scale-[1.02] transition-transform group"
                    >
                        <div
                            class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center mb-4 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors"
                        >
                            <span class="material-symbols-outlined text-3xl"
                                >call</span
                            >
                        </div>
                        <h3
                            class="font-bold text-lg mb-1 text-slate-900 dark:text-white"
                        >
                            Phone
                        </h3>
                        <p class="text-sm text-slate-500 font-mono">
                            0759360423
                        </p>
                    </a>

                    <!-- WhatsApp -->
                    <a
                        href="https://wa.me/254759360423"
                        target="_blank"
                        class="glass-card p-6 rounded-xl hover:scale-[1.02] transition-transform group"
                    >
                        <div
                            class="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors"
                        >
                            <i class="fa-brands fa-whatsapp text-3xl"></i>
                            <!-- Assuming fontawesome or similar, actually sticking to symbols for now unless custom icon needed. Using chat bubble symbol as fallback/standard -->
                            <span class="material-symbols-outlined text-3xl"
                                >chat</span
                            >
                        </div>
                        <h3
                            class="font-bold text-lg mb-1 text-slate-900 dark:text-white"
                        >
                            WhatsApp
                        </h3>
                        <p class="text-sm text-slate-500 font-mono">
                            0759360423
                        </p>
                    </a>

                    <!-- TikTok -->
                    <a
                        href="https://www.tiktok.com/@eloratechke"
                        target="_blank"
                        class="glass-card p-6 rounded-xl hover:scale-[1.02] transition-transform group sm:col-span-2 flex items-center gap-6"
                    >
                        <div
                            class="w-12 h-12 rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white flex items-center justify-center group-hover:bg-black/10 dark:group-hover:bg-white/20 transition-colors"
                        >
                            <span class="material-symbols-outlined text-3xl"
                                >music_note</span
                            >
                        </div>
                        <div>
                            <h3
                                class="font-bold text-lg text-slate-900 dark:text-white"
                            >
                                TikTok
                            </h3>
                            <p class="text-sm text-slate-500">@eloratechke</p>
                            <p class="text-xs text-primary mt-1">
                                Follow for latest updates & demos
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
