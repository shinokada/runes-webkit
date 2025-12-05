<script lang="ts">
  import "../app.css";
  import type { Component } from "svelte";
  import { page } from "$app/state";
  import { newSidebarList } from "./utils/helper.ts";
  import {
    Footer,
    OnThisPage,
    extract,
    DotsHorizontalOutline,
    GithubSolid,
    random_tailwind_color,
    XSolid,
    Bluesky
  } from "$lib";
  import {
    Navbar,
    NavLi,
    NavBrand,
    NavHamburger,
    NavUl,
    uiHelpers,
    DarkMode,
    Dropdown,
    DropdownItem,
    SidebarButton,
    Sidebar,
    SidebarGroup,
    SidebarDropdownWrapper,
    SidebarItem,
    SidebarBrand
  } from "flowbite-svelte";
  import { RunesMetaTags, deepMerge } from "runes-meta-tags";
  import { Runatics } from "runatics";
  import DynamicCodeBlockStyle from "./utils/DynamicCodeBlockStyle.svelte";

  // --- REVISED ---
  // Use activeUrl (derived from page store) consistently
  let activeUrl = $derived(page.url.pathname);

  type LiType = {
    name: string;
    href: string;
    Icon?: Component;
  };
  let { children, data } = $props();
  const analyticsId = $derived(data.ANALYTICS_ID);
  // metaTags
  let metaTags = $derived(
    page.data.pageMetaTags
      ? deepMerge(page.data.layoutMetaTags, page.data.pageMetaTags)
      : data.layoutMetaTags
  );
  // sidebar
  const sidebarUi = uiHelpers();
  let isOpen = $state(false);
  const closeSidebar = sidebarUi.close;

  // --- REMOVED: let currentUrl = $state(page.url.pathname); ---

  // Check if the current URL matches any child href in a dropdown item
  const isDropdownOpen = (children: Array<{ href?: string }> | undefined) => {
    if (!children) return false;
    // Uses the consistent activeUrl
    return children.some((child) => child.href && activeUrl.startsWith(child.href));
  };

  const lis: LiType[] = [
    { name: "Guide", href: "/guide/svelte-5/getting-started" },
    { name: "3-Tabs", href: "/three-tabs" },
    { name: "3-Tabs-tailwind", href: "/three-tabs-sizebytailwind" },
    { name: "No-tabs", href: "/no-tabs" },
    { name: "How to use", href: "/how-to-use" },
    { name: "Quick start", href: "/quick-start" }
  ];
  const brand = {
    name: "codewithshin.com",
    href: "https://codewithshin.com"
  };
  const urlsToIncludeSwitcherAndSidebar = ["/guide/", "/guide2/", "/how-to-use", "/quick-start"];
  /*eslint no-undef: "off"*/
  const githubUrl = `https://github.com/shinokada/${__NAME__}`;
  const twitterUrl = "https://twitter.com/shinokada";
  const blueskyUrl = "https://bsky.app/profile/codewithshin.com";

  // --- REVISED: Takes url as an argument, no longer relies on 'currentUrl' state ---
  function isIncluded(url: string, allowedUrls: string[]): boolean {
    return allowedUrls.some((allowedUrl) => {
      // For home page '/', do exact matching
      if (allowedUrl === "/") {
        return url === "/" || url === "";
      }
      // For other URLs, continue using startsWith
      return url.startsWith(allowedUrl);
    });
  }
  let urlsToIncludeSwitcher = ["/guide", "/guide2", "/how-to-use", "/quick-start"];
  // --- REVISED: Uses activeUrl directly ---
  let include = $derived(isIncluded(activeUrl, urlsToIncludeSwitcher));

  $effect(() => {
    // --- REMOVED: currentUrl = page.url.pathname; ---
    metaTags = page.data.pageMetaTags
      ? deepMerge(page.data.layoutMetaTags, page.data.pageMetaTags)
      : data.layoutMetaTags;
    isOpen = sidebarUi.isOpen;
  });

  let activeClass = "p-2 text-sm xl:text-base";
  let nonActiveClass = "p-2 text-sm xl:text-base";
</script>

<Runatics {analyticsId} />
<RunesMetaTags {...metaTags} />

<Navbar
  breakpoint="xl"
  fluid
  class="dark-bg-theme fixed top-0 left-0 z-50 border-b border-gray-100 bg-white sm:px-12 xl:py-0 dark:border-gray-700"
  navContainerClass="xl:justify-between"
>
  <NavBrand href="/">
    <span
      class="text-primary-900 dark:text-primary-500 ml-4 self-center text-2xl font-semibold whitespace-nowrap xl:ml-8 xl:text-3xl"
      >Runes Webkit</span
    >
  </NavBrand>
  <div class="flex justify-end xl:order-2">
    <NavHamburger class="order-3" />
    {#if include}
      <div class="hidden xl:block">
        <DynamicCodeBlockStyle />
      </div>
    {/if}
    <DotsHorizontalOutline class="mt-2 mr-4 ml-6 dark:text-white" size="lg" />
    <Dropdown simple class="p-1">
      {#if blueskyUrl}
        <DropdownItem href={blueskyUrl} target="_blank" class="m-0 p-0.5">
          <Bluesky size="30" />
        </DropdownItem>
      {/if}
      {#if twitterUrl}
        <DropdownItem href={twitterUrl} target="_blank" class="m-0 p-2"><XSolid /></DropdownItem>
      {/if}
      {#if githubUrl}
        <DropdownItem href={githubUrl} target="_blank" class="m-0 p-2">
          <GithubSolid />
        </DropdownItem>
      {/if}
    </Dropdown>
    <DarkMode class="m-0 p-2" />
  </div>

  <NavUl
    {activeUrl}
    class="order-2 xl:order-1"
    classes={{ active: activeClass, nonActive: nonActiveClass }}
  >
    {#each lis as { name, href, Icon } (href)}
      {#if Icon}
        <Icon class="mb-3 h-6 w-6 {random_tailwind_color()}"></Icon>
      {/if}
      <NavLi {href}>{name}</NavLi>
    {/each}
  </NavUl>
</Navbar>

<div class="mt-20 xl:flex">
  {#if urlsToIncludeSwitcherAndSidebar.some((path) => activeUrl.startsWith(path))}
    <SidebarButton
      onclick={sidebarUi.toggle}
      class="fixed top-0.5 left-0 z-100 p-2"
      breakpoint="xl"
    />
    <Sidebar
      {activeUrl}
      {isOpen}
      {closeSidebar}
      breakpoint="xl"
      classes={{
        div: "dark-bg-theme bg-white",
        nonactive: "p-1 hover:bg-gray-200",
        active:
          "flex items-center p-1 text-base font-normal text-white dark:hover:text-white hover:text-gray-900 bg-primary-700 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
      }}
      class="dark-bg-theme mt-16 h-screen border-r border-gray-100 bg-white xl:top-[74px] xl:mt-0 dark:border-gray-700"
    >
      <SidebarGroup>
        <SidebarBrand>
          <span
            class="sr-only ml-8 self-center text-lg font-semibold whitespace-nowrap dark:text-white"
            >Runes Webkit</span
          >
        </SidebarBrand>
        {#each newSidebarList as { name, Icon, children, href } (name)}
          {#if children}
            <SidebarDropdownWrapper
              label={name}
              isOpen={isDropdownOpen(children)}
              svgClass="me-4"
              btnClass="p-1"
            >
              {#snippet icon()}
                <Icon />
              {/snippet}
              {#each children as { name, Icon, href } (href)}
                <SidebarItem label={name} onclick={closeSidebar} {href} aClass="ml-4">
                  {#snippet icon()}
                    <Icon />
                  {/snippet}
                </SidebarItem>
              {/each}
            </SidebarDropdownWrapper>
          {:else}
            <SidebarItem label={name} onclick={closeSidebar} {href}>
              {#snippet icon()}
                <Icon />
              {/snippet}
            </SidebarItem>
          {/if}
        {/each}
      </SidebarGroup>
    </Sidebar>
  {/if}
  {#if urlsToIncludeSwitcherAndSidebar.some((path) => activeUrl.startsWith(path))}
    <div class="relative">
      <OnThisPage {extract} headingSelector="#mainContent > :where(h2, h3)" />
    </div>
  {/if}
  {@render children()}
</div>
<Footer {brand} {lis} />
