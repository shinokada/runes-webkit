<script lang="ts">
  import { IconPage } from '$lib'
  import * as icons from '../flowbite-samples'
  // console.log('icons', icons)
  import { filterIconsByKeyword } from '$lib'
  const keywordsToInclude = 'Outline';
  const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IconPage icons={keyIcons} sizeByTailwind title="Three Tabs: Size by Tailwind" defaultSize='6' maxSize="10" minSize="4"/>