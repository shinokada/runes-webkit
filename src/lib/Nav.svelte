<script lang="ts">
  import type { ComponentType } from 'svelte';
	import { Navbar, NavLi, NavBrand, NavUl, uiHelpers, Darkmode, Dropdown, DropdownItem } from 'svelte-5-ui-lib';
	import { page } from '$app/stores';
  import { GithubSolid, random_tailwind_color, DotsHorizontalOutline, XSolid } from '$lib'
  import DynamicCodeBlockStyle from './DynamicCodeBlockStyle.svelte';
  type LiType = {
    name: string;
    href: string;
    icon?: ComponentType;
  }
  interface Props{
    
    lis: LiType[];
    siteName: string;
    twitterUrl?: string;
    githubUrl?: string;
  }
  let {  lis, siteName, twitterUrl, githubUrl, ...restProps}: Props = $props();

  let currentUrl = $state($page.url.pathname);
	let nav = uiHelpers();

	let navStatus = $state(false);
	let toggleNav = nav.toggle;
	let closeNav = nav.close;
	let divClass = 'ml-auto w-full';
	let ulclass = 'dark:lg:bg-transparent lg:space-x-4';
	let navclass = 'w-full divide-gray-200 border-gray-200 bg-gray-50 dark:bg-slate-950 text-gray-500 dark:divide-gray-700 dark:border-gray-700 dark:transparent dark:text-gray-400 sm:px-4';
  let dropdown = uiHelpers();

  let isOpen = $state(false);
  let toggle = dropdown.toggle;
  let close = dropdown.close;

	$effect(() => {
		navStatus = nav.isOpen;
    isOpen = dropdown.isOpen;
    currentUrl = $page.url.pathname;
	});
</script>

{#snippet navLi(lis)}
  {#each lis as { name, href, icon }}
    {#if icon}
      <svelte:component this={icon} class="w-8 h-8 mb-3 {random_tailwind_color()}" />
    {/if}
  <NavLi {href}>{name}</NavLi>
  {/each}
{/snippet}

<header class="sticky top-0 z-40 mx-auto w-full flex-none border-b border-gray-200 bg-gray-100 dark:border-gray-600 dark:bg-sky-950">
	<Navbar {navclass} {toggleNav} {closeNav} {navStatus} breakPoint="lg" fluid div2class={divClass}>
		{#snippet brand()}
			<NavBrand {siteName} spanclass="self-center whitespace-nowrap text-2xl font-semibold text-primary-900 dark:text-primary-500" />
			<div class="ml-auto flex items-center lg:order-1">
        {#if !['/'].includes(currentUrl)}
				<DynamicCodeBlockStyle />
        {/if}
        <DotsHorizontalOutline onclick={toggle} class="dark:text-white ml-4" size="lg" />
      <div class="relative">
        <Dropdown {isOpen} divclass="absolute -left-[35px] w-14 p-1">
          {#if twitterUrl}
          <DropdownItem href={twitterUrl} target="_blank" aclass=' rounded-lg p-2'><XSolid  class='mx-auto' /></DropdownItem>
          {/if}
          {#if githubUrl}
          <DropdownItem href="https://github.com/themesberg/flowbite-svelte-icons" target="_blank" aclass=' rounded-lg p-2'>
              <GithubSolid size="lg" class='mx-auto'/>
          </DropdownItem>
          {/if}
          <DropdownItem>
            <Darkmode btnclass="p-2 ml-1" size='lg'/>
          </DropdownItem>
        </Dropdown>
      </div>
			</div>
		{/snippet}
    <div class="max-w-md mx-auto md:block md:w-auto order-1 md:order-none">
      <NavUl {ulclass}>
        {@render navLi(lis)}
      </NavUl>
    </div>
	</Navbar>
</header>