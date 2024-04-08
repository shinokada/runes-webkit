import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        title?: string | undefined;
        robots?: boolean | undefined;
        description?: string | undefined;
        keywords?: string | undefined;
        twitter?: {
            card?: "summary" | "summary_large_image" | "app" | "player" | undefined;
            site?: string | undefined;
            handle?: string | undefined;
            title?: string | undefined;
            description?: string | undefined;
            image?: string | undefined;
            imageAlt?: string | undefined;
        } | undefined;
        og?: {
            type?: string | undefined;
            title?: string | undefined;
            description?: string | undefined;
            url?: string | undefined;
            image?: string | undefined;
            imageAlt?: string | undefined;
            siteName?: string | undefined;
            imageWidth?: string | undefined;
            imageHeight?: string | undefined;
        } | undefined;
        url?: string | undefined;
        imageWidth?: string | undefined;
        imageHeight?: string | undefined;
        creator?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MetaTagProps = typeof __propDef.props;
export type MetaTagEvents = typeof __propDef.events;
export type MetaTagSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://runes-webkit.codewithshin.com/)
 * ## Props
 * @props: title?: string;
 * @props:robots?:  boolean; = true;
 * @props:description?: string;
 * @props:keywords?: string;
 * @props:twitter?: TwitterType;
 * @props:og?: OgType;
 * @props:url?: string;
 * @props:imageWidth?: string;
 * @props:imageHeight?: string;
 * @props:creator?: string;
 */
export default class MetaTag extends SvelteComponent<MetaTagProps, MetaTagEvents, MetaTagSlots> {
}
export {};
