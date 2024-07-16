<script lang="ts">
  import { HighlightSvelte, Highlight } from 'svelte-rune-highlight';
  import { Badge } from 'svelte-5-ui-lib';
  import { twMerge } from 'tailwind-merge';
  import { clickToCopy } from '$lib';
  import markdown from 'svelte-rune-highlight/languages/markdown';

  interface Props {
    code: string;
    codeLang?: string | undefined | null;
    counter?: number;
    badgeClass?: string | undefined | null;
    classDiv?: string | undefined | null;
    divClass?: string | undefined | null;
    classBtn?: string | undefined | null;
    btnClass?: string | undefined | null;
    svgClass?: string | undefined | null;
  }
  let { 
    code, 
    codeLang, 
    counter = 2, 
    badgeClass = 'absolute -top-10 right-0', 
    classDiv = 'my-12 border border-gray-500 bg-gray-300 dark:border-gray-600 dark:bg-gray-700',
    divClass,
    classBtn = 'absolute right-0 -mt-11 flex items-center border border-gray-200 bg-gray-100 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-200 hover:text-primary-700 dark:border-gray-500 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white',
    btnClass, 
    svgClass = 'me-2 h-4 w-4' 
  }: Props = $props();

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
    <Badge large class={badgeClass}>
      <span class="font-medium">{text}</span>
    </Badge>
  </div>
{/if}

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
  role="button"
  tabindex="0"
  class={twMerge(classDiv, divClass)}
  onclick={copySuccess}
>
  <div class="relative">
    <button
      type="button"
      use:clickToCopy={code}
      onclick={trigger}
      class={twMerge(classBtn, btnClass)}
    >
      <svg
        class={svgClass}
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
@prop badgeClass = 'absolute -top-10 right-0'
@prop classDiv = 'my-12 border border-gray-500 bg-gray-300 dark:border-gray-600 dark:bg-gray-700'
@prop divClass
@prop classBtn = 'absolute right-0 -mt-11 flex items-center border border-gray-200 bg-gray-100 px-3 py-2 text-xs font-medium text-gray-600 hover:bg-gray-200 hover:text-primary-700 dark:border-gray-500 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white'
@prop btnClass
@prop svgClass = 'me-2 h-4 w-4'
-->
