<script lang="ts">
  // import type { SvelteComponent } from 'svelte';
  import type { ComponentType } from 'svelte';
    import { removeHyphensAndCapitalize, random_tailwind_color } from './helpers';
    
    import { Card } from 'svelte-5-ui-lib';
    type CardType = {
      title: string;
      description: string;
      icon: ComponentType;
      href?: string;
    }
    interface Props{
      cards: CardType[];
      cardTitle: string;
    }
  let { cards =[], cardTitle, ...restProps }: Props= $props();
</script>

<h1 class='flex justify-center my-8'>{cardTitle}</h1>

{#snippet card({title, description, icon, href})}
<Card {href} >
  <svelte:component this={icon} class="w-8 h-8 mb-3 {random_tailwind_color()}" />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  {description}
  </p>
</Card>
{/snippet}

<div class='grid grid-cols-2 md:grid-cols-3 gap-4'>
  {#each cards as { title, description, icon, href }}
    {@render card({title, description, icon, href})}
  {/each}
</div>
  

