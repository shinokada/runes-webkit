<script lang="ts">
  import { HighlightSvelte, Highlight } from 'svelte-rune-highlight';
  import { Badge } from 'svelte-5-ui-lib';
  import { clickToCopy } from './helpers';
  import markdown from 'svelte-rune-highlight/languages/markdown';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    code: string;
    codeLang?: string;
    counter?: number;
  }
  let {
    code,
    codeLang,
    counter = 2
  }: Props = $props();

  let text = $state('');
  let open = $state(false);

  function copySuccess(){
		text = "Copied!"
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
  <Badge large divclass="h_c_badge_div">
    <span class="font-medium">{text}</span>
  </Badge>
</div>
{/if}

<div
  class="h_c_div" oncopysuccess={copySuccess} oncopyerror={copyError}
>
<div class='relative'>
  <button type="button" use:clickToCopy={code} onclick={trigger} class="h_c_btn">
    <svg class="h_c_svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z">
      </path>
    </svg>
    Copy
  </button>
</div>
  {#if codeLang === 'md'}
    <Highlight language={markdown} {code} />
  {:else if code}
    <HighlightSvelte {code} />
  {:else}
    no code is provided
  {/if}
</div>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: 
-->
