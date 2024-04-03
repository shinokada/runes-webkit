<script>import Anchor from "./Anchor.svelte";
let { children } = $props();
</script>

<Anchor tag="h3" class="text-gray-900 dark:text-white leading-tight text-xl font-bold"
  >
  {@render children()}
  </Anchor
>

<!--
@component
[Go to docs](https://svelte-icon-webkit.codewithshin.com/)
## Props
@props: children: Snippet;
-->
