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

export function replaceLibImport(componentString: string, libraryName: string): string {
  return componentString.replace(/from '\$lib'/g, `from '${libraryName}'`);
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log('Text copied to clipboard');
    })
    .catch((err) => {
      console.error('Failed to copy: ', err);
      throw err; // Re-throw the error so the caller can handle it if needed
    });
}

export function clickToCopy(node: HTMLElement, target: string) {
  async function copyText() {
    const text = target;

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

/* eslint-disable  @typescript-eslint/no-explicit-any */
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
// export const filterStringKeys = (obj: { [key: string]: any }) => {
//   return Object.fromEntries(Object.entries(obj).filter(([key]) => typeof key === 'string'));
// };
export const filterStringKeys = (
  obj: Record<string | number | symbol, unknown>
): Record<string, Component> => {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([key, value]) => typeof key === 'string' && typeof value === 'function'
    )
  ) as Record<string, Component>;
};

/**
 * Exclude items from the input object based on the provided keywords.
 *
 * @param {object} items - The input object containing key-value pairs.
 * @param {string} keywords - The keywords to exclude items by.
 * @return {object} The filtered object after excluding items based on the keywords.
 */
export function excludeItemsByKeywords(
  items: Record<string, Component>,
  keywords: string
): Record<string, Component> {
  const filteredItems: Record<string, Component> = {};
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
): Types.CardType[] {
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

interface CardTpye {
  title: string;
  description: string;
  Icon: Component;
  icon_class: string;
}

export const cards: CardTpye[] = [
  {
    title: 'Svelte 4/5/Runes',
    description: 'Verions 1 is for Svelte 4/5 and version 2 is for Svelte 5 Runes.',
    Icon: BadgeCheckOutline,
    icon_class: 'text-pink-500'
  },
  {
    title: 'Accessible SVGs',
    description:
      'A11y props, <code>title</code>, <code>desc</code>, and <code>ariaLabel</code> for accessible SVG icons.',
    Icon: Accessibility,
    icon_class: 'text-green-400'
  },
  {
    title: 'Faster Compiling',
    description: 'Import icons directly to optimize compilation speed and improve performance.',
    Icon: TruckFastSolid,
    icon_class: 'text-yellow-500'
  },
  {
    title: 'IDE Support',
    description:
      'Hovering over a component name will display features, props, events, and more for an LSP-compatible editors.',
    Icon: Visualstudiocode,
    icon_class: 'text-amber-500'
  },
  {
    title: 'Global Icon',
    description: 'Use <code>Icon</code> to careat default global icons.',
    Icon: GlobeOutline,
    icon_class: 'text-purple-500'
  },
  {
    title: 'CSS Frameworks support',
    description: 'Use TailwindCSS, Bootstrap CSS, or any other CSS frameworks.',
    Icon: TailwindSolid,
    icon_class: 'text-orange-500'
  },
  {
    title: 'Dark mode',
    description: 'Use <code>class</code> props to add your dark mode color.',
    Icon: MoonSolid,
    icon_class: 'text-emerald-200'
  }
];

interface InfoType {
  title: string;
  description: string;
  Icon: Component;
  href: string;
  icon_class: string;
}

export const info: InfoType[] = [
  {
    title: 'Svelte Icon Family',
    description: 'Explore 29 Svelte SVG Icon Sets.',
    Icon: InfoCircleOutline,
    href: 'https://svelte-svg-icons.codewithshin.com/',
    icon_class: 'text-amber-500'
  }
];

export const sidebarList: Types.ListType[] = [
  {
    name: 'Svelte 5 & later',
    Icon: BellActiveAltOutline as Component,
    children: [
      {
        name: 'Getting Started',
        Icon: CogOutline as Component,
        href: '/guide/svelte-5/getting-started'
      },
      {
        name: 'Props',
        Icon: BadgeCheckOutline as Component,
        href: '/guide/svelte-5/props'
      }
    ]
  },
  {
    name: 'Svelte 4 & 5',
    Icon: StarOutline as Component,
    children: [
      {
        name: 'Getting Started',
        Icon: CogOutline as Component,
        href: '/guide/svelte-4/getting-started'
      },
      {
        name: 'Props',
        Icon: BadgeCheckOutline as Component,
        href: '/guide/svelte-4/props'
      }
    ]
  },
  {
    name: 'Global Icons',
    Icon: GlobeOutline as Component,
    href: '/guide/global-icons'
  },
  {
    name: 'Custom Icons',
    Icon: ChartPieOutline as Component,
    href: '/guide/custom-icons'
  }
];

export function getExampleFileName(
  selectedExample: string,
  exampleArr: { name: string }[]
): string {
  const foundExample = exampleArr.find((example) => example.name === selectedExample);

  if (!foundExample) {
    // If the selectedExample is not in the array, default to the first example
    selectedExample = exampleArr[0].name || '';
  }

  // Convert the selected example to PascalCase
  const result = selectedExample
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');

  return `${result}.svelte`;
}

export const isGeneratedCodeOverflow = (code: string): boolean => {
  const lines = code.split('\n');
  return lines.length > 7;
};

export const isSvelteOverflow = (
  sveltefile: string,
  exampleModules: Record<string, string>
): boolean => {
  const filePath = `./examples/${sveltefile}`;
  const fileContent = exampleModules[filePath];

  if (typeof fileContent !== 'string') {
    console.warn(`File content for ${filePath} is not found or not a string`);
    return false;
  }

  const lines = fileContent.split('\n');
  return lines.length > 7;
};

export function replacev1(string: string, v1version: string): string {
  return string.replace(/1.x.x/g, v1version);
}
