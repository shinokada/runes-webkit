<script lang="ts">import { Tabs, Label, TabItem } from "svelte-5-ui-lib";
import { random_hex_color_code, random_tailwind_color } from "./helpers";
let { icons, title, sizeByTailwind, minSize = "16", defaultSize = "24", maxSize = "48", threeTabs = true } = $props();
let searchTerm = $state("");
let filteredEntries = $derived(
  Object.entries(icons).filter(([name, component]) => {
    return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  })
);
let size = $state(defaultSize);
</script>

<div class="i_p_wrapper">
  <h1>{title}</h1>

  <div class="i_p_div_1">
    <div class="i_p_div_2">
      <Label labelclass="i_p_label">Icon size: {size}</Label>
      <input type="search" id="site-search" name="q" class="i_p_input_search" placeholder="Search icons" bind:value={searchTerm} />
      <input id="default-range" type="range" min={minSize} max={maxSize} bind:value={size} class="i_p_input_range">
    </div>
    {#if threeTabs}
    <Tabs style="pill" contentClass="i_p_tabs" divider={false}>
      <TabItem open title="Mono">
        <div class="i_p_tabitem_div_1">
        {#each filteredEntries as [name, component]}
          <div class="i_p_tabitem_div_2">
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
        <div class="i_p_tabitem_div_1">
        {#each filteredEntries as [name, component]}
          <div class="i_p_tabitem_div_2">
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
        <div class="i_p_tabitem_div_1" >
        {#each filteredEntries as [name, component]}
          <div class="i_p_tabitem_div_2">
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
    <div class="i_p_div_3" >
      {#each filteredEntries as [name, component]}
        <div class="i_p_div_4">
          <svelte:component this={component} class="shrink-0" {size} />
          {name}
        </div>
      {/each}
    </div>
    {/if}
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
@props:threeTabs?: boolean
-->
