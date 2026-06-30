---
name: site-reliability-engineering
description: Reliability engineering for production systems. SLOs, error budgets, incident management, capacity planning, toil reduction.
version: "1.0.0"
tags: [sre, reliability, slo, error-budget, incident-management, toil]
---

# Site Reliability Engineering

## Purpose
Ensures production systems are reliable, scalable, and observable. Defines and enforces SLOs, manages error budgets, leads incident response, reduces toil.

## SLO Framework
| Service Level | Target | Error Budget |
|--------------|--------|--------------|
| Availability | 99.9% | 43 min/month |
| Latency (p99) | <500ms | % requests over |
| Error rate | <0.1% | % requests erroring |
| Throughput | >1000 rps | % below target |

## Error Budget Policy
- Budget available: Ship freely, accept risk
- Budget 50% consumed: Increase testing, reduce deploy frequency
- Budget 80% consumed: Freeze features, focus on reliability
- Budget exhausted: All hands on reliability, no new features

## Incident Management
1. **Detect**: Monitoring alerts, user reports
2. **Acknowledge**: On-call responds within SLA
3. **Mitigate**: Stop the bleeding (rollback, failover, scale)
4. **Resolve**: Root cause fixed
5. **Post-mortem**: Blameless, within 48h, action items tracked

## Toil Reduction
- Target: <50% of time on toil (manual, repetitive work)
- Automate: Deployments, scaling, failover, certificate rotation
- Track: Toil hours per sprint, reduction progress

## Self-Correction
- SLO missed? Root cause analysis, adjust SLO or fix reliability
- Incident repeated? Pattern analysis, systemic fix
- Toil increasing? Prioritize automation
- Alert fatigue? Tune thresholds, reduce noise

## Metrics
| Metric | Target |
|--------|--------|
| Availability | Per SLO (e.g., 99.9%) |
| MTTR | <30 min |
| MTBF | >720 hours |
| Toil percentage | <50% |
| Post-mortem completion | 100% within 48h |
| Alert signal:noise | >80% actionable |
