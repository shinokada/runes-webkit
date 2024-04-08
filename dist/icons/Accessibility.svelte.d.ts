import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        size?: "md" | "xs" | "sm" | "lg" | "xl" | undefined;
        role?: string | undefined;
        class?: string | undefined;
        ariaLabel?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AccessibilityProps = typeof __propDef.props;
export type AccessibilityEvents = typeof __propDef.events;
export type AccessibilitySlots = typeof __propDef.slots;
/**
 * [Go to docs](https://runes-webkit.codewithshin.com/)
 * ## Props
 * @props: size?:  "xs" | "sm" | "md" | "lg" | "xl"; = ctx.size || 'md', role, class: classname, ariaLabel;
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?: string;
 */
export default class Accessibility extends SvelteComponent<AccessibilityProps, AccessibilityEvents, AccessibilitySlots> {
}
export {};
