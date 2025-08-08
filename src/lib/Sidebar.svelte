<script lang="ts">
  import { page } from "$app/stores";
  import { Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper } from "flowbite-svelte";
  import { twMerge } from "tailwind-merge";
  import type { ListType } from "./types";

  interface Props {
    sidebarList: ListType[];
    menuList?: ListType[];
    isOpen?: boolean;
    sidebarClose?: () => void;
    activeClass?: string;
    classActive?: string | undefined;
    nonActiveClass?: string;
    classNonActive?: string | undefined;
    divClass?: string | undefined;
    asideClass?: string | undefined;
    classAside?: string | undefined;
    iconClass?: string | undefined;
  }

  let {
    sidebarList,
    menuList,
    isOpen = false,
    sidebarClose,
    activeClass,
    classActive = "flex items-center p-1 text-base font-normal text-white bg-primary-500 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-600 dark:hover:bg-primary-600",
    nonActiveClass,
    classNonActive = "flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
    divClass = "dark_bg_theme mx-2 bg-transparent",
    asideClass,
    classAside = "fixed inset-0 z-30 flex-none h-full lg:static lg:h-auto lg:overflow-y-visible bg-white dark_bg_theme lg:pt-0 lg:block",
    iconClass,
    ...restProps
  }: Props = $props();

  let currentUrl = $page.url.pathname;
  $effect(() => {
    currentUrl = $page.url.pathname;
  });
  const hasPath = (key: string) => currentUrl.includes(key);

  if (menuList) {
    sidebarList.push(...menuList);
  }
</script>

<Sidebar
  {isOpen}
  activeClass={twMerge(classActive, activeClass)}
  nonActiveClass={twMerge(classNonActive, nonActiveClass)}
  {divClass}
  class={twMerge(classAside, asideClass)}
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
            <Icon class={iconClass}></Icon>
          {/snippet}
          {#each children as { name, Icon, href }}
            <SidebarItem label={name} onclick={sidebarClose} {href} aClass="ml-4">
              {#snippet icon()}
                <Icon class={iconClass}></Icon>
              {/snippet}
            </SidebarItem>
          {/each}
        </SidebarDropdownWrapper>
      {:else}
        <SidebarItem label={name} onclick={sidebarClose} {href}>
          {#snippet icon()}
            <Icon class={twMerge("h-5 w-5", iconClass)}></Icon>
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
@props:classActive: any = "flex items-center p-1 text-base font-normal text-white bg-primary-500 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-600 dark:hover:bg-primary-600";
@props:nonActiveClass: any;
@props:classNonActive: any = "flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700";
@props:divClass: any = "dark_bg_theme mx-2 bg-transparent";
@props:asideClass: any;
@props:classAside: any = "fixed inset-0 z-30 flex-none h-full lg:static lg:h-auto lg:overflow-y-visible bg-white dark_bg_theme lg:pt-0 lg:block";
@props:iconClass: any;
-->
