(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{171:function(e,t,a){"use strict";a.r(t),a.d(t,"MDXContext",(function(){return d})),a.d(t,"MDXProvider",(function(){return m})),a.d(t,"mdx",(function(){return g})),a.d(t,"useMDXComponents",(function(){return p})),a.d(t,"withMDXComponents",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),u=function(e){return function(t){var a=p(t.components);return r.a.createElement(e,s({},t,{components:a}))}},p=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||i;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var o=2;o<i;o++)s[o]=a[o];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},65:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(8),i=(a(0),a(171)),s={sidebar_position:2,keywords:"weights, runtime, FRAME v1"},l={unversionedId:"weights/linear-weight-struct",id:"weights/linear-weight-struct",isDocsHomePage:!1,title:"Linear weighting struct",description:"Get the simple things down first.",source:"@site/docs/03-weights/linear-weight-struct.md",sourceDirName:"03-weights",slug:"/weights/linear-weight-struct",permalink:"/substrate-how-to-guides/docs/weights/linear-weight-struct",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/docs/03-weights/linear-weight-struct.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:"weights, runtime, FRAME v1"},sidebar:"tutorialSidebar",previous:{title:"Conditional weighting struct",permalink:"/substrate-how-to-guides/docs/weights/conditional-weight-struct"},next:{title:"Quadratic weighting struct",permalink:"/substrate-how-to-guides/docs/weights/quadratic-weight-struct"}},c=[{value:"Goal",id:"goal",children:[]},{value:"Use cases",id:"use-cases",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Steps",id:"steps",children:[{value:"1. Write the <code>WeighData</code> struct",id:"1-write-the-weighdata-struct",children:[]},{value:"2. Classify dispatch calls",id:"2-classify-dispatch-calls",children:[]},{value:"3. Implement <code>PaysFee</code>",id:"3-implement-paysfee",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Related material",id:"related-material",children:[]}],o={toc:c};function d(e){var t=e.components,a=Object(r.default)(e,["components"]);return Object(i.mdx)("wrapper",Object(n.default)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"Get the simple things down first.")),Object(i.mdx)("h2",{id:"goal"},"Goal"),Object(i.mdx)("p",null,"Understand how to calculate transaction weights using a custom weighting struct for single transaction values."),Object(i.mdx)("h2",{id:"use-cases"},"Use cases"),Object(i.mdx)("p",null,"Calculate correct weight for a transaction involving a ",Object(i.mdx)("inlineCode",{parentName:"p"},"u32"),"."),Object(i.mdx)("h2",{id:"overview"},"Overview"),Object(i.mdx)("p",null,"This guide goes over the components of a simple weighting struct designed for a single argument dispatch of type ",Object(i.mdx)("inlineCode",{parentName:"p"},"u32"),".\nThe ultimate weight of the transaction is the product of the transaction parameter and the field of this struct. "),Object(i.mdx)("h2",{id:"steps"},"Steps"),Object(i.mdx)("h3",{id:"1-write-the-weighdata-struct"},"1. Write the ",Object(i.mdx)("inlineCode",{parentName:"h3"},"WeighData")," struct"),Object(i.mdx)("p",null,"Using ",Object(i.mdx)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/trait.WeighData.html#impl-WeighData%3CT%3E-for-(Weight%2C%20DispatchClass%2C%20Pays"},Object(i.mdx)("inlineCode",{parentName:"a"},"WeighData")),", write a weighting struct that takes a single ",Object(i.mdx)("inlineCode",{parentName:"p"},"u32")," parameter:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"pub struct Linear(u32);\n\nimpl WeighData<(&u32,)> for Linear {\n    fn weigh_data(&self, (x,): (&u32,)) -> Weight {\n        // Use saturation so that an extremely large \n        // parameter value does not cause overflow\n        x.saturating_mul(self.0).into()\n    }\n}\n")),Object(i.mdx)("h3",{id:"2-classify-dispatch-calls"},"2. Classify dispatch calls"),Object(i.mdx)("p",null,"Since this implementation of ",Object(i.mdx)("inlineCode",{parentName:"p"},"WeighData")," requires a ",Object(i.mdx)("inlineCode",{parentName:"p"},"Dispatch"),", use ","[",Object(i.mdx)("inlineCode",{parentName:"p"},"default"),"][dispatchclass-rustdocs]"," to classify all calls as normal","\u2014","as opposed to operational."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"// Implement ClassifyDispatch\nimpl<T> ClassifyDispatch<T> for Linear {\n    fn classify_dispatch(&self, _: T) -> DispatchClass {\n        // Classify all calls as Normal (which is the default).\n        Default::default()\n    }\n}\n")),Object(i.mdx)("h3",{id:"3-implement-paysfee"},"3. Implement ",Object(i.mdx)("inlineCode",{parentName:"h3"},"PaysFee")),Object(i.mdx)("p",null,"Implement the ",Object(i.mdx)("a",{parentName:"p",href:"https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/trait.PaysFee.html"},Object(i.mdx)("inlineCode",{parentName:"a"},"PaysFee"))," trait to indicate whether fees should actually be charged from the caller. If not, the weights are still applied toward the block maximums."),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"// Implement PaysFee\nimpl<T> PaysFee<T> for Linear {\n    fn pays_fee(&self, _: T) -> Pays {\n        Pays::Yes\n    }\n}\n")),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Feeless transaction pallet"),Object(i.mdx)("li",{parentName:"ul"},"pallet-weights")),Object(i.mdx)("h2",{id:"related-material"},"Related material"),Object(i.mdx)("h4",{id:"how-to-guides"},"How-to guides"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"./linear-weight-struct"},"Linear weighting struct")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"../300/quadratic-weight-struct"},"Quadratic weighting struct"))),Object(i.mdx)("h4",{id:"knowledgebase"},"Knowledgebase"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://substrate.dev/docs/en/knowledgebase/learn-substrate/weight"},"Transaction Weights")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://substrate.dev/docs/en/knowledgebase/runtime/fees"},"Transaction Fees"))),Object(i.mdx)("h4",{id:"other"},"Other"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://wiki.polkadot.network/docs/en/learn-transaction-fees"},"Transaction fees in Polkadot"))))}d.isMDXComponent=!0}}]);