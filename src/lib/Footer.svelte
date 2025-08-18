<script lang="ts">
  import { Footer, FooterBrand, FooterLink, FooterLinkGroup } from "flowbite-svelte";
  import type { ClassValue } from "svelte/elements";
  import { cn } from "$lib";

  type BrandClasses = {
    aClass?: ClassValue;
    spanClass?: ClassValue;
    imgClass?: ClassValue;
  };

  type FooterLinkClasses = {
    class?: ClassValue;
    link?: ClassValue;
  };

  interface Props {
    brand?: {
      name: string;
      href: string;
    };
    lis?: {
      name: string;
      href: string;
    }[];
    footerType?: "logo" | "sitemap" | "default" | "socialmedia" | undefined;
    footerClass?: ClassValue;
    divClass?: ClassValue;
    ulClass?: ClassValue;
    brandClasses?: BrandClasses;
    footerLinkGroupClass?: ClassValue;
    footerLinkClasses?: FooterLinkClasses;
  }
  let {
    brand,
    divClass,
    footerClass,
    ulClass,
    lis,
    footerType = "logo",
    brandClasses,
    footerLinkGroupClass,
    footerLinkClasses,
    ...restProps
  }: Props = $props();
</script>

<Footer
  class={cn(
    "dark-bg-theme rounded-none border-t border-gray-100 shadow-none dark:border-gray-600",
    footerClass
  )}
  {footerType}
  {...restProps}
>
  <div
    class={cn("mx-auto max-w-4xl sm:flex sm:items-center sm:justify-between lg:ml-64", divClass)}
  >
    {#if brand}
      <FooterBrand href={brand?.href} name={brand?.name} {...brandClasses} />
    {/if}
    {#if lis}
      <FooterLinkGroup
        class={cn(
          "mb-6 flex flex-wrap items-center text-sm text-gray-500 sm:mb-0 dark:text-gray-400",
          footerLinkGroupClass
        )}
      >
        {#each lis as { name, href }}
          <FooterLink {href} {...footerLinkClasses}>{name}</FooterLink>
        {/each}
      </FooterLinkGroup>
    {/if}
  </div>
</Footer>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: brand: any;
@props:divClass: any;
@props:footerClass: any;
@props:ulClass: any;
@props:lis: any;
@props:footerType: any = "logo";
@props:brandClasses: any;
@props:footerLinkGroupClass: any;
@props:footerLinkClasses: any;
-->
