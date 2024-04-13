import type { MetaProps } from '$lib';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Svelte 5 Getting started example - Runes Webkit',
    description: 'Svelte 5 Getting started example',
    og: {
      title: 'Svelte 5 Getting started example - Runes Webkit',
      description: 'Svelte 5 Getting started example',
    },
    twitter: {
      title: 'Svelte 5 Getting started example - Runes Webkit',
      description: 'Svelte 5 Getting started example',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
