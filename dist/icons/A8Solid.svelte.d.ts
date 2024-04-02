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
export type A8SolidProps = typeof __propDef.props;
export type A8SolidEvents = typeof __propDef.events;
export type A8SolidSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-icon-webkit.codewithshin.com/)
 * ## Props
 * @props: size?:  string; = ctx.size || '24', role;
 * @props:role?: string;
 * @props:color?: string;
 * @props:ariaLabel?: string;
 * @props:class?: string;
 */
export default class A8Solid extends SvelteComponent<A8SolidProps, A8SolidEvents, A8SolidSlots> {
}
export {};
