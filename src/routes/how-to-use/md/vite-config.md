import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import pkg from './package.json' assert { type: 'json' };
import sveltePackage from 'svelte/package.json' assert { type: 'json' };
import svelteKitPackage from '@sveltejs/kit/package.json' assert { type: 'json' };
import vitePackage from 'vite/package.json' assert { type: 'json' };
import svelterunehighlightPackage from 'svelte-rune-highlight/package.json' assert { type: 'json' };
import flowbiteSeltePackage from 'flowbite-svelte/package.json' assert { type: 'json' };
import runesmetatagsPackage from 'runes-meta-tags/package.json' assert { type: 'json' };
import runaticsPackage from './node_modules/runatics/package.json' assert { type: 'json' };

export default defineConfig({
plugins: [sveltekit()],
define: {
**NAME**: `"${pkg.name}"`,
**DESCRIPTION**: `"${pkg.description}"`,
**VERSION**: `"${pkg.version}"`,
**GITHUBURL**: `"${pkg.repository.url}"`,
**ORIGINAL_SOURCE_NAME**: `"${pkg.contributors[0].name}"`,
**ORIGINAL_SOURCE_URL**: `"${pkg.contributors[0].url}"`,
**RUNATICS_VERSION**: `"${runaticsPackage.version}"`,
**RUNES_METATAGS_VERSION**: `"${runesmetatagsPackage.version}"`,
**SVELTE_VERSION**: `"${sveltePackage.version}"`,
**SVELTEKIT_VERSION**: `"${svelteKitPackage.version}"`,
**SVELTE_RUNE_HIGHLIGHT_VERSION**: `"${svelterunehighlightPackage.version}"`,
**FLOWBITE_SVELTE_VERSION**: `"${flowbiteSeltePackage.version}"`,
**VITE_VERSION**: `"${vitePackage.version}"`,
},
});
