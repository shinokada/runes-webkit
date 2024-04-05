<script lang="ts">
  import { IconPage } from 'svelte-icon-webkit'
  import * as icons from '$lib'
  import { MetaTag } from 'svelte-icon-webkit';

  const meta = {
    title: 'Svelte SVG Icons - Svelte Supertiny',
    description: '340+ SVG logos for popular brands from SuperTinyIcons for Svelte.',
    keywords:'SuperTinyIcons, Svelte 5, Svelte 4, Runes, SvelteKit, SVG icons',
    url: 'https://svelte-supertiny.codewithshin.com/',
    image: 'https://open-graph-vercel.vercel.app/api/svelte-supertiny',
    imageAlt: 'Svelte Icon Webkit',
    creator: '@shinokada'
  }
</script>

<MetaTag {...meta}/>

<IconPage {icons} threeTabs={false} title="Icons: Svelte Supertiny" />