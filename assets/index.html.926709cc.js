import{_ as e,o as n,c as s,e as i}from"./app.a35418cc.js";const a={},l=i(`<h1 id="git-\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#git-\u7684\u4F7F\u7528" aria-hidden="true">#</a> Git \u7684\u4F7F\u7528</h1><h2 id="_1-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-\u4ECB\u7ECD" aria-hidden="true">#</a> 1. \u4ECB\u7ECD</h2><p>Git \u662F\u4E00\u6B3E\u5206\u5E03\u5F0F\u6E90\u4EE3\u7801\u7BA1\u7406\u5DE5\u5177\uFF0C\u5728<strong>\u672C\u5730</strong>\u548C<strong>\u8FDC\u7A0B\u670D\u52A1\u5668</strong>\u4E0A\u90FD\u6709 Git \u7248\u672C\u5E93\u3002</p><p>\u8981\u60F3\u719F\u7EC3\u4F7F\u7528 Git\uFF0C\u5FC5\u987B\u7406\u89E3 Git \u7684\u5DE5\u4F5C\u539F\u7406\uFF1A</p><p><strong>\u672C\u5730\u4ED3\u5E93\u4E2D\uFF0C\u5DE5\u4F5C\u533A\u6587\u4EF6\u9700\u8981\u5148\u88AB\u6DFB\u52A0\u8FDB\u6682\u7F13\u533A\uFF0C\u7136\u540E\u6682\u7F13\u533A\u63D0\u4EA4\u5230\u672C\u5730\u5206\u652F\uFF0C\u6700\u540E\u63D0\u4EA4\u5230\u8FDC\u7A0B\u5206\u652F</strong>\u3002</p><p><img src="https://raw.githubusercontent.com/haitaoyu/blog-pictures/main/imgs/202208301449833.png" alt="git"></p><p>\u4E0B\u9762\u5185\u5BB9\u57FA\u4E8E Git \u5DF2\u7ECF\u5B89\u88C5\u5B8C\u6BD5\u7684\u60C5\u51B5\u4E0B\uFF1A</p><br><h2 id="_2-\u4F7F\u7528\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528\u6D41\u7A0B" aria-hidden="true">#</a> 2. \u4F7F\u7528\u6D41\u7A0B</h2><ol><li><p>\u5728\u8FDC\u7A0B\u7248\u672C\u5E93\u4E0A\u521B\u5EFA\u4E00\u4E2A\u5171\u4EAB\u7248\u672C\u5E93\u3002</p></li><li><p>\u5F00\u53D1\u4EBA\u5458\u4F7F\u7528 <code>git clone</code> \u547D\u4EE4\u4E0B\u8F7D\u8FDC\u7A0B\u7248\u672C\u5E93\u3002</p></li><li><p>\u8FDB\u5165\u5F00\u53D1\u9636\u6BB5\u3002</p><p>1\uFF09\u5728 Git <code>config</code> \u6587\u4EF6\u4E2D\u6DFB\u52A0\u4F7F\u7528\u8005\u4FE1\u606F\uFF08\u5FC5\u987B\u8BBE\u7F6E\uFF0C\u5426\u5219\u65E0\u6CD5\u63D0\u4EA4\u4EE3\u7801\uFF09\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config user.name <span class="token string">&#39;\u59D3\u540D&#39;</span>

<span class="token function">git</span> config user.email <span class="token string">&#39;\u90AE\u7BB1&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\uFF09\u6DFB\u52A0\u6587\u4EF6\u5230\u6682\u7F13\u533A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3\uFF09\u5C06\u7F16\u5199\u597D\u7684\u4EE3\u7801\u63D0\u4EA4\u5230\u672C\u5730\u5206\u652F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> commit -m<span class="token string">&#39;\u8BF4\u660E&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4\uFF09\u5C06\u4EE3\u7801\u63D0\u4EA4\u5230\u8FDC\u7A0B\u5206\u652F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push origin \u5206\u652F\u540D\u79F0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5\uFF09\u83B7\u53D6\u8FDC\u7A0B\u5206\u652F\u7684\u6700\u65B0\u5185\u5BB9\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u6CE8\u610F\u4E8B\u9879\uFF1A</p><ul><li><p>\u4E0D\u8981\u5C06\u4E0D\u80FD\u8FD0\u884C\u7684\u4EE3\u7801\u63D0\u4EA4\u5230\u8FDC\u7A0B\u5206\u652F\u3002</p></li><li><p>\u63D0\u4EA4\u4EE3\u7801\u5230\u8FDC\u7A0B\u5206\u652F\u65F6\uFF0C\u8981\u5148 <code>git pull</code> \u6700\u65B0\u4EE3\u7801\uFF0C\u518D <code>git push</code> \u6211\u4EEC\u81EA\u5DF1\u7684\u4EE3\u7801\u3002</p></li><li><p>\u5982\u679C <code>git pull</code> \u4E0B\u6765\u7684\u4EE3\u7801\u6709\u51B2\u7A81\uFF0C\u9700\u8981\u624B\u52A8\u89E3\u51B3\u51B2\u7A81\u540E\u518D <code>git push</code> \u4EE3\u7801\u3002</p></li></ul></li></ol><br><h2 id="_3-\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_3-\u5206\u652F" aria-hidden="true">#</a> 3. \u5206\u652F</h2><ul><li><p>\u67E5\u770B\u7248\u672C\u5E93\u5206\u652F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-- \u67E5\u770B\u672C\u5730\u7248\u672C\u5E93\u5206\u652F
<span class="token function">git</span> branch

-- \u67E5\u770B\u8FDC\u7A0B\u7248\u672C\u5E93\u5206\u652F
<span class="token function">git</span> branch <span class="token parameter variable">-r</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u521B\u5EFA\u5206\u652F\uFF1A</p><p>\u5206\u652F\u4E4B\u95F4\u662F\u72EC\u7ACB\u7684\uFF0C\u4E0D\u4F1A\u76F8\u4E92\u5F71\u54CD\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch \u5206\u652F\u540D\u79F0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5207\u6362\u5206\u652F\uFF1A</p><p>\u5207\u6362\u5230\u54EA\u4E2A\u5206\u652F\uFF0C\u4EE3\u7801\u5C31\u4F1A\u63D0\u4EA4\u5230\u54EA\u4E2A\u5206\u652F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout \u5206\u652F\u540D\u79F0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5206\u652F\u63D0\u4EA4\u5230\u8FDC\u7A0B\u7248\u672C\u5E93\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> push origin \u5206\u652F\u540D\u79F0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5408\u5E76\u5206\u652F\uFF1A</p><p>\u4F8B\uFF1A\u5728 master \u5206\u652F\u4E2D\u6267\u884C <code>git merge staging</code>\uFF0C\u4EE3\u8868\u662F\u5C06 staging \u4E2D\u7684\u4EE3\u7801\u90FD\u5408\u5E76\u5230 master \u4E2D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> merge \u5206\u652F\u540D\u79F0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5220\u9664\u5206\u652F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-- \u5220\u9664\u672C\u5730\u5206\u652F
<span class="token function">git</span> branch -d\u5206\u652F\u540D\u79F0

-- \u5220\u9664\u8FDC\u7A0B\u5206\u652F
<span class="token function">git</span> push origin --delete\u5206\u652F\u540D\u79F0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u62C9\u53D6\u6307\u5B9A\u5206\u652F\u7684\u4EE3\u7801\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone <span class="token parameter variable">-b</span> \u5206\u652F\u540D\u79F0 git\u5730\u5740
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><br><h2 id="_4-\u64A4\u9500\u548C\u56DE\u9000" tabindex="-1"><a class="header-anchor" href="#_4-\u64A4\u9500\u548C\u56DE\u9000" aria-hidden="true">#</a> 4. \u64A4\u9500\u548C\u56DE\u9000</h2><ul><li><p>\u64A4\u9500\u672C\u5730 commit\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token parameter variable">--soft</span> HEAD^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u8FDC\u7A0B\u5206\u652F\u56DE\u9000\u5230\u67D0\u4E2A\u7248\u672C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-- \u67E5\u770B\u63D0\u4EA4\u5386\u53F2\u8BB0\u5F55
<span class="token function">git</span> log


-- \u672C\u5730\u5206\u652F\u56DE\u6EDA\u5230\u6307\u5B9A\u7248\u672C
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token operator">&lt;</span>commit ID\u53F7<span class="token operator">&gt;</span>


-- \u5F3A\u5236\u63A8\u9001\u5230\u8FDC\u7A0B\u5206\u652F
<span class="token function">git</span> push origin HEAD <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br></li></ul><h2 id="_5-\u5FFD\u7565\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#_5-\u5FFD\u7565\u63D0\u4EA4" aria-hidden="true">#</a> 5. \u5FFD\u7565\u63D0\u4EA4</h2><p>\u5982\u679C\u4E0D\u60F3\u8BA9\u67D0\u4E9B\u6587\u4EF6\u88AB git\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>touch .gitignore</code> \u547D\u4EE4\u521B\u5EFA <code>.gitignore</code> \u6587\u4EF6\uFF0C\u5728\u91CC\u9762\u6DFB\u52A0\u76F8\u5E94\u7684\u5FFD\u7565\u89C4\u5219\u5373\u53EF\u3002</p><details class="custom-container details"><summary>\u5E38\u7528\u7684\u5FFD\u7565\u89C4\u5219</summary><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.DS_Store
node_modules
/dist


# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,19),d=[l];function c(r,t){return n(),s("div",null,d)}const o=e(a,[["render",c],["__file","index.html.vue"]]);export{o as default};
