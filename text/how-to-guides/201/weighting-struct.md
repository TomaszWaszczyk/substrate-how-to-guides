
# Weighting Struct
- [Goal](#goal)
- [Use cases](#use-cases)
- [Overview](#overview)
- [Steps](#steps)
  * [1. Write the WeighData struct](#1-write-the-weighdata-struct)
  * [2. Classify dispatch calls](#2-classify-dispatch-calls)
  * [2. Implement PaysFee](#2-implement-paysfee)
- [Examples](#examples)
- [Related material](#related-material)

## Goal

Understand how to calculate transaction weights using a custom weighting struct.

## Use cases
Calculate correct weight based on data within a function, required to calculate transaction fees.

## Overview

Traits

- [WeighData](https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/trait.WeighData.html#impl-WeighData%3CT%3E-for-(Weight%2C%20DispatchClass%2C%20Pays)): weigh the data in a function
- [PaysFee](https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/trait.PaysFee.html): designate whether the dispatch pays a fee or not
- [ClassifyDispatch](https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/trait.ClassifyDispatch.html): a way to tell the runtime about the type of dispatch being made

## Steps
### 1. Write the WeighData struct

Write a weighting struct that weighs transactions where the first parameter is a boolean value. 

```rust
pub struct Conditional(u32);

impl WeighData<(&bool, &u32)> for Conditional {
    fn weigh_data(&self, (switch, val): (&bool, &u32)) -> Weight {

        // If the first parameter is true, then the weight is linear in the second parameter.
        if *switch {
            val.saturating_mul(self.0)
        }
        // Otherwise the weight is constant.
        else {
            self.0
        }
    }
}
```

### 2. Classify dispatch calls
Since this implementation of `WeighData` requires a `DispatchClass`, use [`default`](https://substrate.dev/rustdocs/v3.0.0/frame_support/weights/enum.DispatchClass.html) to classify all calls as normal. 

```rust
// Implement ClassifyDispatch
impl<T> ClassifyDispatch<T> for Conditional {
    fn classify_dispatch(&self, _: T) -> DispatchClass {
        Default::default()
    }
}
```
### 2. Implement PaysFee
Last, specify how `PaysFee` is used for the custom `WeighData` struct.

```rust
// Implement PaysFee
impl PaysFee for Conditional {
    fn pays_fee(&self) -> bool {
        true
    }
}
```

## Examples
Feeless transaction pallet (link to playground).

## Related material

- Calculating weights in storage migrations (Recipe)
- Transaction Weights ([Knowledge base](https://substrate.dev/docs/en/knowledgebase/learn-substrate/weight))
- Transaction Fees ([Knowledge base](https://substrate.dev/docs/en/knowledgebase/runtime/fees))
- In Polkadot: [https://wiki.polkadot.network/docs/en/learn-transaction-fees](https://wiki.polkadot.network/docs/en/learn-transaction-fees)