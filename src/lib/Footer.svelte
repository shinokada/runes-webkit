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
  }
  let { brand, lis,  ...restProps }: Props = $props();
</script>

{#snippet li(lis)}
  {#each lis as { name, href }}
    <FooterLi {href}>{name}</FooterLi>
  {/each}
{/snippet}

<Footer
  footerclass="shadow-none dark:bg-gray-900 rounded-none border-t border-gray-200 dark:border-gray-600"
  footerType="logo"
  {...restProps}
>
  <div class="mx-auto max-w-7xl sm:flex sm:items-center sm:justify-between">
    <FooterBrand href={brand?.href} name={brand?.name} />
    <FooterUl
      ulclass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
    >
      {@render li(lis)}
    </FooterUl>
  </div>
</Footer>