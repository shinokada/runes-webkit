<script>import { twMerge } from "tailwind-merge";
import { Footer, FooterBrand, FooterLi, FooterUl } from "svelte-5-ui-lib";
let { brand, lis, footerClass, footerType = "logo", divClass, ulClass, ...restProps } = $props();
let footerCls = twMerge("shadow-none bg-gray-50 rounded-none mt-24 border-t border-gray-100 dark:border-gray-800 dark_bg_theme", footerClass);
let divCls = twMerge("mx-auto max-w-7xl sm:flex sm:items-center sm:justify-between", divClass);
let ulCls = twMerge("flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0", ulClass);
</script>

{#snippet li(lis)}
  {#each lis as { name, href }}
    <FooterLi {href}>{name}</FooterLi>
  {/each}
{/snippet}

<Footer
  footerclass={footerCls}
  {footerType}
  {...restProps}
>
  <div class={divCls}>
    <FooterBrand href={brand?.href} name={brand?.name} />
    <FooterUl
      ulclass={ulCls}
    >
      {@render li(lis)}
    </FooterUl>
  </div>
</Footer>

<!--
@component
[Go to docs](https://svelte-icon-webkit.codewithshin.com/)
## Props
@props: brand?: {
@props:name: string;
@props:href: string;
-->
