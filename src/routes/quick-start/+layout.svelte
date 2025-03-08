<script lang="ts">
	import { DocPage } from '$lib';
	import type { Snippet } from 'svelte';
	interface Props {
		children: Snippet;
	}
	let { children }: Props = $props();
</script>

<DocPage mainClass="lg:pl-64">
	{@render children()}
</DocPage>
