<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Toc, extract } from '$lib';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children: Snippet;
    headingSelector?: string;
    d_p_main?: string;
    d_p_div_1?: string;
    d_p_div_2?: string;
    d_p_div_3?: string;
  }

  let {
    children,
    d_p_div_1,
    d_p_div_2,
    d_p_div_3,
    d_p_main,
    headingSelector = '#mainContent > :where(h2, h3)'
  }: Props = $props();
</script>

<main
  class={twMerge(
    '_d_p_main_ w-full min-w-0 flex-auto lg:static lg:max-h-full lg:overflow-visible',
    d_p_main
  )}
  id="top"
>
  <div class="_d_p_div_1_ flex w-full">
    <div
      class={twMerge(
        '_d_p_div_2_ mx-auto flex min-w-0 max-w-4xl flex-col divide-y divide-gray-200 px-4 lg:px-4 lg:pb-16 xl:pb-24 dark:divide-gray-800',
        d_p_div_2
      )}
    >
      <div id="mainContent" class={twMerge('_d_p_div_3_ pb-20 pr-8 2xl:pr-0', d_p_div_3)}>
        {@render children()}
      </div>
    </div>
    <Toc {extract} {headingSelector} />
  </div>
</main>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop children
@prop d_p_div_1
@prop d_p_div_2
@prop d_p_div_3
@prop d_p_main
@prop headingSelector = '#mainContent > :where(h2
@prop h3)'
-->
