import type { ComponentType } from 'svelte';
import BellActiveAltOutline from './icons/BellActiveAltOutline.svelte';
import InfoCircleOutline from './icons/InfoCircleOutline.svelte';
import TruckFastSolid from './icons/TruckFastSolid.svelte';
type Title = string;
export type Card = {
    title: string;
    description: string;
    icon: ComponentType;
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
    icon?: ComponentType;
    children?: ListType[];
};
export declare function clickToCopy(node: HTMLElement, target: string): {
    destroy(): void;
};
export declare function toDashCaseLower(text: string): string;
export declare function toUpperSnakeCase(text: string): string;
/**
 * Extracts information from an HTMLElement to create a LinkType object.
 *
 * @param {HTMLElement} x - The HTMLElement from which to extract information.
 * @return {LinkType} The extracted information as a LinkType object.
 */
export declare function extract(x: HTMLElement): LinkType;
/**
 * Removes hyphens from a string and capitalizes each word.
 *
 * @param {string} str - the input string
 * @return {string} the formatted string with hyphens removed and words capitalized
 */
export declare function removeHyphensAndCapitalize(str: string): string;
/**
 * Filters icons based on the provided keyword.
 *
 * @param {Object} icons - The object containing icons to filter.
 * @param {string} keyword - The keyword to filter icons by.
 * @return {Object} The filtered icons object.
 */
export declare function filterIconsByKeyword(icons: {
    [key: string]: any;
}, keyword: string): {
    [key: string]: any;
};
export declare function convertToKebabCase(str: string): string;
/**
 * Filters out keys in the object that are not strings.
 * to filter out index.js since it has [Symbol(Symbol.toStringTag)]: 'Module'
 * Use this where you don't use other filters
 * @example
 * import type { ComponentType } from 'svelte';
 * import * as icons from '../supertiny-samples'
 * import { filterStringKeys } from './'
 * const keyIcons = filterStringKeys(icons);
 * <IconPage icons={keyIcons as ComponentType} threeTabs={false} title="No Tabs" />
 *
 * @param {object} obj - The object to filter string keys from.
 * @return {object} A new object with only the string keys.
 */
export declare const filterStringKeys: (obj: {
    [key: string]: any;
}) => {
    [k: string]: any;
};
/**
 * Exclude items from the input object based on the provided keywords.
 *
 * @param {object} items - The input object containing key-value pairs.
 * @param {string} keywords - The keywords to exclude items by.
 * @return {object} The filtered object after excluding items based on the keywords.
 */
export declare function excludeItemsByKeywords(items: {
    [key: string]: any;
}, keywords: string): {
    [key: string]: any;
};
/**
 * Generates a random tailwind color class string.
 *
 * @return {string} The generated tailwind color class string.
 */
export declare const random_tailwind_color: () => string;
/**
 * Generates a random hex color code.
 *
 * @return {string} The randomly generated hex color code.
 */
export declare const random_hex_color_code: () => string;
/**
 * Filters an array of objects by their titles.
 *
 * @param {Card[]} objects - The array of objects to filter.
 * @param {Title[]} titles - The titles to filter by.
 * @return {Card[]} The filtered array of objects.
 */
export declare function filterByTitles(objects: Card[], titles: Title[]): Card[];
/**
 * Filters out objects based on their title.
 *
 * @param {Card[]} objects - array of Card objects to filter
 * @param {Title[]} titles - array of Titles to exclude by
 * @return {Card[]} filtered array of Card objects
 */
export declare function excludeByTitle(objects: Card[], titles: Title[]): Card[];
/**
 * Insert a new object into an array at a specified position.
 *
 * @param {Card[]} array - the original array
 * @param {Card} objectToInsert - the object to insert into the array
 * @param {number} position - the position where the object should be inserted
 * @return {any[]} the updated array with the object inserted at the specified position
 */
export declare function insertObjectToArray(array: Card[], objectToInsert: Card, position: number): any[];
export declare const cards: ({
    title: string;
    description: string;
    icon: typeof BellActiveAltOutline;
    icon_class: string;
} | {
    title: string;
    description: string;
    icon: typeof TruckFastSolid;
    icon_class: string;
})[];
export declare const info: {
    title: string;
    description: string;
    icon: typeof InfoCircleOutline;
    href: string;
    icon_class: string;
}[];
export declare const pkg: {
    pkgName: any;
    pkgVersion: any;
    repoUrl: any;
    runaticsVersion: any;
    runesMetaTagsVersion: any;
    svelteVersion: any;
    svelteKitVersion: any;
    svelte5uilib: any;
    svelteRuneHighlight: any;
    viteVersion: any;
};
export declare const sidebarList: ListType[];
export {};
