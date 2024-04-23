<script lang="ts">import { Dropdown, DropdownItem, DropdownDivider, uiHelpers } from "svelte-5-ui-lib";
import { ChevronDownSolid } from "./";
import { sineIn } from "svelte/easing";
import { twMerge } from "tailwind-merge";
let transitionParams = {
  y: 0,
  duration: 200,
  easing: sineIn
};
let dropdown = uiHelpers();
let dropdownStatus = $state(false);
let closeDropdown = dropdown.close;
$effect(() => {
  dropdownStatus = dropdown.isOpen;
});
let { headingSelector, extract, o_t_p_div, o_t_p_ul, o_t_p_li, o_t_p_svg, o_t_p_dropdown_div } = $props();
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
  return name === "h2" ? "pl-2.5" : "pl-4";
}
function toc() {
  if (typeof document === `undefined`)
    return;
  headings = [...document.querySelectorAll(headingSelector)].map(extract).filter((x) => x.name);
}
</script>

<div class="{twMerge('xl:hidden z-20 fixed top-20 p-2 right-6 flex dark_bg_theme dark:text-white _o_t_p_div_', o_t_p_div)}">
<button onclick={dropdown.toggle} class='flex'>
  On this page
  <ChevronDownSolid class="{twMerge('w-4 h-4 ms-2 mt-1 text-white dark:text-white _o_t_p_svg_', o_t_p_svg)}" />
</button>
<div use:init>
    <Dropdown dropdownStatus={dropdownStatus} closeDropdown={closeDropdown} {transitionParams} divclass="{twMerge('w-60 absolute right-[8px] top-[30px] dark_bg_theme border border-gray-700 _o_t_p_dropdown_div_', o_t_p_dropdown_div)}" ulclass="{o_t_p_ul}">
      {#snippet children()}
      <DropdownItem href="#top">Return to top</DropdownItem>
      <DropdownDivider />
      {#each headings as { rel, href, name }}
        <DropdownItem liclass={twMerge('my-2 hover:text-primary-400 _o_t_p_li_', o_t_p_li)}>
          <a {href} class="{indent(rel)}">{name}</a>
        </DropdownItem>
      {/each}
      {/snippet}
    </Dropdown>
</div>
</div>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: headingSelector: string;
@props:extract: (x
@props:o_t_p_div?: string;
@props:o_t_p_ul?: string;
@props:o_t_p_svg?: string;
@props:o_t_p_li?: string;
@props:o_t_p_dropdown_div?: string;
-->
