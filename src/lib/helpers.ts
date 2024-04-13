import type { ComponentType } from 'svelte';

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

type Title = string;
type Card = {
  title: string;
  description: string;
  icon: ComponentType;
  iconClass: string;
}

interface LinkType {
  name: string;
  href?: string;
  rel?: string;
  active?: boolean;
}


export function clickToCopy(node: HTMLElement, target: string) {
	async function copyText() {
		let text = target ;
		
		try {
			await navigator.clipboard.writeText(text);
			
			node.dispatchEvent(
        new CustomEvent('copysuccess', {
					bubbles: true
				})
      );
		} catch(error) {
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
	}
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

/**
 * Filters out keys in the object that are not strings. 
 * to filter out index.js since it has [Symbol(Symbol.toStringTag)]: 'Module'
 * Use this where you don't use other filters
 * @example 
 * import type { ComponentType } from 'svelte';
 * import * as icons from '../supertiny-samples'
 * import { filterStringKeys } from '$lib'
 * const keyIcons = filterStringKeys(icons);
 * <IconPage icons={keyIcons as ComponentType} threeTabs={false} title="No Tabs" />
 * 
 * @param {object} obj - The object to filter string keys from.
 * @return {object} A new object with only the string keys.
 */
export const filterStringKeys = (obj: { [key: string]: any }) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => typeof key === 'string')
  );
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
 * Generates a random hex color code.
 *
 * @return {string} The randomly generated hex color code.
 */
export const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};


/**
 * Filters an array of objects by their titles.
 *
 * @param {Card[]} objects - The array of objects to filter.
 * @param {Title[]} titles - The titles to filter by.
 * @return {Card[]} The filtered array of objects.
 */
export function filterByTitles(objects: Card[], titles: Title[]) {
  return objects.filter(object =>
    titles.some(title => title.toLowerCase() === object.title.toLowerCase())
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
  return objects.filter(object =>
    !titles.some(title => title.toLowerCase() === object.title.toLowerCase())
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
    throw new Error("Invalid position. Please provide a position within the array bounds.");
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
    iconClass: 'text-pink-500'
  },
  {
    title: 'Brands, Regular, and Solid Icons',
    description: '2000+ SVG Icons.',
    icon: BellActiveAltOutline,
    iconClass: 'text-green-500'
  },
  {
    title: 'Accessible SVGs',
    description: 'A11y props, `title`, `desc`, and `ariaLabel` for accessible SVG icons.',
    icon: Accessibility,
    iconClass: 'text-blue-400'
  },
  {
    title:'Faster Compiling',
    description: 'Import icons directly to optimize compilation speed and improve performance.',
    icon: TruckFastSolid,
    iconClass: 'text-yellow-500'
  },
  {
    title:'IDE Support',
    description: 'Hovering over a component name will display features, props, events, and more for an LSP-compatible editors.',
    icon: Visualstudiocode,
    iconClass: 'text-blue-500'
  },
  {
    title:'Global Icons',
    description: 'Use `IconSolid` and `IconOutline` to careat default icons.',
    icon: GlobeOutline,
    iconClass: 'text-purple-500'
  },
  {
    title:'CSS Frameworks support',
    description: 'Use TailwindCSS, Bootstrap CSS, or any other CSS frameworks.',
    icon:Tailwindcss,
    iconClass: 'text-blue-500'
  },
  {
    title:'Seven Props',
    description: 'Control the size, role, color, events, aria-label, title, and desc.',
    icon:A7Solid,
    iconClass: 'text-cyan-500'
  },
  {
    title:'Dark mode',
    description: 'Use `class` props to add your dark mode color.',
    icon:MoonSolid,
    iconClass: 'text-yellow-200'
  }
]

export const info = [
  {
    title: 'Svelte Icon Family',
    description: 'Explore 29 Svelte SVG Icon Sets.',
    icon: InfoCircleOutline,
    href:'https://svelte-svg-icons.codewithshin.com/',
    iconClass: 'text-amber-500'
  },
  {
    title: 'License',
    description: 'Released under the MIT License.',
    icon: InfoCircleOutline,
    href:'https://github.com/shinokada/svelte-awesome-icons/blob/main/LICENSE',
    iconClass: 'text-lime-500'
  },
  {
    title: 'Original source',
    description: 'FontAwesome/Font-Awesome v6.2.1.',
    icon: InfoCircleOutline,
    href:'https://github.com/FortAwesome/Font-Awesome/tree/6.x/svgs',
    iconClass: 'text-orange-500'
  }
]

export  const pkg = {
  pkgName: __NAME__,
  pkgVersion: __VERSION__, 
  repoUrl: __GITHUBURL__,
  runaticsVersion: __RUNATICS_VERSION__, 
  runesMetaTagsVersion: __RUNES_METATAGS_VERSION__,
  svelteVersion: __SVELTE_VERSION__, 
  svelteKitVersion: __SVELTEKIT_VERSION__, 
  svelte5uilib: __SVELTE_5_UI_LIB_VERSION__, 
  svelteRuneHighlight: __SVELTE_RUNE_HIGHLIGHT_VERSION__, 
  viteVersion: __VITE_VERSION__, 
}