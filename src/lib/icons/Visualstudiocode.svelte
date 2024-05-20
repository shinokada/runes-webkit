<script lang="ts">
  import { getContext } from 'svelte';
  interface CtxType {
    size?: string;
    role?: string;
    color?: string;
  }
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props {
    size?: string;
    role?: string;
    color?: string;
    ariaLabel?: string;
    class?: string;
  }
  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    color = ctx.color || 'currentColor',
    ariaLabel = 'Visual Studio Code',
    class: classname,
    ...restProps
  }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {role}
  {...restProps}
  class={classname}
  aria-label={ariaLabel}
  fill={color}
  viewBox="0 0 512 512"
>
  <path
    fill="#27b"
    d="m423 114-75-37a23 23 0 0 0-26 5L77 306a15 15 0 0 0 0 22l20 18a15 15 0 0 0 20 1l295-224c10-7 24-1 24 12v-1c0-9-5-17-13-20"
  /><path
    fill="#08c"
    d="m423 399-75 36a23 23 0 0 1-26-5L77 207a15 15 0 0 1 0-22l20-19a15 15 0 0 1 20-1l295 224c10 8 24 1 24-12v1c0 9-5 17-13 21"
    filter="url(#a)"
  /><path
    fill="#19f"
    d="M348 435a23 23 0 0 1-26-5c9 9 23 3 23-9V92c0-12-14-19-23-10a23 23 0 0 1 27-4l75 36c7 3 12 11 12 20v244c0 9-5 17-12 21"
  />
</svg>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop ariaLabel = 'Visual Studio Code'
@prop class: classname
@prop ...restProps
-->
