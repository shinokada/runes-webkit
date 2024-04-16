<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Toc, extract } from '$lib'

  interface Props{
    children: Snippet;
    headingSelector?: string;
  }

  let { children, headingSelector = '#mainContent > :where(h2, h3)' }: Props = $props();
 
</script>

<main class="d_p_main" id="top">
  <div class="d_p_div_1">
    <div
      class="d_p_div_2"
    >
      <div id="mainContent" class="d_p_div_3">
        {@render children()}
      </div>
    </div>
    <Toc {extract} {headingSelector} />
  </div>
</main>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: children: Snippet;
@props:headingSelector?: string;
-->
