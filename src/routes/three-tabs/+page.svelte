<script lang="ts">
  import { IconPage, filterIconsByKeyword } from '$lib';
  import * as icons from '../awesome-samples';
  const keywordsToInclude = 'Solid';
  let keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
  // console.log('icons: ', icons);
</script>

<IconPage icons={keyIcons} title="Three Tabs" defaultSize="16" minSize="12" maxSize="40" />
