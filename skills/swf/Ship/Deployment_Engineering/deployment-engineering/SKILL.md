---
name: deployment-engineering
description: Deployment automation. Builds the tooling that makes deploys boring, repeatable, and safe.
version: "1.0.0"
tags: [deployment, automation, infrastructure, gitops]
---

# Deployment Engineering

## Purpose
Builds and maintains deployment tooling. Makes deploys boring (predictable, repeatable, safe).

## Principles
- **GitOps**: All changes via git, no manual kubectl/CLI deploys
- **Immutable infrastructure**: Replace, don't modify
- **Same artifact everywhere**: Build once, promote through environments
- **Automated rollback**: Detect failure, rollback without human intervention

## Deployment Pipeline
```
Artifact -> Staging Deploy -> Smoke Tests -> Canary Deploy -> Monitor -> Full Rollout
```

## Self-Correction
- Deploy failed? Automatic rollback, investigate after
- Drift detected? Alert, auto-reconcile or page
- Slow deploy? Optimize artifact size, parallelize
