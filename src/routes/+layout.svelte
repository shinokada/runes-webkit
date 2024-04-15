<script>
  import '../app.pcss';
  import { page } from '$app/stores';
  import { Footer, OnThisPage, extract, Sidebar, removeHyphensAndCapitalize, sidebarList } from '$lib'
  import { RunesMetaTags, deepMerge } from 'runes-meta-tags';
  import Nav from './utils/Nav.svelte';
  import { Runatics } from 'runatics';

  let { children, data } = $props()
  const analyticsId = data.ANALYTICS_ID
  let metaTags = $state(
    $page.data.pageMetaTags
      ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags)
      : data.layoutMetaTags
  );

  let currentUrl = $state($page.url.pathname);
  $effect(() => {
    currentUrl = $page.url.pathname;
    metaTags = $page.data.pageMetaTags
      ? deepMerge($page.data.layoutMetaTags, $page.data.pageMetaTags)
      : data.layoutMetaTags;
  })
  const lis =[
    {name: 'Guide', href: '/guide/svelte-4/getting-started'},
    {name: '3-Tabs', href: '/three-tabs'},
    {name: '3-Tabs-tailwind', href: '/three-tabs-sizebytailwind'},
    {name: 'No-tabs', href: '/no-tabs'},
    {name: 'How to use', href: '/how-to-use'},
  ]
  const brand = {
    name: 'codewithshin.com',
    href: 'https://codewithshin.com',
  }
  const urlsToIncludeSwitcherAndSidebar =['/guide/', '/guide2/', '/how-to-use']
  const siteName = removeHyphensAndCapitalize(__NAME__)
  const twitterUrl = 'https://twitter.com/shinokada'
  const githubUrl = `https://github.com/shinokada/${__NAME__}`

</script>
<RunesMetaTags {...metaTags} />
<Runatics {analyticsId} />

<Nav {lis} {siteName} {twitterUrl} {githubUrl} urlsToIncludeSwitcher={urlsToIncludeSwitcherAndSidebar}/>
<div class="lg:flex">
  
  {#if urlsToIncludeSwitcherAndSidebar.some(path => currentUrl.startsWith(path))}
    <Sidebar 
    {sidebarList}
    aside_class='hidden lg:block border-e border-gray-200 dark:border-gray-600'/>
    <div class="relative">
      <OnThisPage {extract} headingSelector="#mainContent > :where(h2, h3)" />
    </div>
  {/if}
    <div class="relative h-full w-full overflow-y-auto px-8">
      {@render children()}
      <Footer {brand} {lis}/>
    </div>
  
</div>

