---
name: lean-slices-process
description: Vertical slice delivery. Each slice delivers end-to-end value, not horizontal layers.
version: "1.0.0"
tags: [lean, vertical-slices, incremental-delivery, mvp]
---

# Lean Slices Process

## What is a Lean Slice?
A vertical slice cuts through all layers (UI -> API -> DB) to deliver one piece of end-to-end user value.

## Slice Criteria
- Delivers measurable user value independently
- Can be built in 1-2 weeks
- Testable end-to-end
- No dependencies on other slices to function

## Anti-Patterns
- "Backend first, UI later" (horizontal slice)
- "Infrastructure slice" (no user value)
- "Refactor slice" (no new capability)

## Self-Correction
- Slice too big? Cut thinner
- Slice has dependencies? Reorder or merge
- Slice doesn't deliver value? Kill it
