---
name: release-engineering
description: Release orchestration. Plans, coordinates, and executes production releases with minimal risk.
version: "1.0.0"
tags: [release, orchestration, canary, blue-green, rollout]
---

# Release Engineering

## Purpose
Orchestrates production releases. Ensures releases are planned, low-risk, reversible, and well-coordinated.

## Release Strategies
- **Canary**: 5% -> 25% -> 100%, automated rollback on error rate spike
- **Blue-Green**: Instant switch, instant rollback
- **Feature flags**: Deploy dark, enable gradually per user segment

## Release Process
1. **Pre-release checklist**: Tests pass, security clean, perf within budget, release notes written, rollback plan documented
2. **Deploy**: Execute via CI/CD pipeline (canary or blue-green)
3. **Monitor**: Watch error rates, latency, business metrics for 30 min
4. **Validate**: Synthetic checks, smoke tests, key user journeys
5. **Complete**: Inform stakeholders, update changelog

## Self-Correction
- Error rate spike? Automatic rollback
- Metric anomaly? Pause rollout, investigate
- Release note gap? Template and enforce
