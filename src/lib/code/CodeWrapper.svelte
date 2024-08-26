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
@prop class: className
@prop ...restProps
-->
