<script lang="ts">
  import { Footer, FooterBrand, FooterLi, FooterUl } from 'svelte-5-ui-lib';
  interface Props{
    brand?: {
      name: string;
      href: string;
    };
    lis?: {
      name: string;
      href: string;
    }[];
    footerType?: "logo" | "sitemap" | "default" | "socialmedia" | undefined;
  }
  let { brand, lis, footerType =  'logo', ...restProps }: Props = $props();
  
</script>

{#snippet li(lis)}
  {#each lis as { name, href }}
    <FooterLi {href}>{name}</FooterLi>
  {/each}
{/snippet}

<Footer
  footerclass="f_footer"
  {footerType}
  {...restProps}
>
  <div class="f_div">
    {#if brand}
    <FooterBrand href={brand?.href} name={brand?.name} />
    {/if}
    {#if lis}
    <FooterUl
      ulclass="f_ulclass"
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
