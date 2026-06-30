---
name: post-release-monitoring
description: Extended monitoring period after a release. Watching for delayed impact and regression.
version: "1.0.0"
tags: [monitoring, post-release, regression, watch]
---

# Post Release Monitoring

## Monitoring Windows
- **T+0 to T+2h**: Intense monitoring (all dashboards, all alerts)
- **T+2h to T+24h**: Standard monitoring + release-specific dashboards
- **T+24h to T+7d**: Daily check on release-related metrics

## What to Watch
- Error rates (overall and per-endpoint)
- Latency (p50, p95, p99)
- Business metrics (conversion, engagement, revenue)
- Infrastructure metrics (CPU, memory, connections, queue depth)
- Log error patterns (new errors introduced)

## Self-Correction
- Delayed regression? Extend monitoring window
- New error pattern? Triage immediately
- Metric normal but alerts noisy? Tune thresholds
