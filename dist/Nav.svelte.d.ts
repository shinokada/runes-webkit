import { SvelteComponent } from "svelte";
import type { ComponentType } from 'svelte';
declare const __propDef: {
    props: {
        lis: {
            name: string;
            href: string;
            icon?: ComponentType | undefined;
        }[];
        siteName: string;
        twitterUrl?: string | undefined;
        githubUrl?: string | undefined;
        headerClass?: string | undefined;
        urlsToInclude?: string[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type NavProps = typeof __propDef.props;
export type NavEvents = typeof __propDef.events;
export type NavSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://svelte-icon-webkit.codewithshin.com/)
 * ## Props
 * @props: lis: LiType[];
 * @props:siteName: string;
 * @props:twitterUrl?: string;
 * @props:githubUrl?: string;
 * @props:headerClass?: string;
 * @props:urlsToInclude?: string[];
 */
export default class Nav extends SvelteComponent<NavProps, NavEvents, NavSlots> {
}
export {};
