import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        title?: string | undefined;
        description?: string | undefined;
        keywords?: string | undefined;
        url?: string | undefined;
        image?: string | undefined;
        imageAlt?: string | undefined;
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
 * [Go to docs](https://svelte-icon-webkit.codewithshin.com/)
 * ## Props
 * @props: title?: string;
 * @props:description?: string;
 * @props:keywords?: string;
 * @props:url?: string;
 * @props:image?: string;
 * @props:imageAlt?: string;
 * @props:imageWidth?: string;
 * @props:imageHeight?: string;
 * @props:creator?: string;
 */
export default class MetaTag extends SvelteComponent<MetaTagProps, MetaTagEvents, MetaTagSlots> {
}
export {};
