import { SvelteComponent } from "svelte";
import type { ComponentType } from 'svelte';
declare const __propDef: {
    props: {
        sidebarList: {
            name: string;
            href?: string | undefined;
            icon?: ComponentType | undefined;
            children?: {
                name: string;
                href?: string | undefined;
                icon?: ComponentType | undefined;
            }[] | undefined;
        }[];
        menuList?: {
            name: string;
            href?: string | undefined;
            icon?: ComponentType | undefined;
            children?: {
                name: string;
                href?: string | undefined;
                icon?: ComponentType | undefined;
            }[] | undefined;
        }[] | undefined;
        sidebarClose?: (() => void) | undefined;
        s_b_active?: string | undefined;
        s_b_nonactive?: string | undefined;
        s_b_div?: string | undefined;
        s_b_aside?: string | undefined;
        s_b_icon?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SidebarProps = typeof __propDef.props;
export type SidebarEvents = typeof __propDef.events;
export type SidebarSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://runes-webkit.codewithshin.com/)
 * ## Props
 * @props: sidebarList: ListType[];
 * @props:menuList?: ListType[];
 * @props:sidebarClose?: () => void;
 * @props:s_b_active?: string;
 * @props:s_b_nonactive?: string;
 * @props:s_b_div?: string;
 * @props:s_b_aside?: string;
 * @props:s_b_icon?: string;
 */
export default class Sidebar extends SvelteComponent<SidebarProps, SidebarEvents, SidebarSlots> {
}
export {};
