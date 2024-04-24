<script lang="ts">import { Footer, FooterBrand, FooterLi, FooterUl } from "svelte-5-ui-lib";
import { twMerge } from "tailwind-merge";
let { brand, f_div, f_footer, f_ulclass, lis, footerType = "logo", ...restProps } = $props();
</script>

{#snippet li(lis)}
  {#each lis as { name, href }}
    <FooterLi {href}>{name}</FooterLi>
  {/each}
{/snippet}

<Footer
  footerclass="{twMerge('shadow-none rounded-none border-t border-gray-100 dark:border-gray-700 dark_bg_theme _f_footer_', f_footer)}"
  {footerType}
  {...restProps}
>
  <div class="{twMerge('mx-auto max-w-4xl sm:flex sm:items-center sm:justify-between _f_div_', f_div)}">
    {#if brand}
    <FooterBrand href={brand?.href} name={brand?.name} />
    {/if}
    {#if lis}
    <FooterUl
      ulclass="{twMerge('flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 _f_ulclass_', f_ulclass)}"
    >
      {@render li(lis)}
    </FooterUl>
    {/if}
  </div>
</Footer>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: brand?: {
@props:name: string;
@props:href: string;
-->
