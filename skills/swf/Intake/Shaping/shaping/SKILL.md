---
name: shaping
description: Solution shaping using Shape Up methodology. Designs solution boundary (what is in, what is out) before commitment.
version: "1.0.0"
tags: [shaping, shape-up, solution-design, scope-boundary, appetite]
---

# Shaping

## Purpose
Solution design BEFORE commitment. Answers: What are we building? What are we NOT building? How long? What risks? Is it worth it?

Produces a shaped bet: clear enough that a team can execute without further design decisions.

## Process
1. Frame the Work (core value, must-haves, risks, unknowns)
2. Breadboarding (low-fidelity flow sketch, no UI details)
3. Fat Marker Sketches (rough architecture, key interfaces)
4. Scope Hammering (cut until fits appetite, identify rabbit holes)
5. Write the Pitch (shaped bet document)

## Shaped Bet Document
- Problem (from Discovery, evidence-backed)
- Appetite (time budget: 2 weeks small, 6 weeks big)
- Solution Overview (breadboarding-level, 1-3 paragraphs)
- Core Screens/Interactions (what user does, what system does)
- Technical Approach (fat marker: components, data flow, integrations)
- Out of Scope (explicitly NOT building, with reasons)
- Rabbit Holves (watch-outs, scope traps)
- Risks & Unknowns (technical, UX, integration)
- Definition of Done (measurable criteria)
- No-Go Criteria (conditions to stop or ship-as-is)

## Scope Hammering Techniques
- Cut the edges (80% automated, 20% manual)
- Reduce fidelity (good enough, not pixel-perfect)
- Delay non-core (ship core first)
- Simplify data model (fewer fields/entities)
- Manual first (human does hard part, automate later)
- Single path (one workflow, not configurable)

## Self-Correction
- Doesn't solve problem? Back to Discovery
- Can't fit appetite? Cut harder or kill
- Too vague? Add detail
- New risk raised? Update pitch, re-bet

## Metrics
| Metric | Target |
|--------|--------|
| Time in Shaping | 2-5 days |
| Scope Creep During Build | <10% |
| Team Clarity Score | >4.0/5 |
| Rabbit Hole Hits | <2 per cycle |
