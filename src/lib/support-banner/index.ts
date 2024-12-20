import SupportBanner from './SupportBanner.svelte';
import type { Snippet } from 'svelte';
import { supportBanner } from './theme';
import type { BannerProps } from 'flowbite-svelte';

interface SupportBannerProps extends BannerProps {
  children: Snippet;
  pClass?: string | undefined;
}

export { SupportBanner, supportBanner, type SupportBannerProps };
