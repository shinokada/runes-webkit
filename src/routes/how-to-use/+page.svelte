<script lang="ts">
  import { HighlightCompo, CodeWrapper, Code, H2, H3 } from '$lib';
  // import MainLayout from '../+layout.svelte?raw'
  import { List, Li, A, Tabs, TabItem } from 'svelte-5-ui-lib';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Documentation</h1>

<p>This library contails following components for Svelte Runes project.</p>

<Tabs>
  <TabItem open title="Components">
    <List tag='ul'>
      <Li>Anchor</Li>
      <Li>Code</Li>
      <Li>CodeWrapper</Li>
      <Li>DocPage</Li>
      <Li>Footer</Li>
      <Li>H2, H3</Li>
      <Li>Helper functions</Li>
      <Li>HighlightCompo</Li>
      <Li>homeCards.json</Li>
      <Li>HomeCards</Li>
      <Li>IconPage</Li>
      <Li>OnThisPage</Li>
      <Li>Sidebar</Li>
      <Li>SupportBanner</Li>
      <Li>TechInfo</Li>
      <Li>Toc</Li>
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
      <Li>test.ts</Li>
    </List>
  </TabItem>
  <TabItem title='Pages'>
    <List>
      <Li>Home</Li>
      <Li>Guide
        <List>
          <Li>Custom icons</Li>
          <Li>Global icons</Li>
          <Li>Svelte 4
            <List>
              <Li>Getting started</Li>
              <Li>Props</Li>
            </List>
          </Li>
          <Li>Svelte 5
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


<p>Use the <code>utils</code> and <code>+layout.svelte</code> examples how to set up Nav and DynamicCodeBlockStyle.</p>

<H2>Runes Webkit Starter</H2>

<p>If you prefer to use the starter, please refer to <A href="https://github.com/shinokada/runes-webkit-starter">https://github.com/shinokada/runes-webkit-starter</A>.</p>

<H2>Installation</H2>

<HighlightCompo codeLang="ts" code={modules['./md/installation.md'] as string} />

<H2>Setting</H2>

<Tabs>
  <TabItem open title="svelte.config.js">
    <p>Enable <Code>compilerOptions</Code></p>:
    <HighlightCompo codeLang="ts" code={modules['./md/svelte-config-js.md'] as string} />
  </TabItem>
  <TabItem title="package.json">
    <p>Update <Code>package.json</Code> by updating <Code>name, version</Code> and add the following and update <Code>keywords</Code>, <Code>contributors</Code>  that is the original author, and all URLs:</p>
    <HighlightCompo codeLang="ts" code={modules['./md/package-json.md'] as string} />
  </TabItem>
  <TabItem title="vite.config.ts">
    <HighlightCompo codeLang="ts" code={modules['./md/vite-config.md'] as string} />
  </TabItem>
  <TabItem title="runeswebkit.css">
    <p>Import <Code>runeswebkit.css</Code> in the <Code>app.postcss</Code> or <Code>app.pcss</Code> file. To overwrite the default style, add your style in the <Code>app.postcss</Code> or <Code>app.pcss</Code> file.</p>
    <HighlightCompo codeLang="ts" code={modules['./md/app-pcss.md'] as string} />
  </TabItem>
  <TabItem title='tailwind.config.cjs'>
    <p>Update <Code>tailwindcss.config.cjs</Code></p>
    <p>Check more primary colors at <A href='https://github.com/shinokada/runes-webkit/blob/main/tailwind.config.cjs'>here</A>.</p>

    <HighlightCompo codeLang="ts" code={modules['./md/tailwind-config.md'] as string} />
  </TabItem>
</Tabs>





<H2>Layout</H2>

<p>Create <Code>+layout.svelte, utils/Nav.svelte, utils/DynamicCodeBlockStyle.svelte</Code> and create a directory named <Code>utils/highlight</Code> and add all styles to it.</p>

<Tabs>
  <TabItem open title="+layout.svelte">
    <p>Add the following to the <Code>+layout.svelte</Code>:</p>
    <HighlightCompo codeLang="ts" code={modules['./md/main-layout.md'] as string} />
  </TabItem>
  <TabItem title="Nav.svelte">
    <p>Add the following to the <Code>utils/Nav.svelte</Code>:</p>
    <HighlightCompo codeLang="ts" code={modules['./md/utils-nav.md'] as string} />
  </TabItem>
  <TabItem title="Dynamic Code Block Style">
    <p>Add the following to the <Code>utils/DynamicCodeBlockStyle.svelte</Code>:</p>
    <HighlightCompo codeLang="ts" code={modules['./md/utils-dynamic-code-block-style.md'] as string} />
  </TabItem>
</Tabs>


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

<H2>Tests</H2>

<p>Please refer to <A href='https://github.com/shinokada/runes-webkit/blob/main/tests/test.ts'>tests/test.ts</A></p>