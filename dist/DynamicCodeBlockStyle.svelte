<script>import { browser } from "$app/environment";
import { cssNames } from "./";
let selected = $state(browser && (localStorage.getItem("CODE_BLOCK_STYLE") ?? "gigavolt"));
$effect(() => {
    let link;
    (async () => {
        const css = await import(`./highlight/styles/${selected}.css?url`);
        link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = css.default;
        document.head.append(link);
    })();
    if (browser) {
        localStorage.setItem("CODE_BLOCK_STYLE", selected);
    }
});
</script>

<select
  class="w-32 border border-gray-200 p-1 text-gray-800 dark:text-gray-800 md:w-36"
  bind:value={selected}
>
  {#each cssNames as theme}
    <option value={theme}>{theme}</option>
  {/each}
</select>

<!--
@component
[Go to docs](https://svelte-icon-webkit.codewithshin.com/)
## Props
@props: 
-->
