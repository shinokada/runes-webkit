<script lang="ts">
  import {Anchor} from '$lib';
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    class?: string | undefined | null;
  }
  let { children, class: h1Class = 'group relative' }: Props = $props();
</script>

<Anchor tag="h1" wrapperClass={h1Class}>
  {@render children()}
</Anchor>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop children
@prop class: h1Class = 'group relative'
-->
