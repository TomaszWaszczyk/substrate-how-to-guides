---
sidebar_position: 5
keywords: basics, weights, runtime, FRAME V1 
---

# Calculating transaction weights

_Been here long enough to know these weights are actually pretty darn important ..._
:::info
This guide shows a basic procedure for confirguring weights. There are more advanced methods that suit different use cases. For simple functions with fixed amount of storage reads, this method works well.
:::

## Goal

Understand how to calculate transaction weights for a basic dispatch function.

## Use cases

- Assign the correct weight before a function call to storage.
- Calculate transaction fees.

## Overview

Weights are an important part of Substrate development as they provide information about what the maximum cost a function can be in terms of the block size it will take up. This way, the [weighting system][weights-kb] checks what the cost will be before a function is executed. As runtime engineers, we care a lot about weights. Not only do they help add security checks around the functions we create, but they also force us to think about the computational ressources consumed by a transaction. From that, we can figure out [what fees to charge][fees-kb] users.

This guide will cover how to calculate the maximum weight for a dispatch call; calculate the actual weight after execution; and 
reimburse the difference. 

Here's an overview of the traits we'll be implementing:

- [`PaysFee`][paysfee-rustdocs]: to specify whether or not a dispatch pays the fee.
- [`GetDispatchInfo`][get-dispatchinfo-rustdocs]: carries weight information using the `#[weight]` attribute.
- [`DispatchResultWithPostInfo`][get-postdispatchinfo-rustdocs]: provides new weight info once the extrinsic function has been executed.

## Steps

### 1. Import weight configuration tools

Make sure you have the right dependencies:

```rust
use frame_support::Parameter;
use frame_support::weights::{GetDispatchInfo, Pays};
use sp_runtime::traits::Dispatchable;
use frame_support::pallet_prelude::{DispatchResultWithPostInfo};
use frame_support::dispatch::DispatchResult;
```

### 2. Calculate maximum weight before a function

Using `call.get_dispatch_info()`, calculate the maximum possible weight before the function is declared:

```rust
#[weight = {
			let dispatch_info = call.get_dispatch_info();
			(dispatch_info.weight, dispatch_info.class, Pays::Yes)
            }]

      // Define a function header that returns DispatchResultWithPostInfo.
		  fn do_three_reads(origin, call: Box<<T as Config>::Call>) -> DispatchResultWithPostInfo {
      // Function logic.
        }
```

`GetDispatchInfo` provides the `get_dispatch_info()` method we need to retrieve information about the function's weight.

### 3. Calculate the actual weight linked to function's logic

The actual weight of a function call depends on the logic of the extrinsic. After execution, we can give back fees once the actual weight has been calculated. Handle this using the [`Pays` Enum][pays-rustdocs] and [`DbWeight`][dbweight-rustdocs].

For a function whose logic does 3 storage reads, calculate it using `DbWeight` and return it at the end of the function:

```rust
// Function returns a calculation corresponding to 3 DB reads
let check_logic_weight = T::DbWeight::get().reads(3);
return Ok(Some(check_logic_weight).into())

//Remove fee assoicated to weight
Ok(Pays::Yes.into())
```
## Examples

- [Feeless transaction use case](https://github.com/shawntabrizi/substrate-feeless-token-factory#user-story)

## Related material

#### Knowledgebase
- [Transaction Weights](https://substrate.dev/docs/en/knowledgebase/learn-substrate/weight)
- [Transaction Fees Knowledgebase](https://substrate.dev/docs/en/knowledgebase/runtime/fees)

#### Rust docs
- [`ClassifyDispatch`](https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/trait.ClassifyDispatch.html)
- [`WeightData`](https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/trait.WeighData.html)

#### Other
- [Polkadot's Transaction Fees](https://wiki.polkadot.network/docs/en/learn-transaction-fees)

[weights-kb]: https://substrate.dev/docs/en/knowledgebase/learn-substrate/weight
[fees-kb]: https://substrate.dev/docs/en/knowledgebase/runtime/fees
[paysfee-rustdocs]: https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/trait.PaysFee.html
[get-dispatchinfo-rustdocs]: https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/trait.GetDispatchInfo.html
[get-postdispatchinfo-rustdocs]: https://docs.rs/frame-support/3.0.0/frame_support/dispatch/type.DispatchResultWithPostInfo.html
[pays-rustdocs]: https://docs.rs/frame-support/3.0.0/frame_support/weights/enum.Pays.html
[dbweight-rustdocs]: https://substrate.dev/rustdocs/v3.0.0/frame_system/pallet/trait.Config.html#associatedtype.DbWeight