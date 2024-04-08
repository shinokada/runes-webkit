<script lang="ts">
  import type { Snippet } from "svelte";
  interface Props{
    children: Snippet;
  }
  let { children }: Props = $props();
</script>

<code class="text-primary-700 dark:text-primary-700">
  {@render children()}
</code>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: children: Snippet;
-->
