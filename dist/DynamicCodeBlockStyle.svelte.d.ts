import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DynamicCodeBlockStyleProps = typeof __propDef.props;
export type DynamicCodeBlockStyleEvents = typeof __propDef.events;
export type DynamicCodeBlockStyleSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-icon-webkit.codewithshin.com/)
 * ## Props
 * @props:
 */
export default class DynamicCodeBlockStyle extends SvelteComponent<DynamicCodeBlockStyleProps, DynamicCodeBlockStyleEvents, DynamicCodeBlockStyleSlots> {
}
export {};
