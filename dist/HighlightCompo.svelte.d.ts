import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        code: string;
        codeLang?: string | undefined;
        badgeDivclass?: string | undefined;
        counter?: number | undefined;
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
 * @props:
 */
export default class HighlightCompo extends SvelteComponent<HighlightCompoProps, HighlightCompoEvents, HighlightCompoSlots> {
}
export {};
