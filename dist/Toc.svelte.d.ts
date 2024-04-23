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
        t_a?: string | undefined;
        t_ul?: string | undefined;
        t_div_1?: string | undefined;
        t_div_2?: string | undefined;
        t_div_3?: string | undefined;
        t_div_4?: string | undefined;
        t_h4?: string | undefined;
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
 * @props:t_a?: string;
 * @props:t_ul?: string;
 * @props:t_div_1?: string;
 * @props:t_div_2?: string;
 * @props:t_div_3?: string;
 * @props:t_div_4?: string;
 * @props:t_h4?: string;
 */
export default class Toc extends SvelteComponent<TocProps, TocEvents, TocSlots> {
}
export {};
