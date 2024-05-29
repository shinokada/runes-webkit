<script lang="ts">
  import type { Component } from 'svelte';
  import { IconPage, filterIconsByKeyword } from 'runes-webkit'
  import * as icons from '$lib'

  const keywordsToInclude = 'Outline';
  const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IconPage icons={keyIcons as Component} sizeByTailwind title="Three Tabs: Size by Tailwind" defaultSize='6' maxSize="10" minSize="4"/>