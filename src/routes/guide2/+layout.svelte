<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Toc, extract } from '$lib';

  interface Props {
    children: Snippet;
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

  let {
    children,
    title,
    description,
    keywords,
    url,
    image,
    imageAlt,
    imageHeight = '630',
    imageWidth = '1200',
    creator
  }: Props = $props();
</script>

<main class="mx-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible lg:pl-64">
  <div class="flex w-full">
    <div
      class="pb:12 flex min-w-0 max-w-3xl flex-col divide-y divide-gray-200 px-4 lg:px-8 lg:pb-16 xl:pb-24 2xl:ml-40 dark:divide-gray-800"
    >
      <div id="mainContent" class="pb-20">
        {@render children()}
      </div>
    </div>
    <Toc {extract} headingSelector="#mainContent > :where(h2, h3)" />
  </div>
</main>
