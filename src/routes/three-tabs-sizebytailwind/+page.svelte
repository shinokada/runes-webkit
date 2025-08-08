<script lang="ts">
  import { IconPage, filterIconsByKeyword } from "$lib/index.js";
  import * as icons from "../flowbite-samples/index.js";

  const keywordsToInclude = "Outline";
  const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IconPage
  icons={keyIcons}
  sizeByTailwind
  title="Three Tabs: Size by Tailwind"
  defaultSize="6"
  maxSize="10"
  minSize="4"
/>
