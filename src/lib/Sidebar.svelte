<script lang='ts'>
  import { page } from '$app/stores';
  import type { ComponentType } from 'svelte';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper } from 'svelte-5-ui-lib';

  type ListType = {
    name: string;
    href?: string;
    icon: ComponentType;
    children?: ListType[]
  }

  interface Props{
    sidebarList: ListType[];
    menuList?: ListType[];
    sidebarClose?: () => void;
    active_class?: string;
    nonactive_class?: string;
    div_class?: string;
    aside_class?: string;
  }

  let { sidebarList, menuList, sidebarClose, active_class, nonactive_class, div_class, aside_class, ...restProps }: Props = $props();

  let currentUrl = $page.url.pathname;
  $effect(() => {
    currentUrl = $page.url.pathname;
  });
  const hasPath = (key: string) => currentUrl.includes(key);
  
  if (menuList) {
    sidebarList.push(...menuList);
  }
  
</script>

<Sidebar activeClass="s_b_active  {active_class}" nonActiveClass="s_b_nonactive {nonactive_class}" divclass="s_b_div {div_class}" asideclass="s_b_aside {aside_class}" {...restProps}>
  <SidebarGroup>
    {#each sidebarList as { name, icon, children, href }}
      {#if children}
      <SidebarDropdownWrapper label={name} isOpen={hasPath('components')} svgclass='me-4' btnclass='p-1'>
        {#snippet iconSlot()}
          <svelte:component this={icon} class="s_b_icon" />
        {/snippet}
        {#each children as { name, icon, href }}
        <SidebarItem label={name} onclick={sidebarClose} {href} aclass='ml-4'>
          {#snippet iconSlot()}
          <svelte:component this={icon} class="s_b_icon" />
        {/snippet}
        </SidebarItem>
        {/each}
      </SidebarDropdownWrapper>
      {:else}
      <SidebarItem label={name} onclick={sidebarClose} {href} >
        {#snippet iconSlot()}
          <svelte:component this={icon} class="s_b_icon" />
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
@props: sidebarList: ListType[];
@props:menuList?: ListType[];
@props:sidebarClose?: () => void;
@props:active_class?: string;
@props:nonactive_class?: string;
@props:div_class?: string;
@props:aside_class?: string;
-->
