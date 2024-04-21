<script lang="ts">let { children, tag, class: classname, ...restProps } = $props();
let content = $state("");
let slug = $state("");
function init(node) {
  content = node.innerText ?? "";
  slug = content.replace(/\s/g, "_").replace(/__#+/g, "");
}
</script>

<svelte:element this={tag} {...restProps} class="a_wrapper group {classname}" use:init>
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
@props:class?: string;
@props:tag?: string;
-->
