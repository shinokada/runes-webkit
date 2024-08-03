<script lang="ts">
  import { Footer, FooterBrand, FooterLi, FooterUl } from 'svelte-5-ui-lib';
  import { twMerge } from 'tailwind-merge';
  interface ListItem {
    name: string;
    href: string;
  }
  interface Props {
    brand?: {
      name: string;
      href: string;
    };
    lis?: {
      name: string;
      href: string;
    }[];
    footerType?: 'logo' | 'sitemap' | 'default' | 'socialmedia' | undefined;
    classFooter?: string | undefined | null;
    footerClass?: string | undefined | null;
    classDiv?: string | undefined | null;
    divClass?: string | undefined | null;
    classUl?: string | undefined | null;
    ulClass?: string | undefined | null;
  }
  let {
    brand,
    classDiv = 'mx-auto max-w-4xl sm:flex sm:items-center sm:justify-between',
    divClass,
    classFooter = 'shadow-none rounded-none border-t border-gray-100 dark:border-gray-600 dark_bg_theme',
    footerClass,
    classUl = 'flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0',
    ulClass,
    lis,
    footerType = 'logo',
    ...restProps
  }: Props = $props();
</script>

{#snippet li(lis: NonNullable<Props['lis']>)}
  {#each lis as { name, href }}
    <FooterLi {href}>{name}</FooterLi>
  {/each}
{/snippet}

<Footer class={twMerge(classFooter, footerClass)} {footerType} {...restProps}>
  <div class={twMerge(classDiv, divClass)}>
    {#if brand}
      <FooterBrand href={brand?.href} name={brand?.name} />
    {/if}
    {#if lis}
      <FooterUl class={twMerge(classUl, ulClass)}>
        {@render li(lis)}
      </FooterUl>
    {/if}
  </div>
</Footer>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop brand
@prop classDiv = 'mx-auto max-w-4xl sm:flex sm:items-center sm:justify-between'
@prop divClass
@prop classFooter = 'shadow-none rounded-none border-t border-gray-100 dark:border-gray-600 dark_bg_theme'
@prop footerClass
@prop classUl = 'flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0'
@prop ulClass
@prop lis
@prop footerType = 'logo'
@prop ...restProps
-->
