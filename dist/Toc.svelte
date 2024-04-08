<script lang="ts">import { twMerge } from "tailwind-merge";
let { headingSelector, extract, divFixed, aClass, ulClass, divFlex, h4Class } = $props();
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
const aCls = twMerge("inline-block border-l border-white duration-200 hover:text-gray-900 transition-none dark:text-gray-300 dark:hover:text-gray-400 hover:border-gray-300 after:content-['#'] after:text-primary-700 dark:after:text-primary-700 dark:border-gray-900 dark:hover:border-gray-700 after:ml-2 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-100", aClass);
const ulCls = twMerge("overflow-x-hidden font-medium text-gray-500 dark:text-gray-400 space-y-2.5", ulClass);
const divFixedCls = twMerge("fixed top-24 bg-white dark:bg-neutral-900 right-8 flex-none hidden w-64 pl-4 xl:text-sm xl:block right-0", divFixed);
const divFlexCls = twMerge("flex overflow-y-auto sticky top-12 flex-col justify-between pb-6 h-[calc(100vh-5rem)]", divFlex);
const h4Cls = twMerge("pl-2.5 my-4 text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-white", h4Class);
</script>

<div class="relative">
  <div
    use:init
    class="{divFixedCls}"
  >
    {#if headings.length}
      <div
        class={divFlexCls}
      >
        <div class="mb-8">
          <h4 class={h4Cls}>
            On this page
          </h4>
          <nav>
            <ul class={ulCls}>
              {#each headings as { rel, href, name }}
                <li>
                  <a {href} class="{indent(rel)} {aCls}">{name}</a>
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
[Go to docs](https://svelte-icon-webkit.codewithshin.com/)
## Props
@props: headingSelector: string;
@props:extract: (x
@props:divFixed?: string;
@props:aClass?: string;
@props:ulClass?: string;
@props:divFlex?: string;
@props:h4Class?: string;
-->
