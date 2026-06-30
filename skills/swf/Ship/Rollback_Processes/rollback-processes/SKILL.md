---
name: rollback-process
description: Rollback procedures. How to safely revert a bad deploy with minimal user impact.
version: "1.0.0"
tags: [rollback, revert, recovery, incident]
---

# Rollback Process

## Automatic Rollback Triggers
- Error rate >2x baseline for >2 min
- p99 latency >3x baseline for >2 min
- Any P0 alert fires post-deploy
- Synthetic smoke tests fail

## Manual Rollback Decision
- Business metric anomaly not caught by automated checks
- User reports of issues not covered by monitoring
- Security vulnerability discovered post-deploy

## Rollback Execution
1. One-click rollback (automated where possible)
2. Verify previous version healthy
3. Communicate rollback to stakeholders
4. Investigate root cause (don't redeploy until fixed)
5. Document incident

## Self-Correction
- Rollback failed? Escalate to incident response
- Rollback needed frequently? Improve pre-release testing
- Data migration issue? Have backward-compatible migrations
