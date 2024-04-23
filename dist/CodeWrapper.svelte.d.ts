import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        children?: ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
        c_w_div?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CodeWrapperProps = typeof __propDef.props;
export type CodeWrapperEvents = typeof __propDef.events;
export type CodeWrapperSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://runes-webkit.codewithshin.com/)
 * ## Props
 * @props: children?: Snippet;
 * @props:c_w_div?: string;
 */
export default class CodeWrapper extends SvelteComponent<CodeWrapperProps, CodeWrapperEvents, CodeWrapperSlots> {
}
export {};
