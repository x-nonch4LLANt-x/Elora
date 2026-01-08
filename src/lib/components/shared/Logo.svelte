<script lang="ts">
    export let className: string = "h-12 w-12";
</script>

<div class={className}>
    <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-full"
    >
        <!-- White Circle Background -->
        <circle cx="250" cy="250" r="250" fill="white" />

        <!-- ELORA Geometric Background (Black Parallelogram) -->
        <path
            d="M100 180 L440 180 L400 320 L60 320 Z"
            fill="black"
            transform="rotate(-5 250 250)"
        />

        <!-- ELORA Text (White, Bold, Sans-Serif) -->
        <!-- Custom drawn letters to match the style since we can't rely on fonts perfectly in SVGs without embedding -->
        <g transform="rotate(-5 250 250)">
            <text
                x="50%"
                y="275"
                dominant-baseline="middle"
                text-anchor="middle"
                fill="white"
                font-family="sans-serif"
                font-weight="900"
                font-size="110"
                letter-spacing="-2">ELORA</text
            >
        </g>

        <!-- Tech. Text (Black, Rounded Sans-Serif) -->
        <text
            x="250"
            y="390"
            dominant-baseline="middle"
            text-anchor="middle"
            fill="black"
            font-family="sans-serif"
            font-weight="bold"
            font-size="90"
            letter-spacing="-2">Tech.</text
        >
    </svg>
</div>
