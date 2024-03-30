<script lang="ts">
  import { Banner } from 'svelte-5-ui-lib';
  import type { Snippet } from 'svelte';
  interface Props{
    children: Snippet;
  }
  let { children }: Props = $props();
</script>

<Banner id="default-banner" dismissable={false} divclass='max-w-3xl mt-4 mx-auto p-2'>
  <p class="flex items-center gap-4 text-lg font-normal text-gray-900 dark:text-gray-100">
      {@render children()}
  </p>
</Banner>