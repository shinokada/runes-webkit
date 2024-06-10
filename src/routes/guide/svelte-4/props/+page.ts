import type { MetaProps } from 'runes-meta-tags';

const title = 'Props - Svelte Remix v1'
const description = 'How to use Svelte Remix v1 props'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-remix'
const ogUrl = 'http://localhost:4173/guide/svelte-4/props'

export const load = () => {
  const pageMetaTags: MetaProps = {
    title,
    description,
    og: {
      title,
      description,
      image: imgUrl,
      url: ogUrl
    },
    twitter: {
      title,
      description,
      image: imgUrl
    }
  };
  return { pageMetaTags };
};
