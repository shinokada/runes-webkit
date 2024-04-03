
<script>
  import { removeHyphensAndCapitalize, HomeCards, SupportBanner, TechInfo, A7Solid, Accessibility, BadgeCheckOutline, BellActiveAltOutline, GlobeOutline, TruckFastSolid, InfoCircleOutline, MoonSolid, Tailwindcss, Visualstudiocode, MetaTag } from 'svelte-icon-webkit';

  const pkgName = __NAME__;
  const pkgVersion = __VERSION__;
  const repoUrl = __GITHUBURL__;
  const svelte5uilib = __SVELTE_5_UI_LIB_VERSION__;
  const svelteVersion = __SVELTE_VERSION__;
  const svelteKitVersion = __SVELTEKIT_VERSION__;
  const viteVersion = __VITE_VERSION__;
  const svelteRuneHighlight = __SVELTE_RUNE_HIGHLIGHT_VERSION__;
  const svelteIconWebkit = __SVELTE_ICON_WEBKIT_VERSION__;
  
  const pkg = {
    pkgName, pkgVersion, repoUrl, svelteVersion, svelteKitVersion, svelte5uilib, svelteIconWebkit, svelteRuneHighlight, viteVersion
  }
  const cardTitle = `${removeHyphensAndCapitalize(pkgName)}: v1/v2`
  const cards = [
    {
      title: 'Svelte 4/5/Runes',
      description: 'Verions 1 is for Svelte 4/5 and version 2 is for Svelte 5 Runes.',
      icon: BadgeCheckOutline,
      iconClass: 'text-pink-500'
    },
    {
      title: 'Brands Icons',
      description: '340+ SVG logos for popular brands from SuperTinyIcons for Svelte.',
      icon: BellActiveAltOutline,
      iconClass: 'text-green-500'
    },
    {
      title:'Faster Compiling',
      description: 'Import icons directly to optimize compilation speed and improve performance.',
      icon: TruckFastSolid,
      iconClass: 'text-yellow-500'
    },
    {
      title:'IDE Support',
      description: 'Hovering over a component name will display features, props, events, and more for an LSP-compatible editors.',
      icon: Visualstudiocode,
      iconClass: 'text-blue-500'
    },
    {
      title:'Global Icons',
      description: 'Use `IconSolid` and `IconOutline` to careat default icons.',
      icon: GlobeOutline,
      iconClass: 'text-purple-500'
    },
    {
      title:'CSS Frameworks support',
      description: 'Use TailwindCSS, Bootstrap CSS, or any other CSS frameworks.',
      icon:Tailwindcss,
      iconClass: 'text-blue-500'
    },
    {
      title:'Six Props',
      description: 'Control the size, role, fill, class, and aria-label.',
      icon:A7Solid,
      iconClass: 'text-cyan-500'
    },
    {
      title:'Dark mode',
      description: 'Use `class` props to add your dark mode color.',
      icon:MoonSolid,
      iconClass: 'text-yellow-200'
    }
  ]

  const info = [
    {
      title: 'Svelte Icon Family',
      description: 'Explore 29 Svelte SVG Icon Sets.',
      icon: InfoCircleOutline,
      href:'https://svelte-svg-icons.codewithshin.com/',
      iconClass: 'text-amber-500'
    },
    {
      title: 'License',
      description: 'Released under the MIT License.',
      icon: InfoCircleOutline,
      href:'https://github.com/shinokada/svelte-supertiny/blob/main/LICENSE',
      iconClass: 'text-lime-500'
    },
    {
      title: 'Original source',
      description: 'edent/SuperTinyIcons',
      icon: InfoCircleOutline,
      href:'https://github.com/edent/SuperTinyIcons',
      iconClass: 'text-orange-500'
    }
  ]

  const meta = {
    title: 'Svelte SVG Icons - Svelte Supertiny',
    description: '340+ SVG logos for popular brands from SuperTinyIcons for Svelte.',
    keywords:'SuperTinyIcons, Svelte 5, Svelte 4, Runes, SvelteKit, SVG icons',
    url: 'https://svelte-supertiny.codewithshin.com/',
    image: 'https://open-graph-vercel.vercel.app/api/svelte-supertiny',
    imageAlt: 'Svelte Supertiny',
    creator: '@shinokada'
  }
</script>

<MetaTag {...meta}/>

<SupportBanner>
  To Keep It Going, Please Show Your Love.<a href='https://ko-fi.com/Z8Z2CHALG' target='_blank'><img height='40' style='border:0px;height:40px;' src='https://storage.ko-fi.com/cdn/kofi3.png?v=3' alt='Buy Me a Coffee at ko-fi.com' /></a>
</SupportBanner>

<HomeCards {cards} {cardTitle}/>
<HomeCards cards={info} cardTitle='Info'/>

<TechInfo {...pkg}/>