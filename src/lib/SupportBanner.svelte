<script lang="ts">
  import { Banner } from 'svelte-5-ui-lib';
  import type { Snippet } from 'svelte';

  interface Props{
    children: Snippet;
    divclass?: string;
    pclass?: string;
  }
  let { children, divclass = 'max-w-3xl mt-2 mx-auto p-0', pclass = 'flex items-center gap-4 text-lg font-normal text-gray-900 dark:text-gray-100', ...attributes }: Props = $props();

</script>

<Banner id="default-banner" dismissable={false} {divclass} {...attributes}>
  <p class="{pclass}">
      {@render children()}
  </p>
</Banner>

<!--
@component
[Go to docs](https://svelte-icon-webkit.codewithshin.com/)
## Props
@props: children: Snippet;
-->
