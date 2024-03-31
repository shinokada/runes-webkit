<script lang="ts">
  import { IconPage } from '$lib'
  import { filterIconsByKeyword } from '$lib'
  import * as icons from '../awesome-samples'
  const keywordsToInclude = 'Solid';
  const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IconPage icons={keyIcons} title="Solid Icons" />