<script lang="ts">import Anchor from "./Anchor.svelte";
import { twMerge } from "tailwind-merge";
let { children, h3_h3 } = $props();
</script>

<Anchor tag="h3" a_wrapper="{twMerge('text-gray-900 dark:text-white leading-tight text-xl font-boldh3_h3', h3_h3)}"
  >
  {@render children()}
  </Anchor
>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: children: Snippet;
@props:h3_h3?: string;
-->
