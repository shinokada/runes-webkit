<script lang="ts">
  import { Tabs, Label, TabItem } from "flowbite-svelte";
  import { random_hex_color_code, random_tailwind_color } from "$lib";
  import type { Component } from "svelte";
  import { Copy } from "$lib";
  import type { ClassValue } from "svelte/elements";
  import { cn } from "$lib";

  interface Props {
    icons: Record<string, Component>;
    title: string;
    defaultSize?: string;
    sizeByTailwind?: boolean; // for flowbite-svelte-icons only
    minSize?: string;
    maxSize?: string;
    threeTabs?: boolean;
    wrapperClass?: ClassValue;
    div1Class?: ClassValue;
    div2Class?: ClassValue;
    div3Class?: ClassValue;
    div4Class?: ClassValue;
    labelClass?: ClassValue;
    searchClass?: ClassValue;
    tab1Class?: ClassValue;
    tab2Class?: ClassValue;
    rangeClass?: ClassValue;
    contentClass?: string;
    variation?: string;
  }
  let {
    icons,
    wrapperClass,
    div1Class,
    div2Class,
    div3Class,
    div4Class,
    labelClass,
    searchClass,
    tab1Class,
    tab2Class,
    rangeClass,
    contentClass,
    title,
    sizeByTailwind,
    minSize = "16",
    defaultSize = $bindable("24"),
    maxSize = "48",
    threeTabs = true,
    variation,
    ...restProps
  }: Props = $props();

  const classDiv2 = "w-full p-4 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3";
  const classDiv3 =
    "grid grid-cols-1 gap-8 px-4 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-white";
  const classSearch =
    "block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500";
  const classTab1 =
    "grid grid-cols-1 gap-8 px-4 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-white pb-12";
  const classRange =
    "mt-8 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700";

  let searchTerm = $state("");

  let filteredEntries = $derived(
    Object.entries(icons).filter(([name]) => {
      return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    })
  );
  // $inspect('filteredEntries', filteredEntries);
</script>

<div class="w-full pb-20">
  <div class={cn("mx-auto max-w-7xl px-8", wrapperClass)}>
    <h1>{title}</h1>

    <div class={cn("relative overflow-x-auto", div1Class)}>
      <div class={cn(classDiv2, div2Class)}>
        <Label class={cn("py-4 text-lg", labelClass)}>Icon size: {defaultSize}</Label>
        <input
          type="search"
          id="site-search"
          name="q"
          class={cn(classSearch, searchClass)}
          placeholder="Search icons"
          bind:value={searchTerm}
        />
        <input
          id="default-range"
          type="range"
          min={minSize}
          max={maxSize}
          bind:value={defaultSize}
          class={cn(classRange, rangeClass)}
        />
      </div>
      {#if threeTabs}
        <Tabs
          tabStyle="pill"
          classes={{ content: cn("rounded-lg dark-bg-theme mt-4", contentClass) }}
          divider={false}
        >
          <TabItem open title="Mono">
            <div class={cn(classTab1, tab1Class)}>
              {#each filteredEntries as [name, Component] (name)}
                {#if name !== "Icon"}
                  <div class={cn("flex items-center text-lg", tab2Class)}>
                    {#if sizeByTailwind}
                      <Component
                        class="shrink-0 h-{defaultSize} w-{defaultSize}"
                        {variation}
                        {...restProps}
                      ></Component>
                    {:else}
                      <Component class="shrink-0" size={defaultSize} {variation} {...restProps}
                      ></Component>
                    {/if}
                    <Copy iconName={name}>{name}</Copy>
                  </div>
                {/if}
              {/each}
            </div>
          </TabItem>
          <TabItem title="Random Hex Colors">
            <div class={cn(classTab1, tab1Class)}>
              {#each filteredEntries as [name, Component] (name)}
                {#if name !== "Icon"}
                  <div class={cn("flex items-center text-lg", tab2Class)}>
                    {#if sizeByTailwind}
                      <Component
                        color={random_hex_color_code()}
                        class="shrink-0 h-{defaultSize} w-{defaultSize}"
                        {variation}
                        {...restProps}
                      ></Component>
                    {:else}
                      <Component
                        color={random_hex_color_code()}
                        class="shrink-0"
                        size={defaultSize}
                        {variation}
                        {...restProps}
                      ></Component>
                    {/if}
                    <Copy iconName={name}>{name}</Copy>
                  </div>
                {/if}
              {/each}
            </div>
          </TabItem>
          <TabItem title="Random Tailwind CSS Colors">
            <div class={cn(classTab1, tab1Class)}>
              {#each filteredEntries as [name, Component] (name)}
                {#if name !== "Icon"}
                  <div class={cn("flex items-center text-lg", tab2Class)}>
                    {#if sizeByTailwind}
                      <Component
                        class="{random_tailwind_color()} shrink-0 h-{defaultSize} w-{defaultSize}"
                        {variation}
                        {...restProps}
                      ></Component>
                    {:else}
                      <Component
                        class={random_tailwind_color()}
                        size={defaultSize}
                        {variation}
                        {...restProps}
                      ></Component>
                    {/if}
                    <Copy iconName={name}>{name}</Copy>
                  </div>
                {/if}
              {/each}
            </div>
          </TabItem>
        </Tabs>
      {:else}
        <div class="w-full text-left text-gray-500 dark:text-gray-400">
          <div class={cn(classDiv3, div3Class)}>
            {#each filteredEntries as [name, Component] (name)}
              {#if name !== "Icon"}
                <div class={cn("flex flex-wrap items-center", div4Class)}>
                  <Component class="shrink-0" size={defaultSize} {variation} {...restProps}
                  ></Component>
                  <Copy iconName={name}>{name}</Copy>
                </div>
              {/if}
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
@props: icons: any;
@props:wrapperClass: any;
@props:div1Class: any;
@props:div2Class: any;
@props:div3Class: any;
@props:div4Class: any;
@props:labelClass: any;
@props:searchClass: any;
@props:tab1Class: any;
@props:tab2Class: any;
@props:rangeClass: any;
@props:contentClass: any;
@props:title: any;
@props:sizeByTailwind: any;
@props:minSize: any = "16";
@props:defaultSize: any = $bindable("24");
@props:maxSize: any = "48";
@props:threeTabs: any = true;
@props:variation: any;
-->
