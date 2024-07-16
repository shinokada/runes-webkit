<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    children: Snippet;
    classDiv?: string | undefined | null;
    divClass?: string | undefined | null;
  }

  let { 
    children, 
    classDiv = 'mx-auto max-w-4xl rounded-md border border-gray-200 bg-white bg-gradient-to-r p-6 dark:border-gray-600 dark:bg-gray-900',
    divClass, 
    ...attributes 
    }: Props = $props();
</script>

<div class={twMerge(classDiv, divClass)} {...attributes}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop children
@prop classDiv = 'mx-auto max-w-4xl rounded-md border border-gray-200 bg-white bg-gradient-to-r p-6 dark:border-gray-600 dark:bg-gray-900'
@prop divClass
@prop ...attributes
-->
