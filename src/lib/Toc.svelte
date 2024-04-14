<script lang="ts">
  import { twMerge } from "tailwind-merge";
  interface LinkType {
    name: string;
    href?: string;
    rel?: string;
    active?: boolean;
  }

  
  interface Props{
    headingSelector: string;
    extract: (x: HTMLElement) => LinkType;
    a_class?: string;
    ul_class?: string;
    div_1_class?: string;
    div_2_class?: string;
    div_3_class?: string;
    div_4_class?: string;
    h4_class?: string;
  }

  let { headingSelector, extract, div_1_class, div_2_class, div_3_class, div_4_class, a_class, ul_class,  h4_class }: Props = $props();

  let headings: LinkType[] = $state([]);

  function init(_: any) {
    const observer: MutationObserver = new MutationObserver(toc);
    observer.observe(document.body, { childList: true, subtree: true });

    return {
      destroy() {
        observer.disconnect();
      }
    };
  }

  function indent(name: string | undefined) {
    return name === 'H2' ? 'pl-2.5' : 'pl-6';
  }

  function toc() {
    if (typeof document === `undefined`) return; // for SSR

    headings = [...document.querySelectorAll<HTMLElement>(headingSelector)]
      .map(extract)
      .filter((x) => x.name);
  }

</script>

<div class="t_div_1 {div_1_class}">
  <div
    use:init
    class="t_div_2 {div_2_class}"
  >
    {#if headings.length}
      <div
        class="t_div_3 {div_3_class}"
      >
        <div class="t_div_4 {div_4_class}">
          <h4 class="t_h4 {h4_class}">
            On this page
          </h4>
          <nav>
            <ul class="t_ul {ul_class}">
              {#each headings as { rel, href, name }}
                <li>
                  <a {href} class="{indent(rel)} t_a {a_class}">{name}</a>
                </li>
              {/each}
            </ul>
          </nav>
        </div>
      </div>
    {/if}
  </div>
</div>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@props: headingSelector: string;
@props:extract: (x
@props:divFixed?: string;
@props:aClass?: string;
@props:ulClass?: string;
@props:divFlex?: string;
@props:h4Class?: string;
-->
