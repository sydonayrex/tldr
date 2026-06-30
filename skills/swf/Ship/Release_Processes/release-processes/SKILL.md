---
name: ship-release-process
description: Release execution workflow. Step-by-step process for executing a production release.
version: "1.0.0"
tags: [release, execution, workflow, sign-off]
---

# Release Process (Ship)

## Pre-Release (T-24h)
- [ ] All tests pass in staging
- [ ] Security scan clean
- [ ] Performance within budget
- [ ] Release notes drafted
- [ ] Rollback plan documented
- [ ] On-call briefed
- [ ] Stakeholders notified

## Release Day
- [ ] Deploy starts during low-traffic window
- [ ] Canary at 5% - monitor 15 min
- [ ] Canary at 25% - monitor 15 min
- [ ] Full rollout - monitor 30 min
- [ ] Synthetic smoke tests pass
- [ ] Error rates normal
- [ ] Declare success

## Self-Correction
- Canary fails? Automatic rollback, investigate
- Missing checklist item? Stop release, complete first
- Stakeholder uninformed? Proactive outreach
