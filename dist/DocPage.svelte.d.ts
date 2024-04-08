import { SvelteComponent } from "svelte";
import type { Snippet } from 'svelte';
declare const __propDef: {
    props: {
        children: Snippet;
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
export type DocPageProps = typeof __propDef.props;
export type DocPageEvents = typeof __propDef.events;
export type DocPageSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://runes-webkit.codewithshin.com/)
 * ## Props
 * @props: children: Snippet;
 * @props:title?: string;
 * @props:description?: string;
 * @props:keywords?: string;
 * @props:url?: string;
 * @props:image?: string;
 * @props:imageAlt?: string;
 * @props:imageWidth?: string;
 * @props:imageHeight?: string;
 * @props:creator?: string;
 */
export default class DocPage extends SvelteComponent<DocPageProps, DocPageEvents, DocPageSlots> {
}
export {};
