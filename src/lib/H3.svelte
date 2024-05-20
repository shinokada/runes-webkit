<script lang="ts">
  import Anchor from './Anchor.svelte';
  import { twMerge } from 'tailwind-merge';
  import type { Snippet } from 'svelte';
  interface Props {
    children: Snippet;
    h3_h3?: string;
  }
  let { children, h3_h3 }: Props = $props();
</script>

<Anchor
  tag="h3"
  a_wrapper={twMerge('text-gray-900 dark:text-white leading-tight text-xl font-boldh3_h3', h3_h3)}
>
  {@render children()}
</Anchor>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop children
@prop h3_h3
-->
