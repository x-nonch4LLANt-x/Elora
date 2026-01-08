<script lang="ts">
    import { fade, slide } from "svelte/transition";
    import { toast } from "$lib/stores/toast";
    import FloatingLabelInput from "$lib/components/shared/FloatingLabelInput.svelte";

    let activeTab = "orders"; // 'orders' | 'profile'

    // Mock User Data
    let user = {
        name: "Allan Doe",
        email: "allan@example.com",
        phone: "+1 (555) 000-0000",
        address: "123 Tech Lane, Silicon Valley",
    };

    // Mock Orders
    let orders = [
        {
            id: "#ORD-7782",
            date: "Oct 24, 2025",
            status: "Delivered",
            total: "$2,499.00",
            items: ["Elora Vision Pro X"],
        },
        {
            id: "#ORD-7781",
            date: "Sep 12, 2025",
            status: "Processing",
            total: "$149.00",
            items: ["Smart Lens Kit"],
        },
        {
            id: "#ORD-7780",
            date: "Aug 05, 2025",
            status: "Cancelled",
            total: "$899.00",
            items: ["Elora Pad Air"],
        },
    ];

    function handleUpdateProfile(e: Event) {
        e.preventDefault();
        toast.add("Profile updated successfully!", "success");
    }
</script>

<div
    class="min-h-screen bg-background-light dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8"
>
    <div class="max-w-6xl mx-auto" in:fade>
        <div class="flex flex-col md:flex-row gap-8">
            <!-- Sidebar -->
            <div class="w-full md:w-64 space-y-4">
                <div class="glass p-6 rounded-2xl text-center">
                    <div
                        class="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center text-3xl font-bold text-primary mb-4"
                    >
                        {user.name.charAt(0)}
                    </div>
                    <h2 class="font-bold text-slate-900 dark:text-white">
                        {user.name}
                    </h2>
                    <p class="text-sm text-slate-500">{user.email}</p>
                </div>

                <nav class="glass rounded-xl overflow-hidden">
                    <button
                        class="w-full text-left px-6 py-4 flex items-center gap-3 transition-colors {activeTab ===
                        'orders'
                            ? 'bg-primary/10 text-primary border-l-4 border-primary'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}"
                        on:click={() => (activeTab = "orders")}
                    >
                        <span class="material-symbols-outlined">package_2</span>
                        Orders
                    </button>
                    <button
                        class="w-full text-left px-6 py-4 flex items-center gap-3 transition-colors {activeTab ===
                        'profile'
                            ? 'bg-primary/10 text-primary border-l-4 border-primary'
                            : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}"
                        on:click={() => (activeTab = "profile")}
                    >
                        <span class="material-symbols-outlined">person</span>
                        Profile
                    </button>
                    <button
                        class="w-full text-left px-6 py-4 flex items-center gap-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    >
                        <span class="material-symbols-outlined">logout</span>
                        Logout
                    </button>
                </nav>
            </div>

            <!-- Content -->
            <div class="flex-1">
                {#if activeTab === "orders"}
                    <div in:fade={{ duration: 300 }} class="space-y-6">
                        <h2
                            class="text-2xl font-bold text-slate-900 dark:text-white mb-6"
                        >
                            Order History
                        </h2>
                        {#each orders as order}
                            <div
                                class="glass-card p-6 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                            >
                                <div>
                                    <div class="flex items-center gap-3 mb-2">
                                        <h3
                                            class="font-bold text-slate-900 dark:text-white"
                                        >
                                            {order.id}
                                        </h3>
                                        <span
                                            class="px-2 py-1 text-xs rounded-full
                                            {order.status === 'Delivered'
                                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                : order.status === 'Processing'
                                                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                                  : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}"
                                        >
                                            {order.status}
                                        </span>
                                    </div>
                                    <p class="text-sm text-slate-500">
                                        {order.date}
                                    </p>
                                    <p
                                        class="text-sm font-medium text-slate-900 dark:text-white mt-1"
                                    >
                                        {order.items.join(", ")}
                                    </p>
                                </div>
                                <div class="text-right">
                                    <p class="font-bold text-lg text-primary">
                                        {order.total}
                                    </p>
                                    <button
                                        class="text-sm text-slate-500 hover:text-primary transition-colors mt-2"
                                        >View Details</button
                                    >
                                </div>
                            </div>
                        {/each}
                    </div>
                {:else if activeTab === "profile"}
                    <div
                        in:fade={{ duration: 300 }}
                        class="glass p-8 rounded-2xl"
                    >
                        <h2
                            class="text-2xl font-bold text-slate-900 dark:text-white mb-6"
                        >
                            Profile Settings
                        </h2>
                        <form on:submit={handleUpdateProfile} class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FloatingLabelInput
                                    label="Full Name"
                                    bind:value={user.name}
                                />
                                <FloatingLabelInput
                                    label="Email Address"
                                    type="email"
                                    bind:value={user.email}
                                />
                            </div>
                            <FloatingLabelInput
                                label="Phone Number"
                                type="tel"
                                bind:value={user.phone}
                            />
                            <FloatingLabelInput
                                label="Shipping Address"
                                bind:value={user.address}
                            />

                            <div class="pt-4">
                                <button
                                    class="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>
