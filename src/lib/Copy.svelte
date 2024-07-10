<script lang="ts">
  import { Badge } from 'svelte-5-ui-lib';
  import { clickToCopy } from '$lib';

  interface Props {
    children: any;
    iconName: string;
    counter?: number;
    c_t_c_badge_div?: string;
    c_t_c_div?: string;
    c_t_c_btn?: string;
  }
  let { children, iconName, counter = 2, c_t_c_badge_div = 'absolute top-4 w-44 p-1', c_t_c_div, c_t_c_btn }: Props = $props();

  let text = $state('');
  let open = $state(false);

  function copySuccess(iconName: string) {
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
  <div class='relative'>
  <Badge
    large
    class={c_t_c_badge_div}
  >
    <span class="font-medium">{text}</span>
  </Badge>
  </div>
{/if}

<div oncopysuccess={copySuccess(iconName)} oncopyerror={copyError} class='{c_t_c_div} _c_t_c_div_'>
  <button type="button" class="ml-4 {c_t_c_btn} _c_t_c_btn_" use:clickToCopy={iconName} onclick={trigger}>
    {@render children()}
  </button>
</div>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop children
@prop iconName
@prop counter = 2
@prop c_t_c_badge_div = 'absolute top-4 w-44 p-1'
@prop c_t_c_div
@prop c_t_c_btn
-->
