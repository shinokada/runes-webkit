import type { MetaProps } from '$lib';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'Three Tabs example sized by Tailwind - Runes Webkit',
    description: 'Three Tabs example sized by Tailwind',
    og: {
      title: 'Three Tabs example sized by Tailwind - Runes Webkit',
      description: 'Three Tabs example sized by Tailwind',
    },
    twitter: {
      title: 'Three Tabs example sized by Tailwind - Runes Webkit',
      description: 'Three Tabs example sized by Tailwind',
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
