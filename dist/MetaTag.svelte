<script lang="ts">import { removeHyphensAndCapitalize } from "./";
let {
  title,
  robots = true,
  description,
  keywords,
  twitter,
  og
} = $props();
</script>

<svelte:head>
  {#if title}
  <title>{title}</title>
  {/if}
  {#if description}
  <meta name="description" content="{description}"
  />
  {/if}
  {#if keywords}
  <meta name="keywords" content="{keywords}" />
  {/if}
  {#if robots !==false}
  <meta name="robots" content="index,follow" />
  {/if}
  {#if twitter}
    {#if twitter.card}
    <meta name="twitter:card" content="{twitter.card}" />
    {/if}
    {#if twitter.handle}
      <meta name="twitter:creator" content={twitter.handle} />
    {/if}
    {#if twitter.site}
    <meta name="twitter:title" content="{twitter.title}" />
    {/if}
    {#if twitter.description}
    <meta
      name="twitter:description"
      content="{twitter.description}"
    />
    {/if}
    {#if twitter.image}
    <meta
      name="twitter:image"
      content="{twitter.image}"
    />
    {/if}
    {#if twitter.imageAlt}
    <meta name="twitter:image:alt" content="{twitter.imageAlt}" />
    {/if}
  {/if}
  {#if og}
    {#if og.url}
    <meta property="og:url" content="{og.url}" />
    {/if}
    {#if og.type}
    <meta property="og:type" content="{og.type}" />
    {/if}
    {#if og.title}
    <meta property="og:title" content="{og.title}" />
    {/if}
    {#if og.description}
    <meta
      property="og:description"
      content="{og.description}"
    />
    {/if}
    {#if og.image}
    <meta
      property="og:image"
      content="{og.image}"
    />
    {/if}
    {#if og.imageAlt}
    <meta property="og:image:alt" content="{og.imageAlt}" />
    {/if}
    {#if og.imageWidth}
    <meta property="og:image:width" content="{og.imageWidth}" />
    {/if}
    {#if og.imageHeight}
    <meta property="og:image:height" content="{og.imageHeight}" />
    {/if}
    {#if og.siteName}
    <meta property="og:site_name" content="{og.siteName}" />
    {/if}
  {/if}
</svelte:head>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: title?: string;
@props:robots?:  boolean; = true;
@props:description?: string;
@props:keywords?: string;
@props:twitter?: TwitterType;
@props:og?: OgType;
@props:url?: string;
@props:imageWidth?: string;
@props:imageHeight?: string;
@props:creator?: string;
-->
