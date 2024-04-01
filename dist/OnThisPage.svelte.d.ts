import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        headingSelector: string;
    } & {
        extract?: ((x: HTMLElement) => {
            name: string;
            href?: string | undefined;
            rel?: string | undefined;
            active?: boolean | undefined;
        }) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type OnThisPageProps = typeof __propDef.props;
export type OnThisPageEvents = typeof __propDef.events;
export type OnThisPageSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-icon-webkit.codewithshin.com/)
 * ## Props
 * @props:
 */
export default class OnThisPage extends SvelteComponent<OnThisPageProps, OnThisPageEvents, OnThisPageSlots> {
    get extract(): (x: HTMLElement) => {
        name: string;
        href?: string | undefined;
        rel?: string | undefined;
        active?: boolean | undefined;
    };
}
export {};
