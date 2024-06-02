import type { MetaProps } from 'runes-meta-tags';

export const load = () => {
  const pageMetaTags: MetaProps = {
    title: 'Svelte 5 Props example - Svelte Ant Design Icons',
    description: 'Svelte 5 Props example',
    og: {
      title: 'Svelte 5 Props example - Svelte Ant Design Icons',
      description: 'Svelte 5 Props example'
    },
    twitter: {
      title: 'Svelte 5 Props example - Svelte Ant Design Icons',
      description: 'Svelte 5 Props example'
    }
  };
  return { pageMetaTags };
};
