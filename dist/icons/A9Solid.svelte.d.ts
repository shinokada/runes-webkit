import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        size?: string | undefined;
        role?: string | undefined;
        color?: string | undefined;
        ariaLabel?: string | undefined;
        class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type A9SolidProps = typeof __propDef.props;
export type A9SolidEvents = typeof __propDef.events;
export type A9SolidSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-icon-webkit.codewithshin.com/)
 * ## Props
 * @props: size?:  string; = ctx.size || '24', role;
 * @props:role?: string;
 * @props:color?: string;
 * @props:ariaLabel?: string;
 * @props:class?: string;
 */
export default class A9Solid extends SvelteComponent<A9SolidProps, A9SolidEvents, A9SolidSlots> {
}
export {};
