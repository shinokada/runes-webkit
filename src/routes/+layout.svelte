<script>
  import '../app.postcss';
  import { page } from '$app/stores';
  import { Nav, Footer, MetaTag, OnThisPage, extract, Sidebar } from '$lib'
  
  let { children } = $props()
  let currentUrl = $state($page.url.pathname);
  $effect(() => {
    currentUrl = $page.url.pathname;
  })
  const lis =[
    {name: 'Guide', href: '/guide/svelte-4/getting-started'},
    {name: '3-Tabs', href: '/three-tabs'},
    {name: '3-Tabs-tailwind', href: '/three-tabs-sizebytailwind'},
    {name: 'No-tabs', href: '/no-tabs'},
  ]
  const brand = {
    name: 'codewithshin.com',
    href: 'https://codewithshin.com',
  }
  const urlsToIncludeSwitcherAndSidebar =['/guide/', '/guide2/']
  const siteName = 'Svelte Icon Webkit'
  const twitterUrl = 'https://twitter.com/shinokada'
  const githubUrl = 'https://github.com/shinokada/svelte-awesome-icons'
  const meta = {
    title: 'Svelte Icon Webkit: Home',
    description: 'A collection of reusable Svelte components for building icon-based user interfaces in web applications.',
    keywords:'Svelte 5, Runes, SvelteKit, UI, icons',
    url: 'https://svelte-icon-webkit.codewithshin.com/',
    image: 'https://open-graph-vercel.vercel.app/api/svelte-icon-webkit',
    imageAlt: 'Svelte Icon Webkit',
    creator: '@shinokada'
  }
</script>


<MetaTag {...meta}/>
<Nav {lis} {siteName} {twitterUrl} {githubUrl} urlsToIncludeSwitcher={urlsToIncludeSwitcherAndSidebar}/>
<div class="lg:flex">
  
  {#if urlsToIncludeSwitcherAndSidebar.some(path => currentUrl.startsWith(path))}
    <Sidebar />
    <div class="relative">
      <OnThisPage {extract} headingSelector="#mainContent > :where(h2, h3)" />
    </div>
  {/if}
    <div class="relative h-full w-full overflow-y-auto px-8">
      {@render children()}
      <Footer {brand} {lis} ulClass='dark_bg_theme'/>
    </div>
  
</div>

