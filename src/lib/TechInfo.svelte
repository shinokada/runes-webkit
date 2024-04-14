<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { Card } from 'svelte-5-ui-lib';

  interface Props{
    children?:Snippet;
    pkgName?:string;
    pkgVersion?:string;
    repoUrl?:string;
    title?:string;
    h2_class?:string;
    div_class?:string;
    ul_class?:string;
    li_class?:string;
    a_class?:string;
    cardsize?:"xl" | "xs" | "sm" | "md" | "lg" | undefined;
    runeswebkitVersion?:string;
    runaticsVersion?:string;
    runesMetaTagsVersion?:string;
    svelteVersion?: string;
    svelteKitVersion?: string;
    svelte5uilib?: string;
    svelteRuneHighlight?: string;
    viteVersion?: string;
  }
  let { children, pkgName, pkgVersion, runeswebkitVersion, runaticsVersion, runesMetaTagsVersion, svelteVersion, svelteKitVersion, svelte5uilib,  svelteRuneHighlight, viteVersion, repoUrl, title = 'Technical information about this website', h2_class, div_class, ul_class, li_class, a_class, cardsize = 'xl' }:Props = $props();
  
</script>

<h2 class="t_i_h2 {h2_class}">{title}</h2>

<div class="t_i_div {div_class}">
  <Card size={cardsize}>
    <ul class="t_i_ul {ul_class}">
      {#if pkgName && pkgVersion && repoUrl}
      <li class="t_i_li {li_class}">
        <a href={repoUrl} class="t_i_a {a_class}">{pkgName[0].toUpperCase() + pkgName.slice(1)} : {pkgVersion}</a>
      </li>
      {/if}
      {#if runaticsVersion}
      <li class="t_i_li {li_class}">
        <a href="https://runatics.codewithshin.com/" class="t_i_a {a_class}">Runatics: {runaticsVersion}</a>
      </li>
      {/if}
      {#if runesMetaTagsVersion}
      <li class="t_i_li {li_class}">
        <a href="https://runes-meta-tags.codewithshin.com/" class="t_i_a {a_class}">Runes Meta Tags: {runesMetaTagsVersion}</a>
      </li>
      {/if}
      {#if svelteRuneHighlight}
      <li class="t_i_li {li_class}">
        <a href="https://svelte-rune-highlight.codewithshin.com/" class="t_i_a {a_class}">Svelte Rune Highlight: {svelteRuneHighlight}</a>
      </li>
      {/if}
      {#if runeswebkitVersion}
      <li class="t_i_li {li_class}">
        <a href="https://runes-webkit.codewithshin.com/" class="t_i_a {a_class}">Runes Webkit: {runeswebkitVersion}</a>
      </li>
      {/if}
      {#if svelteVersion}
      <li class="t_i_li {li_class}">
        <a href="https://svelte-5-preview.vercel.app/docs/introduction" class="t_i_a {a_class}">Svelte: {svelteVersion}</a>
      </li>
      {/if}
      {#if svelteKitVersion}
      <li class="t_i_li {li_class}">
        <a href="https://kit.svelte.dev/docs/introduction" class="t_i_a {a_class}">SvelteKit: {svelteKitVersion}</a>
      </li>
      {/if}
      {#if svelte5uilib}
      <li class="t_i_li {li_class}">
        <a href="https://svelte-5-ui-lib.codewithshin.com/" class="t_i_a {a_class}">Svelte 5 UI Lib: {svelte5uilib}</a>
      </li>
      {/if}
      {#if viteVersion}
      <li class="t_i_li {li_class}">
        <a href="https://vitejs.dev/" class="t_i_a {a_class}">Vite: {viteVersion}</a>
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
@props:runeswebkitVersion?: string;
@props:runaticsVersion?: string;
@props:runesMetaTagsVersion?: string;
@props:svelteVersion?: string;
@props:svelteKitVersion?: string;
@props:svelte5uilib?: string;
@props:svelteRuneHighlight?: string;
@props:viteVersion?: string;
-->
