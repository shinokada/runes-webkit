<script>
  import '../app.postcss';
  import { Nav, Footer, MetaTag } from '$lib'
  let { children } = $props()

  const lis =[
    {name: 'Guide', href: '/svelte-4/getting-started'},
    {name: '3-Tabs', href: '/three-tabs'},
    {name: '3-Tabs-tailwind', href: '/three-tabs-sizebytailwind'},
    {name: 'No-tabs', href: '/no-tabs'},
  ]
  const brand = {
    name: 'codewithshin.com',
    href: 'https://codewithshin.com',
  }
  const urlsToInclude =['/guide','/svelte-4']
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
<Nav {lis} {siteName} {twitterUrl} {githubUrl} {urlsToInclude}/>
<main class="max-w-6xl mx-auto px-8 pt-4">
  {@render children()}
</main>
<Footer {brand} {lis} ulClass='dark_bg_theme'/>
