<script lang="ts">
    import type { PageData } from "./$types";
    import { device } from "$lib/stores/device";
    import MobileProductDetailPage from "$lib/components/mobile/ProductDetailPage.svelte";
    import TabletProductDetailPage from "$lib/components/tablet/ProductDetailPage.svelte";
    import DesktopProductDetailPage from "$lib/components/desktop/ProductDetailPage.svelte";

    let { data }: { data: PageData } = $props();

    const components = {
        mobile: MobileProductDetailPage,
        tablet: TabletProductDetailPage,
        desktop: DesktopProductDetailPage,
    };

    const CurrentComponent = $derived(components[$device]);
</script>

<svelte:head>
    <title>{data.product.name} | Elora Tech</title>
    <meta name="description" content={data.product.description} />
</svelte:head>

<CurrentComponent product={data.product} />
