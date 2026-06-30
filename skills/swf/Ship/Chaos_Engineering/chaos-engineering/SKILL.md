---
name: chaos-engineering
description: Resilience testing through controlled failure injection. Validates that systems handle failure gracefully.
version: "1.0.0"
tags: [chaos, resilience, failure-injection, testing, reliability]
---

# Chaos Engineering

## Purpose
Validates system resilience through controlled failure injection. Find weaknesses before they find you in production.

## Principles
1. **Hypothesis**: "System handles [failure] without user impact"
2. **Blast radius**: Start small, controlled environment
3. **Measure**: Compare steady-state vs failure-state
4. **Stop and fix**: If users impacted, stop immediately, fix weakness

## Experiments (Least to Most Invasive)
1. Dependency latency injection
2. Dependency failure injection
3. Instance termination
4. AZ/region failure
5. Network partition

## Self-Correction
- Experiment causes outage? Stop, fix weakness, start smaller
- No experiments running? Schedule regular chaos days
- Production chaos too risky? Use staging with production-like load
