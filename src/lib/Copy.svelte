<script lang="ts">
  import { Badge } from 'svelte-5-ui-lib';
  import type { Snippet } from 'svelte';
  import { clickToCopy } from '$lib';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLButtonElement> {
    children: Snippet;
    iconName: string;
    counter?: number;
    badgeClass?: string;
    btnClass?: string;
  }
  let {
    children,
    iconName,
    counter = 2,
    badgeClass = 'absolute top-4 py-1 px-2',
    btnClass = 'ml-4',
    ...attributes
  }: Props = $props();

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
    <Badge large class={badgeClass}>
      <span class="font-medium">{text}</span>
    </Badge>
  </div>
{/if}

<button 
  type="button" 
  class={btnClass} 
  use:clickToCopy={iconName} 
  onclick={copySuccess}
  {...attributes}
>
  {@render children()}
</button>