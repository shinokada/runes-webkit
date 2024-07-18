<script lang="ts">
  import Anchor from './Anchor.svelte';
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    h3Class?: string;
  }
  let { children, h3Class = 'group relative' }: Props = $props();
</script>

<Anchor tag="h3" wrapperClass={h3Class}>
  {@render children()}
</Anchor>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop children
@prop h3Class = 'group relative'
-->
