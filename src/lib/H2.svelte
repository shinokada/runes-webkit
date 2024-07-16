<script lang="ts">
  import Anchor from './Anchor.svelte';
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    h2Class?: string;
  }
  let { children, h2Class = 'text-gray-900 dark:text-white leading-tight text-2xl font-bold' }: Props = $props();
</script>

<Anchor
  tag="h2"
  wrapperClass={h2Class}
>
  {@render children()}
</Anchor>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop children
@prop h2Class = 'text-gray-900 dark:text-white leading-tight text-2xl font-bold'
-->
