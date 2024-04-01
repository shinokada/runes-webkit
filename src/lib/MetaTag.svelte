<script lang="ts">
  interface Props {
    title?: string;
    description?: string;
    keywords?: string;
    url?: string;
    image?: string;
    imageAlt?: string;
    imageWidth?: string;
    imageHeight?: string;
    creator?: string;
  }
  let { title, description, keywords, url, image, imageAlt, imageHeight = '630', imageWidth = '1200', creator }: Props = $props();

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