---
name: factory-analytics
description: Analytics and metrics for the Software Factory. Defines OMTM, good vs vanity metrics, cohort analysis, and the measurement framework for Build-Measure-Learn. Recontextualized from lean-analytics.
version: "1.0.0"
tags: [analytics, metrics, omtm, measurement, cohorts, lean-analytics]
triggers:
  - what should we measure
  - define metrics
  - one metric that matters
  - analytics setup
  - good metrics
  - vanity metrics
  - factory metrics
---

# Factory Analytics & Metrics

## Purpose
Defines how the Software Factory measures success. Distinguishes good metrics (actionable, comparative, behavior-changing) from vanity metrics (totals, cumulative, feel-good). Establishes the One Metric That Matters (OMTM) for each phase and bet.

**Recontextualized from**: lean-analytics

## Good Metrics vs Vanity Metrics

### The Test
**"If this number changes, will we do something differently?"**
- Yes → Good metric
- No → Vanity metric, stop measuring it

### Good Metrics Are
- **Comparative**: Versus last week, versus another cohort (not absolute)
- **Understandable**: The team can recall and debate it
- **A ratio or rate**: Not an ever-growing total
- **Behavior-changing**: Drives decisions

### Vanity Metrics Are
- Total signups (ever-growing, hides decay)
- Page views (no action attached)
- Cumulative anything (only goes up)
- Blended averages (hide segment differences)
- Numbers copied from other companies

### Metric Lens Pairs
| Pair | Use |
|------|-----|
| Qualitative vs Quantitative | Interviews reveal WHY, numbers reveal HOW MUCH |
| Exploratory vs Reporting | Exploration finds advantage, reporting keeps lights on |
| Leading vs Lagging | Complaints predict churn before churn happens |
| Correlated vs Causal | Correlation finds the lever, experiment proves it |

## The One Metric That Matters (OMTM)

At any moment there is **one number** that matters above all others — the one that tells you whether the current riskiest assumption is working.

### How to Pick OMTM
1. What is the riskiest assumption in our current bet?
2. What number tells us if that assumption is true?
3. What target must we hit to persevere?
4. What happens if we miss? (pre-commit to a response)

### OMTM Rules
- Pick it, display it everywhere, let it drive every experiment
- One per bet per phase (don't dilute with 40 dashboards)
- Change it when you graduate to the next stage
- Pair with a counter-metric (e.g., activation rate + churn rate)

## Factory-Wide Metrics by Phase

### Intake Metrics
| Metric | Type | Target |
|--------|------|--------|
| Time to bet decision | Leading | <6 weeks |
| Gate 1 punt rate | Lagging | 20-40% |
| Problem validation evidence quality | Leading | >3.5/5 |

### Development Metrics
| Metric | Type | Target |
|--------|------|--------|
| Cycle completion rate | Lagging | >80% |
| Scope creep % | Leading | <10% |
| Test coverage | Leading | >80% |
| Defect escape rate | Lagging | <5% |

### Ship Metrics
| Metric | Type | Target |
|--------|------|--------|
| Deployment frequency | Leading | On-demand (multiple/day) |
| Lead time (commit to prod) | Lagging | <1 hour |
| Change failure rate | Lagging | <5% |
| Mean time to recovery | Lagging | <30 min |
| Value validation rate (T+30 days) | Lagging | >60% |

### Factory Health Metrics
| Metric | Type | Target |
|--------|------|--------|
| Availability | Lagging | 99.9% |
| Error rate | Lagging | <0.1% |
| API p99 latency | Lagging | <200ms |
| Team trust score (survey) | Leading | >4.0/5 |
| Learning entries per cycle | Leading | >1 per skill |

## Cohort Analysis

Always compare cohorts, not blended averages:
- **By signup month**: Did users who joined in March retain better than February?
- **By channel**: Do users from organic search convert better than paid?
- **By segment**: Do power users behave differently from casual?
- **By bet**: Did features shipped in Cycle 5 perform better than Cycle 4?

## Segments Make Comparisons Honest
Split by channel, plan, geography — a flat aggregate often hides one segment soaring and another collapsing.

## Averages Lie Under Skew
Whales and lurkers are different businesses. Read medians and percentiles, not just means.

## Self-Correction
- Metrics not driving decisions? Replace with behavior-changing ones
- OMTM not clear? The bet's riskiest assumption is not well understood
- Cohorts not being used? Train the team on segmented analysis
- Vanity metrics on dashboards? Remove them, replace with ratios

## Metrics
| Metric | Target |
|--------|--------|
| Good metric ratio (good:vanity) | >80% |
| OMTM defined per bet | 100% |
| Cohort analysis in decisions | >80% |
| Metric-driven decisions | >70% |

## Integration Points
- **Upstream**: Product Management (defines what to measure), CDO (provides data)
- **Downstream**: CPO (value verification), CLO (learning measurement)
- **Peer**: All C-suite (metrics inform decisions), QA (quality metrics)

## References
- lean-analytics skill: Good metrics, OMTM, cohort analysis
- lean-startup skill: Build-Measure-Learn, validated learning
- gstack health skill: Code quality dashboard

## Invocation
Auto-triggered by: Bet definition (define OMTM), Post-ship (measure outcomes), Retro (review trends)
Manual trigger: `/analytics <what-to-measure>`