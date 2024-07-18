<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Toc, extract } from '$lib';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLElement> {
    children: Snippet;
    headingSelector?: string;
    classMain?: string | undefined | null;
    mainClass?: string | undefined | null;
    classDiv1?: string | undefined | null;
    div1Class?: string | undefined | null;
    classDiv2?: string | undefined | null;
    div2Class?: string | undefined | null;
    classDiv3?: string | undefined | null;
    div3Class?: string | undefined | null;
  }

  let {
    children,
    classMain = 'w-full min-w-0 flex-auto lg:static lg:max-h-full lg:overflow-visible',
    mainClass,
    classDiv1 = 'flex w-full',
    div1Class,
    classDiv2 = 'mx-auto flex min-w-0 max-w-4xl flex-col divide-y divide-gray-200 px-4 lg:px-4 lg:pb-16 xl:pb-24 dark:divide-gray-800',
    div2Class,
    classDiv3 = 'pb-20 pr-8 2xl:pr-0',
    div3Class,
    headingSelector = '#mainContent > :where(h2, h3)'
  }: Props = $props();
</script>

<main class={twMerge(classMain, mainClass)} id="top">
  <div class={twMerge(classDiv1, div1Class)}>
    <div class={twMerge(classDiv2, div2Class)}>
      <div id="mainContent" class={twMerge(classDiv3, div3Class)}>
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
@prop classMain = 'w-full min-w-0 flex-auto lg:static lg:max-h-full lg:overflow-visible'
@prop mainClass
@prop classDiv1 = 'flex w-full'
@prop div1Class
@prop classDiv2 = 'mx-auto flex min-w-0 max-w-4xl flex-col divide-y divide-gray-200 px-4 lg:px-4 lg:pb-16 xl:pb-24 dark:divide-gray-800'
@prop div2Class
@prop classDiv3 = 'pb-20 pr-8 2xl:pr-0'
@prop div3Class
@prop headingSelector = '#mainContent > :where(h2
@prop h3)'
-->
