<script lang="ts">
  import { Card } from 'flowbite-svelte';
  import { twMerge } from 'tailwind-merge';
  import type { CardType } from '$lib';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    cards: CardType[];
    cardClass?: string | undefined;
    classDiv?: string | undefined | null;
    divClass?: string | undefined | null;
    iconClass?: string | undefined | null;
    classH3?: string | undefined | null;
    h3Class?: string | undefined | null;
    pClass?: string | undefined | null;
  }
  let {
    cards = [],
    cardClass = 'max-w-2xl',
    classDiv = 'mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3',
    divClass,
    iconClass = 'mb-3 h-8 w-8',
    classH3 = 'mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white',
    h3Class,
    pClass = 'font-normal leading-tight text-gray-700 dark:text-gray-400',
    ...restProps
  }: Props = $props();
</script>

{#snippet cardSnippet(card: CardType)}
  <Card href={card.href} class={cardClass}>
    <card.Icon class={twMerge(iconClass, card.icon_class)} />
    <h3 class={twMerge(classH3, h3Class)}>
      {card.title}
    </h3>
    <p class={pClass}>
      {@html card.description}
    </p>
  </Card>
{/snippet}

<div class={twMerge(classDiv, divClass)} {...restProps}>
  {#each cards as card}
    {@render cardSnippet(card)}
  {/each}
</div>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: cards: any = [];
@props:cardClass: any = 'max-w-2xl';
@props:classDiv: any = 'mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3';
@props:divClass: any;
@props:iconClass: any = 'mb-3 h-8 w-8';
@props:classH3: any = 'mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white';
@props:h3Class: any;
@props:pClass: any = 'font-normal leading-tight text-gray-700 dark:text-gray-400';
-->
