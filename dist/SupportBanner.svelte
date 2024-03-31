<script>import { Banner } from "svelte-5-ui-lib";
let { children } = $props();
</script>

<Banner id="default-banner" dismissable={false} divclass='max-w-3xl mt-2 mx-auto p-0'>
  <p class="flex items-center gap-4 text-lg font-normal text-gray-900 dark:text-gray-100">
      {@render children()}
  </p>
</Banner>

<!--
@component
[Go to docs](https://svelte-icon-webkit.codewithshin.com/)
## Props
@props: children: Snippet;
-->
