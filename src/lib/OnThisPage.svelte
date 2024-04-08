<script lang="ts">
  interface LinkType {
    name: string;
    href?: string;
    rel?: string;
    active?: boolean;
  }

  import { Dropdown, DropdownItem, DropdownDivider, uiHelpers } from 'svelte-5-ui-lib';
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
  
  interface Props{
    headingSelector: string;
    extract: (x: HTMLElement) => LinkType;
  }

  let {headingSelector, extract }: Props = $props();

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
    return name === 'h2' ? 'pl-2.5' : 'pl-4';
  }

  function toc() {
    if (typeof document === `undefined`) return; // for SSR

    headings = [...document.querySelectorAll<HTMLElement>(headingSelector)]
      .map(extract)
      .filter((x) => x.name);
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
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: headingSelector: string;
@props:extract: (x
-->
