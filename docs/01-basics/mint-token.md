---
sidebar_position: 2
keywords: basics, beginner, runtime
---

# Primitive token mint

_ Get started with the simple things as a basis to learn more. _

:::info
This is a beginner recipe intended for novice Substrate developers looking to explore ways to create tokens in Substrate. This approach is not recommended best practice. Use this guide to learn how to improve upon your runtime logic's capabilities and code quality. See the [Examples](#examples) section for a practical implementations of this guide.
:::

## Goal

Create a simple token mint pallet.

## Use cases

Give any account the ability to create a token supply in exchange for native token fee.

## Overview

This guide will step you through an effective way to mint a token by leveraging the primitive capabilities that 
[StorageMap][storagemap-rustdocs] gives us. To achieve this, this "primitive" approach uses the [blake2_128_concat][blake2-128-concat-rustdocs] `hasher` to map balances to account IDs, similar to how the [Balances][balances-frame] pallet makes use of it to store and keep track of account balances.

## Steps

### 1. Setup your pallet's `Config` trait

Using the Node Template as a starting point, specify the types your pallet depends on and the [`Events`][events-kb] it emits:

```rust
// The configuration trait
pub trait Config: system::Config {
	type Event: From<Event<Self>> + Into<<Self as frame_system::Config>::Event>;
	type Balance: Member + Parameter + AtLeast32BitUnsigned + Default + Copy;
}
/* --snip-- */
pub enum Event<T: Config> {
	MintedNewSupply(T::AccountId),
	Transferred(T::AccountId, T::AccountId, T::Balance),
}
```

### 2. Declare your storage item `StorageMap`

This pallet only keeps track of the balance to account ID mapping. Call it `BalanceToAccount`:

```rust
/* --snip-- */
	#[pallet::storage]
	#[pallet::getter(fn get_balance)]
	pub(super) type BalanceToAccount<T: Config> = StorageMap<
		_, 
		Blake2_128Concat, 
		T::AccountId, 
		T::Balance,
		ValueQuery
		>;
/* --snip-- */
```
### 3. Create your pallet’s functions

We can now bring our attention to creating the intended capabilities of our pallet with the following functions:

(i) `mint()`: to issue a token supply from any origin.

```rust
/* --snip-- */
#[pallet::weight(10_000 + T::DbWeight::get().writes(1))]
pub(super) fn mint(
	origin: OriginFor<T>,
	#[pallet::compact] amount: T::Balance
) -> DispatchResultWithPostInfo {
			
	let sender = ensure_signed(origin)?;
		
	// Update storage.
	<BalanceToAccount<T>>::insert(&sender, amount);

	// Emit an event.
	Self::deposit_event(Event::MintedNewSupply(sender));
			
	// Return a successful DispatchResultWithPostInfo.
	Ok(().into())	
}
/* --snip-- */
```

(ii) `transfer()`: to allow the minting account to transfer a given balance to another account.
#### Define transfer variables
Start with writing out the variables, using `get_balance` to reference to `StorageMap` of balances previously
declared in storage:

```rust
pub(super) fn transfer(
			origin: OriginFor<T>,
			to: T::AccountId,
			#[pallet::compact] amount: T::Balance,
		) -> DispatchResultWithPostInfo {
			let sender = ensure_signed(origin)?;
			let sender_balance = Self::get_balance(&sender);
			let receiver_balance = Self::get_balance(&to);
/* --snip-- */
```
#### Verify and add error handling
When performing balance updates, use `checked_sub` and `checked_add` to handle potential errors with overflow:

```rust
/* --snip-- */
		// Calculate new balances.
		let updated_from_balance = sender_balance.checked_sub(value).ok_or(<Error<T>>::InsufficientFunds)?;
		let updated_to_balance = receiver_balance.checked_add(value).expect("Entire supply fits in u64, qed");
/* --snip-- */
```
#### Write to storage
 Once the new balances are calculated, write their values to storage and deposit the event to the current block:

```rust
			// Write new balances to storage.
			<Balances<T>>::insert(&sender, updated_from_balance);
			<Balances<T>>::insert(&to, updated_to_balance);

			Self::deposit_event(RawEvent::Transfer(sender, to, value));
			Ok(())
		}
/* --snip-- */
```

If `checked_sub()` returns `None`, the operation caused an overflow and throws an error. 
### 4. Include your pallet in your runtime

Refer to [this guide](./basic-pallet-integration) if you’re not yet familiar with this procedure.

>**Further learning 💡 ** 
> - **Safety.** The `mint` function takes in an amount to mint which is *not good practice* because it implies that 
users have unlimited access to writing to storage. Safer approaches include: using configuring `GenesisConfig` or 
fixing a predetermined maximum value in runtime. 
> - **Weights.** All the weights were set to 10_000 in the above code snippets. Learn more about weight 
configuration in this [basic guide on weights](./basic-tx-weight-calculations).
> - **Origins.** One assumption this guide makes is that the origin will always be the sudo user. 
Origins are a powerful capability in Substrate. Learn more on how to customize an origin in [this guide](./origins-beginner).

## Examples
- [mint-token pallet](https://github.com/sacha-l/substrate-how-to-guides/blob/main/how-to-substrate/example-code/template-node/pallets/mint-token/src/lib.rs#L1-L130)
- [reward-coin pallet](https://github.com/sacha-l/substrate-how-to-guides/blob/main/how-to-substrate/example-code/template-node/pallets/reward-coin/src/lib.rs#L1-L249) 
## Related material
#### How-to guides
- [Configure a runtime constant](./configurable-constants)
#### Rust docs
- [Deposit event method][deposit-event-rustdocs]

[storagemap-rustdocs]: https://substrate.dev/rustdocs/v3.0.0/frame_support/storage/trait.StorageMap.html
[blake2-128-concat-rustdocs]: https://substrate.dev/docs/en/knowledgebase/runtime/storage#hashing-algorithms
[balances-frame]: https://substrate.dev/docs/en/knowledgebase/runtime/frame#balances
[events-kb]: https://substrate.dev/docs/en/knowledgebase/runtime/events
[deposit-event-rustdocs]: https://substrate.dev/rustdocs/v3.0.0/frame_system/pallet/struct.Pallet.html#method.deposit_event