<script lang="ts">
  import { page } from '$app/stores';
  import type { Component } from 'svelte';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper } from 'svelte-5-ui-lib';
  import { twMerge } from 'tailwind-merge';

  type ChildrenType = {
    name: string;
    href?: string;
    icon?: Component;
  };
  type ListType = {
    name: string;
    href?: string;
    icon?: Component;
    children?: ChildrenType[];
  };

  interface Props {
    sidebarList: ListType[];
    menuList?: ListType[];
    sidebarClose?: () => void;
    s_b_active?: string;
    s_b_nonactive?: string;
    s_b_div?: string;
    s_b_aside?: string;
    s_b_icon?: string;
  }

  let {
    sidebarList,
    menuList,
    sidebarClose,
    s_b_active,
    s_b_nonactive,
    s_b_div,
    s_b_aside,
    s_b_icon,
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
  activeClass={twMerge(
    'flex items-center p-1 text-base font-normal text-white bg-primary-500 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-600 dark:hover:bg-primary-600 _s_b_active_',
    s_b_active
  )}
  nonActiveClass="{twMerge(
    'flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 _s_b_nonactive_',
    s_b_nonactive
  )} "
  divClass={twMerge('dark_bg_theme mx-2 bg-transparent _s_b_div_', s_b_div)}
  asideClass="{twMerge(
    'fixed inset-0 z-30 flex-none h-full lg:static lg:h-auto lg:overflow-y-visible bg-white dark_bg_theme lg:pt-0 lg:block  _s_b_aside_',
    s_b_aside
  )} "
  {...restProps}
>
  <SidebarGroup>
    {#each sidebarList as { name, icon, children, href }}
      {#if children}
        <SidebarDropdownWrapper
          label={name}
          isOpen={hasPath('components')}
          svgClass="me-4"
          btnClass="p-1"
        >
          {#snippet iconSlot()}
            <svelte:component this={icon} class="s_b_icon" />
          {/snippet}
          {#each children as { name, icon, href }}
            <SidebarItem label={name} onclick={sidebarClose} {href} aclass="ml-4">
              {#snippet iconSlot()}
                <svelte:component this={icon} class="s_b_icon" />
              {/snippet}
            </SidebarItem>
          {/each}
        </SidebarDropdownWrapper>
      {:else}
        <SidebarItem label={name} onclick={sidebarClose} {href}>
          {#snippet iconSlot()}
            <svelte:component this={icon} class={twMerge('_s_b_icon_ h-5 w-5', s_b_icon)} />
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
@prop sidebarList
@prop menuList
@prop sidebarClose
@prop s_b_active
@prop s_b_nonactive
@prop s_b_div
@prop s_b_aside
@prop s_b_icon
@prop ...restProps
-->
