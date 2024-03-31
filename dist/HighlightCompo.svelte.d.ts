import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        code: string;
        codeLang?: string | undefined;
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
 * [Go to docs](https://svelte-icon-webkit.codewithshin.com/)
 * ## Props
 * @props:
 */
export default class HighlightCompo extends SvelteComponent<HighlightCompoProps, HighlightCompoEvents, HighlightCompoSlots> {
}
export {};
