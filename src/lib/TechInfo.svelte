<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { Card } from 'svelte-5-ui-lib';
  // import pkg from '../../package.json' assert { type: 'json' };
  import svelte5UiLibPackage from 'svelte-5-ui-lib/package.json' assert { type: 'json' };
  import sveltePackage from 'svelte/package.json' assert { type: 'json' };
  import svelteKitPackage from '@sveltejs/kit/package.json' assert { type: 'json' };
  import vitePackage from 'vite/package.json' assert { type: 'json' };
  import svelteRuneHighlightPackage from 'svelte-rune-highlight/package.json' assert { type: 'json' };
  // import { removeHyphensAndCapitalize } from './helper';
  interface Props{
    children?:Snippet;
    pkgName?:string;
    pkgVersion?:string;
    repoUrl?:string;
    h2class?:string;
    title?:string;
    divclass?:string;
    ulclass?:string;
    liclass?:string;
    aclass?:string;
    cardsize?:"xl" | "xs" | "sm" | "md" | "lg" | undefined;
  }
  let { children, pkgName, pkgVersion, repoUrl, h2class, 
    title = 'Technical information about this website', 
    divclass, ulclass, liclass, aclass, cardsize = 'xl' }:Props = $props();
  // const pkgName = pkg.name;
  // const pkgVersion = pkg.version;
  const h2Cls = twMerge('flex justify-center my-8', h2class);
  const divCls = twMerge('grid grid-cols-1', divclass);
  const ulCls = twMerge('m-4 list-disc p-4 text-left text-lg dark:text-gray-400', ulclass);
  const liCls = twMerge('hover:text-red-700 hover:underline', liclass);
  const aCls = twMerge('me-4 hover:underline md:me-6', aclass);
  const svelte5uilib = svelte5UiLibPackage.version;
  const svelteRuneHighlight = svelteRuneHighlightPackage.version;
  const svelteVersion = sveltePackage.version;
  const svelteKitVersion = svelteKitPackage.version;
  const viteVersion = vitePackage.version;
</script>

<h2 class={h2Cls}>{title}</h2>

<div class={divCls}>
  <Card size={cardsize}>
    <ul class={ulCls}>
      {#if pkgName && pkgVersion && repoUrl}
      <li class={liCls}>
        <a href={repoUrl} class="{aCls}">{pkgName} : {pkgVersion}</a>
      </li>
      {/if}
      {#if svelte5uilib}
      <li class={liCls}>
        <a href="https://svelte-5-ui-lib.codewithshin.com/" class={aCls}>Svelte 5 UI Lib: {svelte5uilib}</a>
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
      {#if viteVersion}
      <li class={liCls}>
        <a href="https://vitejs.dev/" class={aCls}>Vite: {viteVersion}</a>
      </li>
      {/if}
      {#if svelteRuneHighlight}
      <li class={liCls}>
        <a href="https://vitejs.dev/" class={aCls}>Svelte Rune Highlight: {svelteRuneHighlight}</a>
      </li>
      {/if}
      {#if children}
        {@render children()}
      {/if}
    </ul>
  </Card>
</div>
