import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        children?: ((this: void) => typeof import("svelte").SnippetReturn & {
            _: "functions passed to {@render ...} tags must use the `Snippet` type imported from \"svelte\"";
        }) | undefined;
        pkgName?: string | undefined;
        pkgVersion?: string | undefined;
        repoUrl?: string | undefined;
        title?: string | undefined;
        t_i_h2?: string | undefined;
        t_i_div?: string | undefined;
        t_i_ul?: string | undefined;
        t_i_li?: string | undefined;
        t_i_a?: string | undefined;
        cardsize?: "xl" | "xs" | "sm" | "md" | "lg" | undefined;
        runeswebkitVersion?: string | undefined;
        runaticsVersion?: string | undefined;
        runesMetaTagsVersion?: string | undefined;
        svelteVersion?: string | undefined;
        svelteKitVersion?: string | undefined;
        svelte5uilib?: string | undefined;
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
 * @props:title?: string;
 * @props:t_i_h2?: string;
 * @props:t_i_div?: string;
 * @props:t_i_ul?: string;
 * @props:t_i_li?: string;
 * @props:t_i_a?: string;
 * @props:cardsize?: "xl" | "xs" | "sm" | "md" | "lg" | undefined;
 * @props:runeswebkitVersion?: string;
 * @props:runaticsVersion?: string;
 * @props:runesMetaTagsVersion?: string;
 * @props:svelteVersion?: string;
 * @props:svelteKitVersion?: string;
 * @props:svelte5uilib?: string;
 * @props:svelteRuneHighlight?: string;
 * @props:viteVersion?: string;
 */
export default class TechInfo extends SvelteComponent<TechInfoProps, TechInfoEvents, TechInfoSlots> {
}
export {};
