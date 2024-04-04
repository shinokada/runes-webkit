<script lang="ts">
  import type { ComponentType } from 'svelte';
  import { IconPage } from '$lib'
  import { filterIconsByKeyword } from '$lib'
  import * as icons from '../awesome-samples'
  const keywordsToInclude = 'Solid';
  const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IconPage icons={keyIcons as ComponentType} title="Three Tabs" />