<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import type { SVGAttributes } from 'svelte/elements';

	type TitleType = {
		id?: string;
		title?: string;
	};
	type DescType = {
		id?: string;
		desc?: string;
	};

	interface BaseProps extends SVGAttributes<SVGSVGElement> {
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
		role?: string;
		color?: string;
		class?: string;
	}

	interface Props extends BaseProps {
		title?: TitleType;
		desc?: DescType;
		ariaLabel?: string;
		size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	}

	const ctx: BaseProps = getContext('iconCtx') ?? {};
	const sizes = {
		xs: 'w-3 h-3',
		sm: 'w-4 h-4',
		md: 'w-5 h-5',
		lg: 'w-6 h-6',
		xl: 'w-8 h-8'
	};

	let {
		size = ctx.size || 'md',
		role,
		color = ctx.color || 'currentColor',
		title,
		desc,
		class: classname,
		ariaLabel = 'X solid',
		...restProps
	}: Props = $props();

	let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
	const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill={color}
	{...restProps}
	class={twMerge('shrink-0', sizes[size], classname)}
	{role}
	aria-label={ariaLabel}
	aria-describedby={hasDescription ? ariaDescribedby : undefined}
	viewBox="0 0 24 24"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"
	/>
</svg>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: size: any = ctx.size || 'md';
@props:role: any;
@props:color: any = ctx.color || 'currentColor';
@props:title: any;
@props:desc: any;
@props:class: string;
@props:ariaLabel: any = 'X solid';
-->
