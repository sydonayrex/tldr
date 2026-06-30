# Technical + Product Discovery Integration

## Overview
Discovery in the Software Factory runs two parallel tracks that inform each other:

| Track | Focus | Output |
|-------|-------|--------|
| **Product Discovery** | Problem space, user needs, solution validation | Problem brief, value hypothesis, validated solution direction |
| **Technical Discovery** | Technical risks, path to production, constraints | Discovery backlog, architecture decisions, production readiness |

## Problem Discovery (Product Track)
- Understand the business (capture assumptions, identify risks)
- Understand users (proto-personas, interviews, journey maps, service blueprints)
- Research synthesis (look across all data, pull out patterns, don't jump to solutions)
- Prioritize the key problem (2x2 matrix: value × feasibility)
- Ruthless prioritization: pick ONE problem as starting point

## Solution Framing (Product Track)
- Explore many solutions (brainstorming, design studios — not just software)
- Focus on high-value starting point (2x2: value × complexity)
- Run experiments (lean experiments for riskiest assumptions)
- Define value proposition and metrics (lean business canvas)
- Moving to delivery: single validated feature is enough to start

## Technical Discovery (Engineering Track)
Three typical goals:
1. **Be ready to start building on day one**: system access, tech choices, CI/CD setup, dev tooling
2. **Have a clear path to production**: map existing path, identify regulations, build stakeholder relationships, deploy steel thread
3. **Understand technical constraints**: what's off the table, complexity assessment, security requirements

### Technical Discovery Backlog
- Build like a story backlog but for things to learn/decide
- 2x2 prioritization: level of understanding × importance to project
- Take it a day at a time, share learnings regularly, re-prioritize often

### Path to Production Mapping
- Collaborative 1-2 hour session with the right people
- Map how code gets to production in the organization
- Identify pain points, stakeholder sign-offs, compliance requirements

### Steel Thread (Tracer Bullet / Walking Skeleton)
- App with basic setup and integration points but NO functionality
- Deployed to production to drive out access and integration issues
- Use after Path to Production Mapping to validate, or when no path exists to demonstrate the process

### Working with Product (Avoiding Silos)
- Technical discovery and product discovery must NOT be done in isolation
- Communicate findings: does it impact product direction or delivery?
- Engineers participate in product discovery (technical concerns during user interviews, prototype testing)
- Product participates in technical discovery (understanding constraints)

## Practitioner Advice
- Discovery is more chaotic than delivery — don't expect to move as quickly
- Make PoCs look rough and temporary so they'll be thrown away
- If you can't get access, raise as a risk to project sponsor
- Don't stress if things take longer — anything done saves time later
- If stuck, ask what decision the team is trying to make, work backwards
- Focus on things you cannot continue without
- Focus on things unlikely to change (don't build walking skeleton before tech stack is established)

## Practices for Technical Discovery
- Risks and Mitigations, Path to Production Mapping, Ubiquitous Language
- Event Storming, Service Blueprint, Steel Thread
- Architectural Decision Records (ADRs), C4 Architecture Diagrams
- Proofs of Concept (PoCs)

## Key Pitfall: Source Anonymization
When synthesizing external guides into skills, NEVER reference the source organization, authors, product names, or URLs. Strip all attribution before writing skill content. See `external-source-handling.md`.
