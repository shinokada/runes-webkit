<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from '$lib';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Documentation</h1>

<p>This library contails components for 29 Svelte SVG Icon sets websites. However these components can be used in any Svelte project.</p>

<H2>Installation</H2>

<HighlightCompo codeLang="ts" code={modules['./md/installation.md'] as string} />

<H2>Setting</H2>

<H3>vite.config.ts</H3>

<HighlightCompo codeLang="ts" code={modules['./md/vite-config.md'] as string} />

<H3>dark_bg_theme</H3>

<p>Set <Code>dark_bg_theme</Code> in the <Code>app.postcss</Code> or <Code>app.pcss</Code> file.</p>

<HighlightCompo codeLang="ts" code={modules['./md/app-pcss.md'] as string} />


<H3>tailwind.config.cjs</H3>
<p>Update <Code>tailwindcss.config.cjs</Code></p>

<HighlightCompo codeLang="ts" code={modules['./md/tailwind-config.md'] as string} />

<H2>Main Layout</H2>

<p>Create <Code>+layout.svelte, utils/Nav.svelte, utils/DynamicCodeBlockStyle.svelte</Code> and create a directory named <Code>utils/highlight</Code> and add all styles to it.</p>

<H3>+layout.svelte</H3>
<HighlightCompo codeLang="ts" code={modules['./md/main-layout.md'] as string} />

<H3>utils/Nav.svelte</H3>
<HighlightCompo codeLang="ts" code={modules['./md/utils-nav.md'] as string} />

<H3>utils/DynamicCodeBlockStyle.svelte</H3>
<HighlightCompo codeLang="ts" code={modules['./md/utils-dynamic-code-block-style.md'] as string} />

<H2>Guide Directory Layout</H2>

<p>Add the following to the <Code>guide/+layout.svelte</Code>:</p>

<HighlightCompo codeLang="ts" code={modules['./md/guide-layout.md'] as string} />

<H2>Home Page</H2>

<p>Home page has <Code>SupportBanner, MetaTag, HomeCards, TechInfo</Code> components.</p>

<HighlightCompo codeLang="ts" code={modules['./md/home-page.md'] as string} />

<H2>Icon Page</H2>
<p>Icon page uses IconPage component with threeTabs and titel props.</p>
<HighlightCompo codeLang="ts" code={modules['./md/icon-page.md'] as string} />


<H2>Doc Pages</H2>


<H2>MetaTag</H2>

<p>Extend the <Code>MetaTag</Code> component with <Code>title</Code> and <Code>image</Code> props, then use it in <Code>+page.svelte</Code>.</p>

<HighlightCompo codeLang="ts" code={modules['./md/metatag.md'] as string} />

<H2>Components</H2>
<HighlightCompo codeLang="ts" code={modules['./md/components.md'] as string} />