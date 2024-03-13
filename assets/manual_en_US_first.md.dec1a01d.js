import{_ as s,o as a,c as l,Q as n}from"./chunks/framework.4298ed76.js";const _=JSON.parse('{"title":"First project","description":"","frontmatter":{},"headers":[],"relativePath":"manual/en_US/first.md","filePath":"manual/en_US/first.md"}'),o={name:"manual/en_US/first.md"},p=n(`<h1 id="first-project" tabindex="-1">First project <a class="header-anchor" href="#first-project" aria-label="Permalink to &quot;First project&quot;">​</a></h1><p>Let&#39;s create the first bfdev based project:</p><div class="language-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">#include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;bfdev.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">main</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">int</span><span style="color:#E1E4E8;"> </span><span style="color:#FFAB70;">argc</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">char</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#FFAB70;">argv</span><span style="color:#F97583;">[]</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">bfdev_log_info</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;helloworld</span><span style="color:#79B8FF;">\\n</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">#include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;bfdev.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">int</span><span style="color:#24292E;"> </span><span style="color:#E36209;">argc</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">char</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#E36209;">argv</span><span style="color:#D73A49;">[]</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">bfdev_log_info</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;helloworld</span><span style="color:#005CC5;">\\n</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>If bfdev is installed on user&#39;s local, we first need to set the environment variables, you can also add it to bashrc:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> C_INCLUDE_PATH</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">$C_INCLUDE_PATH</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;">$HOME</span><span style="color:#9ECBFF;">/.local/include</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> CPLUS_INCLUDE_PATH</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">$CPLUS_INCLUDE_PATH</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;">$HOME</span><span style="color:#9ECBFF;">/.local/include</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> LIBRARY_PATH</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">$LIBRARY_PATH</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;">$HOME</span><span style="color:#9ECBFF;">/.local/lib:</span><span style="color:#E1E4E8;">$HOME</span><span style="color:#9ECBFF;">/.local/lib64</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> LD_LIBRARY_PATH</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">$LD_LIBRARY_PATH</span><span style="color:#9ECBFF;">:</span><span style="color:#E1E4E8;">$HOME</span><span style="color:#9ECBFF;">/.local/lib:</span><span style="color:#E1E4E8;">$HOME</span><span style="color:#9ECBFF;">/.local/lib64</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> C_INCLUDE_PATH</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">$C_INCLUDE_PATH</span><span style="color:#032F62;">:</span><span style="color:#24292E;">$HOME</span><span style="color:#032F62;">/.local/include</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> CPLUS_INCLUDE_PATH</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">$CPLUS_INCLUDE_PATH</span><span style="color:#032F62;">:</span><span style="color:#24292E;">$HOME</span><span style="color:#032F62;">/.local/include</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> LIBRARY_PATH</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">$LIBRARY_PATH</span><span style="color:#032F62;">:</span><span style="color:#24292E;">$HOME</span><span style="color:#032F62;">/.local/lib:</span><span style="color:#24292E;">$HOME</span><span style="color:#032F62;">/.local/lib64</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> LD_LIBRARY_PATH</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">$LD_LIBRARY_PATH</span><span style="color:#032F62;">:</span><span style="color:#24292E;">$HOME</span><span style="color:#032F62;">/.local/lib:</span><span style="color:#24292E;">$HOME</span><span style="color:#032F62;">/.local/lib64</span></span></code></pre></div><p>Then we compile and run it:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># gcc -lbfdev -o helloworld helloworld.c</span></span>
<span class="line"><span style="color:#e1e4e8;"># ./helloworld</span></span>
<span class="line"><span style="color:#e1e4e8;">[info] helloworld</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># gcc -lbfdev -o helloworld helloworld.c</span></span>
<span class="line"><span style="color:#24292e;"># ./helloworld</span></span>
<span class="line"><span style="color:#24292e;">[info] helloworld</span></span></code></pre></div>`,7),e=[p];function c(t,r,E,y,i,d){return a(),l("div",null,e)}const h=s(o,[["render",c]]);export{_ as __pageData,h as default};