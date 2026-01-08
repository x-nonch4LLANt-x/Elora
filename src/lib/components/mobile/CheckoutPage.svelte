<script lang="ts">
    import { cart, cartTotal } from "$lib/stores/cart";
    import { fade, slide } from "svelte/transition";
    import { goto } from "$app/navigation";
    import FloatingLabelInput from "$lib/components/shared/FloatingLabelInput.svelte";
    import MapPicker from "$lib/components/shared/MapPicker.svelte";
    import { toast } from "$lib/stores/toast";

    let step = $state<"shipping" | "payment" | "confirmation">("shipping");

    // Shipping State
    let shippingInfo = {
        name: "",
        email: "",
        road: "",
        house: "",
        apt: "",
        landmark: "",
        phone: "",
        lat: -1.286389,
        lng: 36.817223,
        address: "",
    };

    // Payment State
    let paymentMethod = $state<"mpesa" | "cod">("mpesa");
    let mpesaPhone = $state("");
    let isProcessing = $state(false);
    let orderId = $state("");
    let deliveryFee = $state(860);

    function formatMoney(amount: number) {
        return new Intl.NumberFormat("en-KE", {
            style: "currency",
            currency: "KES",
        }).format(amount);
    }

    function handleLocationSelect(lat: number, lng: number, address: string) {
        shippingInfo.lat = lat;
        shippingInfo.lng = lng;
        shippingInfo.address = address;

        // Simple distance-based delivery fee (simulated)
        const defaultLat = -1.286389;
        const defaultLng = 36.817223;
        const distance = Math.sqrt(
            Math.pow(lat - defaultLat, 2) + Math.pow(lng - defaultLng, 2),
        );
        deliveryFee = Math.round(500 + distance * 1000);
    }

    function handleShippingSubmit(e: Event) {
        e.preventDefault();
        if (
            shippingInfo.name &&
            shippingInfo.email &&
            shippingInfo.road &&
            shippingInfo.phone
        ) {
            step = "payment";
            mpesaPhone = shippingInfo.phone;
            toast.add("Shipping details saved", "success");
        } else {
            toast.add("Please fill in all required fields", "error");
        }
    }

    function handlePaymentSubmit() {
        isProcessing = true;
        toast.add("Processing payment...", "info");
        setTimeout(() => {
            isProcessing = false;
            orderId = "ORD-" + Math.floor(Math.random() * 100000);
            step = "confirmation";
            cart.set([]);
            toast.add("Order placed successfully!", "success");
        }, 2000);
    }
</script>

<div
    class="flex flex-col min-h-screen bg-background-light dark:bg-background-dark pb-24"
>
    <!-- Header -->
    <div
        class="sticky top-16 z-40 bg-white dark:bg-surface-dark border-b border-slate-100 dark:border-slate-800 px-4 py-4"
    >
        <h1 class="text-xl font-bold text-slate-900 dark:text-white">
            Checkout
        </h1>
    </div>

    {#if step === "shipping"}
        <div class="flex flex-col gap-6 p-4" in:fade>
            <!-- Map -->
            <div
                class="w-full h-64 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700"
            >
                <MapPicker
                    initialLocation={{
                        lat: shippingInfo.lat,
                        lng: shippingInfo.lng,
                    }}
                    onLocationSelect={handleLocationSelect}
                />
            </div>

            <div
                class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 flex items-start gap-2"
            >
                <span
                    class="material-symbols-outlined text-blue-600 dark:text-blue-400 text-[20px]"
                    >info</span
                >
                <p
                    class="text-xs text-blue-700 dark:text-blue-300 leading-relaxed"
                >
                    Distance fee applied. The further the location, the higher
                    the delivery cost.
                </p>
            </div>

            <!-- Delivery Location Form -->
            <form onsubmit={handleShippingSubmit} class="space-y-4">
                <h2 class="font-bold text-lg text-slate-900 dark:text-white">
                    Delivery Location
                </h2>

                <FloatingLabelInput
                    label="Place Name"
                    bind:value={shippingInfo.name}
                    placeholder="e.g. Westlands Center"
                    required
                />

                <FloatingLabelInput
                    label="Road / Street"
                    bind:value={shippingInfo.road}
                    placeholder="e.g. Waiyaki Way"
                    required
                />

                <div class="grid grid-cols-2 gap-3">
                    <FloatingLabelInput
                        label="House / Building"
                        bind:value={shippingInfo.house}
                        placeholder="No. 4B"
                    />
                    <FloatingLabelInput
                        label="Apartment Unit"
                        bind:value={shippingInfo.apt}
                        placeholder="Flr 2"
                    />
                </div>

                <FloatingLabelInput
                    label="Landmark (Optional)"
                    bind:value={shippingInfo.landmark}
                    placeholder="e.g. Near the Shell Station"
                />

                <FloatingLabelInput
                    label="Email Address"
                    type="email"
                    bind:value={shippingInfo.email}
                    required
                />

                <FloatingLabelInput
                    label="Phone Number"
                    type="tel"
                    bind:value={shippingInfo.phone}
                    placeholder="+254 712 345 678"
                    required
                />

                <button
                    type="submit"
                    class="w-full mt-6 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95"
                >
                    Continue to Payment
                </button>
            </form>
        </div>
    {:else if step === "payment"}
        <div class="flex flex-col gap-6 p-4" in:fade>
            <h2 class="font-bold text-lg text-slate-900 dark:text-white">
                Payment Method
            </h2>

            <!-- Payment Methods -->
            <div class="space-y-3">
                <label
                    class="flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all {paymentMethod ===
                    'mpesa'
                        ? 'border-primary bg-primary/5 dark:bg-primary/10'
                        : 'border-slate-200 dark:border-slate-700'}"
                >
                    <input
                        type="radio"
                        name="payment"
                        value="mpesa"
                        bind:group={paymentMethod}
                        class="w-5 h-5 text-primary focus:ring-primary"
                    />
                    <div class="flex-1 flex items-center justify-between">
                        <div>
                            <div
                                class="font-bold text-slate-900 dark:text-white"
                            >
                                M-Pesa
                            </div>
                            <div class="text-xs text-slate-500">
                                Pay via mobile money
                            </div>
                        </div>
                        <div
                            class="w-12 h-8 bg-green-600 rounded flex items-center justify-center text-white font-bold text-xs"
                        >
                            M
                        </div>
                    </div>
                </label>

                <label
                    class="flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all {paymentMethod ===
                    'cod'
                        ? 'border-primary bg-primary/5 dark:bg-primary/10'
                        : 'border-slate-200 dark:border-slate-700'}"
                >
                    <input
                        type="radio"
                        name="payment"
                        value="cod"
                        bind:group={paymentMethod}
                        class="w-5 h-5 text-primary focus:ring-primary"
                    />
                    <div class="flex-1">
                        <div class="font-bold text-slate-900 dark:text-white">
                            Cash at Pick-up Point
                        </div>
                        <div class="text-xs text-slate-500">
                            Pay on delivery
                        </div>
                    </div>
                </label>
            </div>

            {#if paymentMethod === "mpesa"}
                <div
                    class="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700"
                    in:slide
                >
                    <FloatingLabelInput
                        label="M-PESA PHONE NUMBER"
                        type="tel"
                        bind:value={mpesaPhone}
                        placeholder="+254 712 345 678"
                    />
                </div>
            {/if}

            <!-- Price Summary -->
            <div
                class="bg-white dark:bg-surface-dark p-4 rounded-xl border border-slate-100 dark:border-slate-800 space-y-3"
            >
                <div class="flex justify-between text-sm">
                    <span class="text-slate-600 dark:text-slate-400"
                        >Subtotal</span
                    >
                    <span class="font-medium text-slate-900 dark:text-white"
                        >{formatMoney($cartTotal)}</span
                    >
                </div>
                <div class="flex justify-between text-sm">
                    <span class="text-slate-600 dark:text-slate-400"
                        >Delivery Fee (Est.)</span
                    >
                    <span class="font-medium text-slate-900 dark:text-white"
                        >{formatMoney(deliveryFee)}</span
                    >
                </div>
                <div
                    class="border-t border-slate-200 dark:border-slate-700 pt-3"
                >
                    <div class="flex justify-between">
                        <span
                            class="font-bold text-lg text-slate-900 dark:text-white"
                            >TOTAL AMOUNT</span
                        >
                        <span class="font-bold text-xl text-primary"
                            >{formatMoney($cartTotal + deliveryFee)}</span
                        >
                    </div>
                </div>
            </div>

            <div class="flex gap-3 mt-4">
                <button
                    onclick={() => (step = "shipping")}
                    class="px-6 py-4 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-all active:scale-95"
                >
                    Back
                </button>
                <button
                    onclick={handlePaymentSubmit}
                    disabled={isProcessing}
                    class="flex-1 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {#if isProcessing}
                        <div
                            class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                        ></div>
                        Processing...
                    {:else}
                        <span>Place Order</span>
                        <span class="material-symbols-outlined text-[20px]"
                            >arrow_forward</span
                        >
                    {/if}
                </button>
            </div>
        </div>
    {:else if step === "confirmation"}
        <div
            class="flex flex-col items-center justify-center p-8 text-center"
            in:fade
        >
            <div
                class="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6"
            >
                <span
                    class="material-symbols-outlined text-green-600 dark:text-green-400 text-[48px]"
                    >check_circle</span
                >
            </div>
            <h1 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Order Confirmed!
            </h1>
            <p class="text-slate-500 mb-6">Order ID: {orderId}</p>
            <a
                href="/"
                class="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all"
                >Continue Shopping</a
            >
        </div>
    {/if}
</div>
