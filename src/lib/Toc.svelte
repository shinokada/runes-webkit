<script lang="ts">
  import type { ClassValue } from "svelte/elements";
  import { cn } from "$lib";

  interface LinkType {
    name: string;
    href?: string;
    rel?: string;
    active?: boolean;
  }

  interface Props {
    headingSelector: string;
    extract: (x: HTMLElement) => LinkType;
    aClass?: ClassValue;
    ulClass?: ClassValue;
    div1Class?: ClassValue;
    div2Class?: ClassValue;
    div3Class?: ClassValue;
    div4Class?: ClassValue;
    h4Class?: ClassValue;
    classH4?: ClassValue;
  }

  let {
    headingSelector,
    extract,
    div1Class,
    div2Class,
    div3Class,
    div4Class,
    aClass,
    ulClass,
    h4Class
  }: Props = $props();

  const classDiv1 = "hidden w-64 flex-none xl:block xl:text-sm";
  const classDiv2 = "dark_bg_theme fixed right-2 flex-none";
  const classDiv3 = "flex h-[calc(100vh-168px)] flex-col justify-between overflow-y-auto";
  const classDiv4 = "mb-8 p-4";
  const classA =
    "inline-block border-l border-white duration-200 hover:text-gray-900 transition-none dark:text-gray-300 dark:hover:text-gray-400 hover:border-gray-300 after:content-['#'] after:text-primary-700 dark:after:text-primary-700 dark:border-gray-900 dark:hover:border-gray-700 after:ml-2 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-100";
  const classUl = "space-y-2.5 font-medium text-gray-500 dark:text-gray-400";
  const classH4 =
    "my-4 pl-2.5 text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white";

  let headings: LinkType[] = $state([]);
  /* eslint-disable @typescript-eslint/no-unused-vars */
  function init(_: HTMLElement) {
    const observer: MutationObserver = new MutationObserver(toc);
    observer.observe(document.body, { childList: true, subtree: true });

    return {
      destroy() {
        observer.disconnect();
      }
    };
  }

  function indent(name: string | undefined) {
    return name === "H2" ? "pl-2.5" : "pl-6";
  }

  function toc() {
    if (typeof document === `undefined`) return; // for SSR

    headings = [...document.querySelectorAll<HTMLElement>(headingSelector)]
      .map(extract)
      .filter((x) => x.name);
  }
</script>

<div class={cn(classDiv1, div1Class)}>
  <div use:init class={cn(classDiv2, div2Class)}>
    {#if headings.length}
      <div class={cn(classDiv3, div3Class)}>
        <div class={cn(classDiv4, div4Class)}>
          <h4 class={cn(classH4, h4Class)}>On this page</h4>
          <nav>
            <ul class={cn(classUl, ulClass)}>
              {#each headings as { rel, href, name }}
                <li>
                  <a {href} class={cn(indent(rel), classA, aClass)}>{name}</a>
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
@props: headingSelector: any;
@props:extract: any;
@props:div1Class: any;
@props:div2Class: any;
@props:div3Class: any;
@props:div4Class: any;
@props:aClass: any;
@props:ulClass: any;
@props:h4Class: any;
-->
