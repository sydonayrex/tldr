---
name: extreme-programming-process
description: Extreme Programming (XP) practices. TDD, continuous integration, refactoring, small releases, collective ownership, pair programming, sustainable pace. A system — full benefits only when all practices are implemented together.
version: "2.0.0"
tags: [extreme-programming, xp, tdd, continuous-integration, refactoring, pair-programming]
triggers:
  - extreme programming
  - xp practices
  - tdd
  - test driven development
  - red green refactor
  - continuous integration
  - refactoring
  - pair programming
  - sustainable pace
---

# Extreme Programming Process

## Purpose
Extreme Programming is a set of practices that enable teams to write high-quality software, ship it often and predictably, and be responsive to change. It's a strategy to help teams go fast, forever. XP is a system — you only get the full benefits when all practices are implemented together. That's why it's called "extreme."

## Core Practices

### 1. Test-Driven Development (TDD)
Write the test before the production code. Cycle: **Red → Green → Refactor**

#### The TDD Cycle
1. **Red**: Write a failing test that describes desired functionality
2. **Green**: Write the minimum code to make the test pass
3. **Refactor**: Improve the design while keeping tests green
4. Repeat

#### Why Test-Driven (Not Test-After)
Writing tests after production code risks reinforcing incorrect behavior. With TDD, you set up the expected value in your test first, then implement to match. This catches logic errors immediately.

#### The Testing Pyramid
```
           /\
          /  \        End-to-End Tests (few, slow, high confidence)
         / E2E\       Simulate real user interactions
        /------\
       / Integ- \     Integration Tests (medium count, medium speed)
      /  ration  \    Exercise groups of units together
     /------------\
    /   Unit       \  Unit Tests (many, fast, isolated)
   /   Tests        \ Single function/class/file, no external deps
  /------------------\
```

| Level | Speed | Confidence | Count | Purpose |
|-------|-------|------------|-------|---------|
| **Unit** | <10ms | Isolated correctness | Many | Design tool for inter-class interactions |
| **Integration** | <100ms | Component interaction | Medium | Track down bugs in subsystem interactions |
| **End-to-End** | <10s | Full user flow | Few | Confidence that user flows aren't broken |

#### TDD as Design Tool
Unit tests are the primary design tool for inter-class interactions. By constantly running tests to shape the system, you get fast feedback on design decisions. Keep unit tests isolated from external dependencies (DB, network) for maximum speed.

### 2. Pair Programming
Two programmers, same problem, same time, same computer. See pair-programming-process skill for full details.

**Rule**: All production code is written in pairs.

### 3. Continuous Integration
Merge to main multiple times per day. Every merge triggers the full test suite. Broken integration is the highest priority fix.

### 4. Refactoring
Improve design continuously. No big rewrites. Every time you touch code, leave it better than you found it. Small, safe refactoring steps backed by tests.

### 5. Small Releases
Ship working software every 1-2 weeks. Thin slices of value. Each release is a learning milestone.

### 6. Collective Ownership
Anyone can change any code. No "this is MY module." Pair programming enables this naturally.

### 7. Sustainable Pace
No overtime, ever. Burnout kills quality. A 40-hour week is sustainable indefinitely. Tired developers write more bugs.

### 8. On-Site Customer / Product Availability
Product is available for questions daily. The team has direct access to product decisions, not through layers of communication.

## XP as a System
XP practices reinforce each other:
- **TDD + Pair Programming**: Pairs write tests together, catch each other's blind spots
- **Pair Programming + Collective Ownership**: Knowledge spreads, anyone can work anywhere
- **TDD + Continuous Integration**: Fast tests enable frequent integration
- **Small Releases + Sustainable Pace**: Small batches are sustainable; big batches cause crunch
- **Refactoring + TDD**: Tests make refactoring safe

**Rule**: You only get the full benefits when all practices are implemented together.

## Self-Correction
- Tests not written first? Stop, write test, then implement
- Integration broken? Fix before anything else (highest priority)
- Refactoring needed? Do it now, not later
- Overtime happening? Reduce scope, not hours
- Pairing skipped? Go back and pair on the next piece
- Big rewrite proposed? Refactor incrementally instead
- Test suite too slow? Optimize or parallelize

## Metrics
| Metric | Target |
|--------|--------|
| Test coverage (unit) | >80% |
| Integration frequency | Multiple times/day |
| Release frequency | Every 1-2 weeks |
| Pair coverage (production code) | 100% |
| Overtime hours | 0 |
| Build time (CI) | <10 min |
| Defect escape rate | <5% |

## Integration Points
- **Upstream**: Pair Programming Process, QA Engineering
- **Downstream**: All engineering skills (XP improves all code)
- **Peer**: DevOps Platform (CI/CD enables CI practice), Release Engineering (small releases)

## References
- pair-programming-process skill: Full pairing mechanics
- qa-engineering skill: Testing strategy and quality gates
- factory-standards-guard skill: Code quality standards
- devops-platform skill: CI/CD pipeline for continuous integration

## Invocation
Auto-triggered by: Development phase (all engineering work), Code quality issues, Team process discussions
Manual trigger: `/xp <practice-or-principle>`