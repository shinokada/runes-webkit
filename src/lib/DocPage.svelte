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
    classMain = 'w-full min-w-0 flex-auto',
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
@props: children: any;
@props:classMain: any = 'w-full min-w-0 flex-auto lg:static lg:max-h-full lg:overflow-visible';
@props:mainClass: any;
@props:classDiv1: any = 'flex w-full';
@props:div1Class: any;
@props:classDiv2: any = 'mx-auto flex min-w-0 max-w-4xl flex-col divide-y divide-gray-200 px-4 lg:px-4 lg:pb-16 xl:pb-24 dark:divide-gray-800';
@props:div2Class: any;
@props:classDiv3: any = 'pb-20 pr-8 2xl:pr-0';
@props:div3Class: any;
@props:headingSelector: any = '#mainContent > :where(h2;
@props:h3)': any;
-->
