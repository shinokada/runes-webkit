<script lang="ts">import { Toc, extract } from "./";
import { twMerge } from "tailwind-merge";
let { children, d_p_div_1, d_p_div_2, d_p_div_3, d_p_main, headingSelector = "#mainContent > :where(h2, h3)" } = $props();
</script>

<main class="{twMerge('flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible _d_p_main_', d_p_main)}" id="top">
  <div class="flex w-full _d_p_div_1_">
    <div
      class="{twMerge('flex flex-col max-w-4xl mx-auto px-4 min-w-0 lg:px-4 xl:pb-24 lg:pb-16 divide-y divide-gray-200 dark:divide-gray-800 _d_p_div_2_' , d_p_div_2)}"
    >
      <div id="mainContent" class="{twMerge('pb-20 pr-8 2xl:pr-0 _d_p_div_3_', d_p_div_3)}">
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
@props:d_p_main?: string;
@props:d_p_div_1?: string;
@props:d_p_div_2?: string;
@props:d_p_div_3?: string;
-->
