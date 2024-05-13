<script lang="ts">
  import { Banner } from 'svelte-5-ui-lib';
  import type { Snippet } from 'svelte';

  interface Props{
    children: Snippet;
    divclass?: string;
    pclass?: string;
  }
  let { children, divclass = 'max-w-3xl mt-8 mx-auto p-2 _support_div_', pclass = 'flex items-center gap-4 text-lg font-normal text-gray-900 dark:text-gray-100 _support_p_', ...attributes }: Props = $props();

</script>

<Banner id="default-banner" dismissable={false} {divclass} {...attributes}>
  <p class="{pclass}">
      {@render children()}
  </p>
</Banner>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop children
@prop divclass = 'max-w-3xl mt-8 mx-auto p-2 _support_div_'
@prop pclass = 'flex items-center gap-4 text-lg font-normal text-gray-900 dark:text-gray-100 _support_p_'
@prop ...attributes
-->
