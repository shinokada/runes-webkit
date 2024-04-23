<script lang="ts">
  import type { Snippet } from "svelte";
  import { twMerge } from "tailwind-merge";
  interface Props{
    children: Snippet;
    c_code?: string;
  }
  let { children, c_code }: Props = $props();
</script>

<code class="{twMerge('text-primary-700 dark:text-primary-700 _c_code_', c_code)}">
  {@render children()}
</code>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: children: Snippet;
-->
