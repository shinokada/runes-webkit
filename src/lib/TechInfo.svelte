<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ClassValue } from "svelte/elements";
  import { cn } from "$lib";
  import { Card, List, Li } from "flowbite-svelte";

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
    class?: ClassValue;
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
    cardsize = "xl",
    class: className,
    ...restProps
  }: Props = $props();
</script>

<h2 class={cn("my-8 flex justify-center", h2Class)}>{title}</h2>

<div class={cn("mx-auto grid max-w-5xl grid-cols-1", divClass)}>
  <Card size={cardsize} class={cn("dark_bg_theme p-6", className)} {...restProps}>
    <List tag="ul" class={cn("text-lg dark:text-gray-400", ulClass)}>
      {#if pkgName && pkgVersion && repoUrl}
        <Li class={cn("hover:text-primary-700 hover:underline", liClass)}>
          <a href={repoUrl} class={cn("me-4 hover:underline md:me-6", aClass)}
            >{pkgName[0].toUpperCase() + pkgName.slice(1)} : {pkgVersion}</a
          >
        </Li>
      {/if}
      {#if runaticsVersion}
        <Li class={cn("hover:text-primary-700 hover:underline", liClass)}>
          <a
            href="https://runatics.codewithshin.com/"
            class={cn("me-4 hover:underline md:me-6", aClass)}>Runatics: {runaticsVersion}</a
          >
        </Li>
      {/if}
      {#if runesMetaTagsVersion}
        <Li class={cn("hover:text-primary-700 hover:underline", liClass)}>
          <a
            href="https://runes-meta-tags.codewithshin.com/"
            class={cn("me-4 hover:underline md:me-6", aClass)}
            >Runes Meta Tags: {runesMetaTagsVersion}</a
          >
        </Li>
      {/if}
      {#if svelteRuneHighlightVersion}
        <Li class={cn("hover:text-primary-700 hover:underline", liClass)}>
          <a
            href="https://svelte-rune-highlight.codewithshin.com/"
            class={cn("me-4 hover:underline md:me-6", aClass)}
            >Svelte Rune Highlight: {svelteRuneHighlightVersion}</a
          >
        </Li>
      {/if}
      {#if runeswebkitVersion}
        <Li class={cn("hover:text-primary-700 hover:underline", liClass)}>
          <a
            href="https://runes-webkit.codewithshin.com/"
            class={cn("me-4 hover:underline md:me-6", aClass)}>Runes Webkit: {runeswebkitVersion}</a
          >
        </Li>
      {/if}
      {#if svelteVersion}
        <Li class={cn("hover:text-primary-700 hover:underline", liClass)}>
          <a href="https://svelte.dev/" class={cn("me-4 hover:underline md:me-6", aClass)}
            >Svelte: {svelteVersion}</a
          >
        </Li>
      {/if}
      {#if svelteKitVersion}
        <Li class={cn("hover:text-primary-700 hover:underline", liClass)}>
          <a
            href="https://kit.svelte.dev/docs/introduction"
            class={cn("me-4 hover:underline md:me-6", aClass)}>SvelteKit: {svelteKitVersion}</a
          >
        </Li>
      {/if}
      {#if flowbitesvelteVersion}
        <Li class={cn("hover:text-primary-700 hover:underline", liClass)}>
          <a href="https://flowbite-svelte.com/" class={cn("me-4 hover:underline md:me-6", aClass)}
            >Flowbite Svelte: {flowbitesvelteVersion}</a
          >
        </Li>
      {/if}
      {#if viteVersion}
        <Li class={cn("hover:text-primary-700 hover:underline", liClass)}>
          <a href="https://vitejs.dev/" class={cn("me-4 hover:underline md:me-6", aClass)}
            >Vite: {viteVersion}</a
          >
        </Li>
      {/if}
      {#if tailwindcssVersion}
        <Li class={cn("hover:text-primary-700 hover:underline", liClass)}>
          <a href="https://tailwindcss.com/docs" class={cn("me-4 hover:underline md:me-6", aClass)}
            >Tailwindcss: {tailwindcssVersion}</a
          >
        </Li>
      {/if}
      {#if children}
        {@render children()}
      {/if}
    </List>
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
@props:class: string;
-->
