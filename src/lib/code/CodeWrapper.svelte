<script lang="ts">
  import { type CodeWrapperProps as Props, codeWrapper } from '.';

  let {
    children,
    class: className,
    ...restProps
  }: Props = $props();

  const base = $derived(codeWrapper({ className }))

</script>

<div class={base} {...restProps}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop children
@prop classDiv = 'mx-auto max-w-4xl rounded-md border border-gray-200 bg-white bg-gradient-to-r p-6 dark:border-gray-600 dark:bg-gray-900'
@prop divClass
@prop ...attributes
-->
