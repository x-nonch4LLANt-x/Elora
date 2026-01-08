<script lang="ts">
    import { device } from "$lib/stores/device";
    import MobileCheckoutPage from "$lib/components/mobile/CheckoutPage.svelte";
    import TabletCheckoutPage from "$lib/components/tablet/CheckoutPage.svelte";
    import DesktopCheckoutPage from "$lib/components/desktop/CheckoutPage.svelte";

    const components = {
        mobile: MobileCheckoutPage,
        tablet: TabletCheckoutPage,
        desktop: DesktopCheckoutPage,
    };

    const CurrentComponent = $derived(components[$device]);
</script>

<svelte:head>
    <title>Checkout | Elora Tech</title>
</svelte:head>

<CurrentComponent />
