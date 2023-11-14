import{_ as l,o as a,c as s,Q as e}from"./chunks/framework.7f588f2d.js";const y=JSON.parse('{"title":"Allocpool","description":"","frontmatter":{},"headers":[],"relativePath":"manual/en_US/allocpool.md","filePath":"manual/en_US/allocpool.md"}'),o={name:"manual/en_US/allocpool.md"},n=e(`<h1 id="allocpool" tabindex="-1">Allocpool <a class="header-anchor" href="#allocpool" aria-label="Permalink to &quot;Allocpool&quot;">​</a></h1><p>In bfdev allocpool is a mempool optimized for allocation, the struct is defined as follows:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">struct bfdev_allocpool {</span></span>
<span class="line"><span style="color:#e1e4e8;">    void *block;</span></span>
<span class="line"><span style="color:#e1e4e8;">    size_t size;</span></span>
<span class="line"><span style="color:#e1e4e8;">    uintptr_t last;</span></span>
<span class="line"><span style="color:#e1e4e8;">    unsigned long count;</span></span>
<span class="line"><span style="color:#e1e4e8;">};</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">struct bfdev_allocpool {</span></span>
<span class="line"><span style="color:#24292e;">    void *block;</span></span>
<span class="line"><span style="color:#24292e;">    size_t size;</span></span>
<span class="line"><span style="color:#24292e;">    uintptr_t last;</span></span>
<span class="line"><span style="color:#24292e;">    unsigned long count;</span></span>
<span class="line"><span style="color:#24292e;">};</span></span></code></pre></div><p>The memory of the allocpool are available in the <code>block</code> field. The <code>last</code> field holds the current offset of memory. The <code>count</code> field holds the number of allocation.</p><p>Use the <code>BFDEV_DEFINE_ALLOCPOOL(name, memory, size)</code> macro to define an allocpool, and the <code>bfdev_allocpool_init(allocpool, memory, size)</code> call to initialize an allocpool object that has already been allocated.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/* define an int allocpool named foo using static array */</span></span>
<span class="line"><span style="color:#e1e4e8;">static char block[4096];</span></span>
<span class="line"><span style="color:#e1e4e8;">BFDEV_DEFINE_ALLOCPOOL(foo, block, sizeof(block));</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">/* initialize int allocpool named bar using malloc */</span></span>
<span class="line"><span style="color:#e1e4e8;">struct bfdev_allocpool *bar;</span></span>
<span class="line"><span style="color:#e1e4e8;">void *block;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">block = malloc(4096);</span></span>
<span class="line"><span style="color:#e1e4e8;">bar = bfdev_allocpool_init(&amp;bar, block, 4096);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/* define an int allocpool named foo using static array */</span></span>
<span class="line"><span style="color:#24292e;">static char block[4096];</span></span>
<span class="line"><span style="color:#24292e;">BFDEV_DEFINE_ALLOCPOOL(foo, block, sizeof(block));</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">/* initialize int allocpool named bar using malloc */</span></span>
<span class="line"><span style="color:#24292e;">struct bfdev_allocpool *bar;</span></span>
<span class="line"><span style="color:#24292e;">void *block;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">block = malloc(4096);</span></span>
<span class="line"><span style="color:#24292e;">bar = bfdev_allocpool_init(&amp;bar, block, 4096);</span></span></code></pre></div><p>Use the following functions to alloc and free in an allocpool:</p><ul><li>bfdev_allocpool_alloc(allocpool, size, align) allocate an aligned memory block</li><li>bfdev_allocpool_free(allocpool, block) release any block of memory</li></ul><p>The space occupied by the allocation pool grows linearly, free function will only release a reference count. When there are zero references, the space will be released uniformly.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">int *foo;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">foo = bfdev_allocpool_alloc(allocpool, 4, 0);</span></span>
<span class="line"><span style="color:#e1e4e8;">bfdev_allocpool_free(allocpool, foo);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">int *foo;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">foo = bfdev_allocpool_alloc(allocpool, 4, 0);</span></span>
<span class="line"><span style="color:#24292e;">bfdev_allocpool_free(allocpool, foo);</span></span></code></pre></div>`,10),p=[n];function c(t,i,r,d,_,f){return a(),s("div",null,p)}const h=l(o,[["render",c]]);export{y as __pageData,h as default};
