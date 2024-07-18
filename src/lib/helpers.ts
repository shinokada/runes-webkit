import type { Component } from 'svelte';
import * as Types from './types';
import BadgeCheckOutline from './icons/BadgeCheckOutline.svelte';
import BellActiveAltOutline from './icons/BellActiveAltOutline.svelte';
import Accessibility from './icons/Accessibility.svelte';
import GlobeOutline from './icons/GlobeOutline.svelte';
import InfoCircleOutline from './icons/InfoCircleOutline.svelte';
import MoonSolid from './icons/MoonSolid.svelte';
import TailwindSolid from './icons/TailwindSolid.svelte';
import TruckFastSolid from './icons/TruckFastSolid.svelte';
import Visualstudiocode from './icons/Visualstudiocode.svelte';
import StarOutline from './icons/StarOutline.svelte';
import CogOutline from './icons/CogOutline.svelte';
import ChartPieOutline from './icons/ChartPieOutline.svelte';

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
export function extract(x: HTMLElement): Types.LinkType {
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
    const doesNotContainKeyword = keywords.split(' ').every((keyword) => !key.includes(keyword));
    if (doesNotContainKeyword) {
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
 * @param {CardType[]} objects - The array of objects to filter.
 * @param {Title[]} titles - The titles to filter by.
 * @return {CardType[]} The filtered array of objects.
 */
export function filterByTitles(objects: Types.CardType[], titles: Types.Title[]) {
  return objects.filter((object) =>
    titles.some((title) => title.toLowerCase() === object.title.toLowerCase())
  );
}

/**
 * Filters out objects based on their title.
 *
 * @param {CardType[]} objects - array of Card objects to filter
 * @param {Title[]} titles - array of Titles to exclude by
 * @return {CardType[]} filtered array of Card objects
 */
export function excludeByTitle(objects: Types.CardType[], titles: Types.Title[]): Types.CardType[] {
  return objects.filter(
    (object) => !titles.some((title) => title.toLowerCase() === object.title.toLowerCase())
  );
}

/**
 * Insert a new object into an array at a specified position.
 *
 * @param {CardType[]} array - the original array
 * @param {Card} objectToInsert - the object to insert into the array
 * @param {number} position - the position where the object should be inserted
 * @return {any[]} the updated array with the object inserted at the specified position
 */
export function insertObjectToArray(
  array: Types.CardType[],
  objectToInsert: Types.CardType,
  position: number
): any[] {
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
    icon: TailwindSolid,
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

export const sidebarList: Types.ListType[] = [
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
