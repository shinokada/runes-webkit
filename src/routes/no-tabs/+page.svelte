<script lang="ts">
  import type { Component } from 'svelte';
  import { IconPage, filterStringKeys } from '$lib';
  import * as icons from '../supertiny-samples';

  const keyIcons = filterStringKeys(icons);
</script>

<IconPage
  minSize="20"
  defaultSize="40"
  maxSize="60"
  classDiv3="grid lg:grid-cols-3 grid-cols-2 gap-4"
  icons={keyIcons as Component}
  threeTabs={false}
  title="No Tabs"
/>
