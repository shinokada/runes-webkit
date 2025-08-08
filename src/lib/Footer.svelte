<script lang="ts">
  import { Footer, FooterBrand, FooterLink, FooterLinkGroup } from "flowbite-svelte";
  import { twMerge } from "tailwind-merge";

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
    footerClass?: string | undefined | null;
    divClass?: string | undefined | null;
    ulClass?: string | undefined | null;
  }
  let {
    brand,
    divClass,
    footerClass,
    ulClass,
    lis,
    footerType = "logo",
    ...restProps
  }: Props = $props();
</script>

<Footer
  class={twMerge(
    "rounded-none border-t border-gray-100 shadow-none dark:border-gray-600 dark:bg-stone-900",
    footerClass
  )}
  {footerType}
  {...restProps}
>
  <div
    class={twMerge(
      "mx-auto max-w-4xl sm:flex sm:items-center sm:justify-between lg:ml-64",
      divClass
    )}
  >
    {#if brand}
      <FooterBrand href={brand?.href} name={brand?.name} />
    {/if}
    {#if lis}
      <FooterLinkGroup
        class="mb-6 flex flex-wrap items-center text-sm text-gray-500 sm:mb-0 dark:text-gray-400"
      >
        {#each lis as { name, href }}
          <FooterLink {href}>{name}</FooterLink>
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
-->
