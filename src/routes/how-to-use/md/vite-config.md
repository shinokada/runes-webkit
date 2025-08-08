import tailwindcss from '@tailwindcss/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import pkg from './package.json' with { type: 'json' };
import sveltePackage from './node_modules/svelte/package.json' with { type: 'json' };
import svelteKitPackage from './node_modules/@sveltejs/kit/package.json' with { type: 'json' };
import vitePackage from './node_modules/vite/package.json' with { type: 'json' };
import svelterunehighlightPackage from './node_modules/svelte-rune-highlight/package.json' with { type: 'json' };
import runesmetatagsPackage from './node_modules/runes-meta-tags/package.json' with { type: 'json' };
import runaticsPackage from './node_modules/runatics/package.json' with { type: 'json' };

export default defineConfig({
plugins: [sveltekit(), tailwindcss()],
define: {
**NAME**: JSON.stringify(pkg.name),
**DESCRIPTION**: JSON.stringify(pkg.description),
**VERSION**: JSON.stringify(pkg.version),
**GITHUBURL**: JSON.stringify(pkg.repository.url),
**ORIGINAL_SOURCE_NAME**: JSON.stringify(pkg.contributors[0].name),
**ORIGINAL_SOURCE_URL**: JSON.stringify(pkg.contributors[0].url),
**RUNATICS_VERSION**: JSON.stringify(runaticsPackage.version),
**RUNES_METATAGS_VERSION**: JSON.stringify(runesmetatagsPackage.version),
**SVELTE_VERSION**: JSON.stringify(sveltePackage.version),
**SVELTEKIT_VERSION**: JSON.stringify(svelteKitPackage.version),
**SVELTE_RUNE_HIGHLIGHT_VERSION**: JSON.stringify(svelterunehighlightPackage.version),
**VITE_VERSION**: JSON.stringify(vitePackage.version)
},
test: {
workspace: [
{
extends: './vite.config.ts',
plugins: [svelteTesting()],

    			test: {
    				name: 'client',
    				environment: 'jsdom',
    				clearMocks: true,
    				include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
    				exclude: ['src/lib/server/**'],
    				setupFiles: ['./vitest-setup-client.ts']
    			}
    		},
    		{
    			extends: './vite.config.ts',

    			test: {
    				name: 'server',
    				environment: 'node',
    				include: ['src/**/*.{test,spec}.{js,ts}'],
    				exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
    			}
    		}
    	]
    }

});
