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
export default class DocPage extends SvelteComponent<DocPageProps, DocPageEvents, DocPageSlots> {
}
export {};
