---
name: software-factory
description: Root orchestrator skill for the Software Factory — a complete, balanced software development unit with C-suite leadership layer that architects, designs, implements, and ships software through Intake, Development, Ship phases.
version: "4.0.0"
tags: [orchestrator, software-factory, team-coordination, self-correction, c-suite]
---

# Software Factory — Root Orchestrator

## Purpose

The Software Factory operates as a **balanced team effort** with a C-suite leadership layer modeled on the Build-Measure-Learn framework. Every role:
1. Pulls its own weight — delivers on domain expertise without overreach
2. Owns its gaps — self-corrects when it cannot deliver, escalates honestly
3. Trusts and verifies — relies on peer skills for cross-cutting concerns
4. Operates as a unit — no silos, shared accountability for outcomes

## C-Suite Leadership Layer (Build-Measure-Learn Mapping)

The C-suite provides executive oversight across all three phases, mapping to the Build-Measure-Learn feedback loop:

| Role | Owns | BML Phase | Recontextualized From |
|------|------|-----------|----------------------|
| **CEO** (Chief Executive Officer) | Product vision, strategy, "why" | **Learn** (direction) | gstack office-hours, plan-ceo-review |
| **COO** (Chief Operating Officer) | Execution, delivery, "how" | **Build** (execution) | gstack ship, autoplan, health |
| **CSO** (Chief Security Officer) | Security posture, "protect" | **Measure** (security) | gstack cso |
| **CLO** (Chief Learning Officer) | Organizational learning, "improve" | **Learn** (feedback) | gstack learn, retro |
| **CTO** (Chief Technology Officer) | Technical vision, architecture | **Build** (feasibility) | gstack plan-eng-review, spec |
| **CPO/CQO** (Chief Product & Quality Officer) | Value proposition + quality standards, "are we building the right thing and building it right" | **Learn + Build + Measure** (value + quality pipeline) | gstack office-hours, mom-test, qa, qa-only |
| — *Optional split*: **CPO** + **CQO** | Separate value and quality commands | Learn+Measure / Measure | gstack office-hours / gstack qa |
| **Product Design** | Design system strategy, UX, accessibility | **Build** (design system as foundation) | design-system-starter, design-tokens, design-component |
| **CDO** (Chief Data Officer) | Data architecture, data connections | **Build + Measure** (data layer) | gstack diagram, database-schema |

### BML Cycle Integration

```
    ┌─────────────────────────────────────────────────────┐
    │              LEARN (CEO + CLO + CPO)                 │
    │  "What should we learn? Is this valuable? Did it     │
    │   work? What is our hypothesis?"                     │
    └────────────────────────┬────────────────────────────┘
                             │
                             ▼
┌────────────────────────────────────────────────────────────┐
│               BUILD (COO + CTO + CDO)                       │
│  "How do we build it? Can we build it? How does data       │
│   flow? Is the architecture sound?"                         │
└────────────────────────┬───────────────────────────────────┘
                         │
                         ▼
┌────────────────────────────────────────────────────────────┐
│              MEASURE (CSO + CPO/CQO + CDO)                │
│  "Is it secure? Is it quality? Did we deliver value?       │
│   Is data accurate and fresh?"                              │
└────────────────────────┬───────────────────────────────────┘
                         │
                         ▼
                    [Back to LEARN]
```

## Factory Structure

```
Software_Factory/
+-- software-factory/              (root orchestrator)
|
+-- Intake/                        (Phase 1: What to build and why)
|   +-- Intake/intake-triage
|   +-- Discovery/discovery
|   +-- Shaping/shaping
|   +-- Betting/betting
|   +-- Prioritization/prioritization
|   +-- Value_Review_Gate/value-review-gate (cross-cutting: Intake + Dev + Ship)
|
+-- Development/                   (Phase 2: Building it right)
|   +-- Job Types:
|   |   +-- Frontend_Engineering/frontend-engineering
|   |   +-- Backend_Engineering/backend-engineering
|   |   +-- Platform_Engineering/platform-engineering
|   |   +-- Product_Management/product-management
|   |   +-- Product_Design/product-design
|   |   +-- QA_Engineering/qa-engineering
|   |   +-- Security_Engineering/security-engineering
|   |   +-- DevOps_Platform/devops-platform
|   |   +-- Site_Reliability_Engineering/site-reliability-engineering
|   |
|   +-- C-Suite Leadership:
|   |   +-- Product_Management/chief-executive-officer
|   |   +-- Product_Management/chief-operating-officer
|   |   +-- Product_Management/chief-product-officer
|   |   +-- Security_Engineering/chief-security-officer
|   |   +-- Self_Correction_Processes/chief-learning-officer
|   |   +-- Architecture_Processes/chief-technology-officer
|   |   +-- QA_Engineering/chief-quality-officer
|   |   +-- Backend_Engineering/chief-data-officer
|   |
|   +-- Cross-Cutting:
|   |   +-- Code_Review_Processes/factory-standards-guard (code/test/doc/commit gates)
|   |   +-- Product_Management/factory-analytics (OMTM, metrics, cohorts)
|   |
|   +-- Processes (17):
|       +-- Code_Review_Processes, Testing_Processes, Security_Processes,
|       +-- CI_CD_Processes, QA_Processes, Release_Processes,
|       +-- Incident_Response_Processes, Architecture_Processes,
|       +-- Pair_Programming_Processes, Extreme_Programming_Processes,
|       +-- Lean_Slices_Processes, Agile_Outcomes_Processes,
|       +-- Red_Teaming_Processes, Security_Review_Processes,
|       +-- Self_Correction_Processes, Trust_Accountability_Processes,
|       +-- developer-rhythm (cross-cutting: all engineering practices)
|
+-- Ship/                          (Phase 3: Deliver and operate)
    +-- Job Types:
    |   +-- Release_Engineering/release-engineering
    |   +-- Deployment_Engineering/deployment-engineering
    |   +-- Observability_Engineering/observability-engineering
    |   +-- Release_Management/release-management
    |   +-- Incident_Response/incident-response
    |   +-- Capacity_Planning/capacity-planning
    |   +-- Chaos_Engineering/chaos-engineering
    |
    +-- Processes (8):
        +-- Release_Processes, Deployment_Processes, Rollback_Processes,
        +-- Post_Release_Processes, Post_Release_Monitoring,
        +-- Observability_Processes, Incident_Response_Processes,
        +-- Capacity_Planning_Processes
```

## Orchestration Protocol

### Phase 1: Intake (What & Why)
**Skills**: intake-triage, discovery, shaping, betting, prioritization, value-review-gate
**C-suite**: CEO (strategic fit), CPO/CQO (value hypothesis + quality standards), CTO (technical feasibility)
**Gate 1 — "Should we build?"**: Value Review Gate decides BUILD / DEFER / PUNT after Discovery, before Shaping
**Exit**: Shaped work with appetite, clear problem, validated value hypothesis, team commitment

### Phase 2: Development (Building It Right)
**Skills**: ALL engineering + QA + Security + Platform + process skills, value-review-gate
**C-suite**: COO (execution), CTO (architecture), CDO (data models/pipelines), CPO/CQO (quality + value guardrails), CSO (security), CLO (learning)
**Gate 2 — "Should we keep building?"**: Value Review Gate mid-cycle checkpoint decides PERSEVERE / PIVOT / PUNT
**Exit**: Working software, tested, reviewed, secure, observable, data-ready

### Phase 3: Ship (Deliver & Operate)
**Skills**: release-engineering, deployment-engineering, observability, incident-response, value-review-gate
**C-suite**: COO (delivery), CPO/CQO (quality gate + value verification), CSO (security sign-off), CDO (data migration), CLO (post-ship learning)
**Gate 3 — "Should we keep running?"**: Value Review Gate post-ship (T+30 days) and quarterly decides PERSEVERE / MAINTAIN / DECOMMISSION
**Exit**: Running in production, monitored, incident-ready, value confirmed

## Cross-Cutting Concerns

| Concern | Owner | Validation |
|---------|-------|------------|
| Architecture | CTO, Platform, Backend, Frontend | Architecture Review |
| Security | CSO, Security Engineering | Red Teaming, Security Review |
| Quality + Value | CPO/CQO, QA Engineering, Product Management | Code Review, Testing, Value Hypothesis Validation |
| Reliability | SRE, Platform | Chaos Engineering |
| UX | Product Design, Frontend | Design Review, Usability |
| Product | CEO, CPO/CQO, Product Management | Agile Outcomes |
| Execution | COO, DevOps | Health Dashboard |
| Learning | CLO, Self-Correction | Retrospective |
| Value | CPO/CQO, Product Management | Value Hypothesis Validation |
| Data | CDO, Backend Engineering | Data Quality, Pipeline Health |
| Build/Punt/Maintain | Value Review Gate, CPO/CQO, CEO | Gate 1/2/3 Decisions |

## Pitfalls

### Directory Structure
`skill_manage` creates flat categories, NOT nested paths. When the user specifies a nested structure (e.g., `Software_Factory/Intake/Discovery/`), use `mkdir -p` + `write_file` to create SKILL.md files directly. Do NOT rely on `skill_manage` for placement — it will flatten everything into `~/.hermes/skills/<category>/<name>/`.

See: `references/directory-structure-pattern.md`

### CPO/CQO Combined Command

The factory supports **both** a split CPO + CQO structure and a combined **CPO/CQO** single-officer structure. The combined variant is the default in this skill's documentation; the split variant is documented as an optional alternative.

**When to combine**: Small to medium teams where a single officer can credibly own both value and quality without creating a bottleneck. The combined officer makes the value-quality trade-off internally, eliminating finger-pointing between separate product and quality factions.

**When to split**: Larger teams where the scope of either function is too broad for one officer to command effectively. A split structure requires explicit conflict resolution protocols (see the escalation protocol in the full documentation).

The default C-suite table, BML diagram, and orchestration protocols throughout this skill use the combined CPO/CQO form. Teams that prefer the split form should substitute CQO for quality ownership and CPO for value ownership in all references.

### Language Convention
Use **PUNT** (not "kill") and **PERSEVERE** (not "continue") for gate decisions. This is intentional: "punt" implies a choice to stop rather than destruction, and "persevere" implies conviction rather than inertia. Apply consistently across all gate outputs, metrics, and decision logs.

See: `references/three-gate-decision-framework.md` (under value-review-gate skill)

### Terminology Discipline — Restrained Tone Application

When adding a thematic tone shift (e.g., "military feel") to factory documentation, apply structural/metaphorical language in framing paragraphs — do NOT perform wholesale term substitution on core vocabulary. The factory's terminology (team, slice, C-suite, retrospective, factory, etc.) is deliberately chosen and must remain consistent across the entire documentation corpus.

Only specific mappings are approved and centralized. Before substituting any core term, check the approved table. If a term is not in the table, it stays as-is.

See: `references/terminology-discipline.md`

### Source Anonymization
When synthesizing external content into skills, NEVER reference the source organization, authors, or product names. Strip all attribution before writing skill content. The patterns and structures are what matter, not their origin.

See: `references/external-source-handling.md`

### GStack Recontextualization
When mapping external skill libraries into the factory, use the BML framing to assign C-suite roles. Document all mappings in the gstack recontextualization table.

See: `references/gstack-recontextualization-methodology.md`

## Self-Correction

- Daily: Standup, blocker escalation, skill health pulse
- Per Slice: Retrospective, architecture review, security triage
- Per Cycle: Betting retrospective, skill health check, trust audit

## Mandatory Baseline Skills
- honesty — never overstate, never fabricate
- verification-before-completion — verify before claiming done
- requirements-clarity — clarify before large changes

## GStack Skills Recontextualized

The following gstack skills were reviewed and their patterns integrated into the Software Factory C-suite layer:

| GStack Skill | Software Factory Equivalent | Context |
|-------------|---------------------------|---------|
| /cso | chief-security-officer | Full security audit methodology (OWASP, STRIDE, active verification) |
| /learn | chief-learning-officer | Learning capture, search, prune, export |
| /retro | chief-learning-officer | Weekly retrospective with trend tracking |
| /ship | chief-operating-officer | Ship workflow, PR creation, deploy |
| /autoplan | chief-operating-officer | Auto-review pipeline (CEO + design + eng + DX) |
| /health | chief-operating-officer + chief-quality-officer | Code quality dashboard |
| /office-hours | chief-executive-officer + chief-product-officer | Six forcing questions, builder mode, value validation |
| /plan-ceo-review | chief-executive-officer | CEO-level plan review |
| /plan-eng-review | chief-technology-officer | Architecture, data flow, edge cases, tests |
| /spec | chief-technology-officer | Turn vague intent into precise spec |
| /qa | chief-quality-officer | Systematic QA testing with iterative bug fixing |
| /qa-only | chief-quality-officer | Report-only QA testing |
| /investigate | Self_Correction_Processes | Systematic root cause investigation |
| /careful | Trust_Accountability_Processes | Warn before destructive commands |
| /freeze | Trust_Accountability_Processes | Lock edits to one directory |
| /guard | Trust_Accountability_Processes | Activate careful + freeze |
| /context-save | chief-learning-officer | Save working context |
| /context-restore | chief-learning-officer | Resume from saved context |
| /document-generate | Product_Management | Generate docs from code |
| /document-release | Release_Management | Post-ship documentation update |
| /diagram | chief-data-officer + Architecture_Processes | English in, diagram out (data flow diagrams) |
| /make-pdf | Product_Management | Turn markdown into PDF |
| /mom-test | chief-product-officer | Interviewing customers without leading |
| /scrape | chief-data-officer | Pull data from web pages (data ingestion) |
| /skillify | chief-learning-officer | Codify successful flows into permanent skills |

## Global Skills Cross-Reference

The following global skills (from ~/.agents/skills/) are referenced by and integrated into the Software Factory. They provide deep domain knowledge that the factory skills build upon:

### Quality & Standards
| Global Skill | Factory Integration |
|-------------|-------------------|
| clean-code | Code quality principles → factory-standards-guard Gate 1 |
| clean-code-guard | Guard-pass review mode → factory-standards-guard |
| test-guard | Test quality rules → factory-standards-guard Gate 2 |
| docs-guard | Documentation accuracy → factory-standards-guard Gate 3 |
| commit-work | Commit discipline → factory-standards-guard Gate 4 |
| receiving-code-review | Review feedback protocol → factory-standards-guard |
| requesting-code-review | Review request standards → factory-standards-guard |
| test-patterns | Test patterns by framework → QA Engineering skill |
| testing | Test file conventions → QA Engineering skill |
| strong-tests | Test writing standards → QA Engineering skill |

### Architecture & Design
| Global Skill | Factory Integration |
|-------------|-------------------|
| c4-architecture | C4 diagram levels → Architecture Process |
| system-design | Distributed systems patterns → Backend Engineering |
| ddia-systems | Data-intensive design → CDO skill |
| clean-architecture | Dependency Rule → Architecture Process |
| human-architect-mindset | Architectural thinking → CTO skill |
| improve-codebase-architecture | Seam/deletion test → CTO skill |
| domain-driven-design | Bounded contexts, aggregates → Backend Engineering |
| services-layer | Service patterns → Backend Engineering |

### Product & Discovery
| Global Skill | Factory Integration |
|-------------|-------------------|
| lean-startup | Build-Measure-Learn → CPO + CLO skills |
| lean-ux | Hypothesis-driven design → Product Design |
| lean-analytics | OMTM, good metrics → factory-analytics |
| jobs-to-be-done | Job statements → Discovery + CPO |
| continuous-discovery | Opportunity Solution Trees → Discovery |
| mom-test | Customer interviewing → Discovery + CPO |
| brainstorming | Ideation → Discovery |
| specification-writing | Spec authoring → Shaping |

### Process & Execution
| Global Skill | Factory Integration |
|-------------|-------------------|
| executing-plans | Plan execution → COO skill |
| systematic-debugging | Root cause investigation → Incident Response |
| working-with-legacy-code | Legacy code safety → refactoring-process |
| refactoring | Refactor mechanics → refactoring-process |
| refactoring-patterns | Named transformations → refactoring-process |
| dependency-updater | Dependency management → Platform Engineering |
| release-it | Release patterns → Release Engineering |

### Communication
| Global Skill | Factory Integration |
|-------------|-------------------|
| documentation | In-code docs → docs-guard integration |
| crafting-effective-readmes | README standards → docs-guard |
| professional-communication | Technical communication → all skills |
| writing-clearly-and-conciseness | Prose quality → all skills |

### Baseline (Always Active)
| Global Skill | Factory Role |
|-------------|-------------|
| honesty | Mandatory baseline — never overstate |
| verification-before-completion | Mandatory baseline — verify before claiming done |
| requirements-clarity | Mandatory baseline — clarify before large changes |

---

### External Source Handling
When synthesizing external content into skills, NEVER reference the source org, authors, or product names in the skill files. See references for the integration notes keeping the source anonymous.

See: `references/external-source-handling.md`, `references/pdf-extraction-pattern.md`

### Application Development Rhythm
The developer daily workflow, feedback loops, building blocks, and technical debt management are documented in the developer-rhythm skill. This integrates modern application development practices (trunk-based development, timeboxing, inner/outer loop) into the factory's engineering practices.

See: `references/application-development-rhythm-integration.md`

### Technical + Product Discovery
The factory runs two parallel discovery tracks: Product Discovery (double diamond: problem → solution) and Technical Discovery (risks, path to production, constraints). These tracks inform each other. See the discovery and technical-discovery skills for details.

See: `references/discovery-integration.md`

### Anchor Role and ADRs
The Architecture Process skill integrates the Anchor leadership model (8 anchortypes for balanced teams) and Architectural Decision Records (ADRs). The anchor is the engineering practice representative who facilitates rather than directs.

See: `references/anchor-playbook-integration.md`

### API Contracts and Event-Based Stories
The Backend Engineering skill includes Consumer-Driven Contracts (CDC) for microservice API design. The Product Management skill includes patterns for writing user stories in event-based systems (processors, sinks, APIs).

See: `references/cdc-event-stories-integration.md`

---

*Software Factory v4.0 — Built on the principle that great software comes from great teams with clear executive ownership across Build, Measure, and Learn, mutual trust, and relentless self-correction.*