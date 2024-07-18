<script lang="ts">
  import Anchor from './Anchor.svelte';
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    class?: string;
  }
  let { children, class: h2Class = 'group relative' }: Props = $props();
</script>

<Anchor tag="h2" wrapperClass={h2Class}>
  {@render children()}
</Anchor>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop children
@prop class: h2Class = 'group relative'
-->
