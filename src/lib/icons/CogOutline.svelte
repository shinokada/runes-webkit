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
		strokeWidth?: string;
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
		strokeWidth = ctx.strokeWidth || '2',
		desc,
		class: classname,
		ariaLabel = 'cog outline',
		...restProps
	}: Props = $props();

	let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
	const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	{color}
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
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width={strokeWidth}
		d="M21 13v-2a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L14 4.757V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L4.929 6.343a1 1 0 0 0 0 1.414l.536.536L4.757 10H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535 1.707.707V20a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H20a1 1 0 0 0 1-1Z"
	/>
	<path
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width={strokeWidth}
		d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
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
@props:strokeWidth: any = ctx.strokeWidth || '2';
@props:desc: any;
@props:class: string;
@props:ariaLabel: any = 'cog outline';
-->
