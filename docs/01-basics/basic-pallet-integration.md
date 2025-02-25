---
sidebar_position: 1
keywords: basics, beginner, runtime
---

# Basic pallet integration

_A fundamental pattern that all runtime engineers should internalize over time._

[![Try on playground](https://img.shields.io/badge/Playground-Node_Template-brightgreen?logo=Parity%20Substrate)](https://playground.substrate.dev/?deploy=node-template)

## Goal

Learn the steps for integrating a pallet to your runtime.

## Use cases

- Including a custom pallet that implements an event and a call for runtime.
- Including a pallet from Crates.io to a runtime.
## Overview

This guide is an extension to the ["Add a Pallet to Your Runtime" tutorial][add-a-pallet-tutorial], intended as a resource 
for developers new to Substrate looking to quickly integrate a pallet to their runtime. It covers adding both local and external pallets to a runtime.

## Steps

### 1. Import your pallet
#### For local pallets
Assuming a pallet called `pallet_something` is created, the first step is to import it in `/runtime/src/lib.rs`:

```rust
// Import your pallet.
pub use pallet_something;
```
### 2. Include it in `/runtime/src/lib.rs` 
#### For local pallets
Configure your pallet's runtime implementation. Assuming the local pallet only has `Event` and `Call` types exposed to the runtime:

```rust
// Configure your pallet.
impl pallet_something::Config for Runtime {
	type Event = Event;
	type Call = Call;
}
```

Then, declare your pallet and the items it exposes in `construct_runtime!`, including the additional `Module` and `Storage` 
types for the runtime macro: 

```rust
construct_runtime!(
	pub enum Runtime where
		Block = Block,
		NodeBlock = opaque::Block,
		UncheckedExtrinsic = UncheckedExtrinsic
	{
/* --snip-- */
		Something: pallet_something::{Module, Call, Storage, Event<T>}, 
/* --snip-- */
	}
);
```
#### For external pallets
The same pattern applies as for declaring a local pallet, except you must ensure you include all the types your pallet exposes.
In addition, don't forget to include relevant parameter types and constants if relevant. See this examples on how [`pallet_timestamp`][timestamp-frame]
is declared.


### 3. Update `/runtime/Cargo.toml`
#### For local pallets
In `/runtime/Cargo.toml`, include your pallet as a local dependency, include it in `std` and add `runtime-benchmarks`:

```rust
/* --snip-- */
[dependencies.pallet-something]
default-features = false
path = '../pallets/something'
version = '3.0.0'
/* --snip-- */
[features]
default = ['std']
runtime-benchmarks = [
	/* --snip */
	'pallet-something/runtime-benchmarks',
]
std = [
	'pallet-something/std',
/* --snip-- */
]
```
#### For external pallets
Assuming the pallet is hosted in [parity.crates.io][parity-crates], adding it to the runtime would look like this:

```rust
[dependencies.pallet-external]
default-features = false
git = 'https://github.com/paritytech/substrate.git'
rev = 'd6c33e7ec313f9bd5e319dc0a5a3ace5543f9617'
version = '3.0.0'
/* --snip-- */
runtime-benchmarks = [
	/* --snip */
	'pallet-external/runtime-benchmarks',
]
std = [
'pallet-external/std',
/* --snip-- */
]
```
## Examples

- [Template pallet](https://github.com/substrate-developer-hub/substrate-node-template/blob/master/pallets/template/src/lib.rs#L1-L107)
- [Substrate node template](https://github.com/substrate-developer-hub/substrate-node-template)
- [Timestamp pallet in bin][timestamp-frame]

## Related material

- [Mock runtime][mock-runtime] 
- [FRAME Timestamp Pallet][timestamp-crates] in Crates.io
- [Timestamp Pallet associated types][timestamp-rustdocs]

[add-a-pallet-tutorial]: https://substrate.dev/docs/en/tutorials/add-a-pallet/import-a-pallet
[playground]: playground.substrate.dev
[mock-runtime]: https://substrate.dev/docs/en/knowledgebase/runtime/tests#mock-runtime-environment
[parity-crates]: https://crates.parity.io/sc_service/index.html
[timestamp-frame]: https://github.com/paritytech/substrate/blob/master/bin/node/runtime/src/lib.rs#L413-L422
[timestamp-crates]: https://crates.io/crates/pallet-timestamp
[timestamp-rustdocs]: https://substrate.dev/rustdocs/v3.0.0/pallet_timestamp/pallet/trait.Config.html#associated-types
