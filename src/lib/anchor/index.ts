export { default as Anchor } from './Anchor.svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
export { anchor } from './theme';

export interface AnchorProps extends HTMLAttributes<HTMLHeadingElement> {
	children: Snippet;
	tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	spanClass?: string | undefined | null;
	aClass?: string | undefined | null;
	class?: string;
}
