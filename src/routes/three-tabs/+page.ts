import type { MetaProps } from '$lib';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Three Tabs example - Runes Webkit',
    description: 'Three Tabs example',
    og: {
      title: 'Three Tabs example - Runes Webkit',
      description: 'Three Tabs example',
    },
    twitter: {
      title: 'Three Tabs example - Runes Webkit',
      description: 'Three Tabs example',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
