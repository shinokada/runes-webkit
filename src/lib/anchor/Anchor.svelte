<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import { type AnchorProps as Props, anchor } from '.';

  let {
    children,
    spanClass,
    aClass,
    class: className,
    tag,
    ...restProps
  }: Props = $props();

  const { base, span, anchor: anchorCls } = $derived(anchor());

  let content: string = $state('');
  let slug: string = $state('');

  function init(node: HTMLElement) {
    content = node.innerText ?? '';
    slug = content.replace(/\s/g, '_').replace(/__#+/g, '');
  }
</script>

<svelte:element this={tag} {...restProps} class={base({ className })} use:init>
  {@render children()}
  <span id={slug} class={span({ class: spanClass })}></span>
  <a class={anchorCls({ class: aClass })} href="#{slug}" aria-label="Link to this section: {content}">
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
