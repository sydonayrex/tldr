---
name: betting
description: Resource commitment decision process. Decides which shaped work gets scheduled for the next cycle.
version: "1.0.0"
tags: [betting, shape-up, prioritization, resource-allocation, commitment]
---

# Betting

## Purpose
Commitment gate between Intake and Development. Decides: What do we bet on? Who does it? What do we NOT do?

Betting is NOT prioritization (continuous). Betting is commitment for the next cycle.

## Process
1. Present Pitches (15 min each, no interruption)
2. Cool-off Period (24h minimum, team reads and thinks)
3. Betting Table (decide: Bet / Defer / Kill / Discuss More)
4. Cycle Plan (schedule, team assignments, kickoff)

## Decisions
- **BET**: Clear pitch, fits appetite, team available. Commitment for the cycle.
- **DEFER**: Good pitch, wrong time. Return to backlog with un-defer trigger.
- **KILL**: Problem not real, solution not viable. Document why, close loop.
- **DISCUSS MORE**: Unclear pitch. Back to Shaping with specific questions.

## Capacity Rules
- Never overbook: Total bets <= 80% capacity
- One big bet max per cycle per team
- Small batch preference (2-week batches easier to finish)
- No bets with unresolved cross-team dependencies
- Every bet has required skills available

## Meeting Agenda (2 hours)
1. Cycle context (5 min)
2. Present pitches (15 min each)
3. Q&A (10 min each, clarifying only)
4. Cool-off (5 min silent)
5. Betting round (20 min)
6. Capacity check (10 min)
7. Team assignment (10 min)
8. Confirm and close (5 min)

## Self-Correction
- Overbooked last cycle? Reduce bets
- Under-delivered? Investigate root cause
- Too many kills? Discovery quality issue
- Too many defers? Capacity or dependency problem

## Metrics
| Metric | Target |
|--------|--------|
| Cycle Completion Rate | >80% |
| Overbooking Incidents | 0 |
| Deferral Reopen Rate | >30% within 2 cycles |
| Kill Rate | 10-25% |
