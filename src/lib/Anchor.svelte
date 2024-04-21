<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props{
    children: Snippet;
    tag?: string;
  }
  let { children, tag, ...restProps }: Props = $props();

  let content: string = $state('')
  let slug: string= $state('')

  function init(node: HTMLElement) {
    content = node.innerText ?? '';
    slug = content.replace(/\s/g, '_').replace(/__#+/g, '');
  }

</script>

<svelte:element this={tag} {...restProps} class="a_wrapper" use:init>
  {@render children()}
  <span id={slug} class="a_span"></span>
  <a
    class="a_a"
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
@props:tag?: string;
-->
