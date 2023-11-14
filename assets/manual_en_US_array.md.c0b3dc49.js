import{_ as a,o as e,c as s,Q as n}from"./chunks/framework.7f588f2d.js";const u=JSON.parse('{"title":"Array","description":"","frontmatter":{},"headers":[],"relativePath":"manual/en_US/array.md","filePath":"manual/en_US/array.md"}'),l={name:"manual/en_US/array.md"},o=n(`<h1 id="array" tabindex="-1">Array <a class="header-anchor" href="#array" aria-label="Permalink to &quot;Array&quot;">​</a></h1><p>The bfdev array struct is defined as follows:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">struct bfdev_array {</span></span>
<span class="line"><span style="color:#e1e4e8;">    const struct bfdev_alloc *alloc;</span></span>
<span class="line"><span style="color:#e1e4e8;">    unsigned int capacity;</span></span>
<span class="line"><span style="color:#e1e4e8;">    unsigned int index;</span></span>
<span class="line"><span style="color:#e1e4e8;">    size_t cells;</span></span>
<span class="line"><span style="color:#e1e4e8;">    void *data;</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">struct bfdev_array {</span></span>
<span class="line"><span style="color:#24292e;">    const struct bfdev_alloc *alloc;</span></span>
<span class="line"><span style="color:#24292e;">    unsigned int capacity;</span></span>
<span class="line"><span style="color:#24292e;">    unsigned int index;</span></span>
<span class="line"><span style="color:#24292e;">    size_t cells;</span></span>
<span class="line"><span style="color:#24292e;">    void *data;</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><p>The elements of the array are available in the <code>data</code> field. The <code>index</code> field holds the number of elements. The <code>cells</code> field holds the size of a single element and is set when the array is initialized.</p><p>Use the <code>BFDEV_DEFINE_ARRAY(name, alloc, cells)</code> macro to define an array in a pool, and the <code>bfdev_array_init(array, alloc, cells)</code> call to initialize an array object that has already been allocated.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/* define an int array named foo using null allocator */</span></span>
<span class="line"><span style="color:#e1e4e8;">BFDEV_DEFINE_ARRAY(foo, NULL, sizeof(int));</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">/* initialize int array using null allocator */</span></span>
<span class="line"><span style="color:#e1e4e8;">struct bfdev_array bar;</span></span>
<span class="line"><span style="color:#e1e4e8;">bfdev_array_init(&amp;bar, NULL, sizeof(int));</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/* define an int array named foo using null allocator */</span></span>
<span class="line"><span style="color:#24292e;">BFDEV_DEFINE_ARRAY(foo, NULL, sizeof(int));</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/* initialize int array using null allocator */</span></span>
<span class="line"><span style="color:#24292e;">struct bfdev_array bar;</span></span>
<span class="line"><span style="color:#24292e;">bfdev_array_init(&amp;bar, NULL, sizeof(int));</span></span></code></pre></div><p>Use the following functions to additions and deletions elements to an array:</p><ul><li>bfdev_array_push(array, num) pushes n tail elements and returns pointer to the first one</li><li>bfdev_array_pop(array, num) pops n tail elements and returns pointer to the first one</li></ul><p>If the currently allocated amount of memory is not large enough to accommodate the new elements, a new block of memory is allocated and the existing elements are copied to it. The new memory block is normally twice as large as the existing one.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">int *foo, *bar;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">foo = bfdev_array_push(array, 3);</span></span>
<span class="line"><span style="color:#e1e4e8;">bar = bfdev_array_pop(array, 3);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">int *foo, *bar;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">foo = bfdev_array_push(array, 3);</span></span>
<span class="line"><span style="color:#24292e;">bar = bfdev_array_pop(array, 3);</span></span></code></pre></div>`,10),p=[o];function t(r,i,c,d,y,_){return e(),s("div",null,p)}const f=a(l,[["render",t]]);export{u as __pageData,f as default};
