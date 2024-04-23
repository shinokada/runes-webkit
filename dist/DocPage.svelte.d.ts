import { SvelteComponent } from "svelte";
import type { Snippet } from 'svelte';
declare const __propDef: {
    props: {
        children: Snippet;
        headingSelector?: string | undefined;
        d_p_main?: string | undefined;
        d_p_div_1?: string | undefined;
        d_p_div_2?: string | undefined;
        d_p_div_3?: string | undefined;
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
 * @props:headingSelector?: string;
 * @props:d_p_main?: string;
 * @props:d_p_div_1?: string;
 * @props:d_p_div_2?: string;
 * @props:d_p_div_3?: string;
 */
export default class DocPage extends SvelteComponent<DocPageProps, DocPageEvents, DocPageSlots> {
}
export {};
