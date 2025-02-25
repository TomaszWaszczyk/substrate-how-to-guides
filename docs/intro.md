---
sidebar_position: 0
---

# Welcome

_This is work in progress. It's a staging of what will become the official ressource with Substrate's developer hub. 
Please read the contribution guidelines to help improve the on existing content, propose new content or make a PR for brand new content. Learn about how the guide is structured below to better understand the general approach._

**On this page**
- [Contribution Guidelines](#contribution-guidelines)
    - [Prelude](#prelude)
    - [Requirements](#requirements)
    - [Template](#template)
- [Content Structure](#content-structure)
    - [Tags](#tags)
- [FAQ](#FAQ)

## Contribution Guidelines
### Prelude
Each guide contains various links to [Knowledgebase](https://substrate.dev/docs/en/) key terms and other [Developer hub](https://substrate.dev/en/) ressources. Most beginner guides link to other intermediate or advanced guides that use the foundations from the more basic guides they build on. In this way, this book aims to become a modular and extensible framework that:

- Can expand overtime, by virtue of the ease for contributors to integrate new content that follows these linking guidelines and structure.
- Provides an indispensible collection of guides for developers of all levels building with Substrate.
- Connects related resources from the developer hub, including documentation and knowledgebase article.

### Requirements
The following points touch on the approach for building content for the Substrate How-to Guides ressource. Each is a point is requirement that must be taken into account for contributors creating new guides.

- :black_medium_square: **Modularity**. Each piece needs to be a standalone guide that has a well-defined and useful focus. Anything external to that mustbe linked in a way that they can adapt to change. Why? They need to be able to handle changes to Substrate in a way that offers a path of least resistance when implementing those changes.
- :link: **Linking**. How-to guides are meant to be focused and in-depth. Any background knowledge or additional references must link readers to other developer hub ressources. 
- ⏯️ **Examples**. This is the part for _"examples on how to actually put this guide to use or where can I see it put to use"_. Each example links to some existing codebase or pallet. If new code was created for the guide, this should be pushed to the `example-code` folder at the top of this directory.
- :satellite: **References.** At the end of each recipe, developers can see a list of related ressources. Here is where all additional related Knowledgebase links go; Rust docs; as well as links to any other related guides.
- ⏹️ **Avoid repetition.** If there's something that needs to be included in one guide and can be abstracted to a completely separate guide, abstract it and link to it instead of repeating that content. This ties into the modularity aspect too.

### Template 
Each guide needs to follow the following structure, taking into account the requirements from above.  

:::note **Note: ** copy the markdown template file from [here](https://github.com/substrate-developer-hub/substrate-how-to-guides/blob/main/docs/contribute/how-to-template.md) to get started.

---

# Title

_The guide's intentions should be clear by just reading the title._

## Goal

_What specific goal will this guide achieve?_

## Use cases

_What practical use cases can this guide be applied to? This can be general, e.g. "implementing a second currency for users to pay fees in" or specific, for e.g. "a runtime migration from a `Vec<u32>` to SomeStruct ". It is likely that the more advanced the guide, the more specific its use cases will be. If more than one, use a bulleted list. Otherwise, one phrase._

## Overview

_A brief overview of why this is a useful guide and what concepts it uses. This is a good place to link to other devhub ressources, including other guides, aiming to give the reader the learning background required to understand how this guide can be useful to them._

## Steps

_What are the steps that will be taken to achieve the goal? Each step should be action driven, with little description, minimal fluff,
linking to other docs if needed. Code snippets can help illustrate the steps but should not take over the focus&mdash;i.e "how do I do this", not "what do I do"._

## Examples

_Code-based examples that make use of this guide. This shows at least one reference of what this guide covers with a working example.This could be a reference to some existing codebase within Substrate or not; or new code that lives in the how-to guide repo._

## Resources

_A bulleted list of links to similar guides; other devhub ressources; and related material. For example, other how-to guides; tutorials; knowledgebase articles; or Rust docs._
:::
## Content structure

The structure aims to group HTGs into categories by tagging each guide. For example:

> **Simple crowdfund.** 
> tags: runtime, intermediate, pallet design


The current groupings are to help organize the repository of HTG content. They reflect the different
areas of development within Substrate:

- **Basics**. Where the really simple guides live, those that can be referenced by more complex ones.
- **Pallet design**. Everything to do with building custom pallets with or without FRAME.
- **Weights**. Any content that covers configuring weights for specific use cases.
- **Testing**. A collection of guides for testing.
- **Storage migrations**. Anything to do with storage migrations.
- **Consensus**. Client stuff, bridging, node configurations.
- **Parachains.** _WIP_

### Tags

_basics, beginner, intermediate, advanced, FRAME v1, runtime, pallet design, weights, fees, currency, testing, 
storage migration, node, client, consensus, proof-of-work_ 

## FAQ

**What is the difference between a "how-to guide" and a tutorial?**

A **how-to guide** is an in-depth guide intended for someone who is assumed to have prior Substrate knowledge on how to achieve a specific goal. Information inside a guide is only pertinent to achieving that goal. Anything else is irrelevant.

A **tutorial** is a lesson to teach someone how to achieve something assuming they have no prior knowledge on the subject. They contain more details on the subject; cover breadth (vs. how-to guides which cover depth); and can repeat information across other tutorials.
