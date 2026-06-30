---
name: technical-discovery
description: Technical discovery practices to de-risk projects before development. Covers assumption identification, risk assessment, discovery backlog, path to production, steel thread, and cross-product-engineering collaboration.
version: "1.0.0"
tags: [technical-discovery, risk-mitigation, path-to-production, steel-thread, event-storming, architecture]
triggers:
  - technical discovery
  - discovery phase
  - pre-development
  - technical risk
  - assumptions
  - mitigations
  - steel thread
  - path to production
  - proof of concept
  - architecture decision
---

# Technical Discovery

## Purpose
Technical discovery happens before (or alongside) software development to find and reduce technical risk. The goal is to set the team up for success by understanding what exists, what doesn't, what's unknown, and what could cause the project to fail or be slowed down from a technical perspective. Ideally, technical discovery happens while product research is taking place so that product and engineering streams inform each other without delaying delivery.

## Who Takes Part
Technical discovery is a balanced team activity. Engineers lead, but product managers and designers participate to ensure technical findings inform product direction. Subject matter experts (legal, financial, compliance) may also contribute depending on the domain.

## The Three Typical Goals

| Goal | Description |
|------|-------------|
| **Be ready to start building on day one** | Can push code, tests run, and if successful it deploys to an acceptance environment |
| **Have a clear path to production** | A way to push code to production often and incrementally |
| **Understand how technical constraints might impact product** | Assess feasibility of solutions and surface constraints early |

---

## Phase 1: Identify Assumptions and Risks

### Capture Assumptions
Start by capturing assumptions about the project:
- What is the current state? What exists? What doesn't?
- What are the current unknowns?
- What do we believe to be true without evidence?

### Risks and Mitigations Exercise
The team brainstorms things that could cause the project to fail — or be slowed down — from a technical perspective. For each risk, identify:
- **Risk**: What could go wrong?
- **Impact**: How bad would it be?
- **Mitigation**: How can we reduce the likelihood or impact?

If risks are too vague or too many, run a specific technical risks version of the exercise.

### Stakeholder Interviews
Interview developers and stakeholders about:
- How they currently work
- How software is currently being delivered
- How the people involved interact

This uncovers risks and opportunities that aren't visible from the outside.

---

## Phase 2: Set Discovery Goals

With agreement on the biggest assumptions and risks, agree on goals for the discovery. Consider what is achievable in the time you have. If the domain is unfamiliar or complex, things will take longer.

### Goal: Be Ready to Start Building on Day One
Sub-goals (pick relevant to your situation):
- Get access to systems
- Make key technical choices
- Decide where to deploy
- Set up CI/CD, tools, platform, etc.
- Ramp up on unfamiliar tech
- Investigate potential integrations and get access (e.g., API keys)

### Goal: Have a Clear Path to Production
Sub-goals:
- Understand the existing path to production
- Propose a suitable path to production for a new platform
- Identify and understand regulations you must follow
- Identify stakeholders who "sign off" and build relationships with them
- Identify pain points in the existing path and strategize to avoid them
- Build confidence within the team via delivery (especially for teams skeptical of pushing to production early)

**Path to Production Mapping**: Collaboratively map how code gets to production. Takes 1-2 hours with the right people — particularly people who have done this before.

**Steel Thread** (also called tracer bullet or walking skeleton): Deploy a version of the app with basic setup and integration points but no functionality. Drive out issues like system access. Use after Path to Production Mapping to validate findings, or when there's no existing path to demonstrate how a new process could work.

### Goal: Understand How Technical Constraints Might Impact Product
Sub-goals:
- Understand the domain
- What's off the table? What can't we do?
- Understand technical complexity of potential solutions
- What technical or security requirements exist?

---

## Phase 3: Build a Technical Discovery Backlog

Build and prioritize a backlog similar to a software user story backlog — but based on things you are trying to learn or decide.

### Prioritization: 2x2 Grid
Draw a 2x2 grid where one axis is "level of understanding" and the other is "importance to this project." Brainstorm things you might need to learn about and discuss where each item belongs on the grid. The most important and least understood items are top priority.

### Working the Backlog
- Take things a day at a time
- Share learnings with the team (dedicated time after stand-up)
- Pause regularly to re-prioritize the backlog as you learn
- Focus on things you cannot continue without
- Focus on things unlikely to change (don't start a walking skeleton before the tech stack is established)

---

## Phase 4: Work Together with Product to Avoid Silos

Technical discovery and product discovery must NOT be done in isolation from each other.

### Communicate Findings
- Make sure the team knows why each discovery finding is important
- Does it impact product direction or product delivery?

### Engineering's Role in Product Discovery
Engineers have an important role in product discovery:
- During user interviews: identify technical concerns
- During prototype testing: notice opportunities that less technical team members might miss
- During solution brainstorming: assess feasibility early

### Balanced Team Approach
Ensures a range of perspectives, results in solutions that are both usable and feasible, and aligns the entire team on why the product is worth building.

---

## Practices to Try During Technical Discovery

| Practice | What It Does |
|----------|-------------|
| **Risks and Mitigations** | Brainstorm what could cause project delay or failure and identify ways to avoid it |
| **Path to Production Mapping** | Team collaboratively maps the path from code commit to production delivery |
| **Ubiquitous Language** | Establish a common set of terms understood by the core team |
| **Event Storming** | Map out events in a system and/or domain |
| **Service Blueprint** | Map technological and human interactions in a customer journey |
| **Steel Thread** | App with no functionality pushed to production to de-risk process and integrations |
| **Architectural Decision Records (ADRs)** | Track decisions for sharing context with current and future team |
| **C4 Architecture Diagrams** | Model software architecture at multiple levels of abstraction |
| **Proofs of Concept (PoC)** | Quick experiments to check if an idea is feasible |

---

## Advice from Practitioners

- Discovery is more chaotic than delivery — don't expect to move as quickly. You will gain momentum later.
- Reach out to practitioners who have worked on similar projects for advice.
- When building a PoC: make it look rough and temporary so it will be thrown away. If the code is low quality but the PoC looks good, stakeholders may want to keep it!
- If you can't get access to people or information you need, raise this as a risk to your project sponsor.
- Keep product and design informed about technical discovery findings.
- Get the whole team involved in decision making and planning to encourage shared ownership.
- Have a schedule and make it visible to the whole team.
- Focus on outcomes/goals.
- Focus on things that are unlikely to change (e.g., don't start a walking skeleton before the tech stack is established).
- Don't stress if things take longer than planned — anything you get done will save time later. Remaining work can be done in the delivery phase (raise as a risk).
- If you get stuck, ask what decision your team is trying to make. Work backwards from that to the things you need to find out.

---

## Self-Correction
- Discovery taking longer than expected? Raise as a risk, but don't panic — it saves time later
- Can't get system access? Escalate to sponsor immediately
- Tech stack not decided? Focus on decisions that are prerequisites for other work
- Product and engineering misaligned? Schedule daily sync during discovery
- PoC looking too polished? Make it look temporary so it won't be kept

## Metrics
| Metric | Target |
|--------|--------|
| Discovery backlog items completed | Track daily |
| Path to production mapped | Before development starts |
| Critical risks identified and mitigated | >80% |
| Team access to systems | Before day one of development |
| CI/CD pipeline operational | Before first story |

## Integration Points
- **Upstream**: Product Discovery (informs and is informed by), Intake Triage (triggers discovery)
- **Downstream**: Development (discovery findings shape architecture and approach), Platform Engineering (CI/CD setup)
- **Peer**: Product Management (shared discovery), Architecture Process (ADRs, C4 diagrams)

## References
- discovery skill: Product discovery (parallel track)
- architecture-process skill: ADRs, C4 diagrams
- platform-engineering skill: CI/CD setup, path to production
- devops-platform skill: Pipeline setup during discovery

## Invocation
Auto-triggered by: New project intake, Complex technical requirements, Pre-development phase
Manual trigger: `/tech-discovery <project-or-system>`