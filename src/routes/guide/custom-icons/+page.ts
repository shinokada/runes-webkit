import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags: MetaProps = {
    title: 'Custom icons example - Runes Webkit',
    description: 'Custom icons example',
    og: {
      title: 'Custom icons example - Runes Webkit',
      description: 'Custom icons example'
    },
    twitter: {
      title: 'Custom icons example - Runes Webkit',
      description: 'Custom icons example'
    }
  };
  return { pageMetaTags };
};
