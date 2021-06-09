(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return m})),n.d(t,"MDXProvider",(function(){return u})),n.d(t,"mdx",(function(){return h})),n.d(t,"useMDXComponents",(function(){return c})),n.d(t,"withMDXComponents",(function(){return l}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=i.a.createContext({}),l=function(e){return function(t){var n=c(t.components);return i.a.createElement(e,o({},t,{components:n}))}},c=function(e){var t=i.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.a.createElement(m.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=c(n),l=r,u=m["".concat(o,".").concat(l)]||m[l]||f[l]||a;return n?i.a.createElement(u,s(s({ref:t},d),{},{components:n})):i.a.createElement(u,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return m}));var r=n(3),i=n(8),a=(n(0),n(171)),o={sidebar_position:3,theme:"codeview",code:"code/ringbuffer-pseudo.rs",keywords:["storage migration","runtime"]},d={unversionedId:"storage-migrations/ringbuffer",id:"storage-migrations/ringbuffer",isDocsHomePage:!1,title:"Ringbuffer queue",description:"For those dealing with a little out of the ordinary data structures.",source:"@site/docs/05-storage-migrations/ringbuffer.md",sourceDirName:"05-storage-migrations",slug:"/storage-migrations/ringbuffer",permalink:"/substrate-how-to-guides/docs/storage-migrations/ringbuffer",editUrl:"https://github.com/substrate-developer-hub/substrate-how-to-guides/edit/main/docs/05-storage-migrations/ringbuffer.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,theme:"codeview",code:"code/ringbuffer-pseudo.rs",keywords:["storage migration","runtime"]},sidebar:"tutorialSidebar",previous:{title:"Migration tests",permalink:"/substrate-how-to-guides/docs/storage-migrations/migration-tests"},next:{title:"Configure a chain to POW consensus",permalink:"/substrate-how-to-guides/docs/consensus/pow-consensus"}},s=[{value:"Goal",id:"goal",children:[]},{value:"Use cases",id:"use-cases",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Steps",id:"steps",children:[{value:"1. Defining the RingBuffer trait",id:"1-defining-the-ringbuffer-trait",children:[]},{value:"2. Specifying the Ringbuffer transient",id:"2-specifying-the-ringbuffer-transient",children:[]},{value:"3. RingBuffer implementation",id:"3-ringbuffer-implementation",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"References",id:"references",children:[]}],p={toc:s};function m(e){var t=e.components,n=Object(i.default)(e,["components"]);return Object(a.mdx)("wrapper",Object(r.default)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,Object(a.mdx)("em",{parentName:"p"},"For those dealing with a little out of the ordinary data structures.")),Object(a.mdx)("h2",{id:"goal"},"Goal"),Object(a.mdx)("p",null,"Build a transient storage adapter for a FIFO (First-in-first-out) queue."),Object(a.mdx)("h2",{id:"use-cases"},"Use cases"),Object(a.mdx)("p",null,"Handling complex data structures stored in storage."),Object(a.mdx)("h2",{id:"overview"},"Overview"),Object(a.mdx)("p",null,"A ",Object(a.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Circular_buffer"},"ringbuffer")," that abstracts over storage can be a useful tool when handling storage migrations for more sophisticated pallets. This guide is intended to step you through how to build a storage adapter and use it for a ",Object(a.mdx)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics"},"FIFO")," queue. It will guide you through building a function to overwrite old storage values within pre-defined bounds."),Object(a.mdx)("h2",{id:"steps"},"Steps"),Object(a.mdx)("h3",{id:"1-defining-the-ringbuffer-trait"},"1. Defining the RingBuffer trait"),Object(a.mdx)("p",null,"The ",Object(a.mdx)("inlineCode",{parentName:"p"},"RingBuffer")," trait will serve as the interface to our queue. It must define:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"commit"),": to sync the changes made to the underlying storage."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"push"),": to push an item onto the end of the queue"),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"pop"),": to pop an item from the start of a queue"),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"is_empty"),": checks if queue is empty")),Object(a.mdx)("p",null,"Define it as shown below:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-rust"},"pub trait RingBufferTrait<Item> where Item: Codec + EncodeLike\n{\n    /// Store all changes made in the underlying storage.\n    fn commit(&self);\n    /// Push an item onto the end of the queue.\n    fn push(&mut self, i: Item);\n    /// Pop an item from the start of the queue.\n    fn pop(&mut self) -> Option<Item>;\n    /// Return whether the queue is empty.\n    fn is_empty(&self) -> bool;\n}\n")),Object(a.mdx)("h3",{id:"2-specifying-the-ringbuffer-transient"},"2. Specifying the Ringbuffer transient"),Object(a.mdx)("h4",{id:"start-and-end-bounds"},"Start and End bounds"),Object(a.mdx)("p",null,"We will be storing the start and end of the\nringbuffer separately from the actual items and will thus need to store these in our struct:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-rust"},"pub struct RingBufferTransient<Index>\nwhere\n    Index: Codec + EncodeLike + Eq + Copy,\n{\n    start: Index,\n    end: Index,\n}\n")),Object(a.mdx)("h4",{id:"defining-storage-interface-bounds"},"Defining storage interface bounds"),Object(a.mdx)("p",null,"In order to access the underlying storage we need to include the bounds in storage that can be accessed."),Object(a.mdx)("p",null,"Let type ",Object(a.mdx)("inlineCode",{parentName:"p"},"B")," correspond to the specified bounds; ",Object(a.mdx)("inlineCode",{parentName:"p"},"M")," to the item storage; and ",Object(a.mdx)("inlineCode",{parentName:"p"},"Item")," to specify the constraints on ",Object(a.mdx)("inlineCode",{parentName:"p"},"M"),". Write this as follows:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-rust"},"pub struct RingBufferTransient<Item, B, M, Index>\nwhere\n    Item: Codec + EncodeLike,\n    // A StorageValue storing a tuple of indices (Index, Index)\n    B: StorageValue<(Index, Index), Query = (Index, Index)>,\n    // A StorageMap mapping from our Index type to the Item type\n    M: StorageMap<Index, Item, Query = Item>,\n    //\n    Index: Codec + EncodeLike + Eq + Copy,\n{\n    start: Index,\n    end: Index,\n    _phantom: PhantomData<(Item, B, M)>,\n}\n")),Object(a.mdx)("blockquote",null,Object(a.mdx)("p",{parentName:"blockquote"},Object(a.mdx)("strong",{parentName:"p"},"Note"),": The ",Object(a.mdx)("inlineCode",{parentName:"p"},"Query")," type is specified to help with type inference (because the value returned can\nbe different from the stored representation).\nThe ",Object(a.mdx)("a",{parentName:"p",href:"https://docs.rs/parity-scale-codec/1.3.0/parity_scale_codec/trait.Codec.html"},Object(a.mdx)("inlineCode",{parentName:"a"},"Codec"))," and\n",Object(a.mdx)("a",{parentName:"p",href:"https://docs.rs/parity-scale-codec/1.3.0/parity_scale_codec/trait.EncodeLike.html"},Object(a.mdx)("inlineCode",{parentName:"a"},"EncodeLike")),"\ntype constraints make sure that both items and indices can be stored in storage.\nThe ",Object(a.mdx)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/marker/struct.PhantomData.html"},Object(a.mdx)("inlineCode",{parentName:"a"},"PhantomData")),' is needed in order\nto "hold on to" the types during the lifetime of the transient object.')),Object(a.mdx)("h4",{id:"specifying-type-constraints-for-index"},"Specifying type constraints for ",Object(a.mdx)("inlineCode",{parentName:"h4"},"Index")),Object(a.mdx)("p",null,"Specify the default type for ",Object(a.mdx)("inlineCode",{parentName:"p"},"Index")," as ",Object(a.mdx)("inlineCode",{parentName:"p"},"u16"),". In addition, add `",Object(a.mdx)("inlineCode",{parentName:"p"},"WrappingsOps")," and ",Object(a.mdx)("inlineCode",{parentName:"p"},"From<u8>"),"."),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-rust"},"type DefaultIdx = u16;\npub struct RingBufferTransient<Item, B, M, Index = DefaultIdx>\nwhere\n    Item: Codec + EncodeLike,\n    B: StorageValue<(Index, Index), Query = (Index, Index)>,\n    M: StorageMap<Index, Item, Query = Item>,\n    Index: Codec + EncodeLike + Eq + WrappingOps + From<u8> + Copy,\n{\n    start: Index,\n    end: Index,\n    _phantom: PhantomData<(Item, B, M)>,\n}\n")),Object(a.mdx)("h3",{id:"3-ringbuffer-implementation"},"3. RingBuffer implementation"),Object(a.mdx)("p",null,"Now that we have the type definition for ",Object(a.mdx)("inlineCode",{parentName:"p"},"RingBufferTransient")," we need to write the implementation."),Object(a.mdx)("h4",{id:"initialize-the-transient"},"Initialize the transient"),Object(a.mdx)("p",null,"Specify how to create a new instance by creating a function called ",Object(a.mdx)("inlineCode",{parentName:"p"},"new"),", which makes use of the bounds ",Object(a.mdx)("inlineCode",{parentName:"p"},"B")," in storage to intialize the transient:"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-rust"},"impl<Item, B, M, Index> RingBufferTransient<Item, B, M, Index>\nwhere // ... same where clause as the type, elided here\n{\n    pub fn new() -> RingBufferTransient<Item, B, M, Index> {\n        let (start, end) = B::get();\n        RingBufferTransient {\n            start,\n            end,\n            _phantom: PhantomData,\n        }\n    }\n}\n")),Object(a.mdx)("h4",{id:"implementing-ringbuffertrait"},"Implementing ",Object(a.mdx)("inlineCode",{parentName:"h4"},"RingBufferTrait")),Object(a.mdx)("p",null,"To implement ",Object(a.mdx)("inlineCode",{parentName:"p"},"RingBufferTrait"),", write the following functions:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"commit()"),": to put the potentially changed bounds in storage"),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"is_empty()"),": to check whether the queue is empty to avoid expensive accesses to storage"),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"push()"),": to uphold the corresponding invariants from ",Object(a.mdx)("inlineCode",{parentName:"li"},"is_empty()"),"."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"pop()"),": if the queue is not empty\nwe ",Object(a.mdx)("inlineCode",{parentName:"li"},"take")," the value at ",Object(a.mdx)("inlineCode",{parentName:"li"},"self.start")," from storage, then increment ",Object(a.mdx)("inlineCode",{parentName:"li"},"self.start")," to point to the new first item of the queue"),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"wrapping_add"),": allows our ringbuffer to wrap around when reaching ",Object(a.mdx)("inlineCode",{parentName:"li"},"max_value")," of the ",Object(a.mdx)("inlineCode",{parentName:"li"},"Index")," type. The next step covers writing the ",Object(a.mdx)("inlineCode",{parentName:"li"},"WrappingOps")," trait declaration.")),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-rust"},"impl<Item, B, M, Index> RingBufferTrait<Item> for RingBufferTransient<Item, B, M, Index>\nwhere\n    Item: Codec + EncodeLike,\n    B: StorageValue<(Index, Index), Query = (Index, Index)>,\n    M: StorageMap<Index, Item, Query = Item>,\n    Index: Codec + EncodeLike + Eq + WrappingOps + From<u8> + Copy,\n{\n    fn commit(&self) {\n        B::put((self.start, self.end));\n    }\n\n    fn is_empty(&self) -> bool {\n        self.start == self.end\n    }\n\n    fn push(&mut self, item: Item) {\n        M::insert(self.end, item);\n        // this will intentionally overflow and wrap around when bonds_end\n        // reaches `Index::max_value` because we want a ringbuffer.\n        let next_index = self.end.wrapping_add(1.into());\n        if next_index == self.start {\n            // queue presents as empty but is not\n            // --\x3e overwrite the oldest item in the FIFO ringbuffer\n            self.start = self.start.wrapping_add(1.into());\n        }\n        self.end = next_index;\n    }\n\n    fn pop(&mut self) -> Option<Item> {\n        if self.is_empty() {\n            return None;\n        }\n        let item = M::take(self.start);\n        self.start = self.start.wrapping_add(1.into());\n\n        item.into()\n    }\n")),Object(a.mdx)("p",null,"The ",Object(a.mdx)("inlineCode",{parentName:"p"},"if")," is necessary because we need to keep the invariant that ",Object(a.mdx)("inlineCode",{parentName:"p"},"start == end"),' means that the queue\nis empty, otherwise we would need to keep track of this state separately. Consequently, we "toss away" the\noldest item in the queue (if a new item is pushed into a full queue) by incrementing the start index.'),Object(a.mdx)("h4",{id:"the-need-for-the-wrappingops-trait"},"The need for the ",Object(a.mdx)("inlineCode",{parentName:"h4"},"WrappingOps")," trait"),Object(a.mdx)("p",null,"Since ",Object(a.mdx)("inlineCode",{parentName:"p"},"std")," does not provide a trait that allows the ringbuffer to be agnostic to the concrete ",Object(a.mdx)("inlineCode",{parentName:"p"},"Index")," type used. Therefore, we need to create our own trait for the types we want to support (",Object(a.mdx)("inlineCode",{parentName:"p"},"u8"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"u16"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"u32")," and ",Object(a.mdx)("inlineCode",{parentName:"p"},"u64"),"):"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-rust"},"// There is no equivalent trait in std so we create one.\npub trait WrappingOps {\n    fn wrapping_add(self, rhs: Self) -> Self;\n    fn wrapping_sub(self, rhs: Self) -> Self;\n}\n\nmacro_rules! impl_wrapping_ops {\n    ($type:ty) => {\n        impl WrappingOps for $type {\n            fn wrapping_add(self, rhs: Self) -> Self {\n                self.wrapping_add(rhs)\n            }\n            fn wrapping_sub(self, rhs: Self) -> Self {\n                self.wrapping_sub(rhs)\n            }\n        }\n    };\n}\n\nimpl_wrapping_ops!(u8);\nimpl_wrapping_ops!(u16);\nimpl_wrapping_ops!(u32);\nimpl_wrapping_ops!(u64);\n")),Object(a.mdx)("h4",{id:"implementing-the-drop-trait"},"Implementing the ",Object(a.mdx)("inlineCode",{parentName:"h4"},"Drop")," trait"),Object(a.mdx)("p",null,"In order to make the usage more ergonomic and to avoid synchronization errors (where the storage map\ndiverges from the bounds) we also implement the\n",Object(a.mdx)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/ops/trait.Drop.html"},Object(a.mdx)("inlineCode",{parentName:"a"},"Drop")," trait"),":"),Object(a.mdx)("pre",null,Object(a.mdx)("code",{parentName:"pre",className:"language-rust"},"impl<Item, B, M, Index> Drop for RingBufferTransient<Item, B, M, Index>\nwhere // ... same where clause elided\n{\n    fn drop(&mut self) {\n        <Self as RingBufferTrait<Item>>::commit(self);\n    }\n}\n")),Object(a.mdx)("p",null,"On ",Object(a.mdx)("inlineCode",{parentName:"p"},"drop"),", we ",Object(a.mdx)("inlineCode",{parentName:"p"},"commit")," the bounds to storage. With this implementation of ",Object(a.mdx)("inlineCode",{parentName:"p"},"Drop"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"commit")," is called\nwhen our transient goes out of scope, making sure that the storage state is consistent for the next\ncall to the using pallet."),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",{parentName:"li",href:"https://github.com/substrate-developer-hub/recipes/tree/master/pallets/ringbuffer-queue/src/lib.rs"},Object(a.mdx)("inlineCode",{parentName:"a"},"ringbuffer-queue/src/lib.rs")),": Shows a typical usage of the transient storage adapter."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",{parentName:"li",href:"https://github.com/substrate-developer-hub/recipes/tree/master/pallets/ringbuffer-queue/src/ringbuffer.rs"},Object(a.mdx)("inlineCode",{parentName:"a"},"ringbuffer-queue/src/ringbuffer.rs")),": Contains an implementation of a transient storage adapter.")),Object(a.mdx)("h2",{id:"references"},"References"),Object(a.mdx)("h4",{id:"how-to-guides"},"How-to guides"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",{parentName:"li",href:"nicks-migration"},"Basic storage migration"))),Object(a.mdx)("h4",{id:"rust-docs"},"Rust docs"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",{parentName:"li",href:"https://doc.rust-lang.org/book/ch17-02-trait-objects.html#trait-objects-perform-dynamic-dispatch"},"trait objects"))))}m.isMDXComponent=!0}}]);