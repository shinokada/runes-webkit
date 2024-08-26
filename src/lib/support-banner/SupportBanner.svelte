<script lang="ts">
  import { Banner } from 'svelte-5-ui-lib';
  import { type SupportBannerProps as Props, supportBanner } from '.';

  let {
    children,
    class: className,
    pClass,
    ...restProps
  }: Props = $props();

  const { base, paragraph } = $derived(supportBanner())
</script>

<Banner id="default-banner" dismissable={false} class={base({ className})} {...restProps}>
  <p class={paragraph({ class:pClass })}>
    {@render children()}
  </p>
</Banner>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop children
@prop divClass = 'max-w-3xl mt-8 mx-auto p-2'
@prop pClass = 'flex items-center gap-4 text-lg font-normal text-gray-900 dark:text-gray-100'
@prop ...attributes
-->
