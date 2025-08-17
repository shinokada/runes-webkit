<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ClassValue } from "svelte/elements";
  import { cn } from "$lib";
  import { Card } from "flowbite-svelte";

  interface Props {
    children?: Snippet;
    pkgName?: string;
    pkgVersion?: string;
    repoUrl?: string;
    title?: string;
    h2Class?: ClassValue;
    divClass?: ClassValue;
    ulClass?: ClassValue;
    liClass?: ClassValue;
    aClass?: ClassValue;
    cardsize?: "xl" | "xs" | "sm" | "md" | "lg" | undefined;
    runeswebkitVersion?: string;
    runaticsVersion?: string;
    runesMetaTagsVersion?: string;
    svelteVersion?: string;
    svelteKitVersion?: string;
    flowbitesvelteVersion?: string;
    svelteRuneHighlightVersion?: string;
    viteVersion?: string;
    tailwindcssVersion?: string;
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
    flowbitesvelteVersion,
    svelteRuneHighlightVersion,
    viteVersion,
    tailwindcssVersion,
    repoUrl,
    title = "Technical information about this website",
    h2Class,
    divClass,
    ulClass,
    liClass,
    aClass,
    cardsize = "xl"
  }: Props = $props();
</script>

<h2 class={cn("my-8 flex justify-center", h2Class)}>{title}</h2>

<div class={cn("mx-auto grid max-w-5xl grid-cols-1", divClass)}>
  <Card size={cardsize} class="p-4">
    <ul class={cn("m-4 list-disc p-4 text-left text-lg dark:text-gray-400", ulClass)}>
      {#if pkgName && pkgVersion && repoUrl}
        <li class={cn("hover:text-red-700 hover:underline", liClass)}>
          <a href={repoUrl} class={cn("me-4 hover:underline md:me-6", aClass)}
            >{pkgName[0].toUpperCase() + pkgName.slice(1)} : {pkgVersion}</a
          >
        </li>
      {/if}
      {#if runaticsVersion}
        <li class={cn("hover:text-red-700 hover:underline", liClass)}>
          <a
            href="https://runatics.codewithshin.com/"
            class={cn("me-4 hover:underline md:me-6", aClass)}>Runatics: {runaticsVersion}</a
          >
        </li>
      {/if}
      {#if runesMetaTagsVersion}
        <li class={cn("hover:text-red-700 hover:underline", liClass)}>
          <a
            href="https://runes-meta-tags.codewithshin.com/"
            class={cn("me-4 hover:underline md:me-6", aClass)}
            >Runes Meta Tags: {runesMetaTagsVersion}</a
          >
        </li>
      {/if}
      {#if svelteRuneHighlightVersion}
        <li class={cn("hover:text-red-700 hover:underline", liClass)}>
          <a
            href="https://svelte-rune-highlight.codewithshin.com/"
            class={cn("me-4 hover:underline md:me-6", aClass)}
            >Svelte Rune Highlight: {svelteRuneHighlightVersion}</a
          >
        </li>
      {/if}
      {#if runeswebkitVersion}
        <li class={cn("hover:text-red-700 hover:underline", liClass)}>
          <a
            href="https://runes-webkit.codewithshin.com/"
            class={cn("me-4 hover:underline md:me-6", aClass)}>Runes Webkit: {runeswebkitVersion}</a
          >
        </li>
      {/if}
      {#if svelteVersion}
        <li class={cn("hover:text-red-700 hover:underline", liClass)}>
          <a href="https://svelte.dev/" class={cn("me-4 hover:underline md:me-6", aClass)}
            >Svelte: {svelteVersion}</a
          >
        </li>
      {/if}
      {#if svelteKitVersion}
        <li class={cn("hover:text-red-700 hover:underline", liClass)}>
          <a
            href="https://kit.svelte.dev/docs/introduction"
            class={cn("me-4 hover:underline md:me-6", aClass)}>SvelteKit: {svelteKitVersion}</a
          >
        </li>
      {/if}
      {#if flowbitesvelteVersion}
        <li class={cn("hover:text-red-700 hover:underline", liClass)}>
          <a href="https://flowbite-svelte.com/" class={cn("me-4 hover:underline md:me-6", aClass)}
            >Flowbite Svelte: {flowbitesvelteVersion}</a
          >
        </li>
      {/if}
      {#if viteVersion}
        <li class={cn("hover:text-red-700 hover:underline", liClass)}>
          <a href="https://vitejs.dev/" class={cn("me-4 hover:underline md:me-6", aClass)}
            >Vite: {viteVersion}</a
          >
        </li>
      {/if}
      {#if tailwindcssVersion}
        <li class={cn("hover:text-red-700 hover:underline", liClass)}>
          <a href="https://tailwindcss.com/docs" class={cn("me-4 hover:underline md:me-6", aClass)}
            >Tailwindcss: {tailwindcssVersion}</a
          >
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
@props: children: any;
@props:pkgName: any;
@props:pkgVersion: any;
@props:runeswebkitVersion: any;
@props:runaticsVersion: any;
@props:runesMetaTagsVersion: any;
@props:svelteVersion: any;
@props:svelteKitVersion: any;
@props:flowbitesvelteVersion: any;
@props:svelteRuneHighlightVersion: any;
@props:viteVersion: any;
@props:tailwindcssVersion: any;
@props:repoUrl: any;
@props:title: any = "Technical information about this website";
@props:h2Class: any;
@props:divClass: any;
@props:ulClass: any;
@props:liClass: any;
@props:aClass: any;
@props:cardsize: any = "xl";
-->
