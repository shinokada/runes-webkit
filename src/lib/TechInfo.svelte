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
    h2Class?: string | undefined;
    divClass?: string | undefined;
    ulClass?: string | undefined;
    classUl?: string | undefined;
    liClass?: string | undefined;
    aClass?: string | undefined;
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
    h2Class = 'my-8 flex justify-center',
    divClass = 'mx-auto grid max-w-5xl grid-cols-1',
    ulClass,
    classUl = 'm-4 list-disc p-4 text-left text-lg dark:text-gray-400',
    liClass = 'hover:text-red-700 hover:underline',
    aClass = 'me-4 hover:underline md:me-6',
    cardsize = 'xl'
  }: Props = $props();
</script>

<h2 class={h2Class}>{title}</h2>

<div class={divClass}>
  <Card size={cardsize}>
    <ul class={twMerge(classUl, ulClass)}>
      {#if pkgName && pkgVersion && repoUrl}
        <li class={liClass}>
          <a href={repoUrl} class={aClass}
            >{pkgName[0].toUpperCase() + pkgName.slice(1)} : {pkgVersion}</a
          >
        </li>
      {/if}
      {#if runaticsVersion}
        <li class={liClass}>
          <a href="https://runatics.codewithshin.com/" class={aClass}>Runatics: {runaticsVersion}</a
          >
        </li>
      {/if}
      {#if runesMetaTagsVersion}
        <li class={liClass}>
          <a href="https://runes-meta-tags.codewithshin.com/" class={aClass}
            >Runes Meta Tags: {runesMetaTagsVersion}</a
          >
        </li>
      {/if}
      {#if svelteRuneHighlight}
        <li class={liClass}>
          <a href="https://svelte-rune-highlight.codewithshin.com/" class={aClass}
            >Svelte Rune Highlight: {svelteRuneHighlight}</a
          >
        </li>
      {/if}
      {#if runeswebkitVersion}
        <li class={liClass}>
          <a href="https://runes-webkit.codewithshin.com/" class={aClass}
            >Runes Webkit: {runeswebkitVersion}</a
          >
        </li>
      {/if}
      {#if svelteVersion}
        <li class={liClass}>
          <a href="https://svelte-5-preview.vercel.app/docs/introduction" class={aClass}
            >Svelte: {svelteVersion}</a
          >
        </li>
      {/if}
      {#if svelteKitVersion}
        <li class={liClass}>
          <a href="https://kit.svelte.dev/docs/introduction" class={aClass}
            >SvelteKit: {svelteKitVersion}</a
          >
        </li>
      {/if}
      {#if svelte5uilib}
        <li class={liClass}>
          <a href="https://svelte-5-ui-lib.codewithshin.com/" class={aClass}
            >Svelte 5 UI Lib: {svelte5uilib}</a
          >
        </li>
      {/if}
      {#if viteVersion}
        <li class={liClass}>
          <a href="https://vitejs.dev/" class={aClass}>Vite: {viteVersion}</a>
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
@prop h2Class = 'my-8 flex justify-center'
@prop divClass = 'mx-auto grid max-w-5xl grid-cols-1'
@prop ulClass
@prop classUl = 'm-4 list-disc p-4 text-left text-lg dark:text-gray-400'
@prop liClass = 'hover:text-red-700 hover:underline'
@prop aClass = 'me-4 hover:underline md:me-6'
@prop cardsize = 'xl'
-->
