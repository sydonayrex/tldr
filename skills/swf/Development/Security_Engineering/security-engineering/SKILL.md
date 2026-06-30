---
name: security-engineering
description: Application security engineering. Threat modeling, secure code review, vulnerability management, and security architecture.
version: "1.0.0"
tags: [security, appsec, threat-modeling, secure-code-review, vulnerability]
---

# Security Engineering

## Purpose
Security built into every phase. Threat modeling, secure coding standards, vulnerability management, incident response support, security architecture.

## Security in Each Phase
- **Intake**: Security requirements in shaped bets, threat model for new features
- **Development**: Secure code review, SAST/DAST scanning, dependency scanning
- **Ship**: Security sign-off, penetration testing, secrets rotation

## Threat Modeling (STRIDE)
| Threat | Mitigation |
|--------|-----------|
| Spoofing | Authentication, MFA, session management |
| Tampering | Integrity checks, signed tokens, audit logs |
| Repudiation | Comprehensive audit logging |
| Information Disclosure | Encryption at rest/transit, least privilege |
| Denial of Service | Rate limiting, circuit breakers, autoscaling |
| Elevation of Privilege | RBAC, ABAC, principle of least privilege |

## Secure Coding Standards
- OWASP Top 10 awareness and prevention
- Input validation at every boundary
- Output encoding for XSS prevention
- Parameterized queries (no SQL injection)
- Secrets management (never in code, use vault)
- Dependency scanning (Snyk, Dependabot)
- Container image scanning (Trivy)

## Vulnerability Management
| Severity | SLA |
|----------|-----|
| Critical | 24h |
| High | 7 days |
| Medium | 30 days |
| Low | Next cycle |

## Self-Correction
- Vulnerability found? Fix immediately, don't defer
- Security review missed? Retroactively review
- Threat model outdated? Update before next cycle
- Security incident? Lead post-mortem, implement preventive measures

## Metrics
| Metric | Target |
|--------|--------|
| Critical vulns in prod | 0 |
| High vulns open >7 days | 0 |
| Security review coverage | 100% of new features |
| Mean time to remediate (critical) | <24h |
| Security test coverage | >80% of attack surface |
