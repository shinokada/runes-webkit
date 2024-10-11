import { tv } from 'tailwind-variants';

export const code = tv({
  base: 'text-primary-700 dark:text-primary-400'
});

export const codewrapper = tv({
  slots: {
    base: 'max-w-4xl rounded-md border border-gray-200 bg-white bg-gradient-to-r dark:border-gray-600 dark:bg-gray-950',
    inner: 'p-6'
  }
});
