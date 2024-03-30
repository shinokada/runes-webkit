<script lang="ts">
  import {Card, List, Li, A, Badge } from 'svelte-5-ui-lib';
  // import { MetaTags } from 'svelte-meta-tags';
  import {convertToKebabCase} from './utils/helpers'
  import iconDetails from './icons.json'

  let totalDownloads = $state(0);

  $effect(()=>{
    (async () => {
    try {
      const libs = [
        'flowbite-svelte-icons',
        'svelte-ant-design-icons',
        'svelte-awesome-icons',
        'svelte-bootstrap-svg-icons',
        'svelte-boxicons',
        'svelte-circle-flags',
        'svelte-coreui-icons',
        'svelte-cssgg-icons',
        'svelte-cryptocurrency-icons',
        'svelte-evil-icons',
        'svelte-feathers',
        'svelte-flag-icons',
        'svelte-flags',
        'svelte-file-icons',
        'svelte-google-materialdesign-icons',
        'svelte-heros',
        'svelte-heros-v2',
        'svelte-ionicons',
        'svelte-lucide',
        'svelte-materialdesign-icons',
        'svelte-oct',
        'svelte-radix',
        'svelte-remix',
        'svelte-simples',
        'svelte-tabler',
        'svelte-supertiny',
        'svelte-teenyicons',
        'svelte-twitter-emoji',
        'svelte-weather'
      ];

      const today = new Date();
      const todayString = today.toISOString().slice(0, 10);
      
      const totalPromises = libs.map((lib) => fetch(`https://api.npmjs.org/downloads/point/2020-01-01:${todayString}/${lib}`));

      const totalResponses = await Promise.all(totalPromises);

      for (const response of totalResponses) {
        const data = await response.json();
        // console.log('data', data.downloads)
        totalDownloads += data.downloads;
      }
      
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  })()
  });

  function formatNumber(number: number) {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'K';
    } else {
      return number.toString();
    }
  }

  const h3Class = 'my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ';
</script>


<h1>Svelte SVG Icon Sets</h1>

{#snippet card({iconName, badges, features, source})}
{@const newName = convertToKebabCase(iconName)}
<Card img={{src: `/images/resized/${newName}.webp`, alt: `${iconName}`}}>
  <img src={`https://badgen.net/npm/dt/${newName}`} alt="total download number" class="inline" />
  <img src={`https://badgen.net/npm/dw/${newName}`} alt="weekly download number" class="inline" />
  {#each badges as badge}
  <Badge color="purple" divclass="dark:text-white px-2 my-2 mr-1">{badge}</Badge>
  {/each}
  <h3 class={h3Class}>
    <A href={`https://${newName}.codewithshin.com`} target="_blank">{iconName}</A>
  </h3>
  <List>
    {#each features as feature}
    <Li liclass="dark:text-white">{feature}</Li>
    {/each}
    <Li liclass="dark:text-white">Source: <A href="{source[1]}">{source[0]}</A></Li>
    <Li liclass="dark:text-white"><A href={`https://${newName}.codewithshin.com/`}>Icons and Docs</A></Li>
  </List>
</Card>
{/snippet}

<div class="flex flex-wrap justify-center gap-4 pb-8">
  <Badge color="pink">Svelte 4, 5, and 5:Runes</Badge>
  <Badge color="blue">Support CSS frameworks</Badge>
  <Badge color="purple">Faster compling</Badge>
  <Badge color="yellow">IDE Support</Badge>
  <Badge color="red" large>Total downloads: {formatNumber(totalDownloads)}</Badge>
</div>

<div class="flex flex-wrap justify-center gap-4">
  {#each iconDetails as {iconName, badges, features, source}}
    {@render card({iconName, badges, features, source})}
  {/each}
</div>
