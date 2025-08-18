<script lang="ts">
  import { page } from "$app/state";
  import { Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper } from "flowbite-svelte";
  import type { ClassValue } from "svelte/elements";
  import { cn } from "$lib";
  import type { ListType } from "./types";

  interface Props {
    sidebarList: ListType[];
    menuList?: ListType[];
    isOpen?: boolean;
    sidebarClose?: () => void;
    activeClass?: ClassValue;
    nonActiveClass?: ClassValue;
    divClass?: ClassValue;
    asideClass?: ClassValue;
    iconClass?: ClassValue;
  }

  let {
    sidebarList,
    menuList,
    isOpen = false,
    sidebarClose,
    activeClass,
    nonActiveClass,
    divClass,
    asideClass,
    iconClass,
    ...restProps
  }: Props = $props();

  const classActive =
    "flex items-center p-1 text-base font-normal text-white bg-primary-500 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-600 dark:hover:bg-primary-600";
  const classNonActive =
    "flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700";
  const classAside =
    "fixed inset-0 z-30 flex-none h-full lg:static lg:h-auto lg:overflow-y-visible bg-white dark-bg-theme lg:pt-0 lg:block";

  let currentUrl = page.url.pathname;
  $effect(() => {
    currentUrl = page.url.pathname;
  });
  const hasPath = (key: string) => currentUrl.includes(key);

  if (menuList) {
    sidebarList.push(...menuList);
  }
</script>

<Sidebar
  {isOpen}
  activeClass={cn(classActive, activeClass)}
  nonActiveClass={cn(classNonActive, nonActiveClass)}
  divClass={cn("dark-bg-theme mx-2 bg-transparent", divClass)}
  class={cn(classAside, asideClass)}
  {...restProps}
>
  <SidebarGroup>
    {#each sidebarList as { name, Icon, children, href }}
      {#if children}
        <SidebarDropdownWrapper
          label={name}
          isOpen={hasPath("components")}
          svgClass="me-4"
          btnClass="p-1"
        >
          {#snippet icon()}
            <Icon class={cn(iconClass)}></Icon>
          {/snippet}
          {#each children as { name, Icon, href }}
            <SidebarItem label={name} onclick={sidebarClose} {href} aClass="ml-4">
              {#snippet icon()}
                <Icon class={cn(iconClass)}></Icon>
              {/snippet}
            </SidebarItem>
          {/each}
        </SidebarDropdownWrapper>
      {:else}
        <SidebarItem label={name} onclick={sidebarClose} {href}>
          {#snippet icon()}
            <Icon class={cn("h-5 w-5", iconClass)}></Icon>
          {/snippet}
        </SidebarItem>
      {/if}
    {/each}
  </SidebarGroup>
</Sidebar>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: sidebarList: any;
@props:menuList: any;
@props:isOpen: any = false;
@props:sidebarClose: any;
@props:activeClass: any;
@props:nonActiveClass: any;
@props:divClass: any;
@props:asideClass: any;
@props:iconClass: any;
-->
