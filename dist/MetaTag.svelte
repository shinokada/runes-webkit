<script lang="ts">import { removeHyphensAndCapitalize } from "./";
let {
  title = removeHyphensAndCapitalize(__NAME__),
  description,
  keywords,
  url = `https://${__NAME__}.codewithshin.com/`,
  image = `https://open-graph-vercel.vercel.app/api/${__NAME__}`,
  imageAlt = removeHyphensAndCapitalize(__NAME__),
  imageHeight = "630",
  imageWidth = "1200",
  creator = "@shinokada"
} = $props();
</script>

<svelte:head>
  <title>{title}</title>
  <meta
    name="description"
    content="{description}"
  />
  <meta name="keywords" content="{keywords}" />
  <meta name="robots" content="index,follow" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:creator" content="{creator}" />
  <meta name="twitter:title" content="{title}" />
  <meta
    name="twitter:description"
    content="{description}"
  />
  <meta
    name="twitter:image"
    content="{image}"
  />
  <meta name="twitter:image:alt" content="{imageAlt}" />
  <meta property="og:url" content="{url}" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="{title}" />
  <meta
    property="og:description"
    content="{description}"
  />
  <meta
    property="og:image"
    content="{image}"
  />
  <meta property="og:image:alt" content="{imageAlt}" />
  <meta property="og:image:width" content="{imageWidth}" />
  <meta property="og:image:height" content="{imageHeight}" />
  <meta property="og:site_name" content="{title}" />
</svelte:head>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: title?: string;
@props:description?: string;
@props:keywords?: string;
@props:url?: string;
@props:image?: string;
@props:imageAlt?: string;
@props:imageWidth?: string;
@props:imageHeight?: string;
@props:creator?: string;
-->
