<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLElement> {
    children: Snippet;
    class?: string;
  }
  let { children, class: className = 'text-primary-700 dark:text-primary-400' }: Props = $props();
</script>

<code class={className}>
  {@render children()}
</code>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop children
@prop class: className = 'text-primary-700 dark:text-primary-400'
-->
