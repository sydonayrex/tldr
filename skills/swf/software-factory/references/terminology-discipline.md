# Terminology Discipline in Software Factory Documentation

## The Problem

When asked to apply a thematic tone (e.g., "military feel," "startup voice," "academic tone") to Software Factory content, the instinct is to perform find-and-replace substitution: "team" → "unit," "slice" → "operation," "retrospective" → "after-action review," etc. This breaks the core terminology of the factory and creates inconsistency across the documentation corpus.

Every term in the Software Factory vocabulary was chosen deliberately. "Slice" evokes a thin, vertical piece — it's visual and operational. "Retrospective" is standard industry terminology that combines with "the factory is self-correcting" framing. "C-suite" is immediately recognizable as a business leadership structure. When these get replaced, the documentation no longer reads as Software Factory content — it reads as generic content with some fashionable coating.

## The Correct Approach

When adding a thematic tone to Software Factory documentation:

1. **Add flavor in the framing, not the terminology.** Use structural/metaphorical language in introductory paragraphs, section openers, and transitions. Compare:
   - ❌ "The unit operates on a single battle rhythm: Build-Measure-Learn."
   - ✅ "The factory runs on a single rhythm: Build-Measure-Learn. Decisions are made under uncertainty. Tiny bets are wagered against the uncertainty."

   The first substitutes vocabulary. The second adds structural flavor (bets, wagered) while keeping the core terminology (factory, rhythm) intact.

2. **Apply approved substitutions ONLY.** Maintain a centralized list of approved mappings. Currently:
   - `CEO → Commanding Officer` (section title and references)
   - `risks → risk assessment` (naming convention for the plan element)

   These are the exception, not the rule. Every other core term stays as-is unless explicitly approved. If a new mapping is needed, it should be debated and added to this list, not applied ad-hoc.

3. **Use metaphor in supporting text, not in headings or bullet lists.** Headings and lists are structural — they must use standard terminology so readers can scan consistently. Metaphor belongs in the prose paragraphs that explain and frame.

4. **Test for consistency.** Before finalizing, scan for substituted terms. A document where "operation" and "slice" are used interchangeably is worse than one that uses either exclusively. The original term must win when there's doubt.

## Approved Mapping Table

| Original Term | Approved Substitute | Context |
|---------------|-------------------|---------|
| CEO | Commanding Officer | Section titles, role descriptions, C-suite references |
| risks | risk assessment | Plan components, pitch structure, decision documentation |
| (everything else) | (keep original) | All other contexts |

This table is intentionally short. Adding entries has a high bar: the substitution must be so universally understood and conventional that no reader would need to translate back.

## Why This Matters

The Software Factory documentation is a living body of knowledge. Every time a reader encounters "the unit operates" in one chapter and "the team operates" in another, they experience a seam. Enough seams and the documentation feels like it was written by five different people who never talked to each other. Terminology discipline ensures the factory reads as a unified system, even when individual pieces were authored with different tones.

If a thematic treatment is important but would require pervasive term substitution, the correct answer is: **don't do the thematic treatment.** The factory's terminology is more valuable than any tone-shift gimmick. A "military feel" can be expressed through command structure diagrams, escalation protocols, and discipline language — not by renaming foundational concepts.
