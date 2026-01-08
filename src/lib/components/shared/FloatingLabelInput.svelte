<script lang="ts">
    let {
        value = $bindable(""),
        label,
        type = "text",
        error = "",
        required = false,
        ...rest
    } = $props();

    let focused = $state(false);
</script>

<div class="relative pt-2">
    <div class="relative">
        <input
            {type}
            bind:value
            {required}
            {...rest}
            onfocus={() => (focused = true)}
            onblur={() => (focused = false)}
            class="peer w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-900 text-slate-900 dark:text-white outline-none transition-all placeholder-transparent
            {error
                ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/20'
                : 'border-slate-300 dark:border-slate-600 focus:border-primary focus:ring-2 focus:ring-primary/20'}"
            placeholder={label}
        />
        <label
            class="absolute left-4 transition-all duration-200 pointer-events-none
            {focused || value
                ? '-top-2.5 text-xs bg-white dark:bg-slate-900 px-1'
                : 'top-3.5 text-base'} 
            {error
                ? 'text-red-500'
                : focused
                  ? 'text-primary'
                  : 'text-slate-500 dark:text-slate-400'}"
        >
            {label}
            {#if required}<span class="text-red-500 ml-0.5">*</span>{/if}
        </label>
    </div>
    {#if error}
        <p class="text-xs text-red-500 mt-1 ml-1 flex items-center gap-1">
            <span class="material-symbols-outlined text-[12px]">error</span>
            {error}
        </p>
    {/if}
</div>
