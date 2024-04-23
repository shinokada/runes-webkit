<script lang="ts">import { twMerge } from "tailwind-merge";
let { headingSelector, extract, t_div_1, t_div_2, t_div_3, t_div_4, t_a, t_ul, t_h4 } = $props();
let headings = $state([]);
function init(_) {
  const observer = new MutationObserver(toc);
  observer.observe(document.body, { childList: true, subtree: true });
  return {
    destroy() {
      observer.disconnect();
    }
  };
}
function indent(name) {
  return name === "H2" ? "pl-2.5" : "pl-6";
}
function toc() {
  if (typeof document === `undefined`)
    return;
  headings = [...document.querySelectorAll(headingSelector)].map(extract).filter((x) => x.name);
}
</script>

<div class="{twMerge('flex-none hidden w-64 xl:text-sm xl:block _t_div_1_', t_div_1)} ">
  <div
    use:init
    class="{twMerge('fixed bg-white dark_bg_theme flex-none right-2 _t_div_2_', t_div_2)}"
  >
    {#if headings.length}
      <div
        class="{twMerge('flex overflow-y-auto flex-col justify-between h-[calc(100vh-168px)] _t_div_3_', t_div_3)}"
      >
        <div class="{twMerge('mb-8 p-4 _t_div_4_', t_div_4)}">
          <h4 class="{twMerge('pl-2.5 my-4 text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-white _t_h4_', t_h4)}">
            On this page
          </h4>
          <nav>
            <ul class="{twMerge('overflow-x-scroll font-medium text-gray-500 dark:text-gray-400 space-y-2.5 _t_ul_', t_ul)}">
              {#each headings as { rel, href, name }}
                <li>
                  <a {href} class="{indent(rel)} {twMerge('inline-block border-l border-white duration-200 hover:text-gray-900 transition-none dark:text-gray-300 dark:hover:text-gray-400 hover:border-gray-300 after:content-[\'#\'] after:text-primary-700 dark:after:text-primary-700 dark:border-gray-900 dark:hover:border-gray-700 after:ml-2 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-100 _t_a_', t_a)}">{name}</a>
                </li>
              {/each}
            </ul>
          </nav>
        </div>
      </div>
    {/if}
  </div>
</div>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: headingSelector: string;
@props:extract: (x
@props:t_a?: string;
@props:t_ul?: string;
@props:t_div_1?: string;
@props:t_div_2?: string;
@props:t_div_3?: string;
@props:t_div_4?: string;
@props:t_h4?: string;
-->
