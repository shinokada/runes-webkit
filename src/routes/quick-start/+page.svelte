<script lang="ts">
  import { HighlightCompo, Code, H1, H2 } from "$lib";
  import { List, Li, Checkbox } from "flowbite-svelte";
  const modules = import.meta.glob("./md/*.md", {
    query: "?raw",
    import: "default",
    eager: true
  });
</script>

<H1>Quick Start</H1>

<H2>Installation</H2>

<HighlightCompo codeLang="ts" code={modules["./md/installation.md"] as string} clipboardClass="top-2" />

<H2>Update the followings:</H2>

<List tag="dl" ctxClass="my-1">
  <Li><Checkbox inline /><Code>.changeset/config.json</Code></Li>
  <Li><Checkbox inline />Run <Code>npx changeset pre enter next</Code> to enter prerelease mode</Li>
  <Li><Checkbox inline />package.json</Li>
  <Li
    ><Checkbox inline />change <Code>.git</Code> directory and check if it is <Code
      >svelte-5-runes</Code
    > branch</Li
  >
  <Li><Checkbox inline /><Code>.dark_bg_theme</Code> in <Code>app.pcss</Code></Li>
  <Li><Checkbox inline /><Code>primary</Code> in <Code>tailwind.config.cjs</Code></Li>
  <Li><Checkbox inline /><Code>CHANGELOG</Code></Li>
  <Li><Checkbox inline />tests in the tests directory</Li>
  <Li
    ><Checkbox inline />Use global search to replace runes-webkit-starter with your package name</Li
  >
  <Li
    ><Checkbox inline />Remove or change the name of three-tabs, three-tabs-sizedbytailwind, and
    no-tabs directories</Li
  >
  <Li><Checkbox inline />the default theme in utils/DynamicCodeBlockStyle.svelte</Li>
  <Li><Checkbox inline />.env.development to .env</Li>
  <Li><Checkbox inline />README file</Li>
  <Li
    ><Checkbox inline />Remove unnecessary directories, awesome-samples, flowbite-samples, guide2,
    how-to-use, quick-start, supertiny-samples.</Li
  >
  <Li><Checkbox inline />const lis, const urlsToIncludeSwitcherAndSidebar in +layout.svelte</Li>
  <Li><Checkbox inline />+layout.server.ts</Li>
  <Li><Checkbox inline />utils/Nav.svelte</Li>
  <Li><Checkbox inline />sitemap.xml/+server.ts</Li>
  <Li><Checkbox inline />Change localhost:4173 to url in all the test files</Li>
</List>
