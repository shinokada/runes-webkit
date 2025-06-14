<script lang="ts">
	import { Tabs, Label, TabItem } from 'svelte-5-ui-lib';
	import { random_hex_color_code, random_tailwind_color } from '$lib';
	import type { Component } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { Copy } from '$lib';

	interface Props {
		icons: Record<string, Component>;
		title: string;
		defaultSize?: string;
		sizeByTailwind?: boolean; // for flowbite-svelte-icons only
		minSize?: string;
		maxSize?: string;
		threeTabs?: boolean;
		wrapperClass?: string | undefined;
		div1Class?: string | undefined;
		div2Class?: string | undefined;
		classDiv2?: string | undefined;
		div3Class?: string | undefined;
		classDiv3?: string | undefined;
		div4Class?: string | undefined;
		labelClass?: string | undefined;
		searchClass?: string | undefined;
		classSearch?: string | undefined;
		tab1Class?: string | undefined;
		classTab1?: string | undefined;
		tab2Class?: string | undefined;
		rangeClass?: string | undefined;
		classRange?: string | undefined;
		contentClass?: string;
		variation?: string;
	}
	let {
		icons,
		wrapperClass = 'mx-auto max-w-7xl px-8',
		div1Class = 'relative overflow-x-auto',
		div2Class,
		classDiv2 = 'w-full p-4 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3',
		div3Class,
		classDiv3 = 'grid grid-cols-1 gap-8 px-4 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-white',
		div4Class = 'flex flex-wrap items-center',
		labelClass = 'text-lg py-4',
		searchClass,
		classSearch = 'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500',
		tab1Class,
		classTab1 = 'grid grid-cols-1 gap-8 px-4 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-white pb-12',
		tab2Class = 'flex items-center text-lg',
		rangeClass,
		classRange = 'mt-8 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700',
		contentClass = 'rounded-lg dark_bg_theme mt-4',
		title,
		sizeByTailwind,
		minSize = '16',
		defaultSize = $bindable('24'),
		maxSize = '48',
		threeTabs = true,
		variation,
		...restProps
	}: Props = $props();

	let searchTerm = $state('');

	let filteredEntries = $derived(
		Object.entries(icons).filter(([name]) => {
			return name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
		})
	);
	// $inspect('filteredEntries', filteredEntries);
</script>

<div class="w-full pb-20">
	<div class={wrapperClass}>
		<h1>{title}</h1>

		<div class={div1Class}>
			<div class={twMerge(classDiv2, div2Class)}>
				<Label class={labelClass}>Icon size: {defaultSize}</Label>
				<input
					type="search"
					id="site-search"
					name="q"
					class={twMerge(classSearch, searchClass)}
					placeholder="Search icons"
					bind:value={searchTerm}
				/>
				<input
					id="default-range"
					type="range"
					min={minSize}
					max={maxSize}
					bind:value={defaultSize}
					class={twMerge(classRange, rangeClass)}
				/>
			</div>
			{#if threeTabs}
				<Tabs tabStyle="pill" {contentClass} divider={false}>
					<TabItem open title="Mono">
						<div class={twMerge(classTab1, tab1Class)}>
							{#each filteredEntries as [name, Component] (name)}
								{#if name !== 'Icon'}
									<div class={tab2Class}>
										{#if sizeByTailwind}
											<Component
												class="shrink-0 h-{defaultSize} w-{defaultSize}"
												{variation}
												{...restProps}
											></Component>
										{:else}
											<Component class="shrink-0" size={defaultSize} {variation} {...restProps}
											></Component>
										{/if}
										<Copy iconName={name}>{name}</Copy>
									</div>
								{/if}
							{/each}
						</div>
					</TabItem>
					<TabItem title="Random Hex Colors">
						<div class={twMerge(classTab1, tab1Class)}>
							{#each filteredEntries as [name, Component] (name)}
								{#if name !== 'Icon'}
									<div class={tab2Class}>
										{#if sizeByTailwind}
											<Component
												color={random_hex_color_code()}
												class="shrink-0 h-{defaultSize} w-{defaultSize}"
												{variation}
												{...restProps}
											></Component>
										{:else}
											<Component
												color={random_hex_color_code()}
												class="shrink-0"
												size={defaultSize}
												{variation}
												{...restProps}
											></Component>
										{/if}
										<Copy iconName={name}>{name}</Copy>
									</div>
								{/if}
							{/each}
						</div>
					</TabItem>
					<TabItem title="Random Tailwind CSS Colors">
						<div class={twMerge(classTab1, tab1Class)}>
							{#each filteredEntries as [name, Component] (name)}
								{#if name !== 'Icon'}
									<div class={tab2Class}>
										{#if sizeByTailwind}
											<Component
												class="{random_tailwind_color()} shrink-0 h-{defaultSize} w-{defaultSize}"
												{variation}
												{...restProps}
											></Component>
										{:else}
											<Component
												class={random_tailwind_color()}
												size={defaultSize}
												{variation}
												{...restProps}
											></Component>
										{/if}
										<Copy iconName={name}>{name}</Copy>
									</div>
								{/if}
							{/each}
						</div>
					</TabItem>
				</Tabs>
			{:else}
				<div class="w-full text-left text-gray-500 dark:text-gray-400">
					<div class={twMerge(classDiv3, div3Class)}>
						{#each filteredEntries as [name, Component] (name)}
							{#if name !== 'Icon'}
								<div class={div4Class}>
									<Component class="shrink-0" size={defaultSize} {variation} {...restProps}
									></Component>
									<Copy iconName={name}>{name}</Copy>
								</div>
							{/if}
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: icons: any;
@props:wrapperClass: any = 'mx-auto max-w-7xl px-8';
@props:div1Class: any = 'relative overflow-x-auto';
@props:div2Class: any;
@props:classDiv2: any = 'w-full p-4 sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3';
@props:div3Class: any;
@props:classDiv3: any = 'grid grid-cols-1 gap-8 px-4 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-white';
@props:div4Class: any = 'flex flex-wrap items-center';
@props:labelClass: any = 'text-lg py-4';
@props:searchClass: any;
@props:classSearch: any = 'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500';
@props:tab1Class: any;
@props:classTab1: any = 'grid grid-cols-1 gap-8 px-4 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-white pb-12';
@props:tab2Class: any = 'flex items-center text-lg';
@props:rangeClass: any;
@props:classRange: any = 'mt-8 h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700';
@props:contentClass: any = 'rounded-lg dark_bg_theme mt-4';
@props:title: any;
@props:sizeByTailwind: any;
@props:minSize: any = '16';
@props:defaultSize: any = $bindable('24');
@props:maxSize: any = '48';
@props:threeTabs: any = true;
@props:variation: any;
-->
