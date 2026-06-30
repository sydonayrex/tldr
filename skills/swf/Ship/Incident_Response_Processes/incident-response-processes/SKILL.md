---
name: ship-incident-response
description: Ship-phase incident response protocol. How incidents are handled specifically in the Ship phase.
version: "1.0.0"
tags: [incident, ship, production, response]
---

# Incident Response Process (Ship)

## Immediate Actions
1. Acknowledge alert (within SLA)
2. Assess severity (P0/P1/P2)
3. Mitigate (rollback, failover, feature flag)
4. Communicate (status page, stakeholders)
5. Resolve (root cause fix)

## Post-Incident (Within 48h)
- Blameless post-mortem
- Root cause analysis (5 Whys)
- Action items with owners and deadlines
- Track action items to completion

## Self-Correction
- Post-mortem not done? Schedule within SLA
- Action item stale? Escalate to team lead
- Pattern of incidents? Systemic improvement initiative
