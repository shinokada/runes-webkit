<script lang="ts">import { twMerge } from "tailwind-merge";
let { children, class: classname } = $props();
</script>

<div
  class={twMerge(
    'mx-auto max-w-4xl rounded-md border border-gray-200 bg-white bg-gradient-to-r p-6 dark:border-gray-600 dark:bg-gray-900',
    classname
  )}
>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:class?: string | undefined;
-->
