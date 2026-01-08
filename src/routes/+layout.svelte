<script lang="ts">
	import MobileLayout from "$lib/components/mobile/Layout.svelte";
	import TabletLayout from "$lib/components/tablet/Layout.svelte";
	import DesktopLayout from "$lib/components/desktop/Layout.svelte";
	import { setDevice } from "$lib/stores/device";
	import type { Snippet } from "svelte";
	import { page } from "$app/stores";
	import { fade } from "svelte/transition";
	import "../app.css";
	import Toast from "$lib/components/shared/Toast.svelte";

	let {
		data,
		children,
	}: {
		data: { deviceType: "mobile" | "tablet" | "desktop" };
		children: Snippet;
	} = $props();

	// Update store on mount/change
	$effect(() => {
		setDevice(data.deviceType);
	});

	let showSplash = $state(true);

	$effect(() => {
		// Splash screen logic - show for enough time to "load" then fade out fast
		if (showSplash) {
			setTimeout(() => {
				showSplash = false;
			}, 2000);
		}
	});

	const Layouts = {
		mobile: MobileLayout,
		tablet: TabletLayout,
		desktop: DesktopLayout,
	};

	// Get the current layout component dynamically
	const CurrentLayout = $derived(Layouts[data.deviceType]);
</script>

{#snippet layoutContent()}
	{@render children()}
{/snippet}

<CurrentLayout>
	<!-- Splash Screen -->
	{#if showSplash}
		<div
			class="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-slate-900 transition-opacity duration-500"
			out:fade={{ duration: 300 }}
		>
			<div class="flex flex-col items-center gap-4">
				<div
					class="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center text-white shadow-2xl animate-bounce"
				>
					<span class="material-symbols-outlined text-[40px]"
						>movie</span
					>
				</div>
				<h1
					class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 animate-pulse"
				>
					ELORA Tech
				</h1>
			</div>
		</div>
	{/if}

	<!-- Delivery Banner -->
	<div
		class="w-full bg-primary text-white text-center py-2 px-4 shadow-md font-medium text-sm"
	>
		Free deliveries country wide
	</div>

	{#key $page.url.pathname}
		<div
			in:fade={{ duration: 300, delay: 300 }}
			out:fade={{ duration: 300 }}
		>
			{@render layoutContent()}
		</div>
	{/key}
	<Toast />
</CurrentLayout>
