<script lang="ts">
	import { Footer, FooterBrand, FooterLi, FooterUl } from 'flowbite-svelte';
	import { twMerge } from 'tailwind-merge';

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
		classDiv = 'mx-auto max-w-4xl sm:flex sm:items-center sm:justify-between lg:ml-64',
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
@props: brand: any;
@props:classDiv: any = 'mx-auto max-w-4xl sm:flex sm:items-center sm:justify-between lg:ml-64';
@props:divClass: any;
@props:classFooter: any = 'shadow-none rounded-none border-t border-gray-100 dark:border-gray-600 dark_bg_theme';
@props:footerClass: any;
@props:classUl: any = 'flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0';
@props:ulClass: any;
@props:lis: any;
@props:footerType: any = 'logo';
-->
