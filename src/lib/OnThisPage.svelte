<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { cn } from "$lib";
  import { Dropdown, DropdownItem, DropdownDivider } from "flowbite-svelte";
  import { ChevronDownOutline } from "$lib";
  import { onMount } from "svelte";

  interface LinkType {
    name: string;
    href?: string;
    rel?: string;
    active?: boolean;
  }

  interface Props {
    headingSelector: string;
    extract: (x: HTMLElement) => LinkType;
    divClass?: ClassValue;
    ulClass?: ClassValue;
    svgClass?: ClassValue;
    liClass?: ClassValue;
    dropdownDivClass?: ClassValue;
    btnClass?: ClassValue;
  }

  let { headingSelector, extract, divClass, liClass, svgClass, btnClass, dropdownDivClass }: Props =
    $props();

  const classDiv = "fixed right-6 top-20 z-20 flex p-2 xl:hidden dark:text-white";
  const classDropdownDiv =
    "w-60 absolute right-[8px] top-[30px] dark-bg-theme border border-gray-700";
  const classSvg = "ms-2 mt-1 h-4 w-4 text-white dark:text-white";
  const classLi = "my-2 hover:text-primary-400";
  const classBtn = "flex bg-white p-2 dark-bg-theme";

  let headings: LinkType[] = $state([]);
  let observer: MutationObserver | null = null;

  function updateToc() {
    if (typeof document === "undefined") return; // for SSR

    const elements = [...document.querySelectorAll<HTMLElement>(headingSelector)];
    headings = elements.map(extract).filter((x) => x.name);
  }

  function init(_: HTMLElement) {
    // Initial scan for existing headings
    updateToc();

    // Set up observer for dynamic content
    observer = new MutationObserver((mutations) => {
      let shouldUpdate = false;

      for (const mutation of mutations) {
        // Check if any added nodes contain headings or are headings themselves
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.matches?.(headingSelector) || element.querySelector?.(headingSelector)) {
              shouldUpdate = true;
              break;
            }
          }
        }

        // Check if any removed nodes were headings
        for (const node of mutation.removedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.matches?.(headingSelector) || element.querySelector?.(headingSelector)) {
              shouldUpdate = true;
              break;
            }
          }
        }

        if (shouldUpdate) break;
      }

      if (shouldUpdate) {
        // Small delay to ensure DOM is settled
        setTimeout(updateToc, 10);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["id"] // Watch for id changes that might affect our selectors
    });

    return () => {
      observer?.disconnect();
    };
  }

  // Also run on mount as a backup
  onMount(() => {
    updateToc();

    // Additional check after a short delay for dynamically loaded content
    const timeoutId = setTimeout(updateToc, 100);

    return () => clearTimeout(timeoutId);
  });

  function indent(name: string | undefined) {
    return name === "h2" ? "pl-2.5" : "pl-4";
  }
</script>

<div class={cn(classDiv, divClass)}>
  <button class={cn(classBtn, btnClass)}>
    On this page
    <ChevronDownOutline class={cn(classSvg, svgClass)} />
  </button>

  <Dropdown simple {@attach init} class={cn(classDropdownDiv, dropdownDivClass)}>
    <DropdownItem href="#top">Return to top</DropdownItem>
    <DropdownDivider />
    {#each headings as { rel, href, name }}
      <DropdownItem liClass={cn(classLi, liClass)}>
        <a {href} class={indent(rel)}>{name}</a>
      </DropdownItem>
    {/each}
  </Dropdown>
</div>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: headingSelector: any;
@props:extract: any;
@props:divClass: any;
@props:liClass: any;
@props:svgClass: any;
@props:btnClass: any;
@props:dropdownDivClass: any;
-->
