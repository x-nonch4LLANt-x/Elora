<script lang="ts">
    import MobileCatalogPage from "$lib/components/mobile/CatalogPage.svelte";
    import DesktopCatalogPage from "$lib/components/desktop/CatalogPage.svelte"; // Tablet can reuse desktop or have its own
    import { device } from "$lib/stores/device";
    import { page } from "$app/stores";
    import { activeCategory, searchQuery, sortBy } from "$lib/stores/products";

    // Sync URL param to category store
    $effect(() => {
        const params = $page.url.searchParams;

        const cat = params.get("category");
        if (cat) activeCategory.set(cat as any);
        else activeCategory.set("all");

        const q = params.get("search");
        if (q) searchQuery.set(q);
        else searchQuery.set("");

        const sort = params.get("sort");
        if (sort) sortBy.set(sort as any);
    });

    const Components = {
        mobile: MobileCatalogPage,
        tablet: DesktopCatalogPage, // Tablet uses desktop layout for catalog for now
        desktop: DesktopCatalogPage,
    };

    const CurrentPage = $derived(Components[$device]);
</script>

<CurrentPage />
