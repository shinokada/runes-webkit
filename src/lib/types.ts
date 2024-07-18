import type { Component } from 'svelte';

export type Title = string;

export type Card = {
  title: string;
  description: string;
  icon: Component;
  icon_class: string;
};

export type CardType = {
  title: string;
  description: string;
  icon: Component;
  href?: string;
  icon_class?: string;
};

export interface LinkType {
  name: string;
  href?: string;
  rel?: string;
  active?: boolean;
}

type ChildrenType = {
  name: string;
  href?: string;
  icon?: Component;
};
export type ListType = {
  name: string;
  href?: string;
  icon?: Component;
  children?: ChildrenType[];
};
