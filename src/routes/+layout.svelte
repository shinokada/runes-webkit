<script>
  import '../app.postcss';
  import { Nav, Footer } from '$lib'
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
</script>

<Nav {lis} {siteName} {twitterUrl} {githubUrl} {urlsToInclude}/>
<main class="max-w-6xl mx-auto px-8 pt-4">
  {@render children()}
</main>
<Footer {brand} {lis} ulClass='dark_bg_theme'/>
