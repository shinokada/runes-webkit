import { SvelteComponent } from "svelte";
import type { Snippet } from "svelte";
declare const __propDef: {
    props: {
        children: Snippet;
        tag?: string | undefined;
        a_span?: string | undefined;
        a_a?: string | undefined;
        a_wrapper?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AnchorProps = typeof __propDef.props;
export type AnchorEvents = typeof __propDef.events;
export type AnchorSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://runes-webkit.codewithshin.com/)
 * ## Props
 * @props: children: Snippet;
 * @props:tag?: string;
 * @props:a_span?: string;
 * @props:a_a?: string;
 * @props:a_wrapper?: string;
 */
export default class Anchor extends SvelteComponent<AnchorProps, AnchorEvents, AnchorSlots> {
}
export {};
