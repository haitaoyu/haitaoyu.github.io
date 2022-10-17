import{_ as e,r as i,o as t,c as l,a as s,b as n,d as c,e as o}from"./app.a35418cc.js";const r={},d=s("h1",{id:"vuepress-\u642D\u5EFA\u548C\u90E8\u7F72",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vuepress-\u642D\u5EFA\u548C\u90E8\u7F72","aria-hidden":"true"},"#"),n(" VuePress \u642D\u5EFA\u548C\u90E8\u7F72")],-1),p=s("h2",{id:"\u4E00\u3001\u642D\u5EFA",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u4E00\u3001\u642D\u5EFA","aria-hidden":"true"},"#"),n(" \u4E00\u3001\u642D\u5EFA")],-1),u={href:"https://v2.vuepress.vuejs.org/zh/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"},b=o(`<br><h2 id="\u4E8C\u3001\u90E8\u7F72\u5230-github-page" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u90E8\u7F72\u5230-github-page" aria-hidden="true">#</a> \u4E8C\u3001\u90E8\u7F72\u5230 GitHub Page</h2><h3 id="_1-\u521B\u5EFA-github-\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA-github-\u4ED3\u5E93" aria-hidden="true">#</a> 1. \u521B\u5EFA GitHub \u4ED3\u5E93</h3><p>\u767B\u5F55 GitHub\uFF0C\u70B9\u51FB new repository\uFF0C\u7136\u540E\u5728 Repository name \u586B\u5199 <code>\u4F60\u7684\u7528\u6237\u540D + .github.io</code> \u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u4ED3\u5E93\u540D\u5FC5\u987B\u4E3A <code>\u4F60\u7684\u7528\u6237\u540D + .github.io</code> \u3002<br></p></div><h3 id="_2-\u914D\u7F6E\u672C\u5730\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6E\u672C\u5730\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6743\u9650" aria-hidden="true">#</a> 2. \u914D\u7F6E\u672C\u5730\u63A8\u9001\u5230\u8FDC\u7A0B\u4ED3\u5E93\u7684\u6743\u9650</h3><p>\u8FDB\u5165 git-bash \u754C\u9762\uFF0C\u7136\u540E\u505A\u4EE5\u4E0B\u64CD\u4F5C\uFF1A</p><ol><li><p>\u8F93\u5165 <code>git config --global --list </code> \uFF0C\u9A8C\u8BC1\u90AE\u7BB1\u662F\u5426\u4E0E GitHub \u521B\u5EFA\u4ED3\u5E93\u7684\u8D26\u53F7\u90AE\u7BB1\u4E00\u81F4\u3002 \u82E5\u4E0D\u4E00\u81F4\u7684\u8BDD\uFF0C\u901A\u8FC7\u4E0B\u9762\u547D\u4EE4\u8FDB\u884C\u4FEE\u6539\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;\u4F60\u7684\u7528\u6237\u540D&quot;</span>        // \u8BBE\u7F6E\u5168\u5C40\u7528\u6237\u540D
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;\u4F60\u7684\u767B\u9646\u90AE\u7BB1&quot;</span>     // \u8BBE\u7F6E\u90AE\u7BB1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5728\u672C\u5730\u751F\u6210 ssh \u79D8\u94A5\uFF0C\u5E76\u62F7\u8D1D\u79D8\u94A5\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.ssh
ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;\u4F60\u7684email&quot;</span> // \u751F\u6210\u79D8\u94A5
clip <span class="token operator">&lt;</span> ~/.ssh/id_rsa.pub // \u590D\u5236\u5BC6\u94A5\u5230\u526A\u8D34\u677F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6253\u5F00 GitHub \u9875\u9762\uFF0C\u70B9\u51FB\u53F3\u4E0A\u89D2\u7684\u5934\u50CF\uFF0C\u70B9\u51FB\u4E0B\u62C9\u83DC\u5355\u7684 setting\uFF0C\u8DF3\u8F6C\u9875\u9762\u540E\u70B9\u51FB\u4FA7\u8FB9\u680F\u7684 SSH and GPG keys \uFF0C\u586B\u5165\u79D8\u94A5\u3002</p></li><li><p>\u6D4B\u8BD5\u662F\u5426\u53EF\u4EE5\u8FDE\u63A5\u4E0A GitHub \u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="_3-\u7F16\u5199\u6253\u5305\u4E0A\u4F20\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_3-\u7F16\u5199\u6253\u5305\u4E0A\u4F20\u811A\u672C" aria-hidden="true">#</a> 3. \u7F16\u5199\u6253\u5305\u4E0A\u4F20\u811A\u672C</h3><ol><li><p>\u5728 <code>deploy.sh</code> \u6587\u4EF6\u4E2D\u6DFB\u52A0\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u786E\u4FDD\u811A\u672C\u629B\u51FA\u9047\u5230\u7684\u9519\u8BEF</span>
<span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span>

<span class="token comment"># \u6253\u5305\u751F\u6210\u9759\u6001\u6587\u4EF6</span>
<span class="token function">npm</span> run build

<span class="token comment"># \u8FDB\u5165\u6253\u5305\u597D\u7684\u6587\u4EF6\u5939</span>
<span class="token builtin class-name">cd</span> docs/.vuepress/dist

<span class="token comment"># \u521B\u5EFAgit\u7684\u672C\u5730\u4ED3\u5E93\uFF0C\u63D0\u4EA4\u4FEE\u6539</span>
<span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token parameter variable">-A</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;deploy&#39;</span>

<span class="token comment"># \u8986\u76D6\u5F0F\u5730\u5C06\u672C\u5730\u4ED3\u5E93\u53D1\u5E03\u81F3github\uFF0C\u56E0\u4E3A\u53D1\u5E03\u4E0D\u9700\u8981\u4FDD\u7559\u5386\u53F2\u8BB0\u5F55</span>
<span class="token comment"># \u683C\u5F0F\u4E3A\uFF1Agit push -f git@github.com:&#39;\u7528\u6237\u540D&#39;/&#39;\u4ED3\u5E93\u540D&#39;.git master</span>
<span class="token function">git</span> push <span class="token parameter variable">-f</span> git@github.com:haitaoyu/haitaoyu.github.io.git master

<span class="token builtin class-name">cd</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4FEE\u6539 <code>package.json</code>\uFF0C\u5728\u91CC\u9762\u6DFB\u52A0\u4E00\u6761\u6267\u884C\u811A\u672C\u6587\u4EF6\u7684\u547D\u4EE4\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
    <span class="token string">&quot;deploy&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;bash deploy.sh&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>\u4E4B\u540E\u6BCF\u6B21\u90E8\u7F72\u7684\u65F6\u5019\uFF0C\u53EA\u9700\u8981\u5728 <strong>git-bash</strong> \u754C\u9762\u8FD0\u884C <code>npm run deploy</code> \u5373\u53EF\u5B9E\u73B0\u6253\u5305\u4E0A\u4F20\u64CD\u4F5C\u3002<br><br> GitHub \u4F1A\u81EA\u52A8\u66F4\u65B0\u9875\u9762\u4EE3\u7406\uFF0C\u7B49\u5F85\u4E00\u4F1A\u540E\u518D\u6253\u5F00<code>https://\u7528\u6237\u540D.github.io</code>\uFF0C\u5C31\u53EF\u4EE5\u770B\u5230\u9875\u9762\u66F4\u65B0\u4E86\u3002<br></p>`,11);function v(m,h){const a=i("ExternalLinkIcon");return t(),l("div",null,[d,p,s("p",null,[n("\u8BE6\u89C1\u5B98\u65B9\u6587\u6863\uFF1A"),s("a",u,[n("VuePress \u5FEB\u901F\u4E0A\u624B"),c(a)])]),b])}const k=e(r,[["render",v],["__file","VuePress.html.vue"]]);export{k as default};
