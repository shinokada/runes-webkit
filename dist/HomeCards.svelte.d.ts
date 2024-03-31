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
        cardTitle: string;
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
 * [Go to docs](https://svelte-icon-webkit.codewithshin.com/)
 * ## Props
 * @props: cards:  CardType[]; = [], cardTitle, ...restProps;
 * @props:cardTitle: string;
 */
export default class HomeCards extends SvelteComponent<HomeCardsProps, HomeCardsEvents, HomeCardsSlots> {
}
export {};
