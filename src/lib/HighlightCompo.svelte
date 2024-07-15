<script lang="ts">
  import { HighlightSvelte, Highlight } from 'svelte-rune-highlight';
  import { Badge } from 'svelte-5-ui-lib';
  import { twMerge } from 'tailwind-merge';
  import { clickToCopy } from '$lib';
  import markdown from 'svelte-rune-highlight/languages/markdown';

  interface Props {
    code: string;
    codeLang?: string;
    counter?: number;
    h_c_badge_div?: string;
    h_c_div?: string;
    h_c_btn?: string;
    h_c_svg?: string;
  }
  let { code, codeLang, counter = 2, h_c_badge_div, h_c_div, h_c_btn, h_c_svg }: Props = $props();

  let text = $state('');
  let open = $state(false);

  function copySuccess() {
    text = 'Copied!';
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
    <Badge large class={twMerge('absolute -top-10 right-0 _h_c_badge_div_', h_c_badge_div)}>
      <span class="font-medium">{text}</span>
    </Badge>
  </div>
{/if}

<div
  class={twMerge(
    '_h_c_div_ my-12 border border-gray-500 bg-gray-300 dark:border-gray-600 dark:bg-gray-700',
    h_c_div
  )}
  oncopysuccess={copySuccess}
  oncopyerror={copyError}
>
  <div class="relative">
    <button
      type="button"
      use:clickToCopy={code}
      onclick={trigger}
      class={twMerge(
        '_h_c_btn_ absolute right-0 -mt-11 flex items-center border border-gray-200 bg-gray-100 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-200 hover:text-primary-700 dark:border-gray-500 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white',
        h_c_btn
      )}
    >
      <svg
        class={twMerge('_h_c_svg_ me-2 h-4 w-4', h_c_svg)}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        >
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
@prop code
@prop codeLang
@prop counter = 2
@prop h_c_badge_div
@prop h_c_div
@prop h_c_btn
@prop h_c_svg
-->
