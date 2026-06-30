---
name: factory-standards-guard
description: Guardrails for code quality, test quality, documentation accuracy, and commit discipline. Consolidates patterns from clean-code-guard, test-guard, docs-guard, and commit-work into a single factory-wide standard.
version: "1.0.0"
tags: [guardrails, code-quality, test-quality, documentation, commits, standards]
triggers:
  - code review
  - quality check
  - guard pass
  - commit check
  - standards check
  - is this ready to merge
  - is this ready to ship
---

# Factory Standards & Guardrails

## Purpose
Consolidates the scattered quality guardrails (clean code, tests, docs, commits) into a single factory-wide standard. Every piece of work must pass these gates before merging or shipping.

**Recontextualized from**: clean-code-guard, test-guard, docs-guard, commit-work, receiving-code-review, requesting-code-review

## The Four Guard Gates

```
┌──────────────────────────────────────────────────────────────┐
│                    FACTORY STANDARDS GUARD                    │
│                                                              │
│  GATE 1: Code Quality    → clean-code-guard patterns         │
│  GATE 2: Test Quality    → test-guard patterns               │
│  GATE 3: Documentation   → docs-guard patterns                │
│  GATE 4: Commit Hygiene  → commit-work patterns               │
│                                                              │
│  ALL FOUR MUST PASS BEFORE MERGE                             │
└──────────────────────────────────────────────────────────────┘
```

---

## GATE 1: Code Quality (from clean-code-guard)

### Always-Applied Imperatives
1. **No dead code**: Every function, export, and branch is used. Unused code is deleted, not commented out.
2. **No unnecessary abstraction**: One adapter = hypothetical seam. Two adapters = real seam. Don't abstract until you have two concrete cases.
3. **No shallow modules**: Interface complexity ≈ implementation complexity means the module isn't earning its keep.
4. **Single level of abstraction**: Functions do one thing. Mixed abstraction levels are split.
5. **No primitive obsession**: Domain concepts get named types, not raw strings/numbers.
6. **Error handling is explicit**: No empty catch blocks, no swallowed exceptions, no `any` types.
7. **Dependencies point inward**: Domain code never imports from infrastructure or UI.

### Self-Check Before Delivery
- [ ] Can I explain what this code does in one sentence?
- [ ] Would a teammate understand this in 6 months?
- [ ] Did I delete more code than I added?
- [ ] Are there any `TODO`, `FIXME`, or `HACK` comments I should resolve now?
- [ ] Does this change have more than one reason to be revised?

---

## GATE 2: Test Quality (from test-guard)

### Universal Test Rules
1. **Tests verify behavior, not implementation**: Test what the code does, not how it does it.
2. **No test without assertion**: Every test file has at least one `expect()` call.
3. **No hasty abstractions in tests**: AHA — avoid hasty abstractions, prefer duplication over wrong abstraction.
4. **Setup functions over beforeEach**: Composable setup, not shared mutable state.
5. **Test one thing per test**: If a test fails, you should know exactly what's wrong from the test name.
6. **No mocking what you don't own**: Mock at system boundaries (network, DB, clock), not internal dependencies.
7. **Tests are documentation**: A new team member should understand the system by reading the tests.

### Test File Checklist
- [ ] File starts with JSDoc explaining what is being tested
- [ ] Test names describe behavior: "returns empty array when no items" not "test1"
- [ ] No nested describe blocks beyond 2 levels
- [ ] No shared mutable state between tests
- [ ] Edge cases covered: empty, null, max, special characters
- [ ] Error paths tested, not just happy path

---

## GATE 3: Documentation (from docs-guard)

### Accuracy Rules
1. **Every referenced symbol exists**: Functions, classes, CLI commands, config keys mentioned in docs are verified against source.
2. **Every code sample works**: Imports resolve, APIs exist with documented signatures, no hardcoded paths.
3. **Document actual behavior, not intended**: Read the implementation before describing it.
4. **No unverifiable claims**: Performance numbers, compatibility matrices require a source in the repo.
5. **Versions are explicit**: Features state the version that introduced them.

### Documentation Surfaces That Must Move Together
- README
- API reference docs
- Code docstrings
- Changelog
- Configuration examples
- Architecture diagrams

### Doc Checklist
- [ ] All code samples tested (copy-paste-run)
- [ ] All cross-references resolve
- [ ] Changelog updated for user-facing changes
- [ ] Breaking changes documented with migration path
- [ ] No "coming soon" or "TBD" in shipped docs

---

## GATE 4: Commit Hygiene (from commit-work)

### Commit Standards
1. **Conventional Commits**: `type(scope): short summary`
2. **One logical change per commit**: Split by feature vs refactor, backend vs frontend, tests vs prod code.
3. **No mixed commits**: Formatting changes separated from logic changes.
4. **Commit messages explain why**: "What changed?" + "Why?" not "What I did today"
5. **No secrets in commits**: No tokens, keys, or credentials.

### Commit Workflow
1. Inspect working tree (`git status`, `git diff`)
2. Decide commit boundaries (split if mixed)
3. Stage only what belongs (`git add -p` for mixed files)
4. Review what will be committed (`git diff --cached`)
5. Describe the change in 1-2 sentences before writing the message
6. Write Conventional Commit message
7. Run smallest relevant verification (unit tests, lint, or build)

### Commit Message Format
```
type(scope): short summary (50 chars or less)

What changed and why. Not an implementation diary.
Focus on the "why" and the "what", not the "how".

BREAKING CHANGE: [if applicable]
Fixes: [issue number]
```

---

## Code Review Protocol (from receiving-code-review + requesting-code-review)

### Receiving Review Feedback
1. **VERIFY**: Check against codebase reality before implementing
2. **EVALUATE**: Is this technically sound for THIS codebase?
3. **RESPOND**: Technical acknowledgment or reasoned pushback
4. **IMPLEMENT**: One item at a time, test each

### Forbidden Responses
- "You're absolutely right!" (blind agreement)
- "Great point!" / "Excellent feedback!" (performative)
- "Let me implement that now" (before verification)

### Instead
- Restate the technical requirement
- Ask clarifying questions
- Push back with technical reasoning if wrong
- Just start working (actions > words)

### Handling Unclear Feedback
```
IF any item is unclear:
  STOP - do not implement anything yet
  ASK for clarification on unclear items
WHY: Items may be related. Partial understanding = wrong implementation.
```

### Requesting Review
- PR <400 lines when possible
- Clear description: what, why, how to test
- Link to shaped bet / value hypothesis
- Self-review first: read your own diff before requesting

---

## Self-Correction
- Gate 1 violations increasing? Team needs clean code training
- Gate 2 violations increasing? Test patterns need reinforcement
- Gate 3 violations increasing? Doc-writing needs to be part of definition of done
- Gate 4 violations increasing? Commit discipline needs reinforcement
- Review feedback repeatedly misunderstood? Improve communication patterns

## Metrics
| Metric | Target |
|--------|--------|
| Code quality violations (per review) | <3 |
| Test coverage | >80% |
| Doc accuracy (broken references) | 0 |
| Commit convention adherence | 100% |
| Review turnaround time | <4h (P0), <24h (normal) |

## Integration Points
- **Upstream**: All engineering skills (must pass gates before merge)
- **Downstream**: QA Engineering (verifies gates passed), Release Engineering (verifies before ship)
- **Peer**: Code Review Process (enforces gates), QA Engineering (test quality)

## References
- clean-code-guard skill: Code quality imperatives
- test-guard skill: Test quality rules
- docs-guard skill: Documentation accuracy rules
- commit-work skill: Commit discipline workflow
- receiving-code-review skill: How to handle feedback
- requesting-code-review skill: How to request review
- clean-code skill: Code quality principles
- test-patterns skill: Test patterns across frameworks

## Invocation
Auto-triggered by: Pre-merge check, Pre-release check, Code review
Manual trigger: `/standards-check <file-or-pr>`