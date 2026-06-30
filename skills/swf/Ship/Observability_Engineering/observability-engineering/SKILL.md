---
name: observability-engineering
description: Observability stack. Logging, metrics, tracing, and alerting that give insight into production behavior.
version: "1.0.0"
tags: [observability, logging, metrics, tracing, alerting, monitoring]
---

# Observability Engineering

## Purpose
Builds and maintains the observability stack. Ensures the team can see, understand, and alert on production behavior.

## Three Pillars
1. **Logging**: Structured logs, searchable, retained appropriately
2. **Metrics**: RED (Rate, Errors, Duration) + USE (Utilization, Saturation, Errors)
3. **Tracing**: Distributed traces for request flows across services

## Alerting Rules
- Alert on symptoms (user-facing impact), not causes (CPU high)
- Every alert must be actionable (if it doesn't need action, it's not an alert)
- Alert fatigue is a bug (tune thresholds, aggregate related alerts)

## Self-Correction
- False positive alert? Tune or remove
- Missing alert for incident? Add it, document why it was missing
- Dashboard outdated? Review and update quarterly
