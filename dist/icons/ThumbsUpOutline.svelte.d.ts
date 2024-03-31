import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        size?: "md" | "xl" | "xs" | "sm" | "lg" | undefined;
        role?: string | undefined;
        class?: string | undefined;
        ariaLabel?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ThumbsUpOutlineProps = typeof __propDef.props;
export type ThumbsUpOutlineEvents = typeof __propDef.events;
export type ThumbsUpOutlineSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-icon-webkit.codewithshin.com/)
 * ## Props
 * @props: size?:  "xs" | "sm" | "md" | "lg" | "xl"; = ctx.size || 'md', role, class: classname, ariaLabel;
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?: string;
 */
export default class ThumbsUpOutline extends SvelteComponent<ThumbsUpOutlineProps, ThumbsUpOutlineEvents, ThumbsUpOutlineSlots> {
}
export {};
