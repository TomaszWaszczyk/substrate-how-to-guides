(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{171:function(e,t,r){"use strict";r.r(t),r.d(t,"MDXContext",(function(){return d})),r.d(t,"MDXProvider",(function(){return m})),r.d(t,"mdx",(function(){return f})),r.d(t,"useMDXComponents",(function(){return p})),r.d(t,"withMDXComponents",(function(){return l}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=o.a.createContext({}),l=function(e){return function(t){var r=p(t.components);return o.a.createElement(e,a({},t,{components:r}))}},p=function(e){var t=o.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(r),l=n,m=d["".concat(a,".").concat(l)]||d[l]||h[l]||i;return r?o.a.createElement(m,c(c({ref:t},s),{},{components:r})):o.a.createElement(m,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},61:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(8),i=(r(0),r(171)),a={sidebar_position:1},s={unversionedId:"contribute/how-to-template",id:"contribute/how-to-template",isDocsHomePage:!1,title:"How-to Template",description:"This is the template for writing a Substrate how-to guide.",source:"@site/docs/contribute/how-to-template.md",sourceDirName:"contribute",slug:"/contribute/how-to-template",permalink:"/substrate-how-to-guides/docs/contribute/how-to-template",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/docs/contribute/how-to-template.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Part IV: Kitties front-end",permalink:"/substrate-how-to-guides/docs/Tutorials/Kitties/kitties-frontend"}},c=[{value:"Goal",id:"goal",children:[]},{value:"Use cases",id:"use-cases",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Steps",id:"steps",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Resources",id:"resources",children:[]}],u={toc:c};function d(e){var t=e.components,r=Object(o.default)(e,["components"]);return Object(i.mdx)("wrapper",Object(n.default)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"This is the template for writing a Substrate how-to guide. "),Object(i.mdx)("h1",{id:"title"},"Title"),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"The guide's intentions should be clear by just reading the title.")),Object(i.mdx)("h2",{id:"goal"},"Goal"),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"What specific goal will this guide achieve?")),Object(i.mdx)("h2",{id:"use-cases"},"Use cases"),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},'What practical use cases can this guide be applied to? This can be general, e.g. "implementing a second currency for users to pay fees in" or specific, for e.g. "a runtime migration from a ',Object(i.mdx)("inlineCode",{parentName:"em"},"Vec<u32>"),' to SomeStruct ". It is likely that the more advanced the guide, the more specific its use cases will be. If more than one, bullet list. Otherwise, one phrase.')),Object(i.mdx)("h2",{id:"overview"},"Overview"),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"A brief overview of why this is a useful guide and what concepts it uses. This is a good place to link to other devhub ressources, including other guides, aiming to give the reader the learning background required to understand how this guide can be useful to them.")),Object(i.mdx)("h2",{id:"steps"},"Steps"),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"What are the steps that will be taken to achieve the goal? Each step should be action driven, with little description, minimal fluff,\nlinking to other docs if needed. Code snippets can help illustrate the steps but should not take over the focus","\u2014",'i.e "how do I do this", not "what do I do".')),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"Code-based examples that make use of this guide. This shows at least one reference of what this guide covers with a working example.This could be a reference to a Playground codebase instance, existing Substrate code or custom code that lives in the how-to guide repo.")),Object(i.mdx)("h2",{id:"resources"},"Resources"),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"A bulleted list of links to similar guides; other devhub ressources; and related material. See options below.")),Object(i.mdx)("h4",{id:"how-to-guides"},"How-to guides"),Object(i.mdx)("h4",{id:"tutorials"},"Tutorials"),Object(i.mdx)("h4",{id:"knowledgebase"},"Knowledgebase"),Object(i.mdx)("h4",{id:"rust-docs"},"Rust docs"),Object(i.mdx)("h4",{id:"other"},"Other"))}d.isMDXComponent=!0}}]);