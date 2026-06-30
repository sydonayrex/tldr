---
name: prioritization
description: Continuous prioritization of the backlog using outcome-based scoring. Feeds the betting table with well-sequenced work.
version: "1.0.0"
tags: [prioritization, backlog, sequencing, rice, outcome-based]
---

# Prioritization

## Purpose
Continuously sequence the backlog so the betting table always has the highest-impact, best-shaped work ready to bet on.

## Framework: RICE + Outcome Alignment

### RICE Scoring
| Factor | Scale | Description |
|--------|-------|-------------|
| Reach | 1-10 | How many users affected per period? |
| Impact | 0.25-3 | How much does it move the outcome metric? |
| Confidence | 50-100% | How sure are we of estimates? |
| Effort | 1-10 | Person-weeks required |

**Score = (Reach x Impact x Confidence) / Effort**

### Outcome Alignment Check
Every scored item must map to a current outcome goal. Items that don't map are deprioritized regardless of RICE score.

## Prioritization Cadence
- **Continuous**: New items scored on intake
- **Weekly**: Backlog grooming, re-score based on new information
- **Per Cycle**: Final sequencing for betting table

## Self-Correction
- Items stuck at top for 3+ cycles? Re-shape or kill
- Low-confidence items dominating? Investigate to increase confidence
- Outcome metrics not moving? Reassess prioritization

## Metrics
| Metric | Target |
|--------|--------|
| Outcome-mapped items | >90% of backlog |
| Items scored within 24h of intake | 100% |
| Top-10 items re-scored weekly | 100% |
