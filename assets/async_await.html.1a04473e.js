import{_ as n,o as s,c as a,e as t}from"./app.a35418cc.js";const e={},p=t(`<h1 id="async-await" tabindex="-1"><a class="header-anchor" href="#async-await" aria-hidden="true">#</a> async &amp; await</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p><code>async</code> \u51FD\u6570\u662F ES8 \u5F15\u5165\u7684\u65B0\u7279\u6027\uFF0C\u4E3B\u8981\u76EE\u7684\u662F\u4E3A\u4E86\u7B80\u5316\u4F7F\u7528 <code>Promise</code> \u5BF9\u8C61\u65F6\u7684\u8BED\u6CD5\u3002</p><p>\u4F7F\u7528 <code>async</code> \u548C <code>await</code> \u53EF\u4EE5\u66F4\u7B80\u6D01\u7684\u5199\u51FA\u57FA\u4E8E <code>Promise</code> \u5BF9\u8C61\u7684\u5F02\u6B65\u884C\u4E3A\uFF0C\u800C\u65E0\u9700\u523B\u610F\u5730\u94FE\u5F0F\u8C03\u7528 <code>Promise</code> \u5BF9\u8C61\u3002\u53EF\u4EE5<strong>\u7528\u540C\u6B65\u7684\u5199\u6CD5\u5199\u5F02\u6B65\u7684\u4EE3\u7801</strong>\u3002</p><br><h2 id="_2-async" tabindex="-1"><a class="header-anchor" href="#_2-async" aria-hidden="true">#</a> 2. async</h2><p><code>async</code> \u51FD\u6570\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A <code>Promise</code> \u5BF9\u8C61\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>then</code> \u65B9\u6CD5\u6DFB\u52A0\u56DE\u8C03\u51FD\u6570\u3002</p><blockquote><p>\u53EA\u8981\u4F7F\u7528 <code>async</code>\uFF0C\u4E0D\u7BA1\u51FD\u6570\u5185\u90E8\u8FD4\u56DE\u7684\u662F\u4EC0\u4E48\u7C7B\u578B\u7684\u6570\u636E\uFF0C\u90FD\u4F1A\u88AB\u5305\u88C5\u6210 <code>Promise</code> \u5BF9\u8C61\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">helloAsync</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;helloAsync&#39;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">helloAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// Promise {&lt;fulfilled&gt;: &#39;helloAsync&#39;}</span>

<span class="token function">helloAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">// helloAsync</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_3-await" tabindex="-1"><a class="header-anchor" href="#_3-await" aria-hidden="true">#</a> 3. await</h2><p><code>await</code> \u7528\u4E8E\u7B49\u5F85\u53F3\u4FA7\u8868\u8FBE\u5F0F\u7684\u7ED3\u679C\uFF0C\u4E00\u822C\u662F\u7B49\u5F85\u4E00\u4E2A <code>Promise</code> \u5BF9\u8C61\u7684\u7ED3\u679C\u3002\u5982\u679C\u7B49\u5F85\u7684\u4E0D\u662F <code>Promise</code> \u5BF9\u8C61\uFF0C\u5219\u8FD4\u56DE\u8BE5\u8868\u8FBE\u5F0F\u7684\u7ED3\u679C\u3002</p><p><code>await</code> \u6709\u4EE5\u4E0B\u51E0\u4E2A\u7279\u6027\uFF1A</p><ul><li><p><code>await</code> \u60F3\u8981\u5728\u51FD\u6570\u4E2D\u4F7F\u7528\uFF0C\u53EA\u6709\u5728 <code>async</code> \u51FD\u6570\u4E2D\u4F7F\u7528\u624D\u6709\u6548\uFF0C\u5728\u666E\u901A\u51FD\u6570\u4E2D\u4F7F\u7528\u4F1A\u62A5\u9519\u3002</p><p><img src="https://raw.githubusercontent.com/haitaoyu/blog-pictures/main/imgs/202209140949320.png" alt=""></p></li></ul><br><ul><li><p><code>await</code> \u5728\u7B49\u5F85\u53F3\u4FA7\u8868\u8FBE\u5F0F\u7ED3\u679C\u7684\u65F6\u5019\uFF0C\u4F1A\u963B\u585E\u540E\u9762\u7684\u4EE3\u7801\u3002</p><p>\u793A\u4F8B 1\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">test</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">test2</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;test2&#39;</span><span class="token punctuation">)</span> 
<span class="token punctuation">}</span>

<span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u6253\u5370\u7ED3\u679C\uFF1A</span>
<span class="token comment">// \u7531\u4E8E test2() \u4E2D await \u9020\u6210\u7684\u963B\u585E\uFF0C\u4E24\u79D2\u540E test2 \u5728 test \u4E4B\u540E\u88AB\u6253\u5370\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B 2\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">test</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u6253\u5370\u7ED3\u679C\uFF1A</span>
<span class="token comment">// \u7531\u4E8E test() \u9020\u6210\u7684\u963B\u585E\uFF0Cend \u4E24\u79D2\u540E\u624D\u4F1A\u88AB\u6253\u5370</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br></li><li><p><code>async</code> \u51FD\u6570\u4E2D\u7684 <code>await</code> \u53EA\u4F1A\u963B\u585E <code>async</code> \u51FD\u6570\u4E2D\u7684\u4EE3\u7801\uFF0C\u4E0D\u4F1A\u963B\u585E\u6574\u4F53\u4EE3\u7801\u6267\u884C\u3002</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">test</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">test2</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u6253\u5370\u7ED3\u679C\uFF1A</span>
<span class="token comment">// end \u5148\u88AB\u6253\u5370\uFF0C\u4E24\u79D2\u540E test \u88AB\u6253\u5370</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_4-\u6267\u884C\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#_4-\u6267\u884C\u987A\u5E8F" aria-hidden="true">#</a> 4. \u6267\u884C\u987A\u5E8F</h2><p>\u8FD0\u884C <code>async</code> \u51FD\u6570\u65F6\uFF0C\u9047\u5230 <code>await</code> \u4F1A\u963B\u585E <code>async</code> \u51FD\u6570\u540E\u9762\u7684\u4EE3\u7801\uFF0C\u7136\u540E\u53BB\u6267\u884C <code>async</code> \u5916\u9762\u7684\u540C\u6B65\u4EE3\u7801\u3002\u540C\u6B65\u4EE3\u7801\u6267\u884C\u5B8C\uFF0C\u518D\u56DE\u5230 <code>async</code> \u5185\u90E8\uFF0C\u7EE7\u7EED\u6267\u884C <code>await</code>\u540E\u9762\u7684\u4EE3\u7801\u3002</p><p>\u4EE5\u4E0B\u9762\u7684\u4EE3\u7801\u5206\u6790\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">test1</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;start test1&#39;</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;end test1&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">test2</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;test2&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token string">&#39;return test2 value&#39;</span>
<span class="token punctuation">}</span>

<span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;start async&#39;</span><span class="token punctuation">)</span>

<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;setTimeout&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise1&#39;</span><span class="token punctuation">)</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;promise2&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;end async&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u7ED3\u679C\uFF1A</p><p><img src="https://raw.githubusercontent.com/haitaoyu/blog-pictures/main/imgs/202209141027397.png" alt="image-20220914102750372"></p><ul><li><p>\u9996\u5148\u6267\u884C\u5B8F\u4EFB\u52A1\uFF0C\u6267\u884C <code>test1()</code>\uFF0C\u6267\u884C <code>console.log(&#39;statr test1&#39;)</code>\u3002</p></li><li><p>\u9047\u5230 <code>await</code>\uFF0C\u5148\u6267\u884C\u53F3\u8FB9 <code>test2()</code> \u4E2D\u7684 <code>console.log(&#39;test2&#39;)</code>\uFF0C\u4E2D\u65AD\u4E86\u540E\u9762\u7684\u4EE3\u7801\uFF0C\u6267\u884C <code>test1()</code> \u5916\u9762\u7684\u540C\u6B65\u4EE3\u7801\u3002</p></li><li><p>\u6267\u884C <code>console.log(&#39;start async&#39;)</code>\u3002</p></li><li><p>\u9047\u5230 <code>setTimeout</code>\uFF0C\u63A8\u5230\u5230\u4E0B\u4E2A\u5B8F\u4EFB\u52A1\u961F\u5217\u4E2D \u3002</p></li><li><p>\u6267\u884C <code>Promise</code> \u91CC\u9762\u7684\u540C\u6B65\u4EE3\u7801 <code>console.log(&#39;promise1&#39;)</code>\u3002</p></li><li><p>\u8FD0\u884C\u5230 <code>promise().then</code>\uFF0C\u53D1\u73B0\u662F <code>Promise</code> \u5BF9\u8C61\uFF0C\u63A8\u5230\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u3002</p></li><li><p>\u6267\u884C <code>console.log(&#39;end async&#39;)</code>\u3002</p></li><li><p><code>test1()</code> \u5916\u9762\u7684\u540C\u6B65\u4EE3\u7801\u6267\u884C\u7ED3\u675F\u540E\uFF0C\u56DE\u5230 <code>test1()</code> \u4E2D\uFF0C<code>console.log(await test2())</code> \u6267\u884C\u5B8C\u6210\u540E\u8FD4\u56DE <code>Promise {&lt;resolved&gt;: &quot;return test2 value&quot;}</code>\uFF0C\u662F<code>Promise</code> \u5BF9\u8C61\uFF0C\u63A8\u5230\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u3002</p></li><li><p>\u6B64\u65F6\u7B2C\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u7ED3\u675F\uFF0C\u5F00\u59CB\u6267\u884C\u6240\u6709\u5FAE\u4EFB\u52A1\uFF0C\u56E0\u4E3A\u5FAE\u4EFB\u52A1\u961F\u5217\u5148\u8FDB\u5148\u51FA\uFF0C\u6240\u4EE5\u5148\u6267\u884C <code>console.log(&#39;promise2&#39;)</code>\uFF0C\u540E\u6267\u884C <code>console.log(&#39;return test2 value&#39;)</code>\u3002</p></li><li><p><code>test2()</code> \u6267\u884C\u5B8C\u540E\uFF0C\u540E\u9762\u7684\u4EE3\u7801\u4E0D\u518D\u963B\u585E\uFF0C\u6267\u884C <code>console.log(&#39;end test1&#39;)</code>\u3002</p></li><li><p>\u6267\u884C\u4E0B\u4E2A\u5B8F\u4EFB\u52A1\uFF0C\u5373\u6267\u884C <code>console.log(&#39;setTimeout&#39;)</code>\u3002</p></li></ul><div class="custom-container tip"><p class="custom-container-title">\u8865\u5145</p><p>\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u90FD\u662F\u961F\u5217\uFF0C\u5B8F\u4EFB\u52A1\u6709 <code>script</code>\u3001<code>setTimeout</code>\u3001<code>setInterval</code> \u7B49\uFF0C\u5FAE\u4EFB\u52A1\u6709 <code>Promise.then</code>\u3001<code>Promise.catch</code>\u3001<code>Promise.finally</code>\u3001<code>process.nextTick</code> \u7B49\u3002</p><p>\u5B8F\u4EFB\u52A1\u548C\u5FAE\u4EFB\u52A1\u7684\u5173\u7CFB\u5982\u4E0B\uFF1A</p><p><img src="https://raw.githubusercontent.com/haitaoyu/blog-pictures/main/imgs/202209141039714.jpg" alt="ccf06985893441e75b915d484547a242"></p><p>\u5148\u6267\u884C\u7B2C\u4E00\u4E2A\u5B8F\u4EFB\u52A1\uFF0C\u6267\u884C\u7ED3\u675F\u540E\uFF0C\u6267\u884C\u6240\u6709\u7684\u5FAE\u4EFB\u52A1\uFF0C\u7136\u540E\u518D\u6267\u884C\u4E0B\u4E2A\u5B8F\u4EFB\u52A1\u3002</p></div><br><h2 id="_5-\u6355\u83B7\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#_5-\u6355\u83B7\u5F02\u5E38" aria-hidden="true">#</a> 5. \u6355\u83B7\u5F02\u5E38</h2><h3 id="catch" tabindex="-1"><a class="header-anchor" href="#catch" aria-hidden="true">#</a> catch</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;err&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>alert<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="try-catch" tabindex="-1"><a class="header-anchor" href="#try-catch" aria-hidden="true">#</a> try/catch</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;err&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_6-\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> 6. \u4F18\u7F3A\u70B9</h2><h3 id="\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u4F18\u70B9" aria-hidden="true">#</a> \u4F18\u70B9</h3><p>\u76F8\u5BF9\u4E8E <code>Promise</code> \u5BF9\u8C61\uFF0C<code>async/await</code> \u5904\u7406 <code>then</code> \u7684\u8C03\u7528\u94FE\uFF0C\u4EE3\u7801\u8981\u6E05\u6670\u5F88\u591A\uFF0C\u51E0\u4E4E\u548C\u540C\u6B65\u4EE3\u7801\u4E00\u6837\u3002</p><h3 id="\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7F3A\u70B9" aria-hidden="true">#</a> \u7F3A\u70B9</h3><p>\u6EE5\u7528 <code>await</code> \u53EF\u80FD\u4F1A\u5BFC\u81F4\u6027\u80FD\u95EE\u9898\uFF0C\u56E0\u4E3A <code>await</code> \u4F1A\u963B\u585E\u4EE3\u7801\u3002</p>`,37),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","async&await.html.vue"]]);export{d as default};