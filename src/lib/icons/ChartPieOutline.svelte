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
		ariaLabel = 'chart pie outline',
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
		d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"
	/>
	<path
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width={strokeWidth}
		d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"
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
@props:ariaLabel: any = 'chart pie outline';
-->
