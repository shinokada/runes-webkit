<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  interface Props {
    children: Snippet;
    c_code?: string;
  }
  let { children, c_code }: Props = $props();
</script>

<code class={twMerge('_c_code_ text-primary-700 dark:text-primary-400', c_code)}>
  {@render children()}
</code>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop children
@prop c_code
-->
