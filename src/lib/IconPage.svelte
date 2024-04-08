<script lang="ts">
  import { Tabs, Label, TabItem } from 'svelte-5-ui-lib';
  import { random_hex_color_code, random_tailwind_color } from './helpers';
  import type { ComponentType } from 'svelte';
  
  interface Props{
    icons: ComponentType;
    title: string;
    defaultSize?: string;
    sizeByTailwind?: boolean;// for flowbite-svelte-icons only
    minSize?: string;
    maxSize?: string;
    class?: string;
    threeTabs?: boolean
  }
  let { icons, title, sizeByTailwind, minSize =  '16', defaultSize = '24', maxSize = '48', threeTabs = true, class: classname }: Props = $props();
  
  let searchTerm = $state('');

  let filteredEntries = $derived(
    Object.entries(icons).filter(([name, component]) => {
      return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    })
  );

  let size = $state(defaultSize);
  const contentClass = ' rounded-lg dark_bg_theme mt-4';
</script>

<h1>{title}</h1>

<div class="relative overflow-x-auto">
  <div class="xl:w-1/3 lg:w-2/5 md:w-1/2 sm:w-3/4 w-full p-4">
    <Label labelclass="text-lg py-4 ">Icon size: {size}</Label>
    <input type="search" id="site-search" name="q"class="block w-full p-2 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search icons" bind:value={searchTerm} />
    <input id="default-range" type="range" min={minSize} max={maxSize} bind:value={size} class="w-full h-2 mt-8 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
  </div>
  {#if threeTabs}
  <Tabs style="pill" {contentClass} divider={false}>
    <TabItem open title="Mono">
      <div
      class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white pt-8"
    >
      {#each filteredEntries as [name, component]}
        <div class="flex gap-4 items-center text-lg">
          {#if sizeByTailwind}
          <svelte:component this={component} class="shrink-0 h-{size} w-{size}" />
          {:else}
          <svelte:component this={component} class="shrink-0" {size} />
          {/if}
          {name}
        </div>
      {/each}
    </div>
    </TabItem>
    <TabItem title="Random Hex Colors">
      <div
      class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white pt-8"
    >
      {#each filteredEntries as [name, component]}
        <div class="flex gap-4 items-center text-lg">
          {#if sizeByTailwind}
          <svelte:component this={component}  color={random_hex_color_code()} class="shrink-0 h-{size} w-{size}" />
          {:else}
          <svelte:component this={component}  color={random_hex_color_code()} class="shrink-0" {size} />
          {/if}
          {name}
        </div>
      {/each}
    </div>
    </TabItem>
    <TabItem title="Random Tailwind CSS Colors">
      <div
      class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white pt-8"
    >
      {#each filteredEntries as [name, component]}
        <div class="flex gap-4 items-center text-lg">
          {#if sizeByTailwind}
          <svelte:component this={component} class="{random_tailwind_color()} shrink-0 h-{size} w-{size}" />
          {:else}
          <svelte:component this={component} class="{random_tailwind_color()}" {size} />
          {/if}
          {name}
        </div>
      {/each}
    </div>
    </TabItem>
  </Tabs>
  {:else}
  <div
    class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-4 dark:text-white pt-8"
  >
    {#each filteredEntries as [name, component]}
      <div class="flex flex-wrap gap-4 items-center">
        <svelte:component this={component} class="shrink-0" {size} />
        {name}
      </div>
    {/each}
  </div>
  {/if}
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
@props:class?: string;
@props:threeTabs?: boolean
-->
