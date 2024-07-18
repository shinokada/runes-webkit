export { default as Anchor } from './Anchor.svelte';
export { default as Copy } from './Copy.svelte';
export { default as Code } from './Code.svelte';
export { default as CodeWrapper } from './CodeWrapper.svelte';
export { default as DocPage } from './DocPage.svelte';
export { default as Footer } from './Footer.svelte';
export { default as H2 } from './H2.svelte';
export { default as H3 } from './H3.svelte';
export { default as HighlightCompo } from './HighlightCompo.svelte';
export { default as HomeCards } from './HomeCards.svelte';
export { default as IconPage } from './IconPage.svelte';
export { default as OnThisPage } from './OnThisPage.svelte';
export { default as Sidebar } from './Sidebar.svelte';
export { default as SupportBanner } from './SupportBanner.svelte';
export { default as TechInfo } from './TechInfo.svelte';
export { default as Toc } from './Toc.svelte';

// icons
export { default as A7Solid } from './icons/A7Solid.svelte';
export { default as Accessibility } from './icons/Accessibility.svelte';
export { default as BadgeCheckOutline } from './icons/BadgeCheckOutline.svelte';
export { default as BellActiveAltOutline } from './icons/BellActiveAltOutline.svelte';
export { default as ChartPieOutline } from './icons/ChartPieOutline.svelte';
export { default as ChevronDownOutline } from './icons/ChevronDownOutline.svelte';
export { default as ClipboardListOutline } from './icons/ClipboardListOutline.svelte';
export { default as CogOutline } from './icons/CogOutline.svelte';
export { default as DotsHorizontalOutline } from './icons/DotsHorizontalOutline.svelte';
export { default as ExpandOutline } from './icons/ExpandOutline.svelte';
export { default as GithubSolid } from './icons/GithubSolid.svelte';
export { default as GlobeOutline } from './icons/GlobeOutline.svelte';
export { default as GridPlusOutline } from './icons/GridPlusOutline.svelte';
export { default as InfoCircleOutline } from './icons/InfoCircleOutline.svelte';
export { default as MediumBrands } from './icons/MediumBrands.svelte';
export { default as MoonSolid } from './icons/MoonSolid.svelte';
export { default as StarOutline } from './icons/StarOutline.svelte';
export { default as TailwindSolid } from './icons/TailwindSolid.svelte';
export { default as TruckFastSolid } from './icons/TruckFastSolid.svelte';
export { default as Visualstudiocode } from './icons/Visualstudiocode.svelte';
export { default as XSolid } from './icons/XSolid.svelte';

export * from './types';

import {
  clickToCopy,
  toDashCaseLower,
  toUpperSnakeCase,
  extract,
  removeHyphensAndCapitalize,
  filterIconsByKeyword,
  convertToKebabCase,
  filterStringKeys,
  excludeItemsByKeywords,
  random_tailwind_color,
  random_hex_color_code,
  filterByTitles,
  excludeByTitle,
  insertObjectToArray,
  cards,
  info,
  sidebarList
} from './helpers';

export {
  clickToCopy,
  toDashCaseLower,
  toUpperSnakeCase,
  extract,
  removeHyphensAndCapitalize,
  filterIconsByKeyword,
  convertToKebabCase,
  filterStringKeys,
  excludeItemsByKeywords,
  random_tailwind_color,
  random_hex_color_code,
  filterByTitles,
  excludeByTitle,
  insertObjectToArray,
  cards,
  info,
  sidebarList
};
