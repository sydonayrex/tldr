---
name: ship-deployment-process
description: Deployment execution. How deployments are triggered, monitored, and verified.
version: "1.0.0"
tags: [deployment, execution, verification, rollback]
---

# Deployment Process (Ship)

## Execution
1. CI/CD triggers deploy on merge to main (or manual approval for prod)
2. Artifact promoted from staging (same image, new config)
3. Canary/blue-green rollout
4. Automated health checks at each stage
5. Automatic rollback on failure threshold

## Verification Post-Deploy
- [ ] Synthetic transactions succeed
- [ ] Error rate < baseline
- [ ] Latency p99 < baseline
- [ ] Key business metrics normal
- [ ] No new critical alerts

## Self-Correction
- Verification fails? Rollback, don't debug in prod
- Health check missing? Add before deploy
