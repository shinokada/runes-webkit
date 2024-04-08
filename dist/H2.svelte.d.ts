import { SvelteComponent } from "svelte";
import type { Snippet } from "svelte";
declare const __propDef: {
    props: {
        children: Snippet;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type H2Props = typeof __propDef.props;
export type H2Events = typeof __propDef.events;
export type H2Slots = typeof __propDef.slots;
/**
 * [Go to docs](https://runes-webkit.codewithshin.com/)
 * ## Props
 * @props: children: Snippet;
 */
export default class H2 extends SvelteComponent<H2Props, H2Events, H2Slots> {
}
export {};
