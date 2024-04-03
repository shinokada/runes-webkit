<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { Snippet } from "svelte";

  interface Props{
    children: Snippet;
    tag?: string;
    class?: string;
  }
  let { children, tag, class:className, ...restProps }: Props = $props();
  // export let tag: string;

  let content: string = $state('')
  let slug: string= $state('')

  function init(node: HTMLElement) {
    content = node.innerText ?? '';
    slug = content.replace(/\s/g, '_').replace(/__#+/g, '');
    // slug = content.replace(/(\s+)|_/g, '_').replace(/_+$/, '');
  }

  let elemClass = $state(twMerge('relative group', className));
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