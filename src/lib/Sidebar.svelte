<script lang='ts'>
  import { page } from '$app/stores';
  import type { ComponentType } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper } from 'svelte-5-ui-lib';
  import { StarOutline, BadgeCheckOutline, ChartPieOutline, BellActiveAltOutline, CogOutline, GlobeOutline } from '$lib';

  type ListType = {
    name: string;
    href?: string;
    icon: ComponentType;
    children?: ListType[]
  }

  interface Props{
    asideclass?: string;
    activeclass?: string;
    nonActiveclass?: string;
    divclass?: string;
    iconclass?: string;
    menuList?: ListType[];
    sidebarClose?: () => void;
  }

  let { asideclass, activeclass, nonActiveclass, divclass, iconclass, menuList, sidebarClose, ...restProps }: Props = $props();

  let currentUrl = $page.url.pathname;
  $effect(() => {
    currentUrl = $page.url.pathname;
  });
  const hasPath = (key: string) => currentUrl.includes(key);

  const activeCls = twMerge('flex items-center p-1 text-base font-normal text-white bg-primary-700 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-600 dark:hover:bg-primary-600', activeclass);
  const nonActiveCls = twMerge('flex items-center p-1 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700', nonActiveclass);
  const asideCls= twMerge('fixed inset-0 z-30 flex-none h-full w-64 lg:static lg:h-auto border-e border-gray-200 dark:border-gray-600 lg:overflow-y-visible bg-gray-50 dark_bg_theme lg:pt-0 lg:block', asideclass)
  const divCls = twMerge('dark_bg_theme', divclass)
  const iconCls = twMerge('h-5 w-5 text-gray-500  group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white', iconclass)

  let list: ListType[] = [
    {
      name: 'Svelte 4 & 5',
      icon: StarOutline as ComponentType,
      children: [
        {
          name: 'Getting Started',
          icon: CogOutline as ComponentType,
          href: '/guide/svelte-4/getting-started'
        },
        {
          name: 'Props',
          icon: BadgeCheckOutline as ComponentType,
          href: '/guide/svelte-4/props'
        }
      ]
    },
    {
      name: 'Svelte 5: Runes',
      icon: BellActiveAltOutline as ComponentType,
      children: [
        {
          name: 'Getting Started',
          icon: CogOutline as ComponentType,
          href: '/guide/svelte-5/getting-started'
        },
        {
          name: 'Props',
          icon: BadgeCheckOutline as ComponentType,
          href: '/guide/svelte-5/props'
        }
      ]
    },
    {
      name: 'Global Icons',
      icon: GlobeOutline as ComponentType,
      href: '/guide/global-icons'
    },
    { 
      name: 'Custom Icons', 
    icon: ChartPieOutline as ComponentType, 
    href: '/guide/custom-icons'
   }
  ];
  
  if (menuList) {
    list.push(...menuList);
  }
  
</script>

<Sidebar activeClass={activeCls} nonActiveClass={nonActiveCls} divclass={divCls} asideclass={asideCls} {...restProps}>
  <SidebarGroup>
    {#each list as { name, icon, children, href }}
      {#if children}
      <SidebarDropdownWrapper label={name} isOpen={hasPath('components')} svgclass='me-4' btnclass='p-1'>
        {#snippet iconSlot()}
          <svelte:component this={icon} class={iconCls} />
        {/snippet}
        {#each children as { name, icon, href }}
        <SidebarItem label={name} onclick={sidebarClose} {href} aclass='ml-4'>
          {#snippet iconSlot()}
          <svelte:component this={icon} class={iconCls} />
        {/snippet}
        </SidebarItem>
        {/each}
      </SidebarDropdownWrapper>
      {:else}
      <SidebarItem label={name} onclick={sidebarClose} {href} >
        {#snippet iconSlot()}
          <svelte:component this={icon} class={iconCls} />
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
@props: asideclass?: string;
@props:activeclass?: string;
@props:nonActiveclass?: string;
@props:divclass?: string;
@props:iconclass?: string;
@props:menuList?: ListType[]
-->
