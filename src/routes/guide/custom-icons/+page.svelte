<script lang="ts">
	import { HighlightCompo, Code, H1, H2 } from '$lib';

	const modules = import.meta.glob('./md/*.md', {
		query: '?raw',
		import: 'default',
		eager: true
	});
</script>

<H1>Custom icons - Runes Webkit</H1>

<p>If you wish to create a custom default icon, you can follow these steps:</p>

<H2>Create a custom component</H2>

<p>Create a Svelte component named <Code>src/lib/MyIcon.svelte</Code>:</p>

<HighlightCompo codeLang="ts" code={modules['./md/create-a-custom-component.md'] as string} />

<p>
	This component, <Code>MyIcon.svelte</Code>, accepts an <Code>icon</Code> prop which you can use to
	pass in the specific icon component you want to display. The default configuration is also applied
	to the icon.
</p>

<H2>Implementation</H2>

<p>To use your custom default icon in a Svelte page, do the following:</p>

<HighlightCompo codeLang="ts" code={modules['./md/implementation.md'] as string} />

<p>
	Here, we import the <Code>MyIcon</Code> component and the <Code>Accessibility</Code> icon. By passing
	the <Code>Accessibility</Code> icon to the <Code>icon</Code> prop of MyIcon, you apply the default
	configuration to the icon.
</p>
