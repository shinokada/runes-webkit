<script lang="ts">
  import { Tabs, Label, TabItem } from 'svelte-5-ui-lib';
  import { random_hex_color_code, random_tailwind_color } from '$lib';
  import type { Component } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { Copy } from '$lib';

  interface Props {
    icons: Component;
    title: string;
    defaultSize?: string;
    sizeByTailwind?: boolean; // for flowbite-svelte-icons only
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
    variation?: string;
  }
  let {
    icons,
    i_p_wrapper,
    i_p_div_1,
    i_p_div_2,
    i_p_div_3,
    i_p_div_4,
    i_p_label,
    i_p_input_search,
    i_p_tabitem_div_1,
    i_p_tabitem_div_2,
    i_p_input_range,
    i_p_tabs,
    title,
    sizeByTailwind,
    minSize = '16',
    defaultSize = '24',
    maxSize = '48',
    threeTabs = true,
    variation,
    ...restProps
  }: Props = $props();

  let searchTerm = $state('');

  let filteredEntries = $derived(
    Object.entries(icons).filter(([name, component]) => {
      return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    })
  );
  // let filteredEntries = $state(Object.entries(icons))
  // $effect(() => {
  //   filteredEntries = Object.entries(icons).filter(([name, component]) => {
  //     return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  //   });
  // })

  let size = $state(defaultSize);
</script>

<div class="w-full pb-20">
  <div class={twMerge('_i_p_wrapper_ mx-auto max-w-7xl px-8', i_p_wrapper)}>
    <h1>{title}</h1>

    <div class={twMerge('_i_p_div_1_ relative overflow-x-auto', i_p_div_1)}>
      <div class={twMerge('_i_p_div_2_ w-full p-4 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3', i_p_div_2)}>
        <Label labelclass={twMerge('text-lg py-4 _i_p_label_', i_p_label)}>Icon size: {size}</Label>
        <input
          type="search"
          id="site-search"
          name="q"
          class={twMerge(
            '_i_p_input_search_ block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
            i_p_input_search
          )}
          placeholder="Search icons"
          bind:value={searchTerm}
        />
        <input
          id="default-range"
          type="range"
          min={minSize}
          max={maxSize}
          bind:value={size}
          class={twMerge(
            '_i_p_input_range_ mt-8 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700',
            i_p_input_range
          )}
        />
      </div>
      {#if threeTabs}
        <Tabs
          style="pill"
          contentClass={twMerge('rounded-lg dark_bg_theme mt-4 _i_p_tabs_', i_p_tabs)}
          divider={false}
        >
          <TabItem open title="Mono">
            <div
              class={twMerge(
                '_i_p_tabitem_div_1_ grid grid-cols-1 gap-8 px-4 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-white',
                i_p_tabitem_div_1
              )}
            >
              {#each filteredEntries as [name, component] (name)}
                <div
                  class={twMerge(
                    '_i_p_tabitem_div_2_ flex items-center text-lg',
                    i_p_tabitem_div_2
                  )}
                >
                  {#if sizeByTailwind}
                    <svelte:component
                      this={component}
                      class="shrink-0 h-{size} w-{size}"
                      {variation}
                      {...restProps}
                    />
                  {:else}
                    <svelte:component
                      this={component}
                      class="shrink-0"
                      {size}
                      {variation}
                      {...restProps}
                    />
                  {/if}
                  <Copy iconName={name}>{name}</Copy>
                </div>
              {/each}
            </div>
          </TabItem>
          <TabItem title="Random Hex Colors">
            <div
              class={twMerge(
                '_i_p_tabitem_div_1_ grid grid-cols-1 gap-8 px-4 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-white',
                i_p_tabitem_div_1
              )}
            >
              {#each filteredEntries as [name, component] (name) }
                <div
                  class={twMerge(
                    '_i_p_tabitem_div_2_ flex items-center text-lg',
                    i_p_tabitem_div_2
                  )}
                >
                  {#if sizeByTailwind}
                    <svelte:component
                      this={component}
                      color={random_hex_color_code()}
                      class="shrink-0 h-{size} w-{size}"
                      {variation}
                      {...restProps}
                    />
                  {:else}
                    <svelte:component
                      this={component}
                      color={random_hex_color_code()}
                      class="shrink-0"
                      {size}
                      {variation}
                      {...restProps}
                    />
                  {/if}
                  <Copy iconName={name}>{name}</Copy>
                </div>
              {/each}
            </div>
          </TabItem>
          <TabItem title="Random Tailwind CSS Colors">
            <div
              class={twMerge(
                '_i_p_tabitem_div_1_ grid grid-cols-1 gap-8 px-4 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-white',
                i_p_tabitem_div_1
              )}
            >
              {#each filteredEntries as [name, component] (name)}
                <div
                  class={twMerge(
                    '_i_p_tabitem_div_2_ flex items-center text-lg',
                    i_p_tabitem_div_2
                  )}
                >
                  {#if sizeByTailwind}
                    <svelte:component
                      this={component}
                      class="{random_tailwind_color()} shrink-0 h-{size} w-{size}"
                      {variation}
                      {...restProps}
                    />
                  {:else}
                    <svelte:component
                      this={component}
                      class={random_tailwind_color()}
                      {size}
                      {variation}
                      {...restProps}
                    />
                  {/if}
                  <Copy iconName={name}>{name}</Copy>
                </div>
              {/each}
            </div>
          </TabItem>
        </Tabs>
      {:else}
        <div class="w-full text-left text-gray-500 dark:text-gray-400">
          <div
            class={twMerge(
              '_i_p_div_3_ grid grid-cols-1 gap-8 px-4 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-white',
              i_p_div_3
            )}
          >
            {#each filteredEntries as [name, component] (name)}
              {#if name !== 'Icon'}
                <div class={twMerge('_i_p_div_4_ flex flex-wrap items-center', i_p_div_4)}>
                  <svelte:component
                    this={component}
                    class="shrink-0"
                    {size}
                    {variation}
                    {...restProps}
                  />
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
@prop icons
@prop i_p_wrapper
@prop i_p_div_1
@prop i_p_div_2
@prop i_p_div_3
@prop i_p_div_4
@prop i_p_label
@prop i_p_input_search
@prop i_p_tabitem_div_1
@prop i_p_tabitem_div_2
@prop i_p_input_range
@prop i_p_tabs
@prop title
@prop sizeByTailwind
@prop minSize = '16'
@prop defaultSize = '24'
@prop maxSize = '48'
@prop threeTabs = true
@prop variation
@prop ...restProps
-->
