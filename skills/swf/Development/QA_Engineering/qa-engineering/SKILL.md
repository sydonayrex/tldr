---
name: qa-engineering
description: Quality engineering (not gatekeeping). Builds test strategy, automation frameworks, and quality practices that prevent bugs.
version: "1.0.0"
tags: [qa, quality-engineering, test-automation, test-strategy, shift-left]
---

# QA Engineering

## Purpose
Quality engineering, not quality assurance as a gate. Shift-left quality, test strategy over test cases, automation as infrastructure, quality advocacy.

## Testing Pyramid
```
        /\\
       /  \\        E2E (5% of tests, critical paths only)
      / E2E\\
     /------\\
    / Integ- \\     Integration (20%: APIs, DB, services)
   /  ration  \\
  /------------\\
 /   Unit       \\   Unit (75%: functions, components, logic)
/------------------\\
```

## Test Levels
| Level | What | Who | Speed | Count |
|-------|------|-----|-------|-------|
| Unit | Single function | Developer | <10ms | Many |
| Integration | API + DB | Dev + QA | <100ms | Medium |
| Contract | Consumer/provider | Dev + QA | <100ms | Medium |
| E2E | Full user journey | QA | <10s | Few |
| Performance | Load, stress | QA + SRE | Minutes | Few |
| Security | Vulnerability | Security + QA | Minutes | Targeted |

## Quality Gates
- **Pre-commit**: Unit tests pass, lint passes, type check passes
- **Pre-merge**: All tests pass, code review approved, no critical SonarQube issues
- **Pre-release**: E2E pass, performance within budget, security scan clean, exploratory testing done

## Bug Severity
| Severity | Definition | SLA |
|----------|-----------|-----|
| S1 Critical | Data loss, security breach, down | Immediate hotfix |
| S2 High | Major feature broken, no workaround | 24h |
| S3 Medium | Partial broken, has workaround | Current cycle |
| S4 Low | Cosmetic, minor | When convenient |

## Self-Correction
- Flaky tests >5%? Investigate and fix
- Coverage misleading? Focus on valuable tests
- Bug escaped to prod? Root cause, add test
- Suite too slow? Optimize or parallelize

## Metrics
| Metric | Target |
|--------|--------|
| Test flaky rate | <5% |
| Bug escape rate | <5% |
| CI pass rate | >95% |
| Unit test coverage | >80% |
| CI execution time | <10 min |
| S1 bug resolution | <4h |
