<script lang="ts">import { twMerge } from "tailwind-merge";
import { Card } from "svelte-5-ui-lib";
let {
  children,
  pkgName,
  pkgVersion,
  svelteVersion,
  svelteKitVersion,
  svelte5uilib,
  svelteIconWebkit,
  svelteRuneHighlight,
  viteVersion,
  repoUrl,
  h2class,
  title = "Technical information about this website",
  divclass,
  ulclass,
  liclass,
  aclass,
  cardsize = "xl"
} = $props();
const h2Cls = twMerge("flex justify-center my-8 ", h2class);
const divCls = twMerge("grid grid-cols-1 max-w-5xl mx-auto", divclass);
const ulCls = twMerge("m-4 list-disc p-4 text-left text-lg dark:text-gray-400", ulclass);
const liCls = twMerge("hover:text-red-700 hover:underline", liclass);
const aCls = twMerge("me-4 hover:underline md:me-6", aclass);
</script>

<h2 class={h2Cls}>{title}</h2>

<div class={divCls}>
  <Card size={cardsize}>
    <ul class={ulCls}>
      {#if pkgName && pkgVersion && repoUrl}
      <li class={liCls}>
        <a href={repoUrl} class="{aCls}">{pkgName[0].toUpperCase() + pkgName.slice(1)} : {pkgVersion}</a>
      </li>
      {/if}
      {#if svelteVersion}
      <li class={liCls}>
        <a href="https://svelte-5-preview.vercel.app/docs/introduction" class={aCls}>Svelte: {svelteVersion}</a>
      </li>
      {/if}
      {#if svelteKitVersion}
      <li class={liCls}>
        <a href="https://kit.svelte.dev/docs/introduction" class={aCls}>SvelteKit: {svelteKitVersion}</a>
      </li>
      {/if}
      {#if svelte5uilib}
      <li class={liCls}>
        <a href="https://svelte-5-ui-lib.codewithshin.com/" class={aCls}>Svelte 5 UI Lib: {svelte5uilib}</a>
      </li>
      {/if}
      {#if svelteIconWebkit}
      <li class={liCls}>
        <a href="https://runes-webkit.codewithshin.com/" class={aCls}>Svelte Icon Webkit: {svelteIconWebkit}</a>
      </li>
      {/if}
      {#if svelteRuneHighlight}
      <li class={liCls}>
        <a href="https://svelte-rune-highlight.codewithshin.com/" class={aCls}>Svelte Rune Highlight: {svelteRuneHighlight}</a>
      </li>
      {/if}
      {#if viteVersion}
      <li class={liCls}>
        <a href="https://vitejs.dev/" class={aCls}>Vite: {viteVersion}</a>
      </li>
      {/if}
      {#if children}
        {@render children()}
      {/if}
    </ul>
  </Card>
</div>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:pkgName?: string;
@props:pkgVersion?: string;
@props:repoUrl?: string;
@props:h2class?: string;
@props:title?: string;
@props:divclass?: string;
@props:ulclass?: string;
@props:liclass?: string;
@props:aclass?: string;
@props:cardsize?: "xl" | "xs" | "sm" | "md" | "lg" | undefined;
@props:svelteVersion?: string;
@props:svelteKitVersion?: string;
@props:svelte5uilib?: string;
@props:svelteIconWebkit?: string;
@props:svelteRuneHighlight?: string;
@props:viteVersion?: string;
-->
