import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import pkg from './package.json' assert { type: 'json' };
import sveltePackage from './node_modules/svelte/package.json' assert { type: 'json' };
import svelteKitPackage from './node_modules/@sveltejs/kit/package.json' assert { type: 'json' };
import vitePackage from './node_modules/vite/package.json' assert { type: 'json' };
import svelterunehighlightPackage from './node_modules/svelte-rune-highlight/package.json' assert { type: 'json' };
import svelte5uilibPackage from './node_modules/svelte-5-ui-lib/package.json' assert { type: 'json' };


export default defineConfig({
  plugins: [sveltekit()],
  define: {
		__NAME__: `"${pkg.name}"`,
		__VERSION__: `"${pkg.version}"`,
		__GITHUBURL__: `"${pkg.repository.url}"`,
		__SVELTE_VERSION__: `"${sveltePackage.version}"`,
		__SVELTEKIT_VERSION__: `"${svelteKitPackage.version}"`,
		__VITE_VERSION__: `"${vitePackage.version}"`,
		__SVELTE_RUNE_HIGHLIGHT_VERSION__: `"${svelterunehighlightPackage.version}"`,
		__SVELTE_5_UI_LIB_VERSION__: `"${svelte5uilibPackage.version}"`,
	},
});
