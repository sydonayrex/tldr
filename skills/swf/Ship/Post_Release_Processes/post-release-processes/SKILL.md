---
name: post-release-process
description: Post-release validation and communication. Confirming the release succeeded and communicating results.
version: "1.0.0"
tags: [post-release, validation, communication, closeout]
---

# Post Release Process

## Validation (T+30min)
- [ ] All health checks green
- [ ] Error rates at or below baseline
- [ ] Business metrics normal
- [ ] No unexpected alerts
- [ ] Key user flows verified (synthetic)

## Communication (T+1h)
- Release success announced to stakeholders
- Release notes published
- Any known issues documented
- Team acknowledgment

## Self-Correction
- Metrics anomalous? Investigate, don't assume
- Communication gap? Improve template
- Known issues not disclosed? Retroactive communication
