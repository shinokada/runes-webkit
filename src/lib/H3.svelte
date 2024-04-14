<script lang="ts">
  import Anchor from './Anchor.svelte';
  import type { Snippet } from "svelte";
  interface Props{
    children: Snippet;
  }
  let { children }: Props = $props();
</script>

<Anchor tag="h3" class="h3_h3"
  >
  {@render children()}
  </Anchor
>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: children: Snippet;
-->
