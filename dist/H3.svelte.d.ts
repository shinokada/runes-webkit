import { SvelteComponent } from "svelte";
import type { Snippet } from "svelte";
declare const __propDef: {
    props: {
        children: Snippet;
        h3_h3?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type H3Props = typeof __propDef.props;
export type H3Events = typeof __propDef.events;
export type H3Slots = typeof __propDef.slots;
/**
 * [Go to docs](https://runes-webkit.codewithshin.com/)
 * ## Props
 * @props: children: Snippet;
 */
export default class H3 extends SvelteComponent<H3Props, H3Events, H3Slots> {
}
export {};
