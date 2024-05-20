<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children: Snippet;
    tag?: string;
    a_span?: string;
    a_a?: string;
    a_wrapper?: string;
  }
  let { children, a_span, a_a, a_wrapper, tag, ...restProps }: Props = $props();

  let content: string = $state('');
  let slug: string = $state('');

  function init(node: HTMLElement) {
    content = node.innerText ?? '';
    slug = content.replace(/\s/g, '_').replace(/__#+/g, '');
  }
</script>

<svelte:element
  this={tag}
  {...restProps}
  class={twMerge('_a_wrapper_ group relative', a_wrapper)}
  use:init
>
  {@render children()}
  <span id={slug} class={twMerge('_a_span_ absolute -top-[100px]', a_span)}></span>
  <a
    class={twMerge(
      '_a_a_ ml-2 text-primary-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-700',
      a_a
    )}
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
@prop children
@prop a_span
@prop a_a
@prop a_wrapper
@prop tag
@prop ...restProps
-->
