import type { MetaProps } from '$lib';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Custom icons example - Runes Webkit',
    description: 'Custom icons example',
    og: {
      title: 'Custom icons example - Runes Webkit',
      description: 'Custom icons example',
    },
    twitter: {
      title: 'Custom icons example - Runes Webkit',
      description: 'Custom icons example',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
