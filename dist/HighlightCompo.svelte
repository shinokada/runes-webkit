<script lang="ts">import { HighlightSvelte, Highlight } from "svelte-rune-highlight";
import { Badge } from "svelte-5-ui-lib";
import { clickToCopy } from "./helpers";
import markdown from "svelte-rune-highlight/languages/markdown";
let {
  code,
  codeLang,
  badgeDivclass = "absolute -top-14 right-0",
  counter = 2
} = $props();
let text = $state("");
let open = $state(false);
function copySuccess() {
  text = "Success!";
}
function copyError(event) {
  text = `Error! ${event.detail}`;
}
function trigger() {
  open = true;
  counter = 2;
  timeout();
}
function timeout() {
  if (--counter > 0)
    return setTimeout(timeout, 1e3);
  open = false;
}
</script>

{#if open}
<div class='relative'>
  <Badge large divclass={badgeDivclass}>
    <span class="font-medium">{text}</span>
  </Badge>
</div>
{/if}

<div
  class="my-8 border border-gray-500 bg-gray-300 dark:border-gray-600 dark:bg-gray-700" oncopysuccess={copySuccess} oncopyerror={copyError}
>
<div class='relative'>
  <button type="button" use:clickToCopy={code} onclick={trigger} class="absolute right-0 flex items-center -mt-11 px-3 py-2 text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 dark:border-gray-500 dark:text-white dark:bg-gray-800 hover:text-primary-700 hover:bg-gray-200 dark:hover:bg-gray-700  dark:hover:text-white"><svg class="w-4 h-4 me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>Copy</button>
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
