import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        code: string;
        codeLang?: string | undefined;
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
 * @props: code: string;
 * @props:codeLang?: string;
 * @props:counter?:  number; = 2;
 */
export default class HighlightCompo extends SvelteComponent<HighlightCompoProps, HighlightCompoEvents, HighlightCompoSlots> {
}
export {};
