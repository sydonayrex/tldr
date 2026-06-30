---
name: incident-response
description: Production incident response. Structured process for detecting, mitigating, and learning from production incidents.
version: "1.0.0"
tags: [incident, response, production, on-call, post-mortem]
---

# Incident Response

## Purpose
Structured process for production incidents. Detect fast, mitigate fast, learn systematically.

## Incident Lifecycle
1. **Detect**: Alert fires, user reports, anomaly detection
2. **Acknowledge**: On-call responds within SLA (5 min P0, 15 min P1)
3. **Mitigate**: Stop the bleeding (rollback, failover, scale, feature flag off)
4. **Resolve**: Root cause fixed
5. **Post-mortem**: Blameless, within 48h, action items tracked to completion

## Severity
| Sev | Response | Communication |
|-----|----------|---------------|
| P0 | All hands, war room | Continuous updates |
| P1 | On-call + needed experts | Hourly updates |
| P2 | On-call during business hours | Daily update |

## Self-Correction
- Repeat incident? Systemic fix, not just patch
- Slow detection? Improve monitoring
- Blame in post-mortem? Reset culture
