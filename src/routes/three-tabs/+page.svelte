<script lang="ts">
  import type { Component } from 'svelte';
  import { IconPage, filterIconsByKeyword } from '$lib';
  import * as icons from '../awesome-samples';
  const keywordsToInclude = 'Solid';
  const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IconPage icons={keyIcons as Component} title="Three Tabs" defaultSize="16" minSize="12" maxSize="40"/>
