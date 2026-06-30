---
name: capacity-planning
description: Capacity planning and management. Ensures infrastructure scales to meet demand without over-provisioning.
version: "1.0.0"
tags: [capacity, planning, scaling, cost, forecasting]
---

# Capacity Planning

## Purpose
Ensures infrastructure meets demand cost-effectively. Forecasts growth, plans scaling, avoids over-provisioning.

## Process
1. **Measure**: Current utilization, growth rate, traffic patterns
2. **Forecast**: Project 3-6 months ahead based on growth + known events
3. **Plan**: Scaling actions needed (when, how much, cost)
4. **Execute**: Provision in advance of need
5. **Review**: Actual vs forecast, adjust model

## Scaling Triggers
- CPU >70% sustained: Scale out
- Memory >80% sustained: Scale up
- Queue depth growing: Scale consumers
- Error rate under load: Scale before next event

## Self-Correction
- Capacity exceeded? Emergency scale, post-mortem
- Over-provisioned? Right-size, reduce costs
- Forecast wrong? Improve model
