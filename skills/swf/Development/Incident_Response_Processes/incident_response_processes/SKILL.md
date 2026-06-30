---
name: incident-response-process
description: Development-phase incident response. How the team handles issues found during development.
version: "1.0.0"
tags: [incident, response, development, triage]
---

# Incident Response Process (Development)

## Severity Levels
| Level | Description | Response |
|-------|-------------|----------|
| P0 | Data loss, security breach | All hands, stop everything |
| P1 | Major feature broken | Current sprint priority |
| P2 | Partial degradation | Next sprint |
| P3 | Minor issue | Backlog |

## Process
1. Detect -> Acknowledge -> Mitigate -> Resolve -> Post-mortem

## Self-Correction
- Same incident twice? Systemic fix
- Slow response? Improve detection/monitoring
- Blame culture? Reinforce blameless post-mortems
