<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Toc, extract } from '$lib';

	interface Props {
		children: Snippet;
		title?: string;
		description?: string;
		keywords?: string;
		url?: string;
		image?: string;
		imageAlt?: string;
		imageWidth?: string;
		imageHeight?: string;
		creator?: string;
	}

	let { children }: Props = $props();
</script>

<main class="mx-auto w-full min-w-0 lg:pl-64">
	<div class="flex w-full">
		<div
			class="pb:12 flex max-w-3xl min-w-0 flex-col divide-y divide-gray-200 px-4 lg:px-8 lg:pb-16 xl:pb-24 2xl:ml-40 dark:divide-gray-800"
		>
			<div id="mainContent" class="pb-20">
				{@render children()}
			</div>
		</div>
		<Toc {extract} headingSelector="#mainContent > :where(h2, h3)" />
	</div>
</main>
