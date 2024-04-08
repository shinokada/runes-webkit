<script lang="ts">import { Banner } from "svelte-5-ui-lib";
let { children, divclass = "max-w-3xl mt-8 mx-auto p-2", pclass = "flex items-center gap-4 text-lg font-normal text-gray-900 dark:text-gray-100", ...attributes } = $props();
</script>

<Banner id="default-banner" dismissable={false} {divclass} {...attributes}>
  <p class="{pclass}">
      {@render children()}
  </p>
</Banner>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: children: Snippet;
@props:divclass?: string;
@props:pclass?: string;
-->
