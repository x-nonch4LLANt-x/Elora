<script lang="ts">
    import MobileHomePage from "$lib/components/mobile/HomePage.svelte";
    import TabletHomePage from "$lib/components/tablet/HomePage.svelte";
    import DesktopHomePage from "$lib/components/desktop/HomePage.svelte";
    import { device } from "$lib/stores/device";

    let { data }: { data: { products: any[] } } = $props();

    const Components = {
        mobile: MobileHomePage,
        tablet: TabletHomePage,
        desktop: DesktopHomePage,
    };

    const CurrentComponent = $derived(Components[$device]);
</script>

<CurrentComponent products={data.products} />
