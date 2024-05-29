<script lang="ts">
  import type { Component } from 'svelte';
  import { Card } from 'svelte-5-ui-lib';
  import { twMerge } from 'tailwind-merge';

  type CardType = {
    title: string;
    description: string;
    icon: Component;
    href?: string;
    icon_class?: string;
  };
  interface Props {
    cards: CardType[];
    home_c_card?: string;
    home_c_div?: string;
    home_c_card_icon?: string;
    home_c_card_h3?: string;
    home_c_card_p?: string;
  }
  let {
    cards = [],
    home_c_card,
    home_c_div,
    home_c_card_icon,
    home_c_card_h3,
    home_c_card_p,
    ...restProps
  }: Props = $props();
</script>

{#snippet cardSnippet({ title, description, icon, href, icon_class })}
  <Card {href} class={twMerge('_home_c_card_ max-w-2xl', home_c_card)}>
    <svelte:component
      this={icon}
      class="{twMerge('_home_c_card_icon_ mb-3 h-8 w-8', home_c_card_icon)} {icon_class}"
    />
    <h3
      class={twMerge(
        '_home_c_card_h3_ mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white',
        home_c_card_h3
      )}
    >
      {title}
    </h3>
    <p
      class={twMerge(
        '_home_c_card_p_ font-normal leading-tight text-gray-700 dark:text-gray-400',
        home_c_card_p
      )}
    >
      {@html description}
    </p>
  </Card>
{/snippet}

<div
  class={twMerge(
    '_home_c_div_ mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3',
    home_c_div
  )}
  {...restProps}
>
  {#each cards as card}
    {@render cardSnippet(card)}
  {/each}
</div>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop cards = []
@prop home_c_card
@prop home_c_div
@prop home_c_card_icon
@prop home_c_card_h3
@prop home_c_card_p
@prop ...restProps
-->
