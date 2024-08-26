<script lang="ts">
  import { type CodeProps as Props, code } from './';

  let { children, class: className, ...restProps }: Props = $props();

  const base = $derived(code({ className }))
</script>

<code class={base} {...restProps}>
  {@render children()}
</code>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop children
@prop class: className = 'text-primary-700 dark:text-primary-400'
-->
