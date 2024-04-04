<script>import { twMerge } from "tailwind-merge";
import { Card } from "svelte-5-ui-lib";
let { cards = [], ...restProps } = $props();
</script>

{#snippet cardSnippet({title, description, icon, href, iconClass})}
<Card {href} class='max-w-2xl' >
  <svelte:component this={icon} class={twMerge("w-8 h-8 mb-3",iconClass) }  />
  <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
  <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
  {description}
  </p>
</Card>
{/snippet}

<div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'>
  {#each cards as card}
    {@render cardSnippet(card)}
  {/each}
</div>

<!--
@component
[Go to docs](https://svelte-icon-webkit.codewithshin.com/)
## Props
@props: cards:  CardType[]; = [], ...restProps;
-->
