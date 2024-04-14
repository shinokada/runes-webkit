import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Svelte 4 Getting started example - Runes Webkit',
    description: 'Svelte 4 Getting started example',
    og: {
      title: 'Svelte 4 Getting started example - Runes Webkit',
      description: 'Svelte 4 Getting started example',
    },
    twitter: {
      title: 'Svelte 4 Getting started example - Runes Webkit',
      description: 'Svelte 4 Getting started example',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
