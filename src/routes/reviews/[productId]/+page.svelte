<script lang="ts">
    import type { PageData } from "./$types";
    import { device } from "$lib/stores/device";
    import MobileReviewsPage from "$lib/components/mobile/ReviewsPage.svelte";
    import TabletReviewsPage from "$lib/components/tablet/ReviewsPage.svelte";
    import DesktopReviewsPage from "$lib/components/desktop/ReviewsPage.svelte";

    let { data }: { data: PageData } = $props();

    const components = {
        mobile: MobileReviewsPage,
        tablet: TabletReviewsPage,
        desktop: DesktopReviewsPage,
    };

    const CurrentComponent = $derived(components[$device]);
</script>

<svelte:head>
    <title>{data.product.name} - Reviews | Elora Tech</title>
</svelte:head>

<CurrentComponent product={data.product} />
