<script lang="ts">
  import type { Component } from 'svelte';
  import { IconPage, filterStringKeys } from '$lib';
  import * as icons from '../supertiny-samples';

  const keyIcons = filterStringKeys(icons);
</script>

<IconPage
  minSize="60"
  defaultSize="80"
  maxSize="100"
  i_p_div_3="lg:grid-cols-3 md:grid-cols-2 "
  icons={keyIcons as Component}
  threeTabs={false}
  title="No Tabs"
/>
