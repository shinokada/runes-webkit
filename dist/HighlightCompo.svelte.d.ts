import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        code: string;
        codeLang?: string | undefined;
        counter?: number | undefined;
        h_c_badge_div?: string | undefined;
        h_c_div?: string | undefined;
        h_c_btn?: string | undefined;
        h_c_svg?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type HighlightCompoProps = typeof __propDef.props;
export type HighlightCompoEvents = typeof __propDef.events;
export type HighlightCompoSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://runes-webkit.codewithshin.com/)
 * ## Props
 * @props: code: string;
 * @props:codeLang?: string;
 * @props:counter?:  number; = 2, h_c_badge_div, h_c_div, h_c_btn, h_c_svg;
 * @props:h_c_badge_div?: string;
 * @props:h_c_div?: string;
 * @props:h_c_btn?: string;
 * @props:h_c_svg?: string;
 */
export default class HighlightCompo extends SvelteComponent<HighlightCompoProps, HighlightCompoEvents, HighlightCompoSlots> {
}
export {};
