<script lang="ts">
  import type { ComponentType } from 'svelte'; 
  import { twMerge } from 'tailwind-merge';   
  import { Card } from 'svelte-5-ui-lib';

  type CardType = {
    title: string;
    description: string;
    icon: ComponentType;
    href?: string;
    iconClass?: string;
  }
  interface Props{
    cards: CardType[];
    cardTitle: string;
  }
  let { cards =[], cardTitle, ...restProps }: Props= $props();

</script>

<h1 class='flex justify-center my-8'>{cardTitle}</h1>

{#snippet cardSnippet({title, description, icon, href, iconClass})}
<Card {href} >
  <svelte:component this={icon} class={twMerge("w-8 h-8 mb-3",iconClass) }  />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  {description}
  </p>
</Card>
{/snippet}

<div class='grid grid-cols-2 md:grid-cols-3 gap-4'>
  {#each cards as card}
    {@render cardSnippet(card)}
  {/each}
</div>
  

