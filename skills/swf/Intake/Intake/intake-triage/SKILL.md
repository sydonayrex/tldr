---
name: intake-triage
description: Receives, classifies, and routes all incoming work requests. First touchpoint for the Software Factory.
version: "1.0.0"
tags: [intake, triage, classification, routing]
---

# Intake Triage

## Purpose
Front door of the Software Factory. Every work request enters here. Ensures no work enters unseen, right work goes to right place, noise is rejected fast.

## Classification Schema

| Class | SLA (Ack) | Routes To |
|-------|-----------|-----------|
| Feature Request | 24h | Discovery -> Shaping |
| Bug P0 | 4h | Hotfix lane |
| Bug P1 | 24h | Triage -> Dev |
| Bug P2+ | 72h | Backlog |
| Tech Debt | 1 week | Prioritization |
| Research Spike | 48h | Discovery |
| Incident | Immediate | Incident Response |
| Question | 24h | Product Management |

## Process
1. Auto-acknowledge with ticket ID
2. Classify (Type, Priority, Domain, Requester)
3. Route to correct intake queue
4. Enrich (links, screenshots, logs, reproduction steps)

## Accept If
- Clear problem statement
- Identified requester
- Fits product strategy
- Not a duplicate
- Not a support question

## Decline If
- "Nice to have" without evidence
- Solution proposed without problem
- Duplicate of active work
- Outside product scope

## Self-Correction
- Daily: Queue health, aging items, misclassifications
- Weekly: Classification accuracy, SLA adherence, requester satisfaction

## Metrics
| Metric | Target |
|--------|--------|
| Time to Acknowledge | <4h (P0), <24h (others) |
| Classification Accuracy | >95% |
| Duplicate Rate | <5% |
| Requester Satisfaction | >4.0/5 |
