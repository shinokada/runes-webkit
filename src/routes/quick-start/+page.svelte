<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from '$lib';
  import { List, Li, A, Tabs, TabItem } from 'svelte-5-ui-lib';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Quick Start</h1>

<H2>Installation</H2>

<HighlightCompo codeLang="ts" code={modules['./md/installation.md'] as string} />

<H2>Update the followings: </H2>

<List tag='ul'>
  <Li>package.json</Li>
  <Li>change <Code>.git</Code> directory and check if it is <Code>svelte-5-runes</Code> branch</Li>
  <Li>change <Code>.dark_bg_theme</Code> in <Code>app.pcss</Code></Li>
  <Li>change <Code>primary</Code> in <Code>tailwind.config.cjs</Code></Li>
  <Li>change <Code>CHANGELOG</Code></Li>
  <Li>tests in the tests directory</Li>
  <Li>Use global search to replace runes-webkit-starter with your package name</Li>
  <Li>Remove or change the name of three-tabs, three-tabs-sizedbytailwind, and no-tabs directories</Li>
  <Li>the default theme in utils/DynamicCodeBlockStyle.svelte</Li>
  <Li>.env.development to .env</Li>
  <Li>README file</Li>
  <Li>Remove unnecessary directories, awesome-samples, flowbite-samples, guide2, how-to-use, quick-start, supertiny-samples.</Li>
  <Li>+layout.svelte</Li>
  <Li>+layout.server.ts</Li>
  <Li>utils/Nav.svelte</Li>
</List>
