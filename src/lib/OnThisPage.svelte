<script lang="ts">
  interface LinkType {
    name: string;
    href?: string;
    rel?: string;
    active?: boolean;
  }

  import { Button, Dropdown, DropdownItem, DropdownDivider, uiHelpers } from 'svelte-5-ui-lib';
  import { ChevronDownSolid } from '$lib';
  let dropdown = uiHelpers();

	let isOpen = $state(false);
	let toggle = dropdown.toggle;
	let close = dropdown.close;

	$effect(() => {
		// this can be done adding nav.navStatus directly to DOM element
		// without using effect
		isOpen = dropdown.isOpen;
	});
  

  export const extract: (x: HTMLElement) => LinkType = (x: HTMLElement) => ({
    name: x.textContent ?? ''
  });

  let {headingSelector}:{headingSelector: string} = $props();

  let headings: LinkType[] = $state([]);

  function init(_: any) {
    const observer: MutationObserver = new MutationObserver(toc);
    observer.observe(document.body, { childList: true, subtree: true });

    return {
      destroy() {
        observer.disconnect();
      }
    };
  }

  function indent(name: string | undefined) {
    return name === 'H2' ? 'pl-2.5' : 'pl-6';
  }

  function toc() {
    if (typeof document === `undefined`) return; // for SSR

    headings = [...document.querySelectorAll<HTMLElement>(headingSelector)]
      .map(extract)
      .filter((x) => x.name);
  }
</script>

<button onclick={toggle}
  class="xl:hidden z-20 fixed top-20 p-2 right-6 flex dark:bg-neutral-900 dark:text-white"
>
  On this page
  <ChevronDownSolid class="flex-inline w-5 h-5 ms-2 mt-1 text-white dark:text-white" />
</button>
<div class="relative">
    <Dropdown {isOpen} divclass="absolute -left-[27px]">
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