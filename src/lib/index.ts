import type { Component } from 'svelte';

import A7Solid from '$lib/icons/A7Solid.svelte';
import BadgeCheckOutline from '$lib/icons/BadgeCheckOutline.svelte';
import BellActiveAltOutline from '$lib/icons/BellActiveAltOutline.svelte';
import Accessibility from '$lib/icons/Accessibility.svelte';
import GlobeOutline from '$lib/icons/GlobeOutline.svelte';
import InfoCircleOutline from '$lib/icons/InfoCircleOutline.svelte';
import MoonSolid from '$lib/icons/MoonSolid.svelte';
import Tailwindcss from '$lib/icons/Tailwindcss.svelte';
import TruckFastSolid from '$lib/icons/TruckFastSolid.svelte';
import Visualstudiocode from '$lib/icons/Visualstudiocode.svelte';
import StarOutline from '$lib/icons/StarOutline.svelte';

import CogOutline from '$lib/icons/CogOutline.svelte';
import ChartPieOutline from '$lib/icons/ChartPieOutline.svelte';

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
export { default as A0Solid } from './icons/A0Solid.svelte';
export { default as A1Solid } from './icons/A1Solid.svelte';
export { default as A2Solid } from './icons/A2Solid.svelte';
export { default as A3Solid } from './icons/A3Solid.svelte';
export { default as A4Solid } from './icons/A4Solid.svelte';
export { default as A5Solid } from './icons/A5Solid.svelte';
export { default as A6Solid } from './icons/A6Solid.svelte';
export { default as A7Solid } from './icons/A7Solid.svelte';
export { default as A8Solid } from './icons/A8Solid.svelte';
export { default as A9Solid } from './icons/A9Solid.svelte';
export { default as Accessibility } from './icons/Accessibility.svelte';
export { default as BadgeCheckOutline } from './icons/BadgeCheckOutline.svelte';
export { default as BellActiveAltOutline } from './icons/BellActiveAltOutline.svelte';
export { default as ChartLineUpOutline } from './icons/ChartLineUpOutline.svelte';
export { default as ChartPieOutline } from './icons/ChartPieOutline.svelte';
export { default as CheckCircleOutline } from './icons/CheckCircleOutline.svelte';
export { default as ChevronDownSolid } from './icons/ChevronDownSolid.svelte';
export { default as ChevronUpSolid } from './icons/ChevronUpSolid.svelte';
export { default as ClipboardListOutline } from './icons/ClipboardListOutline.svelte';
export { default as CodeOutline } from './icons/CodeOutline.svelte';
export { default as CogOutline } from './icons/CogOutline.svelte';
export { default as DatabaseOutline } from './icons/DatabaseOutline.svelte';
export { default as DiscordSolid } from './icons/DiscordSolid.svelte';
export { default as DotsHorizontalOutline } from './icons/DotsHorizontalOutline.svelte';
export { default as EditOutline } from './icons/EditOutline.svelte';
export { default as ExpandOutline } from './icons/ExpandOutline.svelte';
export { default as FileChartBarOutline } from './icons/FileChartBarOutline.svelte';
export { default as GithubSolid } from './icons/GithubSolid.svelte';
export { default as GlobeOutline } from './icons/GlobeOutline.svelte';
export { default as GridPlusOutline } from './icons/GridPlusOutline.svelte';
export { default as InfoCircleOutline } from './icons/InfoCircleOutline.svelte';
export { default as MediumBrand } from './icons/MediumBrand.svelte';
export { default as MoonSolid } from './icons/MoonSolid.svelte';
export { default as SearchOutline } from './icons/SearchOutline.svelte';
export { default as StarOutline } from './icons/StarOutline.svelte';
export { default as Tailwindcss } from './icons/Tailwindcss.svelte';
export { default as ThumbsUpOutline } from './icons/ThumbsUpOutline.svelte';
export { default as TruckFastSolid } from './icons/TruckFastSolid.svelte';
export { default as TwitterSolid } from './icons/TwitterSolid.svelte';
export { default as Visualstudiocode } from './icons/Visualstudiocode.svelte';
export { default as WandMagicSparklesOutline } from './icons/WandMagicSparklesOutline.svelte';
export { default as XSolid } from './icons/XSolid.svelte';


type Title = string;
export type Card = {
  title: string;
  description: string;
  icon: Component;
  icon_class: string;
};

export interface LinkType {
  name: string;
  href?: string;
  rel?: string;
  active?: boolean;
}

export type ListType = {
  name: string;
  href?: string;
  icon?: Component;
  children?: ListType[];
};

export function clickToCopy(node: HTMLElement, target: string) {
  async function copyText() {
    let text = target;

    try {
      await navigator.clipboard.writeText(text);

      node.dispatchEvent(
        new CustomEvent('copysuccess', {
          bubbles: true
        })
      );
    } catch (error) {
      node.dispatchEvent(
        new CustomEvent('copyerror', {
          bubbles: true,
          detail: error
        })
      );
    }
  }

  node.addEventListener('click', copyText);

  return {
    destroy() {
      node.removeEventListener('click', copyText);
    }
  };
}

export function toDashCaseLower(text: string): string {
  return text.replace(/\s+/g, '-').toLowerCase();
}

export function toUpperSnakeCase(text: string): string {
  // replace spaces and - to _ and convert to uppercase
  return text.replace(/[\s-]/g, '_').toUpperCase();
}
/**
 * Extracts information from an HTMLElement to create a LinkType object.
 *
 * @param {HTMLElement} x - The HTMLElement from which to extract information.
 * @return {LinkType} The extracted information as a LinkType object.
 */
export function extract(x: HTMLElement): LinkType {
  if (x.firstElementChild)
    return {
      rel: x.tagName,
      href: '#' + x.firstElementChild?.id,
      // name: x?.firstChild?.nodeValue ?? ''
      name: x.textContent?.replace(/#+/g, '') ?? ''
    };
  return { name: '' };
}

/**
 * Removes hyphens from a string and capitalizes each word.
 *
 * @param {string} str - the input string
 * @return {string} the formatted string with hyphens removed and words capitalized
 */
export function removeHyphensAndCapitalize(str: string) {
  // Handle empty string or strings without letters
  if (!str || !/\w/.test(str)) {
    return str;
  }

  // Capitalize the first letter of each word, including after hyphens
  const capitalized = str.replace(/(^|\s|-)\w/g, (match, prev) =>
    prev ? ` ${match.toUpperCase()}` : match.toUpperCase()
  );

  // Remove hyphens and ensure single spaces between words
  return capitalized.replace(/-|\s{2,}/g, ' ');
}

/**
 * Filters icons based on the provided keyword.
 *
 * @param {Object} icons - The object containing icons to filter.
 * @param {string} keyword - The keyword to filter icons by.
 * @return {Object} The filtered icons object.
 */
export function filterIconsByKeyword(icons: { [key: string]: any }, keyword: string) {
  const filteredIcons: { [key: string]: any } = {};
  for (const key in icons) {
    if (key.includes(keyword)) {
      filteredIcons[key] = icons[key];
    }
  }
  return filteredIcons;
}

export function convertToKebabCase(str: string) {
  // Use replace() method with a regular expression to match all whitespace characters (\s) globally (g flag)
  // and replace them with '-'
  return str.replace(/\s/g, '-').toLowerCase();
}

/**
 * Filters out keys in the object that are not strings.
 * to filter out index.js since it has [Symbol(Symbol.toStringTag)]: 'Module'
 * Use this where you don't use other filters
 * @example
 * import type { Component } from 'svelte';
 * import * as icons from '../supertiny-samples'
 * import { filterStringKeys } from '$lib'
 * const keyIcons = filterStringKeys(icons);
 * <IconPage icons={keyIcons as Component} threeTabs={false} title="No Tabs" />
 *
 * @param {object} obj - The object to filter string keys from.
 * @return {object} A new object with only the string keys.
 */
export const filterStringKeys = (obj: { [key: string]: any }) => {
  return Object.fromEntries(Object.entries(obj).filter(([key]) => typeof key === 'string'));
};

/**
 * Exclude items from the input object based on the provided keywords.
 *
 * @param {object} items - The input object containing key-value pairs.
 * @param {string} keywords - The keywords to exclude items by.
 * @return {object} The filtered object after excluding items based on the keywords.
 */
export function excludeItemsByKeywords(items: { [key: string]: any }, keywords: string) {
  const filteredItems: { [key: string]: any } = {};
  for (const key in items) {
    if (keywords.every((keyword) => !key.includes(keyword))) {
      filteredItems[key] = items[key];
    }
  }
  return filteredItems;
}

/**
 * Generates a random tailwind color class string.
 *
 * @return {string} The generated tailwind color class string.
 */
export const random_tailwind_color = () => {
  const colors = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink'];
  const shades = ['300', '400', '500'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomShade = shades[Math.floor(Math.random() * shades.length)];
  return `text-${randomColor}-${randomShade} dark:text-${randomColor}-${randomShade} shrink-0`;
};

/**
 * Generate three random numbers within a specific range (e.g., 30-230) for RGB values
 *
 * @return {string} The randomly generated hex color code.
 */
export const random_hex_color_code = () => {
  const r = Math.floor(Math.random() * (230 - 30 + 1)) + 30;
  const g = Math.floor(Math.random() * (230 - 30 + 1)) + 30;
  const b = Math.floor(Math.random() * (230 - 30 + 1)) + 30;
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
};

/**
 * Filters an array of objects by their titles.
 *
 * @param {Card[]} objects - The array of objects to filter.
 * @param {Title[]} titles - The titles to filter by.
 * @return {Card[]} The filtered array of objects.
 */
export function filterByTitles(objects: Card[], titles: Title[]) {
  return objects.filter((object) =>
    titles.some((title) => title.toLowerCase() === object.title.toLowerCase())
  );
}

/**
 * Filters out objects based on their title.
 *
 * @param {Card[]} objects - array of Card objects to filter
 * @param {Title[]} titles - array of Titles to exclude by
 * @return {Card[]} filtered array of Card objects
 */
export function excludeByTitle(objects: Card[], titles: Title[]): Card[] {
  return objects.filter(
    (object) => !titles.some((title) => title.toLowerCase() === object.title.toLowerCase())
  );
}

/**
 * Insert a new object into an array at a specified position.
 *
 * @param {Card[]} array - the original array
 * @param {Card} objectToInsert - the object to insert into the array
 * @param {number} position - the position where the object should be inserted
 * @return {any[]} the updated array with the object inserted at the specified position
 */
export function insertObjectToArray(array: Card[], objectToInsert: Card, position: number): any[] {
  // Check for valid position
  if (position < 0 || position > array.length) {
    throw new Error('Invalid position. Please provide a position within the array bounds.');
  }

  // Create a copy of the array to avoid modifying the original
  const newArray = [...array];

  // Insert the object at the specified position
  newArray.splice(position, 0, objectToInsert);

  return newArray;
}

export const cards = [
  {
    title: 'Svelte 4/5/Runes',
    description: 'Verions 1 is for Svelte 4/5 and version 2 is for Svelte 5 Runes.',
    icon: BadgeCheckOutline,
    icon_class: 'text-pink-500'
  },
  {
    title: 'Accessible SVGs',
    description:
      'A11y props, <code>title</code>, <code>desc</code>, and <code>ariaLabel</code> for accessible SVG icons.',
    icon: Accessibility,
    icon_class: 'text-green-400'
  },
  {
    title: 'Faster Compiling',
    description: 'Import icons directly to optimize compilation speed and improve performance.',
    icon: TruckFastSolid,
    icon_class: 'text-yellow-500'
  },
  {
    title: 'IDE Support',
    description:
      'Hovering over a component name will display features, props, events, and more for an LSP-compatible editors.',
    icon: Visualstudiocode,
    icon_class: 'text-amber-500'
  },
  {
    title: 'Global Icon',
    description: 'Use <code>Icon</code> to careat default global icons.',
    icon: GlobeOutline,
    icon_class: 'text-purple-500'
  },
  {
    title: 'CSS Frameworks support',
    description: 'Use TailwindCSS, Bootstrap CSS, or any other CSS frameworks.',
    icon: Tailwindcss,
    icon_class: 'text-orange-500'
  },
  {
    title: 'Dark mode',
    description: 'Use <code>class</code> props to add your dark mode color.',
    icon: MoonSolid,
    icon_class: 'text-emerald-200'
  }
];

export const info = [
  {
    title: 'Svelte Icon Family',
    description: 'Explore 29 Svelte SVG Icon Sets.',
    icon: InfoCircleOutline,
    href: 'https://svelte-svg-icons.codewithshin.com/',
    icon_class: 'text-amber-500'
  }
];

export const sidebarList: ListType[] = [
  {
    name: 'Svelte 4 & 5',
    icon: StarOutline as Component,
    children: [
      {
        name: 'Getting Started',
        icon: CogOutline as Component,
        href: '/guide/svelte-4/getting-started'
      },
      {
        name: 'Props',
        icon: BadgeCheckOutline as Component,
        href: '/guide/svelte-4/props'
      }
    ]
  },
  {
    name: 'Svelte 5: Runes',
    icon: BellActiveAltOutline as Component,
    children: [
      {
        name: 'Getting Started',
        icon: CogOutline as Component,
        href: '/guide/svelte-5/getting-started'
      },
      {
        name: 'Props',
        icon: BadgeCheckOutline as Component,
        href: '/guide/svelte-5/props'
      }
    ]
  },
  {
    name: 'Global Icons',
    icon: GlobeOutline as Component,
    href: '/guide/global-icons'
  },
  {
    name: 'Custom Icons',
    icon: ChartPieOutline as Component,
    href: '/guide/custom-icons'
  }
];
