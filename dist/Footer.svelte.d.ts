import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        brand?: {
            name: string;
            href: string;
        } | undefined;
        lis?: {
            name: string;
            href: string;
        }[] | undefined;
        footerType?: "logo" | "sitemap" | "default" | "socialmedia" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FooterProps = typeof __propDef.props;
export type FooterEvents = typeof __propDef.events;
export type FooterSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://runes-webkit.codewithshin.com/)
 * ## Props
 * @props: brand?: {
 * @props:name: string;
 * @props:href: string;
 */
export default class Footer extends SvelteComponent<FooterProps, FooterEvents, FooterSlots> {
}
export {};
