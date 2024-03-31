<script lang="ts">

  import { removeHyphensAndCapitalize, HomeCards,  MetaTag, SupportBanner, TechInfo, A7Solid, Accessibility, BadgeCheckOutline, BellActiveAltOutline, GlobeOutline, StarOutline, ChartLineUpOutline, CogOutline, ExpandOutline, TruckFastSolid, InfoCircleOutline, MoonSolid, Tailwindcss, Visualstudiocode } from '$lib';
  
  const pkgName: string = __NAME__;
  const pkgVersion: string = __VERSION__;
  const repoUrl: string = __GITHUBURL__;

  const pkg = {
    pkgName ,
    pkgVersion, 
    repoUrl
  }
  const cardTitle = `${removeHyphensAndCapitalize(pkgName)}: ${pkgVersion}`
  const cards = [
    {
      title: 'Svelte 4/5/Runes',
      description: 'Verions 1 is for Svelte 4/5 and version 2 is for Svelte 5 Runes.',
      icon: BadgeCheckOutline,
      iconClass: 'text-pink-500'
    },
    {
      title: 'Brands, Regular, and Solid Icons',
      description: '2000+ SVG Icons.',
      icon: BellActiveAltOutline,
      iconClass: 'text-green-500'
    },
    {
      title: 'Accessible SVGs',
      description: 'A11y props, `title`, `desc`, and `ariaLabel` for accessible SVG icons.',
      icon: Accessibility,
      iconClass: 'text-blue-400'
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
      title:'Seven Props',
      description: 'Control the size, role, color, events, aria-label, title, and desc.',
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
      href:'https://github.com/shinokada/svelte-awesome-icons/blob/main/LICENSE',
      iconClass: 'text-lime-500'
    },
    {
      title: 'Original source',
      description: 'FontAwesome/Font-Awesome v6.2.1.',
      icon: InfoCircleOutline,
      href:'https://github.com/FortAwesome/Font-Awesome/tree/6.x/svgs',
      iconClass: 'text-orange-500'
    }
  ]
</script>

<SupportBanner>
    To Keep It Going, Please Show Your Love.<a href='https://ko-fi.com/Z8Z2CHALG' target='_blank'><img height='40' style='border:0px;height:40px;' src='https://storage.ko-fi.com/cdn/kofi3.png?v=3' alt='Buy Me a Coffee at ko-fi.com' /></a>
</SupportBanner>

<HomeCards {cards} {cardTitle}/>
<HomeCards cards={info} cardTitle='Info'/>
<TechInfo {...pkg}/>