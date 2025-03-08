import type { MetaProps } from 'runes-meta-tags';

const title = 'Props - Runes Webkit v1';
const description = 'How to use Runes Webkit v1 props';
const imgUrl = 'https://open-graph-vercel.vercel.app/api/svelte-heros';

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
