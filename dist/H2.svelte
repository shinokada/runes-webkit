<script lang="ts">import Anchor from "./Anchor.svelte";
import { twMerge } from "tailwind-merge";
let { children, h2_h2 } = $props();
</script>

<Anchor tag="h2" a_wrapper="{twMerge('text-gray-900 dark:text-white leading-tight text-2xl font-bold _h2_h2_'), h2_h2}}"
  >
  {@render children()}
  </Anchor
>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: children: Snippet;
@props:h2_h2?: string;
-->
