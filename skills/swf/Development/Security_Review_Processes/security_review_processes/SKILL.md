---
name: security-review-process
description: Formal security review workflow for features, architecture changes, and third-party integrations.
version: "1.0.0"
tags: [security-review, formal-review, sign-off]
---

# Security Review Process

## Triggers
- New feature with user data access
- Authentication/authorization changes
- Third-party integration
- Infrastructure changes
- Cross-border data transfer

## Review Steps
1. Self-assessment (developer completes security checklist)
2. Peer review (security-trained engineer)
3. Security team review (for high-risk items)
4. Sign-off (security engineer approves for release)

## Self-Correction
- Review bypassed? Retroactive review before launch
- Finding not fixed? Block release
- New threat model? Retroactive review of affected features
