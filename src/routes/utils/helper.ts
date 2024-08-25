import type { Component } from 'svelte';
import { type ListType, sidebarList, CogOutline, ExpandOutline, GridPlusOutline } from '$lib';

const extra: ListType[] = [
  {
    name: '3 Tabs',
    icon: ExpandOutline as Component,
    href: '/three-tabs'
  },
  {
    name: '3 Tabs Tailwind ',
    icon: CogOutline as Component,
    href: '/three-tabs-sizebytailwind'
  },
  {
    name: 'No Tabs',
    icon: GridPlusOutline as Component,
    href: '/no-tabs'
  }
];
export const newSidebarList: ListType[] = [...sidebarList, ...extra];