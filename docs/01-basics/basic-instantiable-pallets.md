---
sidebar_position: 6
keywords: basics, intermediate, runtime
---

# Basic instantiable pallets

_ There's gotta be a better way than re-writing the same pallet twice..._

:::note
This guide is based on FRAME v1 macros.
:::

## Goal

Learn how to configure instantiable pallets.

## Use cases

- A token chain hosts two independent cryptocurrencies.
- Governance has two (or more) houses which act similarly internally.
- A social network chain that maintains different treasuries.

## Overview

The premise of instantiable pallets is to provide separate storage items for a runtime that contains more than one 
reference to the same pallet. This can be useful in cases where you may need to reuse the logic provided by a single 
pallet. This recipe guides you through how to create two instances of the same pallet and how to configure their 
capabilities. 

## Steps

### 1. Implement the `Instance` type

Instantiable pallets must call the `decl_storage!` macro so that the `Instance` type is created.

Add a generic type for `Instance` in the Config trait, Event type, and Store trait. Learn more about how generic types work in Rust [here] [generics-rust-book]. The code snippet below shows the modifications required for our pallet's `Config` and `Store` traits:

    ```rust
    pub trait Config<I: Instance>: frame_system::Config {
    	type Event: From<Event<Self>> + Into<<Self as frame_system::Config>::Event>;
    }
    /// Include the I: Instance type parameter in storage declaration
    decl_storage! {
    	trait Store for Module<T: Config<I>, I: Instance> as MintToken {
    /* --snip-- */
    ```

### 2. Configure your runtime

Include two instances of `mint_token` in `runtime/src/lib.rs`:

```rust
/* --snip-- */
// Instance1 of mint_token
impl mint_token::Config<mint_token::Instance1> for Runtime {
	type Event = Event;
}

// Instance2 of mint_token
impl mint_token::Config<mint_token::Instance2> for Runtime {
	type Event = Event;
}

/* --snip-- */
MintToken1: mint_token::<Instance1>::{Module, Call, Storage, Event<T>},
MintToken2: mint_token::<Instance2>::{Module, Call, Storage, Event<T>},
/* --snip-- */
```

## Examples

- [reward-coin pallet](/../examples/template-node/pallets/reward-coin/src/lib.rs) 
- [Polkadot's runtime](https://github.com/paritytech/polkadot/blob/master/runtime/polkadot/src/lib.rs#L968)
## Related material

- [generics-rust-book]: https://doc.rust-lang.org/book/ch10-01-syntax.html