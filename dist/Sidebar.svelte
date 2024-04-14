<script lang='ts'>import { page } from "$app/stores";
import { Sidebar, SidebarGroup, SidebarItem, SidebarDropdownWrapper } from "svelte-5-ui-lib";
import { StarOutline, BadgeCheckOutline, ChartPieOutline, BellActiveAltOutline, CogOutline, GlobeOutline } from "./";
let { menuList, sidebarClose, active_class, nonactive_class, div_class, aside_class, ...restProps } = $props();
let currentUrl = $page.url.pathname;
$effect(() => {
  currentUrl = $page.url.pathname;
});
const hasPath = (key) => currentUrl.includes(key);
let list = [
  {
    name: "Svelte 4 & 5",
    icon: StarOutline,
    children: [
      {
        name: "Getting Started",
        icon: CogOutline,
        href: "/guide/svelte-4/getting-started"
      },
      {
        name: "Props",
        icon: BadgeCheckOutline,
        href: "/guide/svelte-4/props"
      }
    ]
  },
  {
    name: "Svelte 5: Runes",
    icon: BellActiveAltOutline,
    children: [
      {
        name: "Getting Started",
        icon: CogOutline,
        href: "/guide/svelte-5/getting-started"
      },
      {
        name: "Props",
        icon: BadgeCheckOutline,
        href: "/guide/svelte-5/props"
      }
    ]
  },
  {
    name: "Global Icons",
    icon: GlobeOutline,
    href: "/guide/global-icons"
  },
  {
    name: "Custom Icons",
    icon: ChartPieOutline,
    href: "/guide/custom-icons"
  }
];
if (menuList) {
  list.push(...menuList);
}
</script>

<Sidebar activeClass="s_b_active  {active_class}" nonActiveClass='s_b_nonactive {nonactive_class}' divclass="s_b_div {div_class}" asideclass="s_b_aside {aside_class}" {...restProps}>
  <SidebarGroup>
    {#each list as { name, icon, children, href }}
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
@props: menuList?: ListType[];
@props:sidebarClose?: () => void;
@props:active_class?: string;
@props:nonactive_class?: string;
@props:div_class?: string;
@props:aside_class?: string;
-->
