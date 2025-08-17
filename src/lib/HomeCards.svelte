<script lang="ts">
  import { Card } from "flowbite-svelte";
  import type { ClassValue } from "svelte/elements";
  import { cn } from "$lib";
  import type { CardType } from "$lib";
  import type { HTMLAttributes } from "svelte/elements";

  interface Props extends HTMLAttributes<HTMLDivElement> {
    cards: CardType[];
    cardClass?: ClassValue;
    divClass?: ClassValue;
    iconClass?: ClassValue;
    h3Class?: ClassValue;
    pClass?: ClassValue;
  }
  let {
    cards = [],
    cardClass,
    divClass,
    iconClass,
    h3Class,
    pClass,
    ...restProps
  }: Props = $props();

  const classDiv = "mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3";
  const classH3 = "mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white";
  const classP = "font-normal leading-tight text-gray-700 dark:text-gray-400";
</script>

{#snippet cardSnippet(card: CardType)}
  <Card href={card.href} class={cn("max-w-2xl p-4", cardClass)}>
    <card.Icon class={cn("mb-3 h-8 w-8", iconClass, card.icon_class)} />
    <h3 class={cn(classH3, h3Class)}>
      {card.title}
    </h3>
    <p class={cn(classP, pClass)}>
      {@html card.description}
    </p>
  </Card>
{/snippet}

<div class={cn(classDiv, divClass)} {...restProps}>
  {#each cards as card}
    {@render cardSnippet(card)}
  {/each}
</div>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: cards: any = [];
@props:cardClass: any;
@props:divClass: any;
@props:iconClass: any;
@props:h3Class: any;
@props:pClass: any;
-->
