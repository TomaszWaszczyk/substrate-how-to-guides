(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return u})),n.d(t,"MDXProvider",(function(){return p})),n.d(t,"mdx",(function(){return g})),n.d(t,"useMDXComponents",(function(){return m})),n.d(t,"withMDXComponents",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),d=function(e){return function(t){var n=m(t.components);return r.a.createElement(e,o({},t,{components:n}))}},m=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,p=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(p,s(s({ref:t},c),{},{components:n})):r.a.createElement(p,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),i=(n(0),n(171)),o={sidebar_position:1,keywords:"pallet design, intermediate, runtime"},c={unversionedId:"pallet-design/storage-value-struct",id:"pallet-design/storage-value-struct",isDocsHomePage:!1,title:"Create and use a struct in storage",description:"Learn how to write a struct to manage your storage values.",source:"@site/docs/02-pallet-design/storage-value-struct.md",sourceDirName:"02-pallet-design",slug:"/pallet-design/storage-value-struct",permalink:"/substrate-how-to-guides/docs/pallet-design/storage-value-struct",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/docs/02-pallet-design/storage-value-struct.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,keywords:"pallet design, intermediate, runtime"},sidebar:"tutorialSidebar",previous:{title:"Using Pallet Helper Functions",permalink:"/substrate-how-to-guides/docs/basics/helper-functions"},next:{title:"Simple crowdfund",permalink:"/substrate-how-to-guides/docs/pallet-design/simple-crowdfund"}},s=[{value:"Goal",id:"goal",children:[]},{value:"Use cases",id:"use-cases",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Steps",id:"steps",children:[{value:"1. Create a your struct",id:"1-create-a-your-struct",children:[]},{value:"2. Declare the struct as a storage item",id:"2-declare-the-struct-as-a-storage-item",children:[]},{value:"3. Configure <code>GenesisConfig</code> and <code>GenesisBuild</code>",id:"3-configure-genesisconfig-and-genesisbuild",children:[]},{value:"4. Use the struct in <code>on_initialize()</code>",id:"4-use-the-struct-in-on_initialize",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Resources",id:"resources",children:[]}],l={toc:s};function u(e){var t=e.components,n=Object(r.default)(e,["components"]);return Object(i.mdx)("wrapper",Object(a.default)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,Object(i.mdx)("em",{parentName:"p"},"Learn how to write a struct to manage your storage values.")),Object(i.mdx)("h2",{id:"goal"},"Goal"),Object(i.mdx)("p",null,"Create a struct in ",Object(i.mdx)("a",{parentName:"p",href:"https://crates.parity.io/frame_support/storage/trait.StorageValue.html"},Object(i.mdx)("inlineCode",{parentName:"a"},"StorageValue"))," and use it on ",Object(i.mdx)("inlineCode",{parentName:"p"},"on_initialize"),"."),Object(i.mdx)("h2",{id:"use-cases"},"Use cases"),Object(i.mdx)("p",null,"Keep track of different accounts and balances for testing a pallet."),Object(i.mdx)("h2",{id:"overview"},"Overview"),Object(i.mdx)("p",null,"Creating a struct of similarly grouped storage items is a neat way to keep track of them.\nThey can be easier to reference than keeping individual ",Object(i.mdx)("inlineCode",{parentName:"p"},"StorageValue")," items separate this way.\nIn addition, they can be used to ease testing and genesis configuration. "),Object(i.mdx)("p",null,"This guide steps through the procedure of creating a struct in storage which:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"keeps track of an initial amount (",Object(i.mdx)("inlineCode",{parentName:"li"},"issuance"),")"),Object(i.mdx)("li",{parentName:"ul"},"keeps track of the account that receives that amount (",Object(i.mdx)("inlineCode",{parentName:"li"},"minter"),")"),Object(i.mdx)("li",{parentName:"ul"},"keeps track of an account that can burn some amount (",Object(i.mdx)("inlineCode",{parentName:"li"},"burner"),")"),Object(i.mdx)("li",{parentName:"ul"},"is (partially) used in ",Object(i.mdx)("inlineCode",{parentName:"li"},"on_initialize"))),Object(i.mdx)("h2",{id:"steps"},"Steps"),Object(i.mdx)("h3",{id:"1-create-a-your-struct"},"1. Create a your struct"),Object(i.mdx)("p",null,"Call it ",Object(i.mdx)("inlineCode",{parentName:"p"},"MetaData")," and declare its different types: "),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"#[derive(Clone, Encode, Decode, Eq, PartialEq, RuntimeDebug, Default)]\npub struct MetaData<AccountId, Balance> {\n    issuance: Balance,\n    minter: AccountId,\n    burner: AccountId,\n}\n")),Object(i.mdx)("h3",{id:"2-declare-the-struct-as-a-storage-item"},"2. Declare the struct as a storage item"),Object(i.mdx)("p",null,"Use ",Object(i.mdx)("inlineCode",{parentName:"p"},"StorageValue")," to declare the struct as a new single item in storage:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"#[pallet::storage]\n    #[pallet::getter(fn meta_data)]\n    pub(super) type MetaDataStore<T: Config> = StorageValue<_, MetaData<T::AccountId, T::Balance>, ValueQuery>;\n")),Object(i.mdx)("h3",{id:"3-configure-genesisconfig-and-genesisbuild"},"3. Configure ",Object(i.mdx)("inlineCode",{parentName:"h3"},"GenesisConfig")," and ",Object(i.mdx)("inlineCode",{parentName:"h3"},"GenesisBuild")),Object(i.mdx)("h4",{id:"genesisconfig"},Object(i.mdx)("inlineCode",{parentName:"h4"},"GenesisConfig")),Object(i.mdx)("p",null,"Use ",Object(i.mdx)("inlineCode",{parentName:"p"},"#[pallet::genesis_config]")," to declare the admin account that you'll use in your to\ninitialize values from your ",Object(i.mdx)("inlineCode",{parentName:"p"},"MetaData")," struct:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},'// Declare `admin` as type `T::AccountId`.\n#[pallet::genesis_config]\n    pub struct GenesisConfig<T: Config> {\n        pub admin: T::AccountId,\n    }\n// Give it a default value.\n#[cfg(feature = "std")]\n    impl<T: Config> Default for GenesisConfig<T> {\n        fn default() -> Self {\n            Self {\n                admin: Default::default(),\n            }\n        }\n    }\n')),Object(i.mdx)("h4",{id:"genesisbuild"},Object(i.mdx)("inlineCode",{parentName:"h4"},"GenesisBuild")),Object(i.mdx)("p",null,"Use ",Object(i.mdx)("inlineCode",{parentName:"p"},"#[pallet::genesis_build]")," to initialize the values of your struct, using ",Object(i.mdx)("inlineCode",{parentName:"p"},"admin")," to initialize the values\nof type ",Object(i.mdx)("inlineCode",{parentName:"p"},"T::AccountId"),":   "),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"#[pallet::genesis_build]\n    impl<T: Config> GenesisBuild<T> for GenesisConfig<T> {\n        fn build(&self) {\n            MetaDataStore::<T>::put(MetaData {\n                issuance: Zero::zero(),\n                minter: self.admin.clone(),\n                burner: self.admin.clone(),\n            });\n        }\n    }\n")),Object(i.mdx)("h3",{id:"4-use-the-struct-in-on_initialize"},"4. Use the struct in ",Object(i.mdx)("inlineCode",{parentName:"h3"},"on_initialize()")),Object(i.mdx)("p",null,"Assign an amount to the ",Object(i.mdx)("inlineCode",{parentName:"p"},"issuance")," field of ",Object(i.mdx)("inlineCode",{parentName:"p"},"MetaData")," to be initialized when the chain is launched:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-rust"},"fn on_initialize(_n: T::BlockNumber) -> Weight {\n            let mut meta = MetaDataStore::<T>::get();\n            let value: T::Balance = 50u8.into();\n            meta.issuance = meta.issuance.saturating_add(value);\n            // Add the amount to the `minter` account in storage.\n            Accounts::<T>::mutate(&meta.minter, |bal| {\n                *bal = bal.saturating_add(value);\n            });\n            \n        }\n")),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://github.com/sacha-l/substrate-how-to-guides/blob/dc3e1d6c79198558f465fbbdbbda03a4237eacf3/how-to-substrate/example-code/template-node/pallets/reward-coin/src/lib.rs#L24-L28"},Object(i.mdx)("inlineCode",{parentName:"a"},"reward-coin")))),Object(i.mdx)("h2",{id:"resources"},"Resources"),Object(i.mdx)("h4",{id:"how-to-guides"},"How-to guides"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"../basics/configurable-constants"},"Configure a runtime constant"))),Object(i.mdx)("h4",{id:"rust-docs"},"Rust docs"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",{parentName:"li",href:"https://substrate.dev/rustdocs/v3.0.0/sp_std/default/trait.Default.html"},Object(i.mdx)("inlineCode",{parentName:"a"},"Default::default()")))))}u.isMDXComponent=!0}}]);