<script>
  import '../app.postcss';
  // import Darkmode from 'svelte-5-ui-lib/Darkmode.svelte';
  import { Nav, Footer } from '$lib'
  let { children } = $props()
  // let darkmodebtn = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-4 top-2 z-50'; 
  const lis =[
    {name: 'Home', href: '/'},
    {name: 'About', href: '/about'},
    {name: 'Guide', href: '/svelte-4/getting-started'},
  ]

  const brand = {
    name: 'codewithshin.co',
    href: 'https://codewithshin.co',
  }
  const siteName = 'Svelte Awesome Icons'
  const twitterUrl = 'https://twitter.com/shinokada'
  const githubUrl = 'https://github.com/shinokada/svelte-awesome-icons'
</script>

<Nav {lis} {siteName} {twitterUrl} {githubUrl}/>
<main class="w-full mx-auto px-2 pt-12">
  {@render children()}
</main>
<Footer {brand} {lis}/>
