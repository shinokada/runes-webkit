<script lang="ts">
  import { Banner } from 'svelte-5-ui-lib';
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    divClass?: string | undefined;
    pClass?: string | undefined;
    attributes?: any;
  }
  let {
    children,
    divClass = 'max-w-3xl mt-8 mx-auto p-2',
    pClass = 'flex items-center gap-4 text-lg font-normal text-gray-900 dark:text-gray-100',
    ...attributes
  }: Props = $props();
</script>

<Banner id="default-banner" dismissable={false} {divClass} {...attributes}>
  <p class={pClass}>
    {@render children()}
  </p>
</Banner>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop children
@prop divClass = 'max-w-3xl mt-8 mx-auto p-2 _support_div_'
@prop pClass = 'flex items-center gap-4 text-lg font-normal text-gray-900 dark:text-gray-100 _support_p_'
@prop ...attributes
-->
