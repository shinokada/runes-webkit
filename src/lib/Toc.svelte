<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  interface LinkType {
    name: string;
    href?: string;
    rel?: string;
    active?: boolean;
  }

  interface Props {
    headingSelector: string;
    extract: (x: HTMLElement) => LinkType;
    aClass?: string | undefined;
    classA?: string | undefined;
    ulClass?: string | undefined;
    div1Class?: string | undefined;
    div2Class?: string | undefined;
    div3Class?: string | undefined;
    div4Class?: string | undefined;
    h4Class?: string | undefined;
    classH4?: string | undefined;
  }

  let {
    headingSelector,
    extract,
    div1Class = 'hidden w-64 flex-none xl:block xl:text-sm',
    div2Class = 'dark_bg_theme fixed right-2 flex-none',
    div3Class = 'flex h-[calc(100vh-168px)] flex-col justify-between overflow-y-auto',
    div4Class = 'mb-8 p-4',
    aClass,
    classA = "inline-block border-l border-white duration-200 hover:text-gray-900 transition-none dark:text-gray-300 dark:hover:text-gray-400 hover:border-gray-300 after:content-['#'] after:text-primary-700 dark:after:text-primary-700 dark:border-gray-900 dark:hover:border-gray-700 after:ml-2 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-100",
    ulClass = 'space-y-2.5 font-medium text-gray-500 dark:text-gray-400',
    h4Class,
    classH4 = 'my-4 pl-2.5 text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white'
  }: Props = $props();

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

<div class={div1Class}>
  <div use:init class={div2Class}>
    {#if headings.length}
      <div class={div3Class}>
        <div class={div4Class}>
          <h4 class={twMerge(classH4, h4Class)}>On this page</h4>
          <nav>
            <ul class={ulClass}>
              {#each headings as { rel, href, name }}
                <li>
                  <a {href} class="{indent(rel)} {twMerge(classA, aClass)}">{name}</a>
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
@prop headingSelector
@prop extract
@prop div1Class = 'hidden w-64 flex-none xl:block xl:text-sm'
@prop div2Class = 'dark_bg_theme fixed right-2 flex-none'
@prop div3Class = 'flex h-[calc(100vh-168px)] flex-col justify-between overflow-y-auto'
@prop div4Class = 'mb-8 p-4'
@prop aClass
@prop classA = "inline-block border-l border-white duration-200 hover:text-gray-900 transition-none dark:text-gray-300 dark:hover:text-gray-400 hover:border-gray-300 after:content-['#'] after:text-primary-700 dark:after:text-primary-700 dark:border-gray-900 dark:hover:border-gray-700 after:ml-2 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-100"
@prop ulClass = 'space-y-2.5 font-medium text-gray-500 dark:text-gray-400'
@prop h4Class
@prop classH4 = 'my-4 pl-2.5 text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white'
-->
