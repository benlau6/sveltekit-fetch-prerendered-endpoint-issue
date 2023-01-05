<p>Failure pages will fail at first, but it will work after refreshing</p>

<p>Success pages always work</p>

<h4>
  They are using the same prerendered endpoint, but with different methods
</h4>

<h4>Methods that always work</h4>
<ul>
  <li>+page.js</li>
  <li>+page.server.js with native fetch and url.origin</li>
</ul>

<h4>Methods that does not work</h4>
<ul>
  <li>+page.server.js with sveltekit fetch</li>
  <li>+page.server.js with sveltekit fetch and url.origin</li>
</ul>

<h4>Error message:</h4>
<pre>
  500

  Internal Error

  Error: Not found: /api/something
  at resolve (file:///Users/benyp/bull_butler/sveltekit-fetch-prerendered-endpoint-issue/.svelte-kit/output/server/index.js:3095:18)
  at resolve (file:///Users/benyp/bull_butler/sveltekit-fetch-prerendered-endpoint-issue/.svelte-kit/output/server/index.js:2982:34)
  at options.hooks.handle (file:///Users/benyp/bull_butler/sveltekit-fetch-prerendered-endpoint-issue/.svelte-kit/output/server/index.js:3217:59)
  at respond (file:///Users/benyp/bull_butler/sveltekit-fetch-prerendered-endpoint-issue/.svelte-kit/output/server/index.js:2980:42)
  at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
  at async fetch (file:///Users/benyp/bull_butler/sveltekit-fetch-prerendered-endpoint-issue/.svelte-kit/output/server/index.js:2785:20)
  at async file:///Users/benyp/bull_butler/sveltekit-fetch-prerendered-endpoint-issue/.svelte-kit/output/server/index.js:2714:12
  at async load (file:///Users/benyp/bull_butler/sveltekit-fetch-prerendered-endpoint-issue/.svelte-kit/output/server/entries/pages/failure/1/_page.server.js:2:15)
  at async load_server_data (file:///Users/benyp/bull_butler/sveltekit-fetch-prerendered-endpoint-issue/.svelte-kit/output/server/index.js:921:18)
SyntaxError: Unexpected token  in JSON at position 0
  at JSON.parse (anonymous)
  at packageData (/Users/benyp/bull_butler/sveltekit-fetch-prerendered-endpoint-issue/node_modules/.pnpm/undici@5.14.0/node_modules/undici/lib/fetch/body.js:553:19)
  at specConsumeBody (/Users/benyp/bull_butler/sveltekit-fetch-prerendered-endpoint-issue/node_modules/.pnpm/undici@5.14.0/node_modules/undici/lib/fetch/body.js:517:10)
  at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
  at async load (file:///Users/benyp/bull_butler/sveltekit-fetch-prerendered-endpoint-issue/.svelte-kit/output/server/entries/pages/failure/1/_page.server.js:3:16)
  at async load_server_data (file:///Users/benyp/bull_butler/sveltekit-fetch-prerendered-endpoint-issue/.svelte-kit/output/server/index.js:921:18)
  at async Promise.all (index 1)
  at async render_data (file:///Users/benyp/bull_butler/sveltekit-fetch-prerendered-endpoint-issue/.svelte-kit/output/server/index.js:2194:19)
  at async resolve (file:///Users/benyp/bull_butler/sveltekit-fetch-prerendered-endpoint-issue/.svelte-kit/output/server/index.js:3067:22)
  at async respond (file:///Users/benyp/bull_butler/sveltekit-fetch-prerendered-endpoint-issue/.svelte-kit/output/server/index.js:2980:22)
</pre>
