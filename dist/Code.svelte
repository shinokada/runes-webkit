<script lang="ts">import { twMerge } from "tailwind-merge";
let { children, c_code } = $props();
</script>

<code class="{twMerge('text-primary-700 dark:text-primary-700 _c_code_', c_code)}">
  {@render children()}
</code>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: children: Snippet;
@props:c_code?: string;
-->
