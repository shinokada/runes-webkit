<script lang="ts">
  import type { ComponentType } from 'svelte';
  import { IconPage } from '$lib'
  import * as icons from '../supertiny-samples'
  import { filterStringKeys } from '$lib'

  const keyIcons = filterStringKeys(icons);

</script>

<IconPage icons={keyIcons as ComponentType} threeTabs={false} title="No Tabs" />