import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        children?: ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
        pkgName?: string | undefined;
        pkgVersion?: string | undefined;
        repoUrl?: string | undefined;
        h2class?: string | undefined;
        title?: string | undefined;
        divclass?: string | undefined;
        ulclass?: string | undefined;
        liclass?: string | undefined;
        aclass?: string | undefined;
        cardsize?: "xl" | "xs" | "sm" | "md" | "lg" | undefined;
        svelteVersion?: string | undefined;
        svelteKitVersion?: string | undefined;
        svelte5uilib?: string | undefined;
        svelteIconWebkit?: string | undefined;
        svelteRuneHighlight?: string | undefined;
        viteVersion?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TechInfoProps = typeof __propDef.props;
export type TechInfoEvents = typeof __propDef.events;
export type TechInfoSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://runes-webkit.codewithshin.com/)
 * ## Props
 * @props: children?: Snippet;
 * @props:pkgName?: string;
 * @props:pkgVersion?: string;
 * @props:repoUrl?: string;
 * @props:h2class?: string;
 * @props:title?: string;
 * @props:divclass?: string;
 * @props:ulclass?: string;
 * @props:liclass?: string;
 * @props:aclass?: string;
 * @props:cardsize?: "xl" | "xs" | "sm" | "md" | "lg" | undefined;
 * @props:svelteVersion?: string;
 * @props:svelteKitVersion?: string;
 * @props:svelte5uilib?: string;
 * @props:svelteIconWebkit?: string;
 * @props:svelteRuneHighlight?: string;
 * @props:viteVersion?: string;
 */
export default class TechInfo extends SvelteComponent<TechInfoProps, TechInfoEvents, TechInfoSlots> {
}
export {};
