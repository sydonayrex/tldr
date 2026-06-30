---
name: security-process
description: Security review workflow. When reviews happen, who participates, what gets checked.
version: "1.0.0"
tags: [security, review, threat-model, secure-development]
---

# Security Process

## Security Review Triggers
- New feature touching user data
- New API endpoint
- Authentication/authorization changes
- Third-party integration
- Infrastructure changes
- Any change to security-sensitive code

## Review Checklist
- [ ] Input validated at boundary
- [ ] Output encoded (XSS prevention)
- [ ] Authentication verified
- [ ] Authorization checked (RBAC/ABAC)
- [ ] Secrets not in code/logs
- [ ] Dependencies scanned (no critical CVEs)
- [ ] Rate limiting on public endpoints
- [ ] Audit logging for sensitive actions
- [ ] Data encrypted at rest and in transit

## Self-Correction
- Vulnerability found in review? Fix before merge
- Security test failing? Block merge, fix immediately
- New attack vector discovered? Retroactive review of affected code
