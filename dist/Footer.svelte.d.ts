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
        footerClass?: string | undefined;
        footerType?: "logo" | "sitemap" | "default" | "socialmedia" | undefined;
        divClass?: string | undefined;
        ulClass?: string | undefined;
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
