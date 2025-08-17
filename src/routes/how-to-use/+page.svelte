<script lang="ts">
  import { HighlightCompo, Code, H1, H2 } from "$lib";
  // import MainLayout from '../+layout.svelte?raw'
  import { List, Li, A, Tabs, TabItem } from "flowbite-svelte";
  const modules = import.meta.glob("./md/*.md", {
    query: "?raw",
    import: "default",
    eager: true
  });
</script>

<H1>Documentation</H1>

<p>This library contails following components for Svelte Runes project.</p>

<Tabs>
  <TabItem open title="Features">
    <List tag="ul">
      <Li>Code block style changer</Li>
      <Li>On This Page</Li>
      <Li>Code wrapper</Li>
      <Li>HighlightCompo</Li>
      <Li>Home cards</Li>
      <Li>Icon page</Li>
      <Li>Doc page</Li>
      <Li>Footer</Li>
      <Li>Sidebar</Li>
      <Li>Support banner</Li>
      <Li>Tech info</Li>
      <Li>Toc</Li>
      <Li>Anchor</Li>
      <Li>Code</Li>
      <Li>H2, H3</Li>
      <Li>Helper functions</Li>
    </List>
  </TabItem>
  <TabItem title="Helper functions">
    <List>
      <Li>clickToCopy</Li>
      <Li>convertToKebabCase</Li>
      <Li>toDashCaseLower</Li>
      <Li>toUpperSnakeCase</Li>
      <Li>extract</Li>
      <Li>removeHyphensAndCapitalize</Li>
      <Li>filterIconsByKeyword</Li>
      <Li>filterStringKeys</Li>
      <Li>excludeItemsByKeywords</Li>
      <Li>random_tailwind_color</Li>
      <Li>random_hex_color_code</Li>
      <Li>filterByTitles</Li>
      <Li>excludeByTitle</Li>
      <Li>insertObjectToArray</Li>
      <Li>const cards</Li>
      <Li>info</Li>
      <Li>sidebarList</Li>
      <Li>sitemap.xml/+server.ts</Li>
    </List>
  </TabItem>
  <TabItem title="utils Directory">
    <List>
      <Li>highlight</Li>
      <Li>Nav</Li>
      <Li>DynamicCodeBlockStyle</Li>
    </List>
  </TabItem>
  <TabItem title="Tests">
    <List>
      <Li>guide.home.test.ts</Li>
      <Li>home.test.ts</Li>
      <Li>test.ts</Li>
    </List>
  </TabItem>
  <TabItem title="Pages">
    <List>
      <Li>Home</Li>
      <Li
        >Guide
        <List>
          <Li>Custom icons</Li>
          <Li>Global icons</Li>
          <Li
            >Svelte 4
            <List>
              <Li>Getting started</Li>
              <Li>Props</Li>
            </List>
          </Li>
          <Li
            >Svelte 5
            <List>
              <Li>Getting started</Li>
              <Li>Props</Li>
            </List>
          </Li>
        </List>
      </Li>
      <Li>How to use</Li>
    </List>
  </TabItem>
</Tabs>

<p>
  Use the <code>utils</code> and <code>+layout.svelte</code> examples how to set up Nav and DynamicCodeBlockStyle.
</p>

<H2>Runes Webkit</H2>

<p>
  If you prefer to use the starter, please refer to <A
    href="https://github.com/shinokada/runes-webkit-starter"
    >https://github.com/shinokada/runes-webkit-starter</A
  >.
</p>

<H2>Installation</H2>

<HighlightCompo
  codeLang="md"
  code={modules["./md/installation.md"] as string}
  clipboardClass="top-2"
/>

<H2>Setting</H2>

<Tabs>
  <TabItem title="package.json">
    <p>
      Update <Code>package.json</Code> by adding <Code>name, version</Code>. Add the following and
      update <Code>keywords</Code>, <Code>contributors</Code>:
    </p>
    <HighlightCompo
      codeLang="md"
      code={modules["./md/package-json.md"] as string}
      contentClass="overflow-y-scroll"
    />
  </TabItem>
  <TabItem title="vite.config.ts">
    <HighlightCompo
      codeLang="md"
      code={modules["./md/vite-config.md"] as string}
      contentClass="overflow-y-scroll"
    />
  </TabItem>
  <TabItem title="app.css">
    <p>Update <Code>src/app.css</Code></p>
    <HighlightCompo
      codeLang="ts"
      code={modules["./md/app-css.md"] as string}
      contentClass="overflow-y-scroll"
    />
  </TabItem>
</Tabs>

<H2>Layout</H2>

<p>
  Create <Code>+layout.svelte, utils/Nav.svelte, utils/DynamicCodeBlockStyle.svelte</Code> and create
  a directory named <Code>utils/highlight</Code> and add all styles to it.
</p>

<Tabs>
  <TabItem open title="+layout.svelte">
    <p>Add the following to the <Code>+layout.svelte</Code>:</p>
    <HighlightCompo
      codeLang="ts"
      code={modules["./md/main-layout.md"] as string}
      contentClass="overflow-y-scroll"
    />
  </TabItem>
  <TabItem title="Dynamic Code Block Style">
    <p>Add the following to the <Code>utils/DynamicCodeBlockStyle.svelte</Code>:</p>
    <HighlightCompo
      codeLang="ts"
      code={modules["./md/utils-dynamic-code-block-style.md"] as string}
      contentClass="overflow-y-scroll"
    />
  </TabItem>
</Tabs>

<H2>Style</H2>

<p>There are two ways to style components.</p>
<p>
  Use Developer tools to find CSS class names. It starts and ends with underscore, like <Code
    >_iconPage_div_1_</Code
  >.
</p>

<p>The first part is the abbriviation of the component name and the second part is tag name.</p>

<p>
  The props names are without underscore, like <Code>iconPage_div_1</Code>. Use the props name to
  add the styles to a component.
</p>

<p>
  Another way is to add style to the <Code>app.pcss</Code> file using a class name with underbars, like
  <Code>_iconPage_div_1_</Code>, etc.
</p>
<H2>Guide Directory Layout</H2>

<p>Add the following to the <Code>guide/+layout.svelte</Code>:</p>

<HighlightCompo
  codeLang="ts"
  code={modules["./md/guide-layout.md"] as string}
  clipboardClass="top-2"
/>

<H2>Home Page</H2>

<p>Home page has <Code>SupportBanner, HomeCards, TechInfo</Code> components.</p>

<HighlightCompo codeLang="ts" code={modules["./md/home.md"] as string} clipboardClass="top-2" />

<H2>Icon Page</H2>
<p>Icon page uses IconPage component with threeTabs and titel props.</p>

<Tabs>
  <TabItem open title="no-tabs">
    <HighlightCompo
      codeLang="ts"
      code={modules["./md/no-tabs.md"] as string}
      clipboardClass="top-2"
    />
  </TabItem>
  <TabItem title="three-tabs">
    <HighlightCompo
      codeLang="ts"
      code={modules["./md/three-tabs.md"] as string}
      clipboardClass="top-2"
    />
  </TabItem>
  <TabItem title="three-tabs-sizeby-tailwind">
    <HighlightCompo
      codeLang="ts"
      code={modules["./md/three-tabs-sizeby-tailwind.md"] as string}
      clipboardClass="top-2"
    />
  </TabItem>
</Tabs>

<H2>Tests</H2>

<p>
  Please refer to <A href="https://github.com/shinokada/runes-webkit/blob/main/tests/test.ts"
    >tests/test.ts</A
  >
</p>

<Tabs>
  <TabItem open title="+layout.server.ts">
    <HighlightCompo
      codeLang="ts"
      code={modules["./md/layout-server.md"] as string}
      contentClass="overflow-y-scroll"
    />
  </TabItem>
  <TabItem title="tests/home.test.ts">
    <HighlightCompo
      codeLang="ts"
      code={modules["./md/home-test.md"] as string}
      contentClass="overflow-y-scroll"
    />
  </TabItem>
  <TabItem title="+page.ts">
    <HighlightCompo
      codeLang="ts"
      code={modules["./md/page-ts.md"] as string}
      contentClass="overflow-y-scroll"
    />
  </TabItem>
  <TabItem title="tests/page.test.ts">
    <HighlightCompo
      codeLang="ts"
      code={modules["./md/page-test.md"] as string}
      contentClass="overflow-y-scroll"
    />
  </TabItem>
</Tabs>
