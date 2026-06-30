# Three-Gate Decision Framework

## Overview
The Value Review Gate uses a three-gate framework to make build/punt/maintain decisions at three critical transitions in the software lifecycle. This pattern can be applied to any phased delivery system.

## The Pattern

```
Gate 1 (Entry):     "Should we start?"    → BUILD / DEFER / PUNT
Gate 2 (Mid-cycle): "Should we continue?" → PERSEVERE / PIVOT / PUNT  
Gate 3 (Post-ship): "Should we keep it?"  → PERSEVERE / MAINTAIN / DECOMMISSION
```

## Language Convention
- **PUNT** = stop investing (replaces "kill" — less violent, more accurate: we're choosing not to continue, not destroying something)
- **PERSEVERE** = continue with confidence (replaces "continue" — implies conviction, not just inertia)
- **DEFER** = postpone, not reject (we'll revisit when conditions change)
- **MAINTAIN** = keep running but don't invest further (stable, low-value products)
- **DECOMMISSION** = actively shut down (sunset plan required)

## When to Apply
Any time you have:
1. A phased delivery process with clear transitions
2. Resource allocation decisions at each phase
3. A need to kill/punt work that isn't delivering value
4. Products in production that may no longer warrant investment

## Gate Design Principles
1. **Each gate has exactly one question** — keep it simple
2. **Decisions are binary-ish** — 2-3 options max per gate
3. **Authority is explicit** — who owns the decision at each gate
4. **Output is a document** — every gate produces a written record
5. **Requester is notified** — no silent punts

## Metrics to Track
- Gate 1 punt rate: 20-40% (healthy — means you're saying no to bad ideas)
- Gate 2 punt rate: <10% (low — means shaping is working)
- Gate 3 decommission rate: 10-20% over 1 year (healthy — means you're cleaning up)
- Gate decision time: <2 hours (fast — don't let gates become bottlenecks)

## Anti-Patterns
- **Gate 1 punt rate <10%**: You're not saying no enough. Everything gets built.
- **Gate 2 punt rate >20%**: Shaping is broken. Bets are not well-scoped.
- **Gate 3 decommission rate <5%**: Products accumulate without review. Zombie features.
- **Gate decisions take >1 day**: Gates become bottlenecks. Streamline.
