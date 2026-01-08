<script lang="ts">
    import { flyingItems, removeFlyingItem } from "$lib/stores/cart";
    import { flip } from "svelte/animate";
    import { fade } from "svelte/transition";

    // We can use a simple implementation with Web Animations API inside an action or effect
    // But since we are creating DOM elements, we can just use Svelte's style directives for positioning.
    // The "flight" is specialized.

    function flyToCart(
        node: HTMLElement,
        { targetRect, onFinish }: { targetRect: DOMRect; onFinish: () => void },
    ) {
        const startLeft = node.getBoundingClientRect().left;
        const startTop = node.getBoundingClientRect().top;

        const deltaX =
            targetRect.left -
            startLeft +
            targetRect.width / 2 -
            node.offsetWidth / 2;
        const deltaY =
            targetRect.top -
            startTop +
            targetRect.height / 2 -
            node.offsetHeight / 2;

        const animation = node.animate(
            [
                {
                    transform: "translate(0, 0) scale(1) rotate(0deg)",
                    opacity: 1,
                },
                {
                    transform: `translate(${deltaX * 0.5}px, ${deltaY - 150}px) scale(1.5) rotate(45deg)`,
                    offset: 0.4,
                }, // Arc effect - rotate as it flies up
                {
                    transform: `translate(${deltaX}px, ${deltaY}px) scale(0.2) rotate(180deg)`,
                    opacity: 0,
                },
            ],
            {
                duration: 1500, // Slower flight (was 800)
                easing: "cubic-bezier(0.22, 1, 0.36, 1)", // Custom ease for "paper plane" feel
            },
        );

        animation.onfinish = () => {
            onFinish();
        };

        return {
            destroy() {
                animation.cancel();
            },
        };
    }
</script>

<div class="fixed inset-0 pointer-events-none z-[100]">
    {#each $flyingItems as item (item.id)}
        <div
            class="absolute flex items-center justify-center w-12 h-12 text-primary"
            style="left: {item.startRect.left}px; top: {item.startRect.top}px;"
            use:flyToCart={{
                targetRect: item.targetRect,
                onFinish: () => removeFlyingItem(item.id),
            }}
        >
            <span
                class="material-symbols-outlined text-[48px] drop-shadow-lg"
                style="transform: rotate(-45deg);">send</span
            >
        </div>
    {/each}
</div>
