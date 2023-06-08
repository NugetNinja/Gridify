import{r as c,o as d,c as l,b as e,a as t,w as i,t as s,F as h,e as a,d as u}from"./app.143b3677.js";import{_}from"./plugin-vue_export-helper.21dcd24c.js";const p={},g=e("h1",{id:"getting-started",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#getting-started","aria-hidden":"true"},"#"),a(" Getting Started")],-1),m=e("p",null,"There are two packages available for gridify in the nuget repository.",-1),f={href:"https://www.nuget.org/packages/Gridify/",target:"_blank",rel:"noopener noreferrer"},k=a("Gridify"),y={href:"https://www.nuget.org/packages/Gridify.EntityFramework/",target:"_blank",rel:"noopener noreferrer"},w=a("Gridify.EntityFrmamework"),b={class:"custom-container tip"},v=e("p",{class:"custom-container-title"},"TIP",-1),x=e("p",null,[a("If you are using the Entity framework in your project, you should install the "),e("code",null,"Gridify.EntityFramework"),a(" package instead of "),e("code",null,"Gridify"),a(".")],-1),G=a("This package has the same functionality as the "),E=e("code",null,"Gridify",-1),F=a(" package, but it is designed to be more compatible with "),I=a("Entity Framework"),N=a("."),T=e("h2",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),a(" Installation")],-1),V=e("h3",{id:"package-manager",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#package-manager","aria-hidden":"true"},"#"),a(" Package Manager")],-1),L={class:"language-pm ext-pm"},B={class:"language-pm"},P={class:"language-pm ext-pm"},S={class:"language-pm"},$=e("h3",{id:"net-cli",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#net-cli","aria-hidden":"true"},"#"),a(" .NET CLI")],-1),C={class:"language-cmd ext-cmd"},R={class:"language-cmd"},U={class:"language-cmd ext-cmd"},j={class:"language-cmd"},q=u(`<h2 id="namespace" tabindex="-1"><a class="header-anchor" href="#namespace" aria-hidden="true">#</a> Namespace</h2><p>After installing the package, you can use the <code>Gridify</code> namespace to access the package classes and static Extension methods.</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code><span class="token keyword">using</span> <span class="token namespace">Gridify</span><span class="token punctuation">;</span>
<span class="token range operator">..</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use</h2><p>There are two ways to use Gridify:</p>`,5),A=a("Using the "),D=a("Extension"),H=a(" methods"),M=a("Using "),Q=a("QueryBuilder");function z(n,J){const r=c("ExternalLinkIcon"),o=c("RouterLink");return d(),l(h,null,[g,m,e("ul",null,[e("li",null,[e("a",f,[k,t(r)])]),e("li",null,[e("a",y,[w,t(r)])])]),e("div",b,[v,x,e("p",null,[G,E,F,t(o,{to:"/guide/entity-framework.html"},{default:i(()=>[I]),_:1}),N])]),T,V,e("div",L,[e("pre",B,[e("code",null,"Install-Package Gridify -Version "+s(n.$version)+`
`,1)])]),e("div",P,[e("pre",S,[e("code",null,"Install-Package Gridify.EntityFramework -Version "+s(n.$version)+`
`,1)])]),$,e("div",C,[e("pre",R,[e("code",null,"dotnet add package Gridify --version "+s(n.$version)+`
`,1)])]),e("div",U,[e("pre",j,[e("code",null,"dotnet add package Gridify.EntityFramework --version "+s(n.$version)+`
`,1)])]),q,e("ul",null,[e("li",null,[A,t(o,{to:"/guide/extensions.html"},{default:i(()=>[D]),_:1}),H]),e("li",null,[M,t(o,{to:"/guide/querybuilder.html"},{default:i(()=>[Q]),_:1})])])],64)}var W=_(p,[["render",z]]);export{W as default};
