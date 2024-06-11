import type { MetaProps } from 'runes-meta-tags';

const title = 'Setting Global Icon - Runes Webkit'
const description = 'How to create a global icon using setContext with Runes Webkit'
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-heros'

export const load = ({ url }) => {
  const pageMetaTags: MetaProps = {
    title,
    description,
    og: {
      title,
      description,
      image: imgUrl,
      url: url.href
    },
    twitter: {
      title,
      description,
      image: imgUrl
    }
  };
  return { pageMetaTags };
};