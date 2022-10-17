import{_ as n,o as s,c as a,e}from"./app.a35418cc.js";const p={},o=e(`<h1 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h1><h2 id="_1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1-\u6982\u8FF0" aria-hidden="true">#</a> 1. \u6982\u8FF0</h2><p><code>Promise</code> \u662F\u5F02\u6B65\u7F16\u7A0B\u7684\u4E00\u79CD\u89E3\u51B3\u65B9\u6848\uFF0C\u53EF\u4EE5\u66FF\u4EE3\u4F20\u7EDF\u7684\u89E3\u51B3\u65B9\u6848\u2014\u56DE\u8C03\u51FD\u6570\u548C\u4E8B\u4EF6\u3002ES6 \u7EDF\u4E00\u4E86\u7528\u6CD5\uFF0C\u5E76\u539F\u751F\u63D0\u4F9B\u4E86 <code>Promise</code> \u5BF9\u8C61\u3002</p><p>\u4F5C\u4E3A\u5BF9\u8C61\uFF0C<code>Promise</code> \u6709\u4EE5\u4E0B\u4E24\u4E2A\u7279\u70B9\uFF1A</p><ul><li><p>\u5BF9\u8C61\u7684\u72B6\u6001\u4E0D\u53D7\u5916\u754C\u5F71\u54CD\u3002</p></li><li><p>\u4E00\u65E6\u72B6\u6001\u6539\u53D8\u4E86\u5C31\u4E0D\u4F1A\u5728\u53D8\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4EFB\u4F55\u65F6\u5019 <code>Promise</code> \u90FD\u53EA\u6709\u4E00\u79CD\u72B6\u6001\u3002</p></li></ul><br><h2 id="_2-promise-\u7684\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_2-promise-\u7684\u72B6\u6001" aria-hidden="true">#</a> 2. Promise \u7684\u72B6\u6001</h2><p><code>Promise</code> \u6709\u4E09\u79CD\u72B6\u6001\uFF0C\u5206\u522B\u662F\uFF1A</p><ul><li><p><code>Pending</code>\uFF1A\u8FDB\u884C\u4E2D\u3002</p></li><li><p><code>Resolved</code>\uFF1A\u5DF2\u5B8C\u6210\u3002</p></li><li><p><code>Rejected</code>\uFF1A\u5DF2\u5931\u8D25\u3002</p></li></ul><p><code>Promise</code> \u4ECE <code>Pending</code> \u72B6\u6001\u5F00\u59CB\uFF0C\u5982\u679C\u6210\u529F\u5C31\u8F6C\u5230\u6210\u529F\u72B6\u6001\uFF0C\u5E76\u6267\u884C <code>resolve</code> \u56DE\u8C03\u51FD\u6570\uFF1B\u5982\u679C\u5931\u8D25\u5C31\u8F6C\u5230\u5931\u8D25\u72B6\u6001\u5E76\u6267\u884C <code>reject</code> \u56DE\u8C03\u51FD\u6570\u3002</p><br><h2 id="_3-\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> 3. \u57FA\u672C\u7528\u6CD5</h2><p>\u53EF\u4EE5\u901A\u8FC7 <code>Promise</code> \u7684\u6784\u9020\u51FD\u6570\u521B\u5EFA <code>Promise</code> \u5BF9\u8C61\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Promise</code> \u6784\u9020\u51FD\u6570\u63A5\u6536\u4E00\u4E2A\u51FD\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8BE5\u51FD\u6570\u7684\u4E24\u4E2A\u53C2\u6570\u662F <code>resolve</code> \u548C <code>reject</code>\uFF0C\u5B83\u4EEC\u7531 JavaScript \u5F15\u64CE\u63D0\u4F9B\u3002</p><ul><li><p><code>resolve</code>\uFF1A<code>Promise</code> \u6210\u529F\u540E\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5E76\u5C06\u7ED3\u679C\u4F5C\u4E3A\u5176\u53C2\u6570\u4F20\u9012\u51FA\u53BB\u3002</p></li><li><p><code>reject</code>\uFF1A<code>Promise</code> \u5931\u8D25\u540E\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5E76\u5C06\u9519\u8BEF\u4F5C\u4E3A\u5176\u53C2\u6570\u4F20\u9012\u51FA\u53BB\u3002</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">greet</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> greet <span class="token operator">=</span> <span class="token string">&#39;hello  world!&#39;</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>greet<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> promise
<span class="token punctuation">}</span>

<span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u521B\u5EFA\u4E00\u4E2A <code>Promise</code> \u5BF9\u8C61\u65F6\u4F1A\u7ACB\u5373\u6267\u884C\u91CC\u9762\u7684\u4EE3\u7801\uFF0C\u4E3A\u4E86\u66F4\u597D\u7684\u63A7\u5236\u4EE3\u7801\u7684\u8FD0\u884C\u65F6\u673A\uFF0C\u53EF\u4EE5\u5C06\u5176\u5305\u542B\u5728\u4E00\u4E2A\u51FD\u6570\u4E2D\uFF0C\u5E76\u5C06\u8FD9\u4E2A <code>Promise</code> \u4F5C\u4E3A\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u3002</p></div><br><h2 id="_4-promise-\u7684-then-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-promise-\u7684-then-\u65B9\u6CD5" aria-hidden="true">#</a> 4. Promise \u7684 then \u65B9\u6CD5</h2><p><code>Promise</code> \u7684 <code>then()</code> \u6709\u4E09\u4E2A\u53C2\u6570\uFF1A\u6210\u529F\u56DE\u8C03\uFF0C\u5931\u8D25\u56DE\u8C03\u548C\u524D\u8FDB\u56DE\u8C03\u3002\u4E00\u822C\u60C5\u51B5\u4E0B\u53EA\u9700\u8981\u5B9E\u73B0\u7B2C\u4E00\u4E2A\uFF0C\u540E\u9762\u662F\u53EF\u9009\u7684\u3002</p><p><code>Promise</code> \u4E2D\u6700\u4E3A\u91CD\u8981\u7684\u662F\u72B6\u6001\uFF0C\u901A\u8FC7 <code>then()</code> \u7684\u72B6\u6001\u4F20\u9012\u53EF\u4EE5\u5B9E\u73B0\u56DE\u8C03\u51FD\u6570\u94FE\u5F0F\u64CD\u4F5C\u3002</p><p>\u5148\u6267\u884C\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">greet</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> greet <span class="token operator">=</span> <span class="token string">&#39;hello  world!&#39;</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>greet<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> promise
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7ED3\u679C\u4E3A\uFF1A</p><p><img src="https://raw.githubusercontent.com/haitaoyu/blog-pictures/main/imgs/202209091612016.png" alt="image-20220909161243929"></p><p>\u4ECE\u4E2D\u53EF\u4EE5\u770B\u51FA <code>promise</code> \u6267\u884C <code>then()</code> \u540E\uFF0C\u8FD4\u56DE\u7684\u662F\u53E6\u4E00\u4E2A <code>Promise</code> \u5BF9\u8C61\uFF0C\u5E76\u4E14 <code>Promise</code> \u7684\u6267\u884C\u662F\u5F02\u6B65\u7684\uFF0C\u56E0\u4E3A <code>hello world!</code> \u662F\u5728\u6700\u540E\u6253\u5370\u51FA\u6765\u7684\u3002</p><p>\u56E0\u4E3A <code>promise</code> \u6267\u884C <code>then()</code> \u540E\u8FD4\u56DE\u7684\u662F\u53E6\u4E00\u4E2A <code>Promise</code> \u5BF9\u8C61\uFF0C\u6240\u4EE5\u5C31\u53EF\u4EE5\u6839\u636E\u8FD9\u4E00\u7279\u6027\uFF0C\u4E0D\u65AD\u7684\u94FE\u5F0F\u8C03\u7528\u56DE\u8C03\u51FD\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">greet</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> greet <span class="token operator">=</span> <span class="token string">&#39;hello  world!&#39;</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span>greet<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> promise
<span class="token punctuation">}</span>

<span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res2</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2 <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> res2
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res3</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res3 <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><ul><li><p><code>then()</code> \u5728\u94FE\u5F0F\u8C03\u7528\u4E2D\uFF0C\u56DE\u8C03\u51FD\u6570\u4F1A\u628A\u4E0A\u4E00\u4E2A <code>then()</code> \u4E2D\u8FD4\u56DE\u7684\u503C\u5F53\u505A\u53C2\u6570\u503C\u4F9B\u5F53\u524D <code>then()</code> \u8C03\u7528\u3002</p></li><li><p><code>then()</code> \u6267\u884C\u5B8C\u6BD5\u540E\u9700\u8981\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u503C\u7ED9\u4E0B\u4E00\u4E2A <code>then()</code> \u8C03\u7528\uFF0C\u6CA1\u6709\u8FD4\u56DE\u503C\u5219\u9ED8\u8BA4\u8FD4\u56DE <code>undefined</code>\u3002</p></li><li><p>\u6BCF\u4E2A <code>then()</code> \u53EA\u80FD\u4F7F\u7528\u524D\u4E00\u4E2A <code>then()</code> \u7684\u8FD4\u56DE\u503C\u3002</p></li></ul></div><br><h2 id="_5-promise-\u7684-catch-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_5-promise-\u7684-catch-\u65B9\u6CD5" aria-hidden="true">#</a> 5. Promise \u7684 catch \u65B9\u6CD5</h2><p><code>Promise</code> \u7684\u72B6\u6001\u53D8\u4E3A <code>reject</code> \u65F6\uFF0C\u4F1A\u88AB <code>catch()</code> \u6355\u6349\u5230\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5982\u679C\u524D\u9762\u8BBE\u7F6E\u4E86 <code>reject</code> \u65B9\u6CD5\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5219 <code>catch()</code> \u4E0D\u4F1A\u6355\u6349\u5230\u72B6\u6001\u53D8\u4E3A <code>reject</code> \u7684\u60C5\u51B5\u3002</p></div><p>\u5982\u679C\u5728 <code>resolve</code> \u6216\u8005 <code>reject</code> \u65F6\u53D1\u751F\u9519\u8BEF\uFF0C\u4E5F\u4F1A\u88AB <code>catch()</code> \u6355\u6349\u5230\uFF0C\u8FD9\u4E0E java\uFF0Cc++ \u7684\u9519\u8BEF\u5904\u7406\u65B9\u5F0F\u76F8\u540C\uFF0C\u8FD9\u6837\u53EF\u4EE5\u907F\u514D\u7A0B\u5E8F\u5361\u6B7B\u5728\u56DE\u8C03\u51FD\u6570\u4E2D\u3002</p><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u8981\u5728 <code>then()</code> \u4E2D\u5B9A\u4E49 <code>Reject</code> \u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u5C3D\u91CF\u4F7F\u7528 <code>catch()</code> \u6765\u5904\u7406 <code>Reject</code> \u9519\u8BEF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">judgeNumber</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    num <span class="token operator">=</span> <span class="token number">5</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;num\u5C0F\u4E8E5\uFF0C\u503C\u4E3A\uFF1A&#39;</span> <span class="token operator">+</span> num<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;num\u4E0D\u5C0F\u4E8E5\uFF0C\u503C\u4E3A\uFF1A&#39;</span> <span class="token operator">+</span> num<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> promise
<span class="token punctuation">}</span>

<span class="token function">judgeNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="_6-promise-\u7684\u5176\u4ED6\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_6-promise-\u7684\u5176\u4ED6\u65B9\u6CD5" aria-hidden="true">#</a> 6. Promise \u7684\u5176\u4ED6\u65B9\u6CD5</h2><h3 id="finally" tabindex="-1"><a class="header-anchor" href="#finally" aria-hidden="true">#</a> finally()</h3><p><code>finally()</code> \u7528\u4E8E\u6307\u5B9A\u4E0D\u7BA1 <code>Promise</code> \u5BF9\u8C61\u6700\u540E\u72B6\u6001\u5982\u4F55\uFF0C\u90FD\u4F1A\u6267\u884C\u7684\u64CD\u4F5C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 
<span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u4E0D\u7BA1 <code>promise</code> \u6700\u540E\u7684\u72B6\u6001\uFF0C\u5728\u6267\u884C\u5B8C <code>then()</code> \u6216 <code>catch()</code> \u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u4EE5\u540E\uFF0C\u90FD\u4F1A\u6267\u884C <code>finally()</code> \u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><h3 id="all" tabindex="-1"><a class="header-anchor" href="#all" aria-hidden="true">#</a> all()</h3><p><code>Promise</code> \u7684 <code>all()</code> \u63D0\u4F9B\u4E86\u5E76\u884C\u6267\u884C\u5F02\u6B65\u64CD\u4F5C\u7684\u80FD\u529B\uFF0C\u662F\u5728\u6240\u6709\u5F02\u6B65\u64CD\u4F5C\u6267\u884C\u5B8C\u540E\u624D\u6267\u884C\u56DE\u8C03\u3002\u53EF\u4EE5\u5C06\u591A\u4E2A <code>Promise</code> \u5B9E\u4F8B\uFF0C\u5305\u88C5\u6210\u4E00\u4E2A\u65B0\u7684 <code>Promise</code> \u5B9E\u4F8B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>Promise.all()</code> \u63A5\u53D7\u4E00\u4E2A\u6570\u7EC4\u4F5C\u4E3A\u53C2\u6570\uFF0C<code>p1</code>\u3001<code>p2</code> \u90FD\u662F <code>Promise</code> \u5B9E\u4F8B\u3002</p><p><code>p</code> \u7684\u72B6\u6001\u7531 <code>p1</code>\u3001<code>p2</code> \u51B3\u5B9A\uFF0C\u5206\u6210\u4E24\u79CD\u60C5\u51B5\uFF1A</p><ul><li><p>\u53EA\u6709 <code>p1</code>\u3001<code>p2</code> \u7684\u72B6\u6001\u90FD\u53D8\u6210 <code>fulfilled</code>\uFF0C<code>p</code> \u7684\u72B6\u6001\u624D\u4F1A\u53D8\u6210 <code>fulfilled</code>\uFF0C\u6B64\u65F6 <code>p1</code>\u3001<code>p2</code> \u7684\u8FD4\u56DE\u503C\u7EC4\u6210\u4E00\u4E2A\u6570\u7EC4\uFF0C\u4F20\u9012\u7ED9 <code>p</code> \u7684\u56DE\u8C03\u51FD\u6570\u3002</p></li><li><p>\u53EA\u8981 <code>p1</code>\u3001<code>p2</code> \u4E4B\u4E2D\u6709\u4E00\u4E2A <code>Rejected</code>\uFF0C<code>p</code> \u7684\u72B6\u6001\u5C31\u53D8\u6210 <code>Rejected</code>\uFF0C\u6B64\u65F6\u7B2C\u4E00\u4E2A <code>Rejected</code> \u7684\u5B9E\u4F8B\u8FD4\u56DE\u503C\uFF0C\u4F1A\u4F20\u9012\u7ED9 <code>p</code> \u7684\u56DE\u8C03\u51FD\u6570\u3002</p></li></ul><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5982\u679C\u4F5C\u4E3A\u53C2\u6570\u7684 <code>Promise</code> \u5B9E\u4F8B\uFF0C\u81EA\u5DF1\u5B9A\u4E49\u4E86 <code>catch()</code>\uFF0C\u90A3\u4E48\u5B83\u4E00\u65E6\u88AB <code>Rejected</code>\uFF0C\u5E76\u4E0D\u4F1A\u89E6\u53D1 <code>Promise.all()</code> \u7684 <code>catch()</code>\u3002</p></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> err<span class="token punctuation">)</span>

<span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u62A5\u9519\u4E86&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> err<span class="token punctuation">)</span>

Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6210\u529F\uFF1A&#39;</span> <span class="token operator">+</span> res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u5931\u8D25&#39;</span> <span class="token operator">+</span> err<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">// \u6253\u5370\u7ED3\u679C\uFF1A\u6210\u529F\uFF1Ahello,Error: \u62A5\u9519\u4E86</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C<code>p1</code> \u4F1A <code>Resolved</code>\uFF0C<code>p2</code> \u9996\u5148\u4F1A <code>Rejected</code>\uFF0C\u4F46\u662F <code>p2</code> \u6709\u81EA\u5DF1\u7684 <code>catch()</code>\uFF0C\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u65B0\u7684 <code>Promise</code> \u5B9E\u4F8B\uFF0C<code>p2 </code> \u5B9E\u9645\u4E0A\u6307\u5411\u7684\u662F\u8FD9\u4E2A\u5B9E\u4F8B\u3002</p><p>\u8BE5\u5B9E\u4F8B\u6267\u884C\u5B8C <code>catch()</code> \u540E\uFF0C\u4E5F\u4F1A\u53D8\u6210 <code>Resolved</code>\uFF0C\u5BFC\u81F4 <code>Promise.all()</code> \u53C2\u6570\u91CC\u9762\u7684\u4E24\u4E2A\u5B9E\u4F8B\u90FD\u4F1A <code>Resolved</code>\uFF0C\u56E0\u6B64\u4F1A\u8C03\u7528 <code>then()</code> \u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u800C\u4E0D\u4F1A\u8C03\u7528 <code>catch()</code> \u6307\u5B9A\u7684\u56DE\u8C03\u51FD\u6570\u3002</p><h3 id="race" tabindex="-1"><a class="header-anchor" href="#race" aria-hidden="true">#</a> race()</h3><p><code>all()</code> \u662F\u7B49\u5230\u6240\u6709\u7684 <code>Promise</code> \u90FD\u6267\u884C\u5B8C\uFF0C\u518D\u6765\u6267\u884C\u56DE\u8C03\u51FD\u6570\u3002<code>race()</code> \u5219\u4E0D\u540C\uFF0C\u53EA\u6709\u4E00\u4E2A\u5B9E\u4F8B\u7387\u5148\u6539\u53D8\u72B6\u6001\uFF0C\u5C31\u5F00\u59CB\u6267\u884C\u56DE\u8C03\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0C\u53EA\u8981 <code>p1</code>\u3001<code>p2</code> \u4E2D\u6709\u4E00\u4E2A\u5B9E\u4F8B\u7387\u5148\u6539\u53D8\u72B6\u6001\uFF0C<code>p</code> \u7684\u72B6\u6001\u5C31\u8DDF\u7740\u6539\u53D8\u3002\u90A3\u4E2A\u7387\u5148\u6539\u53D8\u7684 <code>Promise</code> \u5B9E\u4F8B\u7684\u8FD4\u56DE\u503C\uFF0C\u5C31\u4F20\u9012\u7ED9 <code>p</code> \u7684\u56DE\u8C03\u51FD\u6570\u3002</p><h3 id="allsettled" tabindex="-1"><a class="header-anchor" href="#allsettled" aria-hidden="true">#</a> allSettled()</h3><p>\u5F53\u4E0D\u5173\u5FC3\u5F02\u6B65\u64CD\u4F5C\u7684\u7ED3\u679C\uFF0C\u53EA\u5173\u5FC3\u8FD9\u4E9B\u64CD\u4F5C\u6709\u6CA1\u6709\u7ED3\u675F\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>Promise.allSettled()</code> \u3002</p><p>\u5982\u679C\u6CA1\u6709\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u60F3\u8981\u786E\u4FDD\u6240\u6709\u64CD\u4F5C\u90FD\u7ED3\u675F\uFF0C\u5C31\u5F88\u9EBB\u70E6\u3002<code>Promise.all()</code> \u65E0\u6CD5\u505A\u5230\u8FD9\u4E00\u70B9\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u793A\u4F8B\uFF1A\u7B49\u5230\u4E09\u4E2A\u8BF7\u6C42\u90FD\u7ED3\u675F\uFF0C\u4E0D\u7BA1\u8BF7\u6C42\u6210\u529F\u8FD8\u662F\u5931\u8D25\uFF0Cloading \u56FE\u6807\u90FD\u4F1A\u6D88\u5931\u3002</span>
<span class="token keyword">const</span> promises <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;/api-1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;/api-2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;/api-3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">allSettled</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span>
<span class="token function">removeLoadingIndicator</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="any" tabindex="-1"><a class="header-anchor" href="#any" aria-hidden="true">#</a> any()</h3><p>ES2021 \u5F15\u5165\u4E86 <code> Promise.any()</code>\u3002\u8BE5\u65B9\u6CD5\u63A5\u53D7\u4E00\u7EC4 <code>Promise</code> \u5B9E\u4F8B\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5305\u88C5\u6210\u4E00\u4E2A\u65B0\u7684 <code>Promise</code> \u5B9E\u4F8B\u8FD4\u56DE\u3002</p><p>\u53EA\u8981\u53C2\u6570\u5B9E\u4F8B\u6709\u4E00\u4E2A\u53D8\u6210 <code>fulfilled</code> \u72B6\u6001\uFF0C\u5305\u88C5\u5B9E\u4F8B\u5C31\u4F1A\u53D8\u6210 <code>fulfilled</code> \u72B6\u6001\uFF1B\u5982\u679C\u6240\u6709\u53C2\u6570\u5B9E\u4F8B\u90FD\u53D8\u6210 <code>Rejected</code> \u72B6\u6001\uFF0C\u5305\u88C5\u5B9E\u4F8B\u5C31\u4F1A\u53D8\u6210 <code>Rejected</code> \u72B6\u6001\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> promises <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;/endpoint-a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;/endpoint-b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;/endpoint-c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> first <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span>promises<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,65),t=[o];function c(i,l){return s(),a("div",null,t)}const d=n(p,[["render",c],["__file","Promise.html.vue"]]);export{d as default};