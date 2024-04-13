import type { MetaProps } from '$lib';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Svelte 4 Props example - Runes Webkit',
    description: 'Svelte 4 Props example',
    og: {
      title: 'Svelte 4 Props example - Runes Webkit',
      description: 'Svelte 4 Props example',
    },
    twitter: {
      title: 'Svelte 4 Props example - Runes Webkit',
      description: 'Svelte 4 Props example',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
