<script lang="ts">
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    let {
        initialLocation = { lat: -1.286389, lng: 36.817223 }, // Nairobi default
        onLocationSelect = (lat: number, lng: number, address: string) => {},
    }: {
        initialLocation?: { lat: number; lng: number };
        onLocationSelect?: (lat: number, lng: number, address: string) => void;
    } = $props();

    let mapContainer: HTMLDivElement;
    let map: any;
    let marker: any;
    let isMapReady = $state(false);
    let selectedAddress = $state("Select location on map");

    onMount(async () => {
        // Load Leaflet CSS
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        link.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
        link.crossOrigin = "";
        document.head.appendChild(link);

        // Load Leaflet JS
        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.integrity =
            "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
        script.crossOrigin = "";
        document.head.appendChild(script);

        script.onload = () => {
            // @ts-ignore
            const L = window.L;

            map = L.map(mapContainer).setView(
                [initialLocation.lat, initialLocation.lng],
                13,
            );

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                maxZoom: 19,
            }).addTo(map);

            marker = L.marker([initialLocation.lat, initialLocation.lng], {
                draggable: true,
            }).addTo(map);

            marker.on("dragend", async function () {
                const position = marker.getLatLng();
                await reverseGeocode(position.lat, position.lng);
            });

            map.on("click", async function (e: any) {
                marker.setLatLng(e.latlng);
                await reverseGeocode(e.latlng.lat, e.latlng.lng);
            });

            isMapReady = true;
            // Initial geocode
            reverseGeocode(initialLocation.lat, initialLocation.lng);
        };
    });

    async function reverseGeocode(lat: number, lng: number) {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`,
            );
            const data = await response.json();
            selectedAddress =
                data.display_name || `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
            onLocationSelect(lat, lng, selectedAddress);
        } catch (error) {
            console.error("Geocoding error:", error);
            selectedAddress = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
            onLocationSelect(lat, lng, selectedAddress);
        }
    }
</script>

<div class="w-full h-full relative">
    <div
        bind:this={mapContainer}
        class="w-full h-full rounded-xl overflow-hidden"
    ></div>
    {#if !isMapReady}
        <div
            class="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-xl"
            transition:fade
        >
            <div class="text-center">
                <div
                    class="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"
                ></div>
                <p class="text-sm text-slate-500">Loading map...</p>
            </div>
        </div>
    {/if}
    <div
        class="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-3 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700"
    >
        <div class="flex items-start gap-2">
            <span
                class="material-symbols-outlined text-primary text-[20px] shrink-0 mt-1"
                >location_on</span
            >
            <div class="flex-1 min-w-0">
                <p
                    class="text-xs font-medium text-slate-600 dark:text-slate-400 mb-1"
                >
                    Selected Location
                </p>
                <p
                    class="text-sm text-slate-900 dark:text-white font-medium line-clamp-2"
                >
                    {selectedAddress}
                </p>
            </div>
        </div>
        <p class="text-xs text-slate-500 mt-2">
            Drag marker or tap map to change location
        </p>
    </div>
</div>
