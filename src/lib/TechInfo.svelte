<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { Card } from 'svelte-5-ui-lib';

  interface Props {
    children?: Snippet;
    pkgName?: string;
    pkgVersion?: string;
    repoUrl?: string;
    title?: string;
    t_i_h2?: string;
    t_i_div?: string;
    t_i_ul?: string;
    t_i_li?: string;
    t_i_a?: string;
    cardsize?: 'xl' | 'xs' | 'sm' | 'md' | 'lg' | undefined;
    runeswebkitVersion?: string;
    runaticsVersion?: string;
    runesMetaTagsVersion?: string;
    svelteVersion?: string;
    svelteKitVersion?: string;
    svelte5uilib?: string;
    svelteRuneHighlight?: string;
    viteVersion?: string;
  }
  let {
    children,
    pkgName,
    pkgVersion,
    runeswebkitVersion,
    runaticsVersion,
    runesMetaTagsVersion,
    svelteVersion,
    svelteKitVersion,
    svelte5uilib,
    svelteRuneHighlight,
    viteVersion,
    repoUrl,
    title = 'Technical information about this website',
    t_i_h2,
    t_i_div,
    t_i_ul,
    t_i_li,
    t_i_a,
    cardsize = 'xl'
  }: Props = $props();

  let li_class = twMerge('hover:text-red-700 hover:underline _t_i_li_', t_i_li);
  let a_class = twMerge('me-4 hover:underline md:me-6 _t_i_a_', t_i_a);
</script>

<h2 class="{twMerge('_t_i_h2_ my-8 flex justify-center', t_i_h2)} ">{title}</h2>

<div class={twMerge('_t_i_div_ mx-auto grid max-w-5xl grid-cols-1', t_i_div)}>
  <Card size={cardsize}>
    <ul
      class="{twMerge('_t_i_ul_ m-4 list-disc p-4 text-left text-lg dark:text-gray-400', t_i_ul)} "
    >
      {#if pkgName && pkgVersion && repoUrl}
        <li class={li_class}>
          <a href={repoUrl} class={a_class}
            >{pkgName[0].toUpperCase() + pkgName.slice(1)} : {pkgVersion}</a
          >
        </li>
      {/if}
      {#if runaticsVersion}
        <li class={li_class}>
          <a href="https://runatics.codewithshin.com/" class={a_class}
            >Runatics: {runaticsVersion}</a
          >
        </li>
      {/if}
      {#if runesMetaTagsVersion}
        <li class={li_class}>
          <a href="https://runes-meta-tags.codewithshin.com/" class={a_class}
            >Runes Meta Tags: {runesMetaTagsVersion}</a
          >
        </li>
      {/if}
      {#if svelteRuneHighlight}
        <li class={li_class}>
          <a href="https://svelte-rune-highlight.codewithshin.com/" class={a_class}
            >Svelte Rune Highlight: {svelteRuneHighlight}</a
          >
        </li>
      {/if}
      {#if runeswebkitVersion}
        <li class={li_class}>
          <a href="https://runes-webkit.codewithshin.com/" class={a_class}
            >Runes Webkit: {runeswebkitVersion}</a
          >
        </li>
      {/if}
      {#if svelteVersion}
        <li class={li_class}>
          <a href="https://svelte-5-preview.vercel.app/docs/introduction" class={a_class}
            >Svelte: {svelteVersion}</a
          >
        </li>
      {/if}
      {#if svelteKitVersion}
        <li class={li_class}>
          <a href="https://kit.svelte.dev/docs/introduction" class={a_class}
            >SvelteKit: {svelteKitVersion}</a
          >
        </li>
      {/if}
      {#if svelte5uilib}
        <li class={li_class}>
          <a href="https://svelte-5-ui-lib.codewithshin.com/" class={a_class}
            >Svelte 5 UI Lib: {svelte5uilib}</a
          >
        </li>
      {/if}
      {#if viteVersion}
        <li class={li_class}>
          <a href="https://vitejs.dev/" class={a_class}>Vite: {viteVersion}</a>
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
@prop children
@prop pkgName
@prop pkgVersion
@prop runeswebkitVersion
@prop runaticsVersion
@prop runesMetaTagsVersion
@prop svelteVersion
@prop svelteKitVersion
@prop svelte5uilib
@prop svelteRuneHighlight
@prop viteVersion
@prop repoUrl
@prop title = 'Technical information about this website'
@prop t_i_h2
@prop t_i_div
@prop t_i_ul
@prop t_i_li
@prop t_i_a
@prop cardsize = 'xl'
-->
