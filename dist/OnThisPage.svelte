<script>import { Dropdown, DropdownItem, DropdownDivider, uiHelpers } from "svelte-5-ui-lib";
import { ChevronDownSolid } from "./";
let dropdown = uiHelpers();
let isOpen = $state(false);
let toggle = dropdown.toggle;
let close = dropdown.close;
$effect(() => {
  isOpen = dropdown.isOpen;
});
export const extract = (x) => ({
  name: x.textContent ?? ""
});
let { headingSelector } = $props();
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

<button onclick={toggle}
  class="xl:hidden z-20 fixed top-20 p-2 right-6 flex dark:bg-neutral-900 dark:text-white"
>
  On this page
  <ChevronDownSolid class="flex-inline w-5 h-5 ms-2 mt-1 text-white dark:text-white" />
</button>
<div class="relative" use:init>
    <Dropdown {isOpen} divclass="absolute right-[27px]">
      {#snippet children()}
      <DropdownItem href="#top" aclass="ml-2">Return to top</DropdownItem>
      <DropdownDivider />
      {#each headings as { rel, href, name }}
        <DropdownItem>
          <a {href} class={indent(rel)}>{name}</a>
        </DropdownItem>
      {/each}
      {/snippet}
    </Dropdown>
</div>

<!--
@component
[Go to docs](https://svelte-icon-webkit.codewithshin.com/)
## Props
@props: 
-->
