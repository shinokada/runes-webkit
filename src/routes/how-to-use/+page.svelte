<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from '$lib';
  // import MainLayout from '../+layout.svelte?raw'
  import { List, Li, A } from 'svelte-5-ui-lib';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Documentation</h1>

<p>This library contails following components for Svelte Runes project.</p>

<List tag='ul'>
  <Li>CodeWrapper</Li>
  <Li>DocPage</Li>
  <Li>Footer</Li>
  <Li>H2, H3</Li>
  <Li>Helper functions</Li>
  <Li>HighlightCompo</Li>
  <Li>homeCards.json</Li>
  <Li>IconPage</Li>
  <Li>OnThisPage</Li>
  <Li>Sidebar</Li>
  <Li>SupportBanner</Li>
  <Li>TechInfo</Li>
  <Li>Toc</Li>
</List>

<p>Also this repo contains examples of how to set up Nav and DynamicCodeBlockStyle.</p>
<p>Please read the following to learn how to use them.</p>

<H2>Runes Webkit Starter</H2>

<p>If you prefer to use the starter, please refer to <A href="https://github.com/shinokada/runes-webkit-starter">https://github.com/shinokada/runes-webkit-starter</A>.</p>

<H2>Installation</H2>

<HighlightCompo codeLang="ts" code={modules['./md/installation.md'] as string} />

<H2>Setting</H2>

<H3>svelte.config.js</H3>

<p>Enable <Code>compilerOptions</Code></p>:

<HighlightCompo codeLang="ts" code={modules['./md/svelte-config-js.md'] as string} />

<H3>package.json</H3>

<p>Update <Code>package.json</Code> by updating <Code>name, version</Code> and add the following and update <Code>keywords</Code> and all URLs:</p>

<HighlightCompo codeLang="ts" code={modules['./md/package-json.md'] as string} />

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

<p>Home page has <Code>SupportBanner, HomeCards, TechInfo</Code> components.</p>

<HighlightCompo codeLang="ts" code={modules['./md/home.md'] as string} />

<H2>Icon Page</H2>
<p>Icon page uses IconPage component with threeTabs and titel props.</p>

<H3>no-tabs</H3>
<HighlightCompo codeLang="ts" code={modules['./md/no-tabs.md'] as string} />
<H3>three-tabs</H3>
<HighlightCompo codeLang="ts" code={modules['./md/three-tabs.md'] as string} />
<H3>three-tabs-sizeby-tailwind</H3>
<HighlightCompo codeLang="ts" code={modules['./md/three-tabs-sizeby-tailwind.md'] as string} />

<H2>Doc Pages</H2>



<HighlightCompo codeLang="ts" code={modules['./md/metatag.md'] as string} />

<H2>Components</H2>
<HighlightCompo codeLang="ts" code={modules['./md/components.md'] as string} />
