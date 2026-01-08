<script lang="ts">
    import MobileCatalogPage from "$lib/components/mobile/CatalogPage.svelte";
    import DesktopCatalogPage from "$lib/components/desktop/CatalogPage.svelte";
    import { device } from "$lib/stores/device";
    import { activeCategory } from "$lib/stores/products";

    // Force category to accessories
    $effect(() => {
        activeCategory.set("accessories");
    });

    const Components = {
        mobile: MobileCatalogPage,
        tablet: DesktopCatalogPage,
        desktop: DesktopCatalogPage,
    };
</script>

<svelte:component this={Components[$device]} />
