import type { MetaProps } from '$lib';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Global icons example - Runes Webkit',
    description: 'Global icons example',
    og: {
      title: 'Global icons example - Runes Webkit',
      description: 'Global icons example',
    },
    twitter: {
      title: 'Global icons example - Runes Webkit',
      description: 'Global icons example',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};