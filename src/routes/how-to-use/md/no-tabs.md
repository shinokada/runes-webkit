<script lang="ts">
  import type { ComponentType } from 'svelte';
  import { IconPage, filterStringKeys } from '$lib'
  import * as icons from '$lib'

  const keyIcons = filterStringKeys(icons);

</script>

<IconPage icons={keyIcons as ComponentType} threeTabs={false} title="No Tabs" />