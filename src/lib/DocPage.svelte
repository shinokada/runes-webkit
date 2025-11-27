<script lang="ts">
  import type { Snippet } from "svelte";
  import { Toc, extract } from "$lib";
  import type { ClassValue } from "svelte/elements";
  import { cn } from "$lib";
  import type { HTMLAttributes } from "svelte/elements";

  interface Props extends HTMLAttributes<HTMLElement> {
    children: Snippet;
    headingSelector?: string;
    mainClass?: ClassValue;
    div1Class?: string | undefined | null;
    div2Class?: string | undefined | null;
    div3Class?: string | undefined | null;
  }

  let {
    children,
    mainClass,
    div1Class,
    div2Class,
    div3Class,
    headingSelector = "#mainContent > :where(h2, h3)"
  }: Props = $props();

  const classMain = "w-full min-w-0 flex-auto dark-bg-theme";
  const classDiv1 = "flex w-full";
  const classDiv2 =
    "mx-auto flex min-w-0 max-w-4xl flex-col divide-y divide-gray-200 px-4 lg:px-4 lg:pb-16 xl:pb-24 dark:divide-gray-800";
  const classDiv3 = "pb-20 px-8 2xl:pr-0";
</script>

<main class={cn(classMain, mainClass)} id="top">
  <div class={cn(classDiv1, div1Class)}>
    <div class={cn(classDiv2, div2Class)}>
      <div id="mainContent" class={cn(classDiv3, div3Class)}>
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
@props:mainClass: any;
@props:div1Class: any;
@props:div2Class: any;
@props:div3Class: any;
@props:headingSelector: any = "#mainContent > :where(h2;
@props:h3)": any;
-->
