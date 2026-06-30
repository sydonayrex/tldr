---
name: ci-cd-process
description: CI/CD pipeline workflow. How code goes from commit to production.
version: "1.0.0"
tags: [ci-cd, pipeline, deployment, automation]
---

# CI/CD Process

## Pipeline Stages
1. **Build**: Compile, bundle, containerize
2. **Test**: Unit, integration, contract
3. **Security**: SAST, dependency scan, container scan
4. **Stage**: Deploy to staging, run E2E
5. **Approve**: Manual approval for production (if required)
6. **Deploy**: Canary or blue-green to production
7. **Verify**: Smoke tests, synthetic checks, monitoring

## Deployment Strategies
- **Canary**: 5% -> 25% -> 100% with automated rollback
- **Blue-Green**: Instant switch, instant rollback
- **Feature Flags**: Deploy dark, enable gradually

## Self-Correction
- Pipeline broken? Stop merges, fix immediately
- Deploy failed? Automatic rollback, investigate after
- Slow pipeline? Parallelize, cache, optimize
