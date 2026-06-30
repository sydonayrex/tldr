---
name: discovery
description: Product discovery — the double diamond of problem and solution discovery. Covers Problem Discovery (understand business, users, prioritize problems) and Solution Framing (explore solutions, run experiments, define value proposition). Runs in parallel with Technical Discovery.
version: "2.0.0"
tags: [discovery, product-discovery, problem-discovery, solution-framing, double-diamond, user-research, lean]
triggers:
  - product discovery
  - problem discovery
  - solution framing
  - discovery phase
  - user research
  - problem space
  - double diamond
  - research synthesis
  - solution brainstorming
---

# Product Discovery

## Purpose
Product discovery is a set of activities a product team uses to reduce risk before building software. The goal is to learn enough to start building a product that is valuable, usable, and feasible. Most product failures stem from unchallenged assumptions — discovery surfaces and tests those assumptions.

## The Double Diamond
Discovery is divided into two stages, represented by a "double diamond" showing divergent and convergent thinking:

1. **Problem Discovery**: Diverge to understand the problem space broadly, then converge on the highest-value problem to solve
2. **Solution Framing**: Diverge to explore many possible solutions, then converge on the highest-value starting point

---

## Who Takes Part
Product discovery is a journey for a balanced team:
- Product managers, product designers, and engineers (core)
- Subject matter experts (legal, financial, compliance) depending on domain
- End users and other people closely involved in shaping the product

A balanced team approach ensures a range of perspectives, results in solutions that are both usable and feasible, and aligns the entire team on why the product is worth building.

**Parallel Track**: While product discovery runs, a technical discovery may also be running. These tracks should inform each other.

---

## Problem Discovery

The goal of Problem Discovery is to clearly define an important problem that, if solved, will deliver the highest business and user value. Typically happens over a fast-paced 2-3 week period.

### Understand the Business
Begin with capturing assumptions about desired business outcomes and user problems. Identify assumptions by involving a wide range of stakeholders and subject matter experts. The assumptions that pose the most risk to product success guide research efforts.

### Understand Users
Once assumptions are identified, engage with end users and subject matter experts to validate or invalidate them.

**Methods**:
- **Proto-personas**: Draw up initial persona hypotheses to decide which users to target
- **1:1 interviews**: Focus on testing riskiest assumptions (not just gathering information)
- **Contextual observation**: Observe users in their natural workflow
- **Journey maps**: Capture existing workflows and interactions, visualize pain points and opportunities
- **Service blueprints**: Map the technological and human interactions in a customer journey

### User Research Synthesis
Step back from personal feelings and look objectively at all notes and data captured. Pull out key insights, patterns, and problems. The goal is to identify needs, challenges, and behaviors — not jump to solutions.

**Common pitfall**: Jumping to solutions too quickly. Stay focused on needs, challenges, and behaviors during this stage.

### Prioritize the Key Problem
Problem discovery uncovers various user problems — likely too many to tackle at once. Prioritization is critical.

**2x2 Problem Matrix**:
- Axis 1: Business and user value (low to high)
- Axis 2: Feasibility / ease of solving (hard to easy)
- Goal: Agree on a single problem that is both highly valuable AND feasible to solve

**Involve engineers** in feasibility assessment to keep it grounded in technical expertise.

**Revisit proto-personas** at this stage to prioritize which user segment to solve problems for first.

**Ruthless prioritization**: Focusing on a single problem is a starting point, not the entire product. Focusing allows the team to ship quickly and get clear data. Trying to solve too much at once risks longer shipping time and less conclusive feedback loops.

---

## Solution Framing

The goal of Solution Framing is to determine a suitable starting point for building based on the problems identified. The team explores, evaluates, and iterates on potential solutions.

### Explore Many Solutions
Start by generating many possible solutions that address the prioritized problem. Use collaborative exercises like solution brainstorming and design studios to use the collective creativity of the team.

**Don't limit to software**: Business processes, services, technical architectures, and other approaches may provide better solutions.

**Keep the team together**: Having a balanced team working together generates and evaluates solutions, ensuring unique insights are included early.

Activities:
- **Solution brainstorming**: Generate many ideas as a team
- **Design studios**: Collaborative design exercises to explore options
- **Design critique**: Gather early feedback from the team on directions

### Focus on a High-Value Starting Point
Prioritize solutions using a 2x2 framework:
- Axis 1: User and business value (low to high)
- Axis 2: Technical complexity (low to high)
- Goal: Find a high-value, low-complexity starting point

Sometimes a complex technical element is tackled early because it's necessary for delivering value but is risky. In this case, build a **proof of concept** — the highest-value core functionality pared down to its simplest form to quickly show feasibility.

### Run Experiments to Test Concepts
As the team moves through product design, ideas contain assumptions. Some are low risk and easy to iterate on. Others are high risk — if wrong, the team builds something of little value.

**Lean experiments**: Structured, short learning activities for testing ideas and assumptions. They validate the riskiest "leap of faith" assumptions in the quickest, cheapest way possible.

Use simple prototypes and experiments to reduce big risks early.

### Define Value Proposition and Metrics for Success
Collaborate with the team and stakeholders to develop a value proposition:
- Revisit goals — how will the product drive business and user value?
- Define metrics to measure this value
- Use a lean business canvas to summarize: early adopters, value proposition, business assumptions, and key success metrics

---

## Moving into Delivery

The goal of product discovery is NOT to understand the entire problem ecosystem or design the entire product up front. Agreement on a single, validated feature and an initial backlog of user stories is usually enough to start delivery.

You might know integrations are needed but not the exact data. That's enough for engineering to start building while implementation details are discovered through research or user feedback.

**Feedback loops continue**: User research does not stop when delivery begins. Feedback from users becomes more vital as features ship to production, backlog is prioritized, and outcome-based roadmap is iterated from learnings.

---

## Self-Correction
- Jumping to solutions during problem discovery? Refocus on needs and behaviors
- Research bias too homogeneous? Diversify user sample
- Data contradicts gut? Trust data, reframe hypothesis
- Too many problems identified? Use 2x2 matrix, pick one
- Solutions too narrow? Brainstorm broadly — not just software
- Team misaligned on priority? Re-run synthesis together
- Discovery scope creeping? Timebox to 2-3 weeks

## Metrics
| Metric | Target |
|--------|--------|
| Time in Discovery | 2-3 weeks |
| Punt Rate | 20-40% (healthy!) |
| Evidence Quality | >3.5 avg |
| False Positives | <10% |
| Problems prioritized | 1 feature's worth |
| Experiments run | At least 1 per riskiest assumption |
| Value proposition defined | Before entering delivery |

## Integration Points
**Upstream**: Intake Triage (triggers discovery), CEO/CPO (strategic context)
**Downstream**: Shaping (receives problem brief), Technical Discovery (parallel track, mutual input)
**Peer**: Product Management (outcomes and metrics), CPO (value hypothesis), Product Design (research execution)

## References
- technical-discovery skill: Parallel technical discovery track
- mom-test skill: How to interview without leading
- lean-startup skill: Build-Measure-Learn, validated learning
- jobs-to-be-done skill: Understanding customer jobs
- continuous-discovery skill: Opportunity Solution Trees
- product-management skill: Outcome-oriented planning

## Invocation
Auto-triggered by: Feature Request classification from Intake Triage
Auto-triggered by: Research Spike routed from Intake Triage
Manual trigger: `/discovery run <problem-statement>`