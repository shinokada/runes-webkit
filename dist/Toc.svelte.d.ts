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
        divFixed?: string | undefined;
        aClass?: string | undefined;
        ulClass?: string | undefined;
        divFlex?: string | undefined;
        h4Class?: string | undefined;
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
 * [Go to docs](https://svelte-icon-webkit.codewithshin.com/)
 * ## Props
 * @props: headingSelector: string;
 * @props:extract: (x
 * @props:divFixed?: string;
 * @props:aClass?: string;
 * @props:ulClass?: string;
 * @props:divFlex?: string;
 * @props:h4Class?: string;
 */
export default class Toc extends SvelteComponent<TocProps, TocEvents, TocSlots> {
}
export {};
