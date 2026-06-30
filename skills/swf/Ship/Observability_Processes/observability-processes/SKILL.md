---
name: observability-process
description: Observability workflow. How to set up, use, and maintain observability for new features.
version: "1.0.0"
tags: [observability, setup, dashboards, alerts]
---

# Observability Process

## New Feature Observability Checklist
- [ ] RED metrics defined (Rate, Errors, Duration)
- [ ] Key business metrics instrumented
- [ ] Dashboards created for the feature
- [ ] Alerts configured (actionable, not noisy)
- [ ] Runbook linked in alerts
- [ ] On-call trained on new feature failure modes

## Self-Correction
- Missing metrics? Add retroactively, add to template
- Alert fatigue? Tune thresholds
- Dashboard stale? Review quarterly
