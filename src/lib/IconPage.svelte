<script lang="ts">
  import { Tabs, Label, TabItem } from 'svelte-5-ui-lib';
  import { random_hex_color_code, random_tailwind_color } from './helpers';
  import type { ComponentType } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { Copy } from '$lib'
  
  interface Props{
    icons: ComponentType;
    title: string;
    defaultSize?: string;
    sizeByTailwind?: boolean;// for flowbite-svelte-icons only
    minSize?: string;
    maxSize?: string;
    threeTabs?: boolean;
    i_p_wrapper?: string;
    i_p_div_1?: string;
    i_p_div_2?: string;
    i_p_div_3?: string;
    i_p_div_4?: string;
    i_p_label?: string;
    i_p_input_search?: string;
    i_p_tabitem_div_1?: string;
    i_p_tabitem_div_2?: string;
    i_p_input_range?: string;
    i_p_tabs?: string;
  }
  let { icons, i_p_wrapper, i_p_div_1, i_p_div_2, i_p_div_3, i_p_div_4, i_p_label, i_p_input_search, i_p_tabitem_div_1, i_p_tabitem_div_2, i_p_input_range, i_p_tabs,  title, sizeByTailwind, minSize =  '16', defaultSize = '24', maxSize = '48', threeTabs = true }: Props = $props();
  
  let searchTerm = $state('');

  let filteredEntries = $derived(
    Object.entries(icons).filter(([name, component]) => {
      return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    })
  );

  let size = $state(defaultSize);

</script>
<div class='w-full pb-20'>
<div class="{twMerge('max-w-7xl mx-auto px-8 _i_p_wrapper_', i_p_wrapper)}">
  <h1>{title}</h1>

  <div class="{twMerge('relative overflow-x-auto _i_p_div_1_', i_p_div_1)}">
    <div class="{twMerge('xl:w-1/3 lg:w-2/5 md:w-1/2 sm:w-3/4 w-full p-4 _i_p_div_2_', i_p_div_2)}">
      <Label labelclass="{twMerge('text-lg py-4 _i_p_label_', i_p_label)}">Icon size: {size}</Label>
      <input type="search" id="site-search" name="q" class="{twMerge('block w-full p-2 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 _i_p_input_search_', i_p_input_search)}" placeholder="Search icons" bind:value={searchTerm} />
      <input id="default-range" type="range" min={minSize} max={maxSize} bind:value={size} class="{twMerge('w-full h-2 mt-8 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 _i_p_input_range_', i_p_input_range)}">
    </div>
    {#if threeTabs}
    <Tabs style="pill" contentClass="{twMerge('rounded-lg dark_bg_theme mt-4 _i_p_tabs_', i_p_tabs)}" divider={false}>
      <TabItem open title="Mono">
        <div class="{twMerge('grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white pt-8 _i_p_tabitem_div_1_', i_p_tabitem_div_1)}">
        {#each filteredEntries as [name, component]}
          <div class="{twMerge('flex items-center text-lg _i_p_tabitem_div_2_', i_p_tabitem_div_2)}">
            {#if sizeByTailwind}
            <svelte:component this={component} class="shrink-0 h-{size} w-{size}" />
            {:else}
              <svelte:component this={component} class="shrink-0" {size} />
            {/if}
            <Copy iconName={name}>{name}</Copy>
          </div>
        {/each}
      </div>
      </TabItem>
      <TabItem title="Random Hex Colors">
        <div class="{twMerge('grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white pt-8 _i_p_tabitem_div_1_', i_p_tabitem_div_1)}">
        {#each filteredEntries as [name, component]}
          <div class="{twMerge('flex items-center text-lg _i_p_tabitem_div_2_', i_p_tabitem_div_2)}">
            {#if sizeByTailwind}
            <svelte:component this={component}  color={random_hex_color_code()} class="shrink-0 h-{size} w-{size}" />
            {:else}
            <svelte:component this={component}  color={random_hex_color_code()} class="shrink-0" {size} />
            {/if}
            <Copy iconName={name}>{name}</Copy>
          </div>
        {/each}
      </div>
      </TabItem>
      <TabItem title="Random Tailwind CSS Colors">
        <div class="{twMerge('grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white pt-8 _i_p_tabitem_div_1_', i_p_tabitem_div_1)}" >
        {#each filteredEntries as [name, component]}
          <div class="{twMerge('flex items-center text-lg _i_p_tabitem_div_2_', i_p_tabitem_div_2)}">
            {#if sizeByTailwind}
            <svelte:component this={component} class="{random_tailwind_color()} shrink-0 h-{size} w-{size}" />
            {:else}
            <svelte:component this={component} class="{random_tailwind_color()}" {size} />
            {/if}
            <Copy iconName={name}>{name}</Copy>
          </div>
        {/each}
      </div>
      </TabItem>
    </Tabs>
    {:else}
    <div class="w-full text-left text-gray-500 dark:text-gray-400">
    <div class="{twMerge('grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white pt-8 _i_p_div_3_', i_p_div_3)}" >
      {#each filteredEntries as [name, component]}
        <div class="{twMerge('flex flex-wrap items-center _i_p_div_4_', i_p_div_4)}">
          <svelte:component this={component} class="shrink-0" {size} />
          <Copy iconName={name}>{name}</Copy>
        </div>
      {/each}
    </div>
  </div>
    {/if}
  </div>
</div>
</div>


<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: icons: ComponentType;
@props:title: string;
@props:defaultSize?: string;
@props:sizeByTailwind?: boolean;// for flowbite-svelte-icons only
@props:minSize?: string;
@props:maxSize?: string;
@props:threeTabs?: boolean;
@props:i_p_wrapper?: string;
@props:i_p_div_1?: string;
@props:i_p_div_2?: string;
@props:i_p_div_3?: string;
@props:i_p_div_4?: string;
@props:i_p_label?: string;
@props:i_p_input_search?: string;
@props:i_p_tabitem_div_1?: string;
@props:i_p_tabitem_div_2?: string;
@props:i_p_input_range?: string;
@props:i_p_tabs?: string;
-->
