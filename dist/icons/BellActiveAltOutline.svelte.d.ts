import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        size?: "md" | "lg" | "xl" | "xs" | "sm" | undefined;
        role?: string | undefined;
        class?: string | undefined;
        ariaLabel?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BellActiveAltOutlineProps = typeof __propDef.props;
export type BellActiveAltOutlineEvents = typeof __propDef.events;
export type BellActiveAltOutlineSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-icon-webkit.codewithshin.com/)
 * ## Props
 * @props: size?:  "xs" | "sm" | "md" | "lg" | "xl"; = ctx.size || 'md', role, class: classname, ariaLabel;
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?: string;
 */
export default class BellActiveAltOutline extends SvelteComponent<BellActiveAltOutlineProps, BellActiveAltOutlineEvents, BellActiveAltOutlineSlots> {
}
export {};
