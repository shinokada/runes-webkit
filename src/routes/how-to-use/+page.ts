import type { MetaProps } from '$lib';

export const load = () => {
  const pageMetaTags = Object.freeze({
    title: 'How to use | Runes Webkit',
    description: 'How to use Runes Webkit',
    og: {
      title: 'How to use | Runes Webkit',
      description: 'How to use Runes Webkit'
    },
    twitter: {
      title: 'How to use | Runes Webkit',
      description: 'How to use Runes Webkit'
    }
  }) satisfies MetaProps;
  return { pageMetaTags };
};
