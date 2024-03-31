
<script lang="ts">
  import { HighlightCompo, CodeWrapper } from '$lib';
  import { AddressBookOutline } from '../../flowbite-samples';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Svelte Awesome Icons: v1</h1>

<div class="flex gap-2 my-8">
<a href="https://github.com/sponsors/shinokada" target="_blank"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="sponsor" ></a>
<a href="https://www.npmjs.com/package/svelte-awesome-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/v/svelte-awesome-icons" alt="npm" ></a>
<a href="https://opensource.org/licenses/MIT" rel="nofollow" target="_blank"><img src="https://img.shields.io/github/license/shinokada/svelte-awesome-icons" alt="License" ></a>
<a href="https://www.npmjs.com/package/svelte-awesome-icons" rel="nofollow" target="_blank"><img src="https://img.shields.io/npm/dw/svelte-awesome-icons.svg" alt="npm" ></a>
</div>

<h2>Requirements</h2>

<HighlightCompo codeLang="ts" code={modules['./md/requirement.md'] as string} />


<h2>Installation</h2>

<p>Install Svelte and TailwindCSS:</p>

<HighlightCompo codeLang="ts" code={modules['./md/installation.md'] as string} />


<h2>Basic Usage</h2>

<p>In a svelte file:</p>

<HighlightCompo codeLang="ts" code={modules['./md/basic-usage.md'] as string} />


<h2>A11y friendly</h2>

<p>Use `title`, `desc`, and `ariaLabel` props to make your icons accessible.</p>

<HighlightCompo codeLang="ts" code={modules['./md/a11y-friendly.md'] as string} />


<p>Check out this icon in the console:</p>

<CodeWrapper>
  <AddressBookOutline
  title={{ id: 'my-title', title: 'Red bell' }}
  desc={{ id: 'my-descrip', desc: 'The shape of a red bell' }}
  ariaLabel="red bell"
  color="red"
  />
</CodeWrapper>

<h2>Faster compiling</h2>

<p>If you need only a few icons from this library in your Svelte app, import them directly. This can optimize compilation speed and improve performance by reducing the amount of code processed during compilation.</p>

<HighlightCompo codeLang="ts" code={modules['./md/faster-compiling.md'] as string} />


<h2>Passing down other attributes</h2>

<p>Since all icons have "...$$restProps", you can pass other attibutes as well.</p>

<HighlightCompo codeLang="ts" code={modules['./md/passing-down-other-attributes.md'] as string} />


<h2>Using svelte:component</h2>

<HighlightCompo codeLang="ts" code={modules['./md/using-svelte-component.md'] as string} />

<h2>Using onMount</h2>
<HighlightCompo codeLang="ts" code={modules['./md/using-onmount.md'] as string} />


<h2>Import all</h2>

<p>Use `import * as Icon from 'svelte-awesome-icons`.</p>

<HighlightCompo codeLang="ts" code={modules['./md/import-all.md'] as string} />
