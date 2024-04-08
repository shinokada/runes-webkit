import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        headingSelector: string;
        extract: (x: HTMLElement) => {
            name: string;
            href?: string | undefined;
            rel?: string | undefined;
            active?: boolean | undefined;
        };
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
 * [Go to docs](https://runes-webkit.codewithshin.com/)
 * ## Props
 * @props: headingSelector: string;
 * @props:extract: (x
 */
export default class OnThisPage extends SvelteComponent<OnThisPageProps, OnThisPageEvents, OnThisPageSlots> {
}
export {};
