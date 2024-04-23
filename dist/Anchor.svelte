<script lang="ts">import { twMerge } from "tailwind-merge";
let { children, a_span, a_a, a_wrapper, tag, ...restProps } = $props();
let content = $state("");
let slug = $state("");
function init(node) {
  content = node.innerText ?? "";
  slug = content.replace(/\s/g, "_").replace(/__#+/g, "");
}
</script>

<svelte:element this={tag} {...restProps} class="{twMerge('relative group _a_wrapper_', a_wrapper)}" use:init>
  {@render children()}
  <span id={slug} class="{twMerge('absolute -top-[100px] _a_span_', a_span)}"></span>
  <a
    class="{twMerge('ml-2 text-primary-700 opacity-0 transition-opacity dark:text-primary-700 group-hover:opacity-100 _a_a_', a_a)}"
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
@props:class?: string;
@props:tag?: string;
-->
