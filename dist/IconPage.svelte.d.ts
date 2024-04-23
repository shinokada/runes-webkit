import { SvelteComponent } from "svelte";
import type { ComponentType } from 'svelte';
declare const __propDef: {
    props: {
        icons: ComponentType;
        title: string;
        defaultSize?: string | undefined;
        sizeByTailwind?: boolean | undefined;
        minSize?: string | undefined;
        maxSize?: string | undefined;
        threeTabs?: boolean | undefined;
        i_p_wrapper?: string | undefined;
        i_p_div_1?: string | undefined;
        i_p_div_2?: string | undefined;
        i_p_div_3?: string | undefined;
        i_p_div_4?: string | undefined;
        i_p_label?: string | undefined;
        i_p_input_search?: string | undefined;
        i_p_tabitem_div_1?: string | undefined;
        i_p_tabitem_div_2?: string | undefined;
        i_p_input_range?: string | undefined;
        i_p_tabs?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IconPageProps = typeof __propDef.props;
export type IconPageEvents = typeof __propDef.events;
export type IconPageSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://runes-webkit.codewithshin.com/)
 * ## Props
 * @props: icons: ComponentType;
 * @props:title: string;
 * @props:defaultSize?: string;
 * @props:sizeByTailwind?: boolean;// for flowbite-svelte-icons only
 * @props:minSize?: string;
 * @props:maxSize?: string;
 * @props:threeTabs?: boolean
 */
export default class IconPage extends SvelteComponent<IconPageProps, IconPageEvents, IconPageSlots> {
}
export {};
