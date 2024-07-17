<script lang="ts">
  import { page } from '$app/stores';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper } from 'svelte-5-ui-lib';
  import { twMerge } from 'tailwind-merge';
  import type { ListType } from './types';

  interface Props {
    sidebarList: ListType[];
    menuList?: ListType[];
    sidebarClose?: () => void;
    activeClass?: string;
    classActive?: string | undefined ;
    nonActiveClass?: string;
    classNonActive?: string | undefined ;
    divClass?: string | undefined ;
    asideClass?: string | undefined ;
    classAside?: string | undefined ;
    iconClass?: string | undefined ;
  }

  let {
    sidebarList,
    menuList,
    sidebarClose,
    activeClass,
    classActive = 'flex items-center p-1 text-base font-normal text-white bg-primary-500 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-600 dark:hover:bg-primary-600',
    nonActiveClass,
    classNonActive = 'flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
    divClass = 'dark_bg_theme mx-2 bg-transparent',
    asideClass,
    classAside = 'fixed inset-0 z-30 flex-none h-full lg:static lg:h-auto lg:overflow-y-visible bg-white dark_bg_theme lg:pt-0 lg:block',
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
  activeClass={twMerge(classActive, activeClass)}
  nonActiveClass={twMerge(classNonActive,nonActiveClass)}
  {divClass}
  asideClass={twMerge(classAside, asideClass)}
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
            <svelte:component this={icon} class={iconClass} />
          {/snippet}
          {#each children as { name, icon, href }}
            <SidebarItem label={name} onclick={sidebarClose} {href} aClass="ml-4">
              {#snippet iconSlot()}
                <svelte:component this={icon} class={iconClass} />
              {/snippet}
            </SidebarItem>
          {/each}
        </SidebarDropdownWrapper>
      {:else}
        <SidebarItem label={name} onclick={sidebarClose} {href}>
          {#snippet iconSlot()}
            <svelte:component this={icon} class={twMerge('h-5 w-5', iconClass)} />
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
@prop activeClass
@prop classActive = 'flex items-center p-1 text-base font-normal text-white bg-primary-500 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-600 dark:hover:bg-primary-600'
@prop nonActiveClass
@prop classNonActive = 'flex items-center p-1 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
@prop divClass = 'dark_bg_theme mx-2 bg-transparent'
@prop asideClass
@prop classAside = 'fixed inset-0 z-30 flex-none h-full lg:static lg:h-auto lg:overflow-y-visible bg-white dark_bg_theme lg:pt-0 lg:block'
@prop iconClass
@prop ...restProps
-->
