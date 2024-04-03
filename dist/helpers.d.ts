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
export declare function excludeItemsByKeywords(items: {
    [key: string]: any;
}, keywords: string): {
    [key: string]: any;
};
export declare const random_tailwind_color: () => string;
export declare const random_hex_color_code: () => string;
export {};
