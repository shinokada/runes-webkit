<script>import { Dropdown, DropdownItem, DropdownDivider, uiHelpers } from "svelte-5-ui-lib";
import { ChevronDownSolid } from "./";
let dropdown = uiHelpers();
let isOpen = $state(false);
let toggle = dropdown.toggle;
let close = dropdown.close;
$effect(() => {
  isOpen = dropdown.isOpen;
});
let { headingSelector, extract } = $props();
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

<div class="xl:hidden z-20 fixed top-20 p-2 right-6 flex dark:bg-neutral-900 dark:text-white">
<button onclick={toggle} class='flex'>
  On this page
  <ChevronDownSolid class="flex-inline w-4 h-4 ms-2 mt-1 text-white dark:text-white" />
</button>
<div use:init>
    <Dropdown {isOpen} divclass="w-60 absolute right-[8px] top-[30px]">
      {#snippet children()}
      <DropdownItem href="#top">Return to top</DropdownItem>
      <DropdownDivider />
      {#each headings as { rel, href, name }}
        <DropdownItem liclass='my-2 hover:text-primary-400'>
          <a {href} class="{indent(rel)}">{name}</a>
        </DropdownItem>
      {/each}
      {/snippet}
    </Dropdown>
</div>
</div>

<!--
@component
[Go to docs](https://svelte-icon-webkit.codewithshin.com/)
## Props
@props: headingSelector: string;
@props:extract: (x
-->
