---
name: architecture-process
description: Architecture decision process. How decisions are proposed, reviewed, and recorded.
version: "1.0.0"
tags: [architecture, adr, decision-records, design-review]
---

# Architecture Process

## Architecture Decision Records (ADR)
Every significant decision gets an ADR:
- **Title**: Short description
- **Status**: Proposed / Accepted / Superseded
- **Context**: What problem are we solving?
- **Decision**: What did we choose and why?
- **Consequences**: Trade-offs, risks, what we gave up

## Review Process
1. Author proposes ADR
2. Architecture review meeting (async or sync)
3. Feedback incorporated
4. Accepted or rejected (with reasons)

## Self-Correction
- Decision proving wrong? New ADR to supersede
- ADR missing for significant decision? Retroactive ADR
- Architecture drift? Reconcile implementation with ADR
