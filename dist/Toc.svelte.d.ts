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
        a_class?: string | undefined;
        ul_class?: string | undefined;
        div_1_class?: string | undefined;
        div_2_class?: string | undefined;
        div_3_class?: string | undefined;
        div_4_class?: string | undefined;
        h4_class?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TocProps = typeof __propDef.props;
export type TocEvents = typeof __propDef.events;
export type TocSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://runes-webkit.codewithshin.com/)
 * ## Props
 * @props: headingSelector: string;
 * @props:extract: (x
 * @props:a_class?: string;
 * @props:ul_class?: string;
 * @props:div_1_class?: string;
 * @props:div_2_class?: string;
 * @props:div_3_class?: string;
 * @props:div_4_class?: string;
 * @props:h4_class?: string;
 */
export default class Toc extends SvelteComponent<TocProps, TocEvents, TocSlots> {
}
export {};
