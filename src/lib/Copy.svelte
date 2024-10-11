<script lang="ts">
  import { Badge } from 'svelte-5-ui-lib';
  import type { Snippet } from 'svelte';
  import { clickToCopy } from '$lib';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLDivElement> {
    children: Snippet;
    iconName: string;
    counter?: number;
    badgeClass?: string;
    divClass?: string;
    btnClass?: string;
  }
  let {
    children,
    iconName,
    counter = 2,
    badgeClass = 'absolute top-4 w-44 p-1',
    divClass,
    btnClass = 'ml-4',
    ...attributes
  }: Props = $props();

  let text = $state('');
  let open = $state(false);

  function copySuccess() {
    text = `Copied the icon name!`;
  }

  function copyError(event: CustomEvent) {
    text = `Error! ${event.detail}`;
  }

  function trigger() {
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
    <Badge large class={badgeClass}>
      <span class="font-medium">{text}</span>
    </Badge>
  </div>
{/if}

<div role="button" tabindex="0" onclick={copySuccess} class={divClass} {...attributes}>
  <button type="button" class={btnClass} use:clickToCopy={iconName} onclick={trigger}>
    {@render children()}
  </button>
</div>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: children: any;
@props:iconName: any;
@props:counter: any = 2;
@props:badgeClass: any = 'absolute top-4 w-44 p-1';
@props:divClass: any;
@props:btnClass: any = 'ml-4';
-->
