---
name: devops-platform
description: CI/CD pipeline engineering, developer tooling, and platform automation. Builds the pipelines that all teams ship through.
version: "1.0.0"
tags: [devops, ci-cd, pipelines, tooling, automation, developer-experience]
---

# DevOps Platform

## Purpose
Builds and operates the CI/CD infrastructure, developer tooling, and automation that all engineering teams use to ship code.

## CI/CD Pipeline Standards
```
Commit -> Build -> Unit Test -> Lint/Typecheck -> Integration Test -> Security Scan -> Deploy Staging -> E2E Test -> Deploy Prod
```

### Pipeline Requirements
- Every pipeline step is parallelizable where possible
- Fail fast: cheapest checks first
- Deterministic builds (lockfile, pinned versions)
- Artifact promotion (same artifact through all stages)
- Rollback capability at every stage

## Developer Experience
- Local dev environment in <5 min (docker-compose, dev containers)
- One-command deploy to preview environment
- Feature branch environments auto-provisioned
- Clear error messages when pipelines fail
- Self-service environment management

## Tooling Standards
- Pipeline as code (GitHub Actions, GitLab CI)
- Secrets in vault (not in pipeline config)
- Artifact registry for build outputs
- Infrastructure as Code for all environments
- Monitoring and alerting on pipeline health

## Self-Correction
- Pipeline too slow? Parallelize, cache, optimize
- Flaky pipeline? Fix root cause, don't retry blindly
- Developer friction? Simplify, automate, document
- Security gap in pipeline? Fix immediately

## Metrics
| Metric | Target |
|--------|--------|
| Build time | <10 min |
| Deploy frequency | On-demand (multiple/day) |
| Lead time (commit to prod) | <1 hour |
| Pipeline success rate | >95% |
| Mean time to recovery | <30 min |
