---
name: developer-rhythm
description: The daily workflow, feedback loops, and development discipline for modern application developers. Covers the Agile developer flow, building blocks, trunk-based development, timeboxing, and the development inner loop.
version: "1.0.0"
tags: [developer-rhythm, workflow, agile, feedback-loops, development-flow, extreme-programming]
triggers:
  - daily workflow
  - developer flow
  - development rhythm
  - agile workflow
  - inner loop
  - outer loop
  - feedback loop
  - development discipline
  - trunk-based
  - timeboxing
  - spike
---

# Developer Rhythm

## Purpose
A healthy, lean, modern application team has a strong, consistent development rhythm. Developers who apply modern principles, practices, methods, and tools are able to add new features and fix existing issues faster, safer, and more sustainably. This skill defines the developer's daily workflow, the building blocks that enable it, and the discipline required to sustain it.

## The Agile Developer Workflow

### Flow Summary
1. **Pull**: Take the highest priority story from the backlog
2. **Review**: Review story details including desired outcome. For investigative work, use a Spike to timebox research.
3. **Iterate**: Use feedback loops to achieve the story outcome (TDD, Refactoring, Mikado Method)
4. **Document**: Document work as appropriate and merge to source control once complete
5. **Verify**: Verify the work is successfully integrated

**Rule**: This entire flow should run at least once per day, ideally multiple times per day to satisfy Continuous Integration and Continuous Delivery goals.

### Key Principles
| Principle | Description |
|-----------|-------------|
| **Pull-based work** | Downstream consumers pull work from upstream |
| **Small batch sizes** | Work is small enough to integrate daily |
| **Short feedback loops** | Iterate on work with fast feedback |
| **Daily integration** | Integrate work with the team at least daily |

### Inputs and Outputs
- **Input**: A single prioritized, estimated, independent user story from the backlog
- **Output**: Functioning software pulled into the Continuous Delivery pipeline for production delivery at any time

---

## Feedback Loops

### Inner Loop vs Outer Loop
| Loop | Environment | Purpose | Frequency |
|------|-------------|---------|-----------|
| **Inner Loop** | Local dev environment | Write code, run tests, iterate quickly | Minutes |
| **Outer Loop** | CI/CD pipeline | Automated verification, integration, deployment | Per merge |

### Inner Loop (Development Environment)
The developer iterates locally using TDD, refactoring, and patterns. Fast feedback on design and correctness. Runs in minutes or seconds.

### Outer Loop (CI/CD Pipeline)
Automated builds, tests, security scans, integration verification. Catches issues that local testing missed.

### Fine-Grained Feedback Loops
A single story might have hundreds of steps spanning multiple feedback loops. Each step should be small (minutes maximum). Reasons:
1. Overall work batch size remains small
2. Humans work more efficiently on small, well-defined tasks than large ambiguous ones

### Evidence-Based Development
Each feedback loop is a hypothesis with an experiment to verify it. Changes should be easy to define, implement, and measure the outcome.

---

## The Five Building Blocks

### 1. Principles
Foundational rules that help developers select the best practices. Long-lived, proven success factors.

**Core Principles**:
- Empower teams
- Start simple
- Embrace change
- Deliver early and often
- Improve continuously
- Give back

**Universal principle**: Code must be easy for any developer to read, adapt, and extend.

### 2. Practices
Specific ways of working, guided by principles. High-level method of *how* work is done without specifying exact steps.

**Key practices**: Pair Programming, Test-Driven Development, Continuous Integration

### 3. Patterns
Known solutions to common development problems. Discovered over time, published for others to share. Long-lived like practices.

**Anti-patterns**: Code patterns that do NOT provide solutions to recurring problems.

### 4. Methods and Techniques
Processes or procedures that facilitate practices. The detailed *how* in very specific scenarios.

**Examples**: Refactoring, Red/Green/Refactor, Mikado Method

### 5. Tools and Technologies
Facilitate the use of practices, patterns, and methods. Replace focus — proficiency in underlying principles matters more than tool-specific knowledge.

---

## Technical Debt Management

### Three Types of Costs
| Cost Type | Description | Management |
|-----------|-------------|------------|
| **Upfront Costs** | Planning, estimating, building new features; resource costs (compute, storage) | Keep designs minimal |
| **Taxes** | Ongoing maintenance, platform/middleware use, tool licenses, dependency upgrades, learning | Pay them — avoiding taxes makes things worse |
| **Technical Debt** | Taking shortcuts for immediate benefit with intent to remediate later | Remediate as part of ongoing code maintenance |

### Technical Debt Definition
A software team or developer chooses to take a shortcut in feature or design implementation for an immediate benefit, with the expectation of remediating it later. Accumulated debt that isn't repaid slows the team down.

### Accumulation Pattern
1. Developer deviates from principles as a shortcut to move faster
2. Developer should remediate as part of ongoing code maintenance
3. Teams that continually deviate put the codebase in a state that becomes hard to maintain and change

---

## Developer Discipline

Agile development compresses design, construction, and testing into the same workflow. This places more burden on the developer. Discipline requires clear, repeatable processes to be sustainable.

### Discipline Practices
| Practice | Description |
|----------|-------------|
| **Trunk-based Development** | Integrate to main/mainline at least daily. Short-lived feature branches preferred. |
| **Timeboxing** | Agree in advance on a time limit. If work isn't done in that time, assess whether to continue. |
| **Spikes** | Timebox research to better understand a problem/solution domain |
| **TDD** | Write test, write code, refactor. Each cycle is minutes. |
| **Refactoring** | Leave code better than you found it. Small, safe steps backed by tests. |

### Trunk-Based Development
- Developers integrate on a trunk/mainline of the source control repository
- Git: `main`, Mercurial: `default`, SVN: `trunk`, CVS: `HEAD`
- Works well for small, cohesive product teams
- Scales with short-lived feature branches
- Facilitates CI and CD

**Not for**: Large-scale OSS, COTS products, or products supporting multiple release versions simultaneously.

### Timeboxing
- Govern cadence of day-to-day work
- If work isn't done in the time limit, assess whether to continue
- Applied to research (Spikes) and daily work
- The Pomodoro Technique is a good timeboxing tool
- Analogy: A modern app team running a marathon at consistent pace, not sprinting

### Spikes
- Timeboxed research to understand a problem/solution domain
- When a story is investigative rather than well-defined
- Prevents open-ended research from consuming the iteration

---

## Self-Correction
- Integration failing? Pull latest locally before pushing (Inner Loop)
- Velocity slowing? Check for accumulated technical debt
- Feedback loops too long? Break work into smaller tasks
- Stories too large? Split into daily-integrable chunks
- Team burning out? Enforce timeboxing and sustainable pace
- Merge conflicts frequent? Practice trunk-based development, integrate daily
- Unclear design? Use TDD as a design tool

## Metrics
| Metric | Target |
|--------|--------|
| Integration frequency | At least daily (multiple ideal) |
| Inner loop duration | Minutes (not hours) |
| Technical debt trend | Stable or decreasing |
| Story size | Integrable in <1 day |
| Feature branch lifetime | <1 day (trunk-based) |
| Timebox adherence | Spikes end at time limit |

## Integration Points
- **Upstream**: Product Management (receives prioritized backlog), Pair Programming Process, Extreme Programming Process
- **Downstream**: DevOps Platform (CI/CD outer loop), Platform Engineering (inner loop infrastructure)
- **Peer**: QA Engineering (testing within the inner loop), Backend/Frontend Engineering (all use this workflow)

## References
- extreme-programming-process skill: TDD, CI, refactoring — the practices within the rhythm
- pair-programming-process skill: Pairing as a top-level practice
- qa-engineering skill: Testing within the inner loop
- devops-platform skill: CI/CD as the outer loop

## Invocation
Auto-triggered by: All development work, Code quality issues, Team process discussions
Manual trigger: `/dev-flow <practice-or-technique>`