<script lang="ts">
  import { getContext } from 'svelte';
  interface CtxType {
    fill?: string;
    size?: string;
    role?: string;
  }
  const ctx: CtxType = getContext('iconCtx') ?? {};
  interface Props {
    size?: string;
    role?: string;
    ariaLabel?: string;
    class?: string;
    fill?: string;
  }
  let {
    size = ctx.size || '24',
    role = ctx.role || 'img',
    ariaLabel = 'Angellist',
    fill = ctx.fill || '#fff',
    class: classname,
    ...restProps
  }: Props = $props();
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  class={classname}
  {...restProps}
  aria-label="AngelList"
  {role}
  viewBox="0 0 512 512"
  ><path d="m0 0H512V512H0" {fill} /><path
    d="M342 230c39 4 47 43 47 75 0 65-33 128-95 154-51 21-114 13-155-25-25-22-39-51-40-84 0-30 15-49 44-57-3-8-9-19-9-28 0-18 20-40 38-40 9 0 17 3 24 8-15-58-75-175-5-181 34-3 69 125 78 153 11-26 45-145 80-145 66 0 7 130-7 170zM138 348c13 13 22 41 45 41 29-3-18-76-39-76-17 0-26 21-26 36 0 38 31 74 65 89 50 23 111 12 149-29 33-37 43-88 34-136-3-24-35-29-54-33-23-6-47-8-71-8-30 0-17 36 3 44 26 9 55 9 83 9 6 0 9 6 9 12-13 10-30 13-43 23a79 79 0 00-34 86c2 7 4 14 4 21-26 0-27-37-27-54-5 5-13 4-20 3 4 18-5 38-27 38-24 0-55-26-55-52 0-4 1-11 4-14zm86 6c35 0-8-67-15-77-10-17-28-38-46-20s7 50 19 65c10 14 23 32 42 32zm28-140l-32-87c-4-12-18-56-32-56-26 0-7 51-4 62 7 22 17 51 31 85 10-7 26-6 37-4zm32 88c-15 0-32-2-45-8 5 13 10 24 13 38 9-12 20-22 32-30zm39-77c13-34 22-64 30-86 3-10 22-59-1-59-17 0-32 43-36 56l-29 82 36 7z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-supertiny.codewithshin.com/)
## Props
@props: size?:  string; = ctx.size || '24';
@props:role?:  string; = ctx.role || 'img';
@props:ariaLabel?:  string; = 'Angellist';
@props:class?: string;
@props:fill?:  string; = ctx.fill || '#fff';
-->
