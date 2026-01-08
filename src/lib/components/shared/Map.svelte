<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import { browser } from "$app/environment";
    import { theme } from "$lib/stores/theme";

    let mapElement: HTMLElement;
    let map: any;
    let lightLayer: any;
    let darkLayer: any;

    // Nairobi Coordinates (Approximate for Superior House based on description, using CBD/Westlands generic if not exact)
    // Using a generic Nairobi CBD coordinate for demo + marker
    const lat = -1.2921;
    const lng = 36.8219;

    onMount(async () => {
        if (browser) {
            const L = await import("leaflet");

            map = L.map(mapElement, {
                center: [lat, lng],
                zoom: 15,
                zoomControl: false,
                attributionControl: false,
            });

            // Terrain Layer (Light Mode) - using OpenTopoMap for terrain look
            lightLayer = L.tileLayer(
                "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
                {
                    maxZoom: 17,
                    attribution:
                        "Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap (CC-BY-SA)",
                },
            );

            // Dark Mode Layer - CartoDB Dark Matter
            darkLayer = L.tileLayer(
                "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
                {
                    maxZoom: 20,
                    attribution:
                        "&copy; OpenStreetMap contributors &copy; CARTO",
                },
            );

            // Initial Layer Selection
            if ($theme === "dark") {
                darkLayer.addTo(map);
            } else {
                lightLayer.addTo(map);
            }

            // Custom Marker Icon
            const icon = L.divIcon({
                className: "custom-div-icon",
                html: `<div style="background-color: #ef4444; width: 24px; height: 24px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);"></div>`,
                iconSize: [24, 24],
                iconAnchor: [12, 12],
            });

            L.marker([lat, lng], { icon })
                .addTo(map)
                .bindPopup("<b>Elora Tech</b><br>Superior House, Shop F20")
                .openPopup();
        }
    });

    // React to theme changes
    $effect(() => {
        if (map && lightLayer && darkLayer) {
            if ($theme === "dark") {
                map.removeLayer(lightLayer);
                darkLayer.addTo(map);
            } else {
                map.removeLayer(darkLayer);
                lightLayer.addTo(map);
            }
        }
    });

    onDestroy(() => {
        if (map) {
            map.remove();
        }
    });
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossorigin=""
    />
</svelte:head>

<div class="w-full h-full relative group">
    <div bind:this={mapElement} class="w-full h-full z-0"></div>

    <!-- Zoom Controls -->
    <div class="absolute bottom-6 right-6 flex flex-col gap-2 z-[400]">
        <button
            onclick={() => map?.zoomIn()}
            class="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg shadow-lg flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors"
            aria-label="Zoom in"
        >
            <span class="material-symbols-outlined">add</span>
        </button>
        <button
            onclick={() => map?.zoomOut()}
            class="w-10 h-10 bg-white dark:bg-slate-800 rounded-lg shadow-lg flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white transition-colors"
            aria-label="Zoom out"
        >
            <span class="material-symbols-outlined">remove</span>
        </button>
    </div>
</div>
