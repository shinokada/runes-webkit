<script lang="ts">import { twMerge } from "tailwind-merge";
let { children, tag, class: className, ...restProps } = $props();
let content = $state("");
let slug = $state("");
function init(node) {
  content = node.innerText ?? "";
  slug = content.replace(/\s/g, "_").replace(/__#+/g, "");
}
let elemClass = $state(twMerge("relative group", className));
</script>

<svelte:element this={tag} {...restProps} class={elemClass} use:init>
  {@render children()}
  <span id={slug} class="absolute -top-[100px]" />
  <a
    class="ml-2 text-primary-700 opacity-0 transition-opacity dark:text-primary-700 group-hover:opacity-100"
    href="#{slug}"
    aria-label="Link to this section: {content}"
  >
    #
  </a>
</svelte:element>

<!--
@component
[Go to docs](https://svelte-icon-webkit.codewithshin.com/)
## Props
@props: children: Snippet;
@props:tag?: string;
@props:class?: string;
-->
