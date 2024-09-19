<script lang="ts">
  import '../app.pcss';
  import { page } from '$app/stores';
  import { newSidebarList } from './utils/helper';
  import { Footer, OnThisPage, extract, Sidebar, removeHyphensAndCapitalize } from '$lib';
  import { RunesMetaTags } from 'runes-meta-tags';
  import Nav from './utils/Nav.svelte';
  import { Runatics } from 'runatics';

  let { children, data } = $props();
  const analyticsId = data.ANALYTICS_ID;
  let metaTags = $state($page.data.pageMetaTags ? $page.data.pageMetaTags : data.layoutMetaTags);
  // console.log('data', $page.data.layoutMetaTags)

  let currentUrl = $state($page.url.pathname);
  $effect(() => {
    currentUrl = $page.url.pathname;
    metaTags = $page.data.pageMetaTags ? $page.data.pageMetaTags : data.layoutMetaTags;
  });
  const lis = [
    { name: 'Guide', href: '/guide/svelte-4/getting-started' },
    { name: '3-Tabs', href: '/three-tabs' },
    { name: '3-Tabs-tailwind', href: '/three-tabs-sizebytailwind' },
    { name: 'No-tabs', href: '/no-tabs' },
    { name: 'How to use', href: '/how-to-use' },
    { name: 'Quick start', href: '/quick-start' }
  ];
  const brand = {
    name: 'codewithshin.com',
    href: 'https://codewithshin.com'
  };
  const urlsToIncludeSwitcherAndSidebar = ['/guide/', '/guide2/', '/how-to-use', '/quick-start'];
  const siteName = removeHyphensAndCapitalize(__NAME__);
  const twitterUrl = 'https://twitter.com/shinokada';
  const githubUrl = `https://github.com/shinokada/${__NAME__}`;
</script>

<Runatics {analyticsId} />
<RunesMetaTags {...metaTags} />

<Nav
  {lis}
  {siteName}
  {twitterUrl}
  {githubUrl}
  urlsToIncludeSwitcher={urlsToIncludeSwitcherAndSidebar}
/>
<div class="lg:flex">
  {#if urlsToIncludeSwitcherAndSidebar.some((path) => currentUrl.startsWith(path))}
    <Sidebar
      sidebarList={newSidebarList}
      asideClass="fixed inset-0 z-30 flex-none h-full w-64 lg:static lg:h-auto border-e border-gray-200 dark:border-gray-600 lg:overflow-y-visible lg:pt-0 lg:block hidden bg-gray-50 dark:bg-gray-800"
      divClass="fixed px-2 w-60 dark_bg_theme"
    />
    <div class="relative">
      <OnThisPage {extract} headingSelector="#mainContent > :where(h2, h3)" />
    </div>
  {/if}
  {@render children()}
</div>
<Footer {brand} {lis} />
