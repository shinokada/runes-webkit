/** @typedef {typeof __propDef.props}  MetaTagProps */
/** @typedef {typeof __propDef.events}  MetaTagEvents */
/** @typedef {typeof __propDef.slots}  MetaTagSlots */
/**
 * [Go to docs](https://svelte-icon-webkit.codewithshin.com/)
 * ## Props
 * @props:
 */
export default class MetaTag extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type MetaTagProps = typeof __propDef.props;
export type MetaTagEvents = typeof __propDef.events;
export type MetaTagSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
