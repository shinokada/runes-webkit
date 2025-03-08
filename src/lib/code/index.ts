import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
export { default as Code } from './Code.svelte';
export { default as CodeWrapper } from './CodeWrapper.svelte';
export { codewrapper, code } from './theme';

export interface CodeProps extends HTMLAttributes<HTMLElement> {
	children: Snippet;
	class?: string;
}

export interface CodeWrapperProps extends HTMLAttributes<HTMLDivElement> {
	children: Snippet;
}
