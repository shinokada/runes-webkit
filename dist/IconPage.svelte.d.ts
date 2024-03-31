import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        icons: {
            [key: string]: {
                render: () => void;
            };
        };
        title: string;
        defaultSize?: string | undefined;
        sizeByTailwind?: boolean | undefined;
        minSize?: string | undefined;
        maxSize?: string | undefined;
        class?: string | undefined;
        threeTabs?: boolean | undefined;
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
 * [Go to docs](https://svelte-icon-webkit.codewithshin.com/)
 * ## Props
 * @props: icons: { [key
 */
export default class IconPage extends SvelteComponent<IconPageProps, IconPageEvents, IconPageSlots> {
}
export {};
