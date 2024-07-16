<script lang="ts">
  interface LinkType {
    name: string;
    href?: string;
    rel?: string;
    active?: boolean;
  }

  import { Dropdown, DropdownItem, DropdownDivider, uiHelpers } from 'svelte-5-ui-lib';
  import { ChevronDownOutline } from '$lib';
  import { sineIn } from 'svelte/easing';
  import { twMerge } from 'tailwind-merge';

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

  interface Props {
    headingSelector: string;
    extract: (x: HTMLElement) => LinkType;
    divClass?: string;
    classDiv?: string | undefined | null;
    ulClass?: string;
    svgClass?: string;
    classSvg?: string | undefined | null;
    liClass?: string;
    dropdownDivClass?: string;
    classDropdownDiv?: string | undefined | null;
  }

  let {
    headingSelector,
    extract,
    divClass,
    classDiv = 'fixed right-6 top-20 z-20 flex p-2 xl:hidden dark:text-white',
    ulClass,
    liClass = 'my-2 hover:text-primary-400',
    svgClass,
    classSvg = 'ms-2 mt-1 h-4 w-4 text-white dark:text-white',
    dropdownDivClass,
    classDropdownDiv= 'w-60 absolute right-[8px] top-[30px] dark_bg_theme border border-gray-700'
  }: Props = $props();

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

<div class={twMerge(classDiv, divClass )}>
  <button onclick={dropdown.toggle} class="flex">
    On this page
    <ChevronDownOutline
      class={twMerge( classSvg, svgClass)}
    />
  </button>
  <div use:init>
    <Dropdown
      {dropdownStatus}
      {closeDropdown}
      {transitionParams}
      divClass={twMerge(classDropdownDiv, dropdownDivClass)}
      {ulClass}
    >
      {#snippet children()}
        <DropdownItem href="#top">Return to top</DropdownItem>
        <DropdownDivider />
        {#each headings as { rel, href, name }}
          <DropdownItem {liClass}>
            <a {href} class={indent(rel)}>{name}</a>
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
@prop headingSelector
@prop extract
@prop divClass
@prop ulClass
@prop liClass
@prop svgClass
@prop dropdownDivClass
-->
