---
name: value-review-gate
description: Continuous value review at three gates — Intake (should we build?), Development (should we keep building?), Ship (should we keep running?). Decides build/hold/punt/maintain for every bet and every product.
version: "1.0.0"
author: software-factory
tags: [value-review, punt-decision, gate-review, build-hold-punt, maintenance, decommission]
---

# Value Review Gate

## Purpose

The Value Review Gate is the **single decision point** that answers one question at three different stages: **"Is this worth continuing to invest in?"**

This skill exists because punt/defer/maintain decisions are currently scattered across Discovery, Shaping, Betting, and CPO — no single skill owns the explicit "should we stop?" decision. The Value Review Gate centralizes it.

**Build-Measure-Learn mapping**: This skill is the **Learn -> Decide** transition. After every measurement, a decision: continue, pivot, or stop.

## The Three Gates

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  GATE 1: INTAKE        GATE 2: DEVELOPMENT    GATE 3: SHIP     │
│  "Should we build?"    "Should we keep        "Should we keep   │
│                         building?"             running?"         │
│                                                                 │
│  Decision:             Decision:               Decision:         │
│   → BUILD              → PERSEVERE             → PERSEVERE      │
│   → DEFER              → PIVOT                 → MAINTAIN       │
│   → PUNT               → PUNT                  → DECOMMISSION   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## GATE 1: INTAKE — "Should We Build?"

**When**: After Discovery produces a problem brief, before Shaping begins.
**Who owns**: CPO (Chief Product Officer) + CEO
**Input**: Problem brief from Discovery, value hypothesis (if any)

### Decision Framework

| Decision | Condition | Next Step |
|----------|-----------|-----------|
| **BUILD** | Problem is real, value is clear, fits strategy, appetite appropriate | Proceed to Shaping |
| **DEFER** | Problem is real but wrong time (dependency, capacity, strategy) | Return to backlog with un-defer trigger |
| **PUNT** | Problem not real, no value, or not worth the appetite | Close with explanation to requester |

### Gate 1 Review Questions

#### Problem Validation
1. **Is there a real problem?** (Evidence from Discovery: user interviews, data, support tickets)
2. **Who has this problem?** (Specific user segment, not "everyone")
3. **How much does it hurt?** (Severity 1-10, evidence-backed)
4. **What do they do today?** (Current workaround, status quo)

#### Value Validation
5. **What is the value proposition?** (One sentence: who, outcome, mechanism)
6. **How will we measure success?** (Leading and lagging indicators)
7. **What is the smallest thing that delivers value?** (Minimum viable value)

#### Strategic Fit
8. **Does this fit our product strategy?** (Or is it a distraction?)
9. **Is now the right time?** (Dependencies, capacity, market timing)
10. **What is the opportunity cost?** (What do we NOT build if we build this?)

#### Appetite Check
11. **Can we build a meaningful version within appetite?** (2 weeks small, 6 weeks big)
12. **What are the risks?** (Technical, UX, market, integration)
13. **Under what conditions would we stop?** (Punt criteria)

### Gate 1 Output

```markdown
# Gate 1 Review: [Feature Name]

## Decision: BUILD | DEFER | PUNT

### Rationale
[2-3 sentences on why this decision was made]

### Evidence Summary
- **Problem**: [What we found]
- **Value**: [Expected value, to whom]
- **Strategic fit**: [How this aligns with strategy]
- **Risks**: [Key risks identified]

### Conditions
- **If BUILD**: Proceed to Shaping. Punt criteria: [conditions to stop]
- **If DEFER**: Re-evaluate when: [trigger condition]. Stale after: [date]
- **If PUNT**: Reason: [why]. Reopen if: [new evidence that would change this]

### Requester Communication
[What we tell the person who requested this]
```

---

## GATE 2: DEVELOPMENT — "Should We Keep Building?"

**When**: Mid-cycle checkpoint (typically week 2 of a 4-week cycle, or at 50% of appetite).
**Who owns**: CPO + COO + Factory Lead
**Input**: Progress report, any new evidence, scope changes

### Decision Framework

| Decision | Condition | Next Step |
|----------|-----------|-----------|
| **PERSEVERE** | On track, value hypothesis still valid, no major blockers | Continue as planned |
| **PIVOT** | Value hypothesis needs adjustment but core problem is valid | Re-shape remaining scope, adjust punt criteria |
| **PUNT** | Value hypothesis invalidated, problem not real, or cost too high | Stop immediately, document learnings |

### Gate 2 Review Questions

#### Progress Check
1. **Are we on track to deliver within appetite?** (Progress % vs time %)
2. **Have we hit any technical blockers?** (And can we resolve them within appetite?)
3. **Has scope crept?** (And does the creep serve the value proposition?)

#### Value Re-Validation
4. **Is the value hypothesis still valid?** (Any new evidence from Discovery, market, users?)
5. **Have our leading indicators changed?** (Early signals from development, prototypes, user feedback)
6. **Has the competitive landscape changed?** (Someone else solved this? Market shifted?)

#### Strategic Re-Check
7. **Does this still fit our strategy?** (Has strategy shifted since betting?)
8. **Is now still the right time?** (Urgency changed? Dependencies resolved or blocked?)
9. **What is the updated opportunity cost?** (What else could we build with remaining time?)

#### Risk Update
10. **Have risks changed?** (New risks emerged? Old risks mitigated?)
11. **Are punt criteria approaching?** (Any warning signs we should stop?)

### Gate 2 Output

```markdown
# Gate 2 Review: [Feature Name]

## Decision: PERSEVERE | PIVOT | PUNT

### Rationale
[Why this decision was made at this point]

### Progress Assessment
- **Progress**: X% complete, Y% of appetite consumed
- **Blockers**: [Any blockers and resolution plans]
- **Scope changes**: [What changed and why]

### Value Assessment
- **Hypothesis status**: Still valid / Needs adjustment / Invalidated
- **New evidence**: [Anything learned since Gate 1]
- **Updated punt criteria**: [If changed]

### Decision
- **If PERSEVERE**: Continue as planned. Next check: [date/milestone]
- **If PIVOT**: Adjust scope to: [new scope]. New punt criteria: [conditions]
- **If PUNT**: Reason: [why]. Learnings: [what we learned]. Next steps: [what we do with the team]

### Requester Communication
[What we tell stakeholders]
```

---

## GATE 3: SHIP — "Should We Keep Running?"

**When**: Post-ship value assessment (T+30 days after shipping), and quarterly for all running products.
**Who owns**: CPO + COO + CLO
**Input**: Value Report (from CPO skill), usage data, support tickets, infrastructure costs

### Decision Framework

| Decision | Condition | Next Step |
|----------|-----------|-----------|
| **PERSEVERE** | Value validated, product healthy, worth continued investment | Continue normal development cycle |
| **MAINTAIN** | Value delivered but no further investment warranted (stable, low growth) | Move to maintenance mode: bug fixes only, no new features |
| **DECOMMISSION** | Value not delivered, product unhealthy, or cost exceeds value | Plan sunset: notify users, migrate data, shut down |

### Gate 3 Review Questions

#### Value Verification
1. **Did we deliver the expected value?** (Outcome metric moved as predicted?)
2. **Are users actually using it?** (Adoption rate, active users, retention)
3. **Is the value sustainable?** (Or was it a one-time spike?)

#### Product Health
4. **Is the product reliable?** (Error rates, uptime, incident frequency)
5. **Is the product performant?** (Latency, throughput within budget)
6. **Are support costs acceptable?** (Ticket volume, complexity)

#### Cost-Benefit
7. **What is the total cost of ownership?** (Engineering time, infrastructure, support, opportunity cost)
8. **Does the value justify the cost?** (ROI positive?)
9. **What would we do with the resources if we shut this down?** (Opportunity cost)

#### Strategic Fit
10. **Does this product still fit our strategy?** (Or has direction changed?)
11. **Is there a better way to deliver this value?** (Different approach, third-party solution?)
12. **What is the sunset cost?** (How hard is it to shut down? Data migration? User impact?)

### Gate 3 Output

```markdown
# Gate 3 Review: [Feature Name]

## Decision: PERSEVERE | MAINTAIN | DECOMMISSION

### Rationale
[Why this decision was made]

### Value Assessment
- **Expected value**: [What we predicted]
- **Actual value**: [What we measured]
- **Verdict**: Validated / Partially validated / Invalidated

### Product Health
- **Reliability**: [Uptime, error rate, incidents]
- **Performance**: [Latency, throughput]
- **Support load**: [Ticket volume, complexity]

### Cost-Benefit
- **Total cost of ownership**: [Engineering + infrastructure + support]
- **Value delivered**: [Quantified]
- **ROI**: [Positive / Negative / Break-even]

### Decision
- **If PERSEVERE**: Next review: [date]. Investment level: [same/increase]
- **If MAINTAIN**: Maintenance mode: bug fixes only. No new features. Review again: [date]
- **If DECOMMISSION**: Sunset plan: [timeline, user notification, data migration, shutdown]

### Learnings
- [What we learned for future bets]
- [Patterns to apply to Discovery]

### User Communication
- **If MAINTAIN**: "This feature is in maintenance mode. No new planned features."
- **If DECOMMISSION**: "This feature will be retired on [date]. [Migration path]."
```

---

## Decision Authority

| Gate | Decision Owner | Can Be Overridden By |
|------|---------------|---------------------|
| Gate 1 (Intake) | CPO + CEO | Factory Lead (with written rationale) |
| Gate 2 (Development) | CPO + COO | Factory Lead (with written rationale) |
| Gate 3 (Ship) | CPO + COO + CLO | CEO (with written rationale) |

## Decision Log

Every gate decision is logged for trend tracking:

```markdown
## Value Review Log

| Date | Gate | Feature | Decision | Rationale | Owner |
|------|------|---------|----------|-----------|-------|
| [date] | 1 | [feature] | BUILD | [why] | CPO |
| [date] | 2 | [feature] | PERSEVERE | [why] | CPO |
| [date] | 3 | [feature] | MAINTAIN | [why] | CPO |
```

## Self-Correction

- Gate 1 punt rate too low? Discovery may be too lenient, or CPO is not rigorous enough
- Gate 2 pivots frequent? Shaping quality issue — bets are not well-scoped
- Gate 3 decommissions rare? Products may be accumulating without review
- Gate 3 maintenance mode products growing? Need active decommission decisions

## Metrics

| Metric | Target | Owner |
|--------|--------|-------|
| Gate 1 punt rate | 20-40% of intake | CPO |
| Gate 2 punt rate | <10% of in-progress bets | CPO + COO |
| Gate 3 decommission rate | 10-20% of shipped products (over 1 year) | CPO |
| Gate decision time | <2 hours per review | CPO |
| Gate decision logged | 100% | CPO |
| Requester notified within 24h | 100% | Intake Triage |

## Integration Points

**Upstream**: Discovery (Gate 1 input), Development progress (Gate 2 input), Ship metrics (Gate 3 input)
**Downstream**: Shaping (Gate 1 BUILD output), Development (Gate 2 PERSEVERE/PIVOT), Maintenance/Decommission (Gate 3 output)
**Peer**: CPO (owns value hypothesis), COO (owns delivery assessment), CLO (owns learning capture from kills)

## References

- CPO skill: Value hypothesis template, value verification
- Discovery skill: Problem validation evidence
- Betting skill: Commitment decisions
- Self-Correction Process: Learning from punts and pivots
- Three-Gate Decision Framework: `references/three-gate-decision-framework.md` (language standard — PUNT/PERSEVERE/DEFER/DECOMMISSION)

## Invocation

Auto-triggered by: End of Discovery (Gate 1), Mid-cycle checkpoint (Gate 2), Post-ship T+30 days (Gate 3)
Manual trigger: `/value-review <gate-number> <feature-name>`