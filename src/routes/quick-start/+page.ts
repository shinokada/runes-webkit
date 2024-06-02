import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags: MetaProps = {
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
  };
  return { pageMetaTags };
};
