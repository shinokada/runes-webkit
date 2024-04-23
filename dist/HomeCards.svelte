<script lang="ts">import { Card } from "svelte-5-ui-lib";
import { twMerge } from "tailwind-merge";
let { cards = [], home_c_card, home_c_div, home_c_card_icon, home_c_card_h3, home_c_card_p, ...restProps } = $props();
</script>

{#snippet cardSnippet({title, description, icon, href, icon_class})}
<Card {href} class={twMerge('max-w-2xl _home_c_card_', home_c_card)}>
  <svelte:component this={icon} class="{twMerge('w-8 h-8 mb-3 _home_c_card_icon_', home_c_card_icon)} {icon_class}"  />
  <h3 class="{twMerge('mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white _home_c_card_h3_', home_c_card_h3)}">{title}</h3>
  <p class="{twMerge('font-normal text-gray-700 dark:text-gray-400 leading-tight _home_c_card_p_', home_c_card_p)}">
  {description}
  </p>
</Card>
{/snippet}

<div class={twMerge('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto _home_c_div_', home_c_div)} {...restProps}>
  {#each cards as card}
    {@render cardSnippet(card)}
  {/each}
</div>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: cards:  CardType[]; = [], home_c_card, home_c_div, home_c_card_icon, home_c_card_h3, home_c_card_p, ...restProps;
@props:home_c_card?: string;
@props:home_c_div?: string;
@props:home_c_card_icon?: string;
@props:home_c_card_h3?: string;
@props:home_c_card_p?: string;
-->
