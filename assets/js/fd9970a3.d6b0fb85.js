(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return l})),n.d(t,"MDXProvider",(function(){return m})),n.d(t,"mdx",(function(){return h})),n.d(t,"useMDXComponents",(function(){return p})),n.d(t,"withMDXComponents",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){return function(t){var n=p(t.components);return o.a.createElement(e,a({},t,{components:n}))}},p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},m=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,m=l["".concat(a,".").concat(d)]||l[d]||f[d]||i;return n?o.a.createElement(m,u(u({ref:t},s),{},{components:n})):o.a.createElement(m,u({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(8),i=(n(0),n(171)),a={sidebar_position:5,keywords:"pallet design, intermediate, runtime"},s={unversionedId:"Tutorials/Kitties/kitties-frontend",id:"Tutorials/Kitties/kitties-frontend",isDocsHomePage:!1,title:"Part IV: Kitties front-end",description:"This is tutorial steps you through building a fully functional dapp for managing Substrate Kitties.",source:"@site/docs/07-Tutorials/01-Kitties/kitties-frontend.md",sourceDirName:"07-Tutorials/01-Kitties",slug:"/Tutorials/Kitties/kitties-frontend",permalink:"/substrate-how-to-guides/docs/Tutorials/Kitties/kitties-frontend",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/docs/07-Tutorials/01-Kitties/kitties-frontend.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,keywords:"pallet design, intermediate, runtime"},sidebar:"tutorialSidebar",previous:{title:"Part III: Interacting with your Kitties",permalink:"/substrate-how-to-guides/docs/Tutorials/Kitties/interacting-functions"},next:{title:"How-to Template",permalink:"/substrate-how-to-guides/docs/contribute/how-to-template"}},u=[{value:"Goal",id:"goal",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Steps",id:"steps",children:[{value:"1. Build React components for our functions",id:"1-build-react-components-for-our-functions",children:[]},{value:"2. Connect our node to a front-end (custom types)",id:"2-connect-our-node-to-a-front-end-custom-types",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Resources",id:"resources",children:[]}],c={toc:u};function l(e){var t=e.components,n=Object(o.default)(e,["components"]);return Object(i.mdx)("wrapper",Object(r.default)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"This is tutorial steps you through building a fully functional dapp for managing Substrate Kitties.")),Object(i.mdx)("h2",{id:"goal"},"Goal"),Object(i.mdx)("p",null,"Build an NFT dapp inspired by the original Crypto Kitties dapp on Ethereum."),Object(i.mdx)("h2",{id:"overview"},"Overview"),Object(i.mdx)("p",null,"In this first part, you will break things down into components which you will need to build throughout the tutorial.\nIn doing so, you will learn the basics of setting up a pallet and including basic storage items to run your Substrate node."),Object(i.mdx)("p",null,"Before jumping into the next section, let's have a look at what we'll be doing."),Object(i.mdx)("p",null,"The Kitties tutorial is a step by step guide to build a decentralized application that enables the creation and ownership management\nof NFT Kitties. In this implementation, to keep things simple, Kitties really can only do the following things:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"be created either by some original source or by being bred by existing Kitties."),Object(i.mdx)("li",{parentName:"ul"},"be sold at a price set by their owner"),Object(i.mdx)("li",{parentName:"ul"},"be transferred from one owner to another")),Object(i.mdx)("h2",{id:"steps"},"Steps"),Object(i.mdx)("h3",{id:"1-build-react-components-for-our-functions"},"1. Build React components for our functions"),Object(i.mdx)("h3",{id:"2-connect-our-node-to-a-front-end-custom-types"},"2. Connect our node to a front-end (custom types)"),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)("h2",{id:"resources"},"Resources"),Object(i.mdx)("h4",{id:"how-to-guides"},"How-to guides"),Object(i.mdx)("h4",{id:"rust-docs"},"Rust docs"))}l.isMDXComponent=!0}}]);