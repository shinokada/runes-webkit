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
export type EditOutlineProps = typeof __propDef.props;
export type EditOutlineEvents = typeof __propDef.events;
export type EditOutlineSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-icon-webkit.codewithshin.com/)
 * ## Props
 * @props: size?:  "xs" | "sm" | "md" | "lg" | "xl"; = ctx.size || 'md', role, class: classname, ariaLabel;
 * @props:role?: string;
 * @props:class?: string;
 * @props:ariaLabel?: string;
 */
export default class EditOutline extends SvelteComponent<EditOutlineProps, EditOutlineEvents, EditOutlineSlots> {
}
export {};
