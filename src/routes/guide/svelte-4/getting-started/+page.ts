import type { MetaProps } from 'runes-meta-tags';
const title = 'Getting Started - Runes Webkit';
const description = 'Getting Started - Runes Webkit';
const image = 'https://open-graph-vercel.vercel.app/api/runes-webkit';
const ogUrl = 'http://localhost:4173/guide/svelte-4/getting-started'

export const load = () => {
  const pageMetaTags: MetaProps = {
    title,
    description,
    og: {
      title,
      description,
      url: ogUrl,
      image
    },
    twitter: {
      description,
      title,
      image
    }
  };
  return { pageMetaTags };
};
