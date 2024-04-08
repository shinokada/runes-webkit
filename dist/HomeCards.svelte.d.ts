import { SvelteComponent } from "svelte";
import type { ComponentType } from 'svelte';
declare const __propDef: {
    props: {
        cards: {
            title: string;
            description: string;
            icon: ComponentType;
            href?: string | undefined;
            iconClass?: string | undefined;
        }[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type HomeCardsProps = typeof __propDef.props;
export type HomeCardsEvents = typeof __propDef.events;
export type HomeCardsSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://runes-webkit.codewithshin.com/)
 * ## Props
 * @props: cards:  CardType[]; = [], ...restProps;
 */
export default class HomeCards extends SvelteComponent<HomeCardsProps, HomeCardsEvents, HomeCardsSlots> {
}
export {};
