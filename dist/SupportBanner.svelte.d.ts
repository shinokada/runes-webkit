import { SvelteComponent } from "svelte";
import type { Snippet } from 'svelte';
declare const __propDef: {
    props: {
        children: Snippet;
        divclass?: string | undefined;
        pclass?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SupportBannerProps = typeof __propDef.props;
export type SupportBannerEvents = typeof __propDef.events;
export type SupportBannerSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-icon-webkit.codewithshin.com/)
 * ## Props
 * @props: children: Snippet;
 * @props:divclass?: string;
 * @props:pclass?: string;
 */
export default class SupportBanner extends SvelteComponent<SupportBannerProps, SupportBannerEvents, SupportBannerSlots> {
}
export {};
