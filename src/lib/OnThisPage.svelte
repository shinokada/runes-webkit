<script lang="ts">
  interface LinkType {
    name: string;
    href?: string;
    rel?: string;
    active?: boolean;
  }

  import { Dropdown, DropdownItem, DropdownDivider, uiHelpers } from 'svelte-5-ui-lib';
  import { ChevronDownSolid } from '$lib';
  import { sineIn } from 'svelte/easing';

  let transitionParams = {
    y: 0,
    duration: 200,
    easing: sineIn
  };

  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;

	$effect(() => {
		// this can be done adding nav.navStatus directly to DOM element
		// without using effect
		dropdownStatus = dropdown.isOpen;
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

<div class="o_t_p_div">
<button onclick={dropdown.toggle} class='flex'>
  On this page
  <ChevronDownSolid class="o_t_p_svg" />
</button>
<div use:init>
    <Dropdown dropdownStatus={dropdownStatus} closeDropdown={closeDropdown} {transitionParams} divclass="o_t_p_dropdown_div" ulclass="o_t_p_ul">
      {#snippet children()}
      <DropdownItem href="#top">Return to top</DropdownItem>
      <DropdownDivider />
      {#each headings as { rel, href, name }}
        <DropdownItem liclass='o_t_p_li'>
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
