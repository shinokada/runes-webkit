<script lang="ts">
  import { page } from '$app/stores';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper } from 'svelte-5-ui-lib';
  import { StarOutline, BadgeCheckOutline, ChartPieOutline, BellActiveAltOutline, CogOutline, GlobeOutline } from '$lib';
  let currentUrl = $page.url.pathname;
  $effect(() => {
    currentUrl = $page.url.pathname;
  });
  const hasPath = (key: string) => currentUrl.includes(key);

  const activeClass = 'flex items-center p-1 text-base font-normal text-white bg-primary-700 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-600 dark:hover:bg-primary-600';
  const nonActiveClass = 'flex items-center p-1 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';

  const list = [
    {
      name: 'Svelte 4 & 5',
      icon: StarOutline,
      children: [
        {
          name: 'Getting Started',
          icon: CogOutline,
          href: '/guide/svelte-4/getting-started'
        },
        {
          name: 'Props',
          icon: BadgeCheckOutline,
          href: '/guide/svelte-4/props'
        }
      ]
    },
    {
      name: 'Svelte 5: Runes',
      icon: BellActiveAltOutline,
      children: [
        {
          name: 'Getting Started',
          icon: CogOutline,
          href: '/guide/svelte-5/getting-started'
        },
        {
          name: 'Props',
          icon: BadgeCheckOutline,
          href: '/guide/svelte-5/props'
        }
      ]
    },
    {
      name: 'Global Icons',
      icon: GlobeOutline,
      href: '/guide/global-icons'
    },
    { 
      name: 'Custom Icons', 
    icon: ChartPieOutline, 
    href: '/guide/custom-icons'
   }
  ];
</script>

<Sidebar {activeClass} {nonActiveClass} divclass='dark:bg-stone-900' asideclass="fixed inset-0 z-30 flex-none h-full w-64 lg:static lg:h-auto border-e border-gray-200 dark:border-gray-600 lg:overflow-y-visible bg-gray-50 dark_bg_theme lg:pt-0 lg:block hidden">
  <SidebarGroup>
    {#each list as { name, icon, children, href }}
      {#if children}
      <SidebarDropdownWrapper label={name} isOpen={hasPath('components')} svgclass="me-4" btnclass="p-1">
        {#snippet iconSlot()}
          <svelte:component this={icon} class="h-5 w-5 text-gray-500  group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
        {#each children as { name, icon, href }}
        <SidebarItem label="{name}" {href} aclass='ml-4'>
          {#snippet iconSlot()}
          <svelte:component this={icon} class="h-5 w-5 text-gray-500  group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
        </SidebarItem>
        {/each}
      </SidebarDropdownWrapper>
      {:else}
      <SidebarItem label="{name}" {href} >
        {#snippet iconSlot()}
          <svelte:component this={icon} class="h-5 w-5 text-gray-500  group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem> 
      {/if}
    {/each}
    
  </SidebarGroup>
</Sidebar>
