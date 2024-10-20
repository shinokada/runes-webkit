import SupportBanner from './SupportBanner.svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { supportBanner } from './theme';
import type { BannerProps } from 'svelte-5-ui-lib';

interface SupportBannerProps extends BannerProps {
  children: Snippet;
  pClass?: string | undefined;
}

export { SupportBanner, supportBanner, type SupportBannerProps };
