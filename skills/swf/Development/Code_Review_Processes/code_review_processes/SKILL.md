---
name: code-review-process
description: Code review standards and workflow. Reviews are for learning and quality, not gatekeeping.
version: "1.0.0"
tags: [code-review, pull-request, quality, learning]
---

# Code Review Process

## Purpose
Code review is for knowledge sharing, catching issues early, and maintaining quality standards. Not for blocking or ego.

## Review Standards
- **Author**: PR <400 lines, focused scope, clear description, tests included
- **Reviewer**: Respond within 4h (P0), 24h (normal)
- **Approve**: When code is correct, tested, and maintainable (not when perfect)

## What Reviewers Check
1. **Correctness**: Does it solve the right problem?
2. **Tests**: Are edge cases covered?
3. **Security**: Any injection, auth, data exposure risks?
4. **Performance**: Any N+1, memory leaks, unnecessary work?
5. **Readability**: Can a teammate understand this in 6 months?
6. **Design**: Does it fit the architecture?

## Review Comments
- **Must fix**: Security, correctness, breaking changes
- **Should fix**: Performance, readability, test coverage
- **Nice to have**: Style preferences, alternative approaches
- **Question**: "Why this approach?" (learning, not blocking)

## Self-Correction
- PR too big? Ask author to split
- Review taking too long? Timebox, async review
- Same issues recurring? Add to linting or patterns doc
- Reviewer bottleneck? Cross-train reviewers
