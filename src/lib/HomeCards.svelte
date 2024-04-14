<script lang="ts">
  import type { ComponentType } from 'svelte';  
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
  }
  let { cards =[], ...restProps }: Props= $props();

</script>

{#snippet cardSnippet({title, description, icon, href, iconClass})}
<Card {href} class='home_c_card'>
  <svelte:component this={icon} class="home_c_card_icon {iconClass}"  />
  <h3 class="home_c_card_h3">{title}</h3>
  <p class="home_c_card_p">
  {description}
  </p>
</Card>
{/snippet}

<div class='home_c_div' {...restProps}>
  {#each cards as card}
    {@render cardSnippet(card)}
  {/each}
</div>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: cards:  CardType[]; = [], ...restProps;
-->
