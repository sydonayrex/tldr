---
name: testing-process
description: Test execution workflow. What tests run when, who owns them, how results are tracked.
version: "1.0.0"
tags: [testing, test-execution, quality-gates, automation]
---

# Testing Process

## Test Execution Flow
1. **Local**: Developer runs unit tests before commit
2. **Pre-commit hook**: Lint, typecheck, unit tests (fast feedback)
3. **CI on PR**: Full unit + integration suite, security scan
4. **CI on merge**: E2E critical path, performance baseline
5. **Pre-release**: Full E2E, load test, accessibility audit
6. **Post-deploy**: Smoke tests, synthetic monitoring

## Ownership
| Test Type | Owned By | Run By |
|-----------|----------|--------|
| Unit | Developer | CI |
| Integration | Developer + QA | CI |
| Contract | Developer + QA | CI |
| E2E | QA | CI |
| Performance | QA + SRE | CI (release) |
| Security | Security + QA | CI |
| Exploratory | Whole team | Manual |

## Self-Correction
- Flaky test? Quarantine within 24h, fix within 3 days
- Coverage dropping? Block merge until restored
- Suite too slow? Parallelize, optimize, or split
