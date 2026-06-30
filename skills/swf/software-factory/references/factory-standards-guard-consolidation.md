# Factory Standards Guard: Consolidation Pattern

## What Was Consolidated

The factory-standards-guard skill consolidates 6 scattered global skills into one unified gate system:

| Source Global Skill | Gate | What Was Extracted |
|--------------------|-------|--------------------|
| clean-code-guard | Gate 1 | Always-applied imperatives, self-check checklist |
| test-guard | Gate 2 | Universal test rules, test file checklist |
| docs-guard | Gate 3 | Accuracy rules, doc surfaces that move together |
| commit-work | Gate 4 | Conventional Commits, commit workflow |
| receiving-code-review | Protocol | Review feedback handling (verify → evaluate → respond → implement) |
| requesting-code-review | Protocol | PR size, description, self-review first |

## Why Consolidation Matters

Before: each skill was separate but all activated at the same time (pre-merge). An agent loading "code-reviewer" would have the review methodology but not the test/doc/commit knowledge. The guard was incomplete.

After: factory-standards-guard is the single dependency for "is this ready to merge?". Loads all four gates in one shot.

## Trigger Mapping

When the user says... → Load this skill:
- "Is this ready to merge?" → factory-standards-guard
- "Review this PR" → factory-standards-guard + code-reviewer
- "Check code quality" → factory-standards-guard (Gate 1 only)
- "Check tests" → factory-standards-guard (Gate 2 only)
- "Check docs" → factory-standards-guard (Gate 3 only)

## Pitfall

Don't load clean-code-guard/test-guard/docs-guard individually when working in a Software Factory project. They are subdomain variants of the unified guard. Load factory-standards-guard instead and apply the relevant gate.
