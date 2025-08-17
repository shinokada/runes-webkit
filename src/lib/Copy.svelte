<script lang="ts">
  import { Badge } from "flowbite-svelte";
  import type { Snippet } from "svelte";
  import type { ClassValue } from "svelte/elements";
  import { cn } from "$lib";
  import { clickToCopy } from "$lib";
  import type { HTMLAttributes } from "svelte/elements";

  interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: Snippet;
    iconName: string;
    counter?: number;
    badgeClass?: ClassValue;
    btnClass?: ClassValue;
  }
  let { children, iconName, counter = 2, badgeClass, btnClass, ...attributes }: Props = $props();

  let text = $state(iconName);
  let open = $state(false);

  function copySuccess() {
    text = `Copied ${iconName}!`;
    open = true;
    counter = 2;
    timeout();
  }

  function timeout() {
    if (--counter > 0) return setTimeout(timeout, 1000);
    open = false;
  }
</script>

{#if open}
  <div class="relative">
    <Badge large class={cn("absolute top-4 px-2 py-1", badgeClass)}>
      <span class="font-medium">{text}</span>
    </Badge>
  </div>
{/if}

<button
  type="button"
  class={cn("ml-4", btnClass)}
  use:clickToCopy={iconName}
  onclick={copySuccess}
  {...attributes}
>
  {@render children()}
</button>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: children: any;
@props:iconName: any;
@props:counter: any = 2;
@props:badgeClass: any;
@props:btnClass: any;
-->
