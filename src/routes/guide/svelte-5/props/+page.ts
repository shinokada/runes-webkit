import type { MetaProps } from '$lib';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Svelte 5 Props example - Runes Webkit',
    description: 'Svelte 5 Props example',
    og: {
      title: 'Svelte 5 Props example - Runes Webkit',
      description: 'Svelte 5 Props example',
    },
    twitter: {
      title: 'Svelte 5 Props example - Runes Webkit',
      description: 'Svelte 5 Props example',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
