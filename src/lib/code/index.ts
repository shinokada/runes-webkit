import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import Code from './Code.svelte';
import CodeWrapper from './CodeWrapper.svelte';
import { codewrapper, code } from './theme';

interface CodeProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
}

interface CodeWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
}

export { Code, CodeWrapper, codewrapper, code, type CodeProps, type CodeWrapperProps };
