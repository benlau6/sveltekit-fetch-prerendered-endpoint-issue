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
