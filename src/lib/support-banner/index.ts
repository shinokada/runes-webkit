import SupportBanner from './SupportBanner.svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { supportBanner } from './theme';

interface SupportBannerProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  pClass?: string | undefined;
}

export { SupportBanner, supportBanner, type SupportBannerProps }