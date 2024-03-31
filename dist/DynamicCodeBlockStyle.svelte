<script>const stylesImport = import.meta.glob("./highlight/styles/*.css");
let selected = $state("gigavolt");
const styles = Object.entries(stylesImport).map(([path, importFn]) => ({
    value: path.slice(path.lastIndexOf("/") + 1, -4),
    name: path.slice(path.lastIndexOf("/") + 1, -4)
}));
$effect(() => {
    let link;
    (async () => {
        const css = await import(`./highlight/styles/${selected}.css?url`);
        link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = css.default;
        document.head.append(link);
    })();
    return () => {
        link.remove();
    };
});
export {};
</script>

<select
  class="w-32 border border-gray-200 p-1 text-gray-800 dark:text-gray-800 md:w-36"
  bind:value={selected}
>
  {#each styles as theme}
    <option value={theme.value}>{theme.value}</option>
  {/each}
</select>

<!--
@component
[Go to docs](https://svelte-icon-webkit.codewithshin.com/)
## Props
@props: 
-->
