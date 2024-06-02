import type { MetaProps } from 'runes-meta-tags';
import { ANALYTICS_ID } from '$env/static/private';
import { metaTitle, metaDescription, metaImg } from 'runes-meta-tags';

export const load = ({ url }) => {
  const siteName = 'Runes Webkit';
  const title = 'Runes Webkit';
  const basicDesc = 'A quick start for a Svelte Runes project.';
  const description = 'A collection of reusable Svelte components for building user interfaces for Runes';
  const image = 'https://open-graph-vercel.vercel.app/api/runes-webkit';
  const keywords = 'svelte, runes, webkit, ui, components';

  const layoutMetaTags: MetaProps = {
    title,
    description,
    keywords,
    twitter: {
      card: 'summary_large_image',
      site: '@shinokada',
      handle: '@shinokada',
      title,
      description,
      image,
      imageAlt: title
    },
    og: {
      type: 'website',
      title,
      description,
      url: url.href,
      image,
      imageAlt: title,
      siteName,
      imageWidth: '1200',
      imageHeight: '630'
    }
  };
  return {
    layoutMetaTags,
    ANALYTICS_ID
  };
};
