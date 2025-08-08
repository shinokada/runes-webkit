<script lang="ts">
  import { Banner } from "flowbite-svelte";
  import { type SupportBannerProps as Props, supportBanner } from ".";

  let { children, class: className, pClass }: Props = $props();

  const { base, paragraph } = $derived(supportBanner());
</script>

<Banner id="default-banner" dismissable={false} class={base({ className })}>
  <p class={paragraph({ class: pClass })}>
    {@render children()}
  </p>
</Banner>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: children: Snippet;
@props:class: string;
@props:pClass: string | undefined;
-->
