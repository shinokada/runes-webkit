<script lang="ts">
  import { Badge } from 'svelte-5-ui-lib';
  import { twMerge } from 'tailwind-merge';
  import { clickToCopy } from './helpers';
  // import type { ComponentType } from 'svelte';

  interface Props {
    children: any;
    iconName: string;
    counter?: number;
    c_t_c_badge_div?: string;
    c_t_c_div?: string;
    c_t_c_btn?: string;
  }
  let {
    children,
    iconName,
    counter = 2, c_t_c_badge_div, c_t_c_div, c_t_c_btn
  }: Props = $props();

  let text = $state('');
  let open = $state(false);

  function copySuccess(){
		text = "Icon name copied"
	}
	
	function copyError(event: CustomEvent){
		text = `Error! ${event.detail}`
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
<div class='relative'>
  <Badge large divclass="{twMerge('w-36 absolute -top-10 left-4 _c_t_c_badge_div_', c_t_c_badge_div)}">
    <span class="font-medium">{text}</span>
  </Badge>
</div>
{/if}

<div oncopysuccess={copySuccess} oncopyerror={copyError}
>
  <button type="button" class="ml-4" use:clickToCopy={iconName} onclick={trigger} >
    {@render children()}
  </button>
</div>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: children: any;
@props:iconName: string;
@props:counter?:  number; = 2, c_t_c_badge_div, c_t_c_div, c_t_c_btn;
@props:c_t_c_badge_div?: string;
@props:c_t_c_div?: string;
@props:c_t_c_btn?: string;
-->
