<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children: Snippet;
    tag?: string | undefined | null;
    spanClass?: string | undefined | null;
    classA?: string | undefined | null;
    aClass?: string | undefined | null;
    wrapperClass?: string | undefined | null;
  }
  let { 
    children, 
    spanClass = 'absolute -top-[100px]', 
    classA = 'ml-2 text-primary-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-700',
    aClass, 
    wrapperClass = 'group relative', 
    tag, 
    ...restProps 
  }: Props = $props();

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
  class={wrapperClass}
  use:init
>
  {@render children()}
  <span id={slug} class={spanClass}></span>
  <a
    class={twMerge(classA, aClass)}
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
@prop spanClass = 'absolute -top-[100px]'
@prop classA = 'ml-2 text-primary-700 opacity-0 transition-opacity group-hover:opacity-100 dark:text-primary-700'
@prop aClass
@prop wrapperClass = 'group relative'
@prop tag
@prop ...restProps
-->
