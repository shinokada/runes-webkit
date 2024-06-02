import type { MetaProps } from 'runes-meta-tags';
const title = 'Svelte 4 Props - Svelte Awesome Icons';
const description = 'Svelte 4 Props for Svelte Awesome Icons';
const image = 'https://open-graph-vercel.vercel.app/api/runes-webkit';

export const load = () => {
  const pageMetaTags: MetaProps = {
    title,
    description,
    og: {
      title,
      description,
      image
    },
    twitter: {
      title,
      description,
      image
    }
  };
  return { pageMetaTags };
};
