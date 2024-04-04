interface LinkType {
    name: string;
    href?: string;
    rel?: string;
    active?: boolean;
}
export declare function extract(x: HTMLElement): LinkType;
export declare function removeHyphensAndCapitalize(str: string): string;
export declare function filterIconsByKeyword(icons: {
    [key: string]: any;
}, keyword: string): {
    [key: string]: any;
};
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
export declare function excludeItemsByKeywords(items: {
    [key: string]: any;
}, keywords: string): {
    [key: string]: any;
};
export declare const random_tailwind_color: () => string;
export declare const random_hex_color_code: () => string;
export {};
