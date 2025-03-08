import { tv } from 'tailwind-variants';

export const supportBanner = tv({
	slots: {
		base: 'max-w-3xl mt-8 mx-auto p-2',
		paragraph: 'flex items-center gap-4 text-lg font-normal text-gray-900 dark:text-gray-100'
	}
});
