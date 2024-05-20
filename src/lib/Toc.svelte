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
    t_a?: string;
    t_ul?: string;
    t_div_1?: string;
    t_div_2?: string;
    t_div_3?: string;
    t_div_4?: string;
    t_h4?: string;
  }

  let { headingSelector, extract, t_div_1, t_div_2, t_div_3, t_div_4, t_a, t_ul, t_h4 }: Props =
    $props();

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
  const t_a_Cls = twMerge(
    "inline-block border-l border-white duration-200 hover:text-gray-900 transition-none dark:text-gray-300 dark:hover:text-gray-400 hover:border-gray-300 after:content-['#'] after:text-primary-700 dark:after:text-primary-700 dark:border-gray-900 dark:hover:border-gray-700 after:ml-2 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-100 _t_a_",
    t_a
  );
</script>

<div class="{twMerge('_t_div_1_ hidden w-64 flex-none xl:block xl:text-sm', t_div_1)} ">
  <div
    use:init
    class={twMerge('dark_bg_theme _t_div_2_ fixed right-2 flex-none bg-white', t_div_2)}
  >
    {#if headings.length}
      <div
        class={twMerge(
          '_t_div_3_ flex h-[calc(100vh-168px)] flex-col justify-between overflow-y-auto',
          t_div_3
        )}
      >
        <div class={twMerge('_t_div_4_ mb-8 p-4', t_div_4)}>
          <h4
            class={twMerge(
              '_t_h4_ my-4 pl-2.5 text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white',
              t_h4
            )}
          >
            On this page
          </h4>
          <nav>
            <ul
              class={twMerge(
                '_t_ul_ space-y-2.5 font-medium text-gray-500 dark:text-gray-400',
                t_ul
              )}
            >
              {#each headings as { rel, href, name }}
                <li>
                  <a {href} class="{indent(rel)} {t_a_Cls}">{name}</a>
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
@prop t_div_1
@prop t_div_2
@prop t_div_3
@prop t_div_4
@prop t_a
@prop t_ul
@prop t_h4
-->
