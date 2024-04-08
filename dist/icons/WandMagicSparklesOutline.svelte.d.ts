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
export type WandMagicSparklesOutlineProps = typeof __propDef.props;
export type WandMagicSparklesOutlineEvents = typeof __propDef.events;
export type WandMagicSparklesOutlineSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://runes-webkit.codewithshin.com/)
 * ## Props
 * @props: size?:  "xs" | "sm" | "md" | "lg" | "xl"; = ctx.size || 'md', role, class: classname, ariaLabel;
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?: string;
 */
export default class WandMagicSparklesOutline extends SvelteComponent<WandMagicSparklesOutlineProps, WandMagicSparklesOutlineEvents, WandMagicSparklesOutlineSlots> {
}
export {};
