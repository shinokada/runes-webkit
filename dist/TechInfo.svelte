<script lang="ts">import { twMerge } from "tailwind-merge";
import { Card } from "svelte-5-ui-lib";
let { children, pkgName, pkgVersion, runeswebkitVersion, runaticsVersion, runesMetaTagsVersion, svelteVersion, svelteKitVersion, svelte5uilib, svelteRuneHighlight, viteVersion, repoUrl, title = "Technical information about this website", t_i_h2, t_i_div, t_i_ul, t_i_li, t_i_a, cardsize = "xl" } = $props();
let li_class = twMerge("hover:text-red-700 hover:underline _t_i_li_", t_i_li);
let a_class = twMerge("me-4 hover:underline md:me-6 _t_i_a_", t_i_a);
</script>

<h2 class="{twMerge('flex justify-center my-8 _t_i_h2_', t_i_h2)} ">{title}</h2>

<div class="{twMerge('grid grid-cols-1 max-w-5xl mx-auto _t_i_div_', t_i_div)}">
  <Card size={cardsize}>
    <ul class="{twMerge('m-4 list-disc p-4 text-left text-lg dark:text-gray-400 _t_i_ul_', t_i_ul)} ">
      {#if pkgName && pkgVersion && repoUrl}
      <li class="{li_class}">
        <a href={repoUrl} class="{a_class}">{pkgName[0].toUpperCase() + pkgName.slice(1)} : {pkgVersion}</a>
      </li>
      {/if}
      {#if runaticsVersion}
      <li class="{li_class}">
        <a href="https://runatics.codewithshin.com/" class="{a_class}">Runatics: {runaticsVersion}</a>
      </li>
      {/if}
      {#if runesMetaTagsVersion}
      <li class="{li_class}">
        <a href="https://runes-meta-tags.codewithshin.com/" class="{a_class}">Runes Meta Tags: {runesMetaTagsVersion}</a>
      </li>
      {/if}
      {#if svelteRuneHighlight}
      <li class="{li_class}">
        <a href="https://svelte-rune-highlight.codewithshin.com/" class="{a_class}">Svelte Rune Highlight: {svelteRuneHighlight}</a>
      </li>
      {/if}
      {#if runeswebkitVersion}
      <li class="{li_class}">
        <a href="https://runes-webkit.codewithshin.com/" class="{a_class}">Runes Webkit: {runeswebkitVersion}</a>
      </li>
      {/if}
      {#if svelteVersion}
      <li class="{li_class}">
        <a href="https://svelte-5-preview.vercel.app/docs/introduction" class="{a_class}">Svelte: {svelteVersion}</a>
      </li>
      {/if}
      {#if svelteKitVersion}
      <li class="{li_class}">
        <a href="https://kit.svelte.dev/docs/introduction" class="{a_class}">SvelteKit: {svelteKitVersion}</a>
      </li>
      {/if}
      {#if svelte5uilib}
      <li class="{li_class}">
        <a href="https://svelte-5-ui-lib.codewithshin.com/" class="{a_class}">Svelte 5 UI Lib: {svelte5uilib}</a>
      </li>
      {/if}
      {#if viteVersion}
      <li class="{li_class}">
        <a href="https://vitejs.dev/" class="{a_class}">Vite: {viteVersion}</a>
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
@props:title?: string;
@props:t_i_h2?: string;
@props:t_i_div?: string;
@props:t_i_ul?: string;
@props:t_i_li?: string;
@props:t_i_a?: string;
@props:cardsize?: "xl" | "xs" | "sm" | "md" | "lg" | undefined;
@props:runeswebkitVersion?: string;
@props:runaticsVersion?: string;
@props:runesMetaTagsVersion?: string;
@props:svelteVersion?: string;
@props:svelteKitVersion?: string;
@props:svelte5uilib?: string;
@props:svelteRuneHighlight?: string;
@props:viteVersion?: string;
-->
