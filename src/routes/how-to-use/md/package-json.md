{
  // more lines
  // update URLs, keywords, description, name, version
  "description": "Svelte icon webkit starter",
  "author": {
    "name": "Shinichi Okada",
    "email": "connect@codewithshin.com",
    "url": "https://blog.codewithshin.com"
  },
  "bugs": "https://github.com/shinokada/svelte-icon-webkit-starter/issues",
  "homepage": "https://svelte-icon-webkit-starter.codewithshin.com/",
  "license": "MIT",
  "keywords": [
    "svelte",
    "sveltekit",
    "icons",
    "svg"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/shinokada/svelte-icon-webkit-starter"
  },
  // move exports to the end
  "exports": {
		".": {
			"types": "./dist/index.d.ts",
			"svelte": "./dist/index.js"
		}
	}
}