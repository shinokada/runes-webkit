<script lang="ts">
	import { type AnchorProps as Props, anchor } from '.';

	let { children, spanClass, aClass, class: className, tag, ...restProps }: Props = $props();

	const { base, span, anchor: anchorCls } = $derived(anchor());

	let content: string = $state('');
	let slug: string = $state('');

	function init(node: HTMLElement) {
		$effect(() => {
			content = node.innerText?.trim() ?? '';
			slug = content
				? content
						.toLowerCase()
						.replace(/[^\w\s-]/g, '') // Remove non-word characters except spaces and hyphens
						.replace(/\s+/g, '-') // Replace spaces with hyphens
						.replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
						.replace(/^-|-$/g, '') // Remove leading/trailing hyphens
				: 'section-' + Math.random().toString(36).substring(2, 7); // Fallback unique ID
		});
	}

	$effect(() => {
		$inspect('slug', slug);
	});
</script>

<svelte:element this={tag} {...restProps} class={base({ className })} use:init>
	{@render children()}
	<span id={slug} class={span({ class: spanClass })}></span>
	<a
		class={anchorCls({ class: aClass })}
		href="#{slug}"
		aria-label="Link to this section: {content}"
	>
		#
	</a>
</svelte:element>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: children: Snippet;
@props:spanClass: string | undefined | null;
@props:aClass: string | undefined | null;
@props:class: string;
@props:tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
-->
