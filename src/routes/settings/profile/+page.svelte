<script lang="ts">
    import { fade } from "svelte/transition";
    import FloatingLabelInput from "$lib/components/shared/FloatingLabelInput.svelte";
    import { toast } from "$lib/stores/toast";

    let userData = $state({
        name: "Elora Tech",
        email: "allan.doe@eloratech.com",
        phone: "+254 759 360 423",
        address: "Superior House, First Floor, Shop F20, Nairobi",
        bio: "",
    });

    let isSaving = $state(false);

    function handleSave(e: Event) {
        e.preventDefault();

        if (!userData.name || !userData.email || !userData.phone) {
            toast.add("Please fill in all required fields", "error");
            return;
        }

        isSaving = true;
        toast.add("Saving changes...", "info");

        // Simulate API call
        setTimeout(() => {
            isSaving = false;
            toast.add("Profile updated successfully!", "success");
        }, 1500);
    }
</script>

<svelte:head>
    <title>Profile Details | Elora Tech</title>
</svelte:head>

<div
    class="min-h-screen bg-background-light dark:bg-background-dark pb-24"
    in:fade
>
    <!-- Header -->
    <div
        class="sticky top-0 z-40 bg-white/95 dark:bg-surface-dark/95 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800 px-4 py-3 flex items-center gap-3"
    >
        <a
            href="/settings"
            class="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white active:scale-90 transition-all"
        >
            <span class="material-symbols-outlined text-[20px]">arrow_back</span
            >
        </a>
        <h1 class="text-xl font-bold text-slate-900 dark:text-white">
            Profile Details
        </h1>
    </div>

    <div class="p-4 max-w-2xl mx-auto space-y-6">
        <!-- Profile Picture Section -->
        <div
            class="bg-white dark:bg-surface-dark rounded-2xl border border-slate-100 dark:border-slate-800 p-6"
        >
            <div class="flex flex-col items-center gap-4">
                <div
                    class="w-32 h-32 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl"
                >
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU2DYwp5YFA7yBXyWGZlrWehmFEzVn8-3izSaANqc--HquHgTpSBaXTxS4JzAfO5uBj85ENMS64siSSMsp1orgF40S_xqJYXYvTB1SgUXEaeEKb2ctTGtWgtSHN0b-aICLaFa71oV28SHL6Tsp8eFaPm17Po09QtDQxw4tjQEy8mHNBuNcZeRLy111UtQ7SRGxxYio_ogQLNk6Fy3qL3x7WhSXhXrsUP_Ap-0SUJVf_jYfkKa5nhZPCicdD9o2Y6ikPLY-Q5wxlGc"
                        alt="Profile"
                        class="w-full h-full object-cover"
                    />
                </div>
                <button
                    class="text-sm text-primary font-bold hover:underline flex items-center gap-1"
                >
                    <span class="material-symbols-outlined text-[18px]"
                        >photo_camera</span
                    >
                    Change Photo
                </button>
            </div>
        </div>

        <!-- Profile Form -->
        <form
            onsubmit={handleSave}
            class="bg-white dark:bg-surface-dark rounded-2xl border border-slate-100 dark:border-slate-800 p-6 space-y-6"
        >
            <h2 class="font-bold text-lg text-slate-900 dark:text-white">
                Personal Information
            </h2>

            <div class="space-y-5">
                <FloatingLabelInput
                    label="Full Name"
                    bind:value={userData.name}
                    required
                />

                <FloatingLabelInput
                    label="Email Address"
                    type="email"
                    bind:value={userData.email}
                    required
                />

                <FloatingLabelInput
                    label="Phone Number"
                    type="tel"
                    bind:value={userData.phone}
                    required
                />

                <FloatingLabelInput
                    label="Shipping Address"
                    bind:value={userData.address}
                />

                <!-- Bio Textarea -->
                <div class="relative pt-2">
                    <div class="relative">
                        <textarea
                            bind:value={userData.bio}
                            rows="4"
                            class="peer w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-white outline-none transition-all placeholder-transparent border-slate-300 dark:border-slate-600 focus:border-primary focus:ring-2 focus:ring-primary/20"
                            placeholder="Bio"
                            id="bio"
                        ></textarea>
                        <label
                            for="bio"
                            class="absolute left-4 transition-all duration-200 pointer-events-none
                            {userData.bio
                                ? '-top-2.5 text-xs bg-white dark:bg-slate-900 px-1 text-primary'
                                : 'top-3.5 text-base text-slate-500 dark:text-slate-400'}"
                        >
                            Bio (Optional)
                        </label>
                    </div>
                    <p class="text-xs text-slate-500 mt-2">
                        Tell us a bit about yourself
                    </p>
                </div>
            </div>

            <!-- Actions -->
            <div class="flex gap-3 pt-4">
                <button
                    type="submit"
                    disabled={isSaving}
                    class="flex-1 px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {#if isSaving}
                        <div
                            class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                        ></div>
                        Saving...
                    {:else}
                        <span class="material-symbols-outlined text-[20px]"
                            >save</span
                        >
                        Save Changes
                    {/if}
                </button>
            </div>
        </form>

        <!-- Danger Zone -->
        <div
            class="bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-200 dark:border-red-800 p-6"
        >
            <h2 class="font-bold text-lg text-red-600 dark:text-red-400 mb-2">
                Danger Zone
            </h2>
            <p class="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Once you delete your account, there is no going back. Please be
                certain.
            </p>
            <button
                class="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all active:scale-95"
            >
                Delete Account
            </button>
        </div>
    </div>
</div>
