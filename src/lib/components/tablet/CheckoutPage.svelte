<script lang="ts">
    import { cart, cartTotal } from "$lib/stores/cart";
    import { fade, slide } from "svelte/transition";
    import { goto } from "$app/navigation";
    import FloatingLabelInput from "$lib/components/shared/FloatingLabelInput.svelte";
    import MapPicker from "$lib/components/shared/MapPicker.svelte";
    import { toast } from "$lib/stores/toast";

    let step: "shipping" | "payment" | "confirmation" = "shipping";

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

    let paymentMethod: "mpesa" | "card" | "cod" = "mpesa";
    let mpesaPhone = "";
    let cardInfo = { number: "", expiry: "", cvv: "" };
    let isProcessing = $state(false);
    let orderId = "";
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

<div class="min-h-screen bg-background-light dark:bg-background-dark py-12 px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
        {#if step === "confirmation"}
            <div class="max-w-2xl mx-auto text-center py-16 bg-white dark:bg-surface-dark rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-12" in:fade>
                <div
                    class="w-24 h-24 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6 mx-auto"
                >
                    <span class="material-symbols-outlined text-green-600 dark:text-green-400 text-[64px]"
                        >check_circle</span
                    >
                </div>
                <h1 class="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Order Confirmed!
                </h1>
                <p class="text-slate-500 mb-8 text-lg">Order ID: {orderId}</p>
                <a
                    href="/"
                    class="inline-block py-4 px-8 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all"
                    >Continue Shopping</a
                >
            </div>
        {:else}
            <!-- Progress Steps -->
            <div class="mb-12">
                <div class="flex items-center justify-center max-w-2xl mx-auto relative">
                    <div
                        class="absolute left-0 top-1/2 w-full h-1 bg-slate-200 dark:bg-slate-700 -z-10"
                    ></div>
                    {#each ["shipping", "payment"] as s, i}
                        {@const isActive =
                            step === s || (step === "payment" && i === 0)}
                        <div
                            class="flex flex-col items-center bg-background-light dark:bg-background-dark px-4 flex-1"
                        >
                            <div
                                class="w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-colors duration-300 {isActive
                                    ? 'border-primary bg-primary text-white'
                                    : 'border-slate-300 text-slate-500 dark:border-slate-600 bg-white dark:bg-surface-dark'}"
                            >
                                {i + 1}
                            </div>
                            <span
                                class="mt-2 text-sm font-medium uppercase {isActive
                                    ? 'text-primary'
                                    : 'text-slate-500 dark:text-slate-400'}"
                                >{s}</span
                            >
                        </div>
                    {/each}
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Main Content -->
                <div class="lg:col-span-2">
                    {#if step === "shipping"}
                        <div class="space-y-6" in:fade>
                            <!-- Map -->
                            <div
                                class="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
                            >
                                <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-4">
                                    Choose Delivery Location
                                </h2>
                                <div class="h-[400px] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
                                    <MapPicker
                                        initialLocation={{
                                            lat: shippingInfo.lat,
                                            lng: shippingInfo.lng,
                                        }}
                                        onLocationSelect={handleLocationSelect}
                                    />
                                </div>
                                <div
                                    class="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 flex items-start gap-2"
                                >
                                    <span
                                        class="material-symbols-outlined text-blue-600 dark:text-blue-400 text-[20px]"
                                        >info</span
                                    >
                                    <p class="text-sm text-blue-700 dark:text-blue-300">
                                        Delivery fee is calculated based on distance from our
                                        warehouse in Nairobi.
                                    </p>
                                </div>
                            </div>

                            <!-- Form -->
                            <div
                                class="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
                            >
                                <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-6">
                                    Delivery Details
                                </h2>
                                <form on: submit={handleShippingSubmit} class="space-y-5">
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

                                    <div class="grid grid-cols-2 gap-4">
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

                                    <div class="grid grid-cols-2 gap-4">
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
                                    </div>

                                    <div class="flex justify-end pt-4">
                                        <button
                                            type="submit"
                                            class="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95"
                                        >
                                            Continue to Payment
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    {:else if step === "payment"}
                        <div class="space-y-6" in:fade>
                            <div
                                class="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800"
                            >
                                <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-6">
                                    Payment Method
                                </h2>

                                <div class="space-y-4">
                                    {#each [
                                        { value: "mpesa", label: "M-Pesa", desc: "Pay via mobile money" },
                                        { value: "card", label: "Credit/Debit Card", desc: "Visa, Mastercard accepted" },
                                        { value: "cod", label: "Cash at Pick-up", desc: "Pay on delivery" },
                                    ] as method}
                                        <label
                                            class="flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all {paymentMethod ===
                                            method.value
                                                ? 'border-primary bg-primary/5 dark:bg-primary/10'
                                                : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'}"
                                        >
                                            <input
                                                type="radio"
                                                name="payment"
                                                value={method.value}
                                                bind:group={paymentMethod}
                                                class="w-5 h-5 text-primary focus:ring-primary"
                                            />
                                            <div class="flex-1">
                                                <div class="font-bold text-slate-900 dark:text-white">
                                                    {method.label}
                                                </div>
                                                <div class="text-sm text-slate-500">
                                                    {method.desc}
                                                </div>
                                            </div>
                                        </label>
                                    {/each}
                                </div>

                                {#if paymentMethod === "mpesa"}
                                    <div class="mt-6" in:slide>
                                        <FloatingLabelInput
                                            label="M-PESA Phone Number"
                                            type="tel"
                                            bind:value={mpesaPhone}
                                            placeholder="+254 712 345 678"
                                        />
                                    </div>
                                {:else if paymentMethod === "card"}
                                    <div class="mt-6 space-y-4" in:slide>
                                        <FloatingLabelInput
                                            label="Card Number"
                                            bind:value={cardInfo.number}
                                            placeholder="1234 5678 9012 3456"
                                        />
                                        <div class="grid grid-cols-2 gap-4">
                                            <FloatingLabelInput
                                                label="Expiry Date"
                                                bind:value={cardInfo.expiry}
                                                placeholder="MM/YY"
                                            />
                                            <FloatingLabelInput
                                                label="CVV"
                                                bind:value={cardInfo.cvv}
                                                placeholder="123"
                                            />
                                        </div>
                                    </div>
                                {/if}

                                <div class="flex justify-between items-center mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                                    <button
                                        onclick={() => (step = "shipping")}
                                        class="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-all active:scale-95"
                                    >
                                        Back
                                    </button>
                                    <button
                                        onclick={handlePaymentSubmit}
                                        disabled={isProcessing}
                                        class="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                                    >
                                        {#if isProcessing}
                                            <div
                                                class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                            ></div>
                                            Processing...
                                        {:else}
                                            Place Order • {formatMoney($cartTotal + deliveryFee)}
                                        {/if}
                                    </button>
                                </div>
                            </div>
                        </div>
                    {/if}
                </div>

                <!-- Order Summary Sidebar -->
                <div class="lg:col-span-1">
                    <div
                        class="bg-white dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 sticky top-24"
                    >
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">
                            Order Summary
                        </h3>

                        <div class="space-y-3 mb-6 max-h-64 overflow-y-auto">
                            {#each $cart as item}
                                <div class="flex gap-3">
                                    <div
                                        class="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden shrink-0"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            class="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <div
                                            class="text-sm font-medium text-slate-900 dark:text-white line-clamp-2"
                                        >
                                            {item.name}
                                        </div>
                                        <div class="text-xs text-slate-500">
                                            Qty: {item.quantity}
                                        </div>
                                    </div>
                                    <div class="text-sm font-bold text-slate-900 dark:text-white">
                                        {formatMoney(item.price * item.quantity)}
                                    </div>
                                </div>
                            {/each}
                        </div>

                        <div class="space-y-3 py-4 border-t border-slate-200 dark:border-slate-700">
                            <div class="flex justify-between text-sm">
                                <span class="text-slate-600 dark:text-slate-400">Subtotal</span>
                                <span class="font-medium text-slate-900 dark:text-white"
                                    >{formatMoney($cartTotal)}</span
                                >
                            </div>
                            <div class="flex justify-between text-sm">
                                <span class="text-slate-600 dark:text-slate-400"
                                    >Delivery Fee</span
                                >
                                <span class="font-medium text-slate-900 dark:text-white"
                                    >{formatMoney(deliveryFee)}</span
                                >
                            </div>
                        </div>

                        <div
                            class="flex justify-between pt-4 border-t border-slate-200 dark:border-slate-700"
                        >
                            <span class="font-bold text-lg text-slate-900 dark:text-white"
                                >Total</span
                            >
                            <span class="font-bold text-xl text-primary"
                                >{formatMoney($cartTotal + deliveryFee)}</span
                            >
                        </div>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>
