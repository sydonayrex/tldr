---
name: product-design
description: User-centered design from research through design systems. Covers UX research, interaction design, visual design, prototyping, design system strategy, and design system stewardship.
version: "2.0.0"
tags: [product-design, ux, design-system, interaction-design, research, accessibility, design-system-strategy]
---

# Product Design

## Purpose
Crafts how users experience the product. Ensures user-centered everything, consistent design language, accessible by default, validated before building, design as a system. Owns the design system strategy — whether to adopt, adapt, build, or bypass — and governs the system once established.

## Process
Discovery Insight -> Ideation -> Prototyping -> Validation -> Design Handoff -> Post-Ship Audit

## Design System Strategy

### The Four-Layer Value Model
A design system delivers value at four distinct layers. Each must be weighed when deciding on approach:

| Layer | Value | Key Question |
|-------|-------|-------------|
| **Organizational** | Consistent patterns across teams and products. Common starting point. Familiarity for users. | "How many teams/products will benefit?" |
| **Team** | Faster delivery. Less time on look-and-feel decisions. Shared language between design and dev. | "How much time will this save per cycle?" |
| **Individual Practitioner** | No more redlines. Focus on meaty user problems. Modern tooling skills. | "What does each person gain?" |
| **User** | Predictable, consistent experience. Learn once, use everywhere. | "How does this improve user outcomes?" |

### Terminology Alignment (Critical First Step)
Design system terminology is loaded and context-dependent. Conflicting definitions cause expensive miscommunication. Before any design system work begins, the team MUST align on what these terms mean in their context:

| Term | Common Definition | What It Might Also Mean |
|------|------------------|----------------------|
| **Design system** | Opinionated collection of assets for consistent UI (pattern library, coded components, design components, documentation site) | Brand guides, style guides, dev standards, UX principles, training materials, illustration libraries |
| **Brand guide / brand system** | Brand vibe + rules for consistent reproduction (logo, color, typography, voice/tone, layout, icon/photo guidance) | May contain a design system, or be contained by one |
| **Style guide** | Lightweight brand subset (logo, color, typography, basic components) | In dev context: code style rules. In marketing context: voice/grammar rules |
| **Pattern library** | Collection of reusable UI patterns | May or may not include code, design tokens, or documentation |
| **Component** | Self-contained, reusable UI element | May mean coded component, design-only component, or both |
| **Token** | Named design value (color, spacing, typography) | May mean primitive tokens only, or the full token hierarchy |

**Rule**: The term "design system" is the single most critical term to norm on immediately. Conflicting understandings have the highest impact on team alignment and delivery success.

### Design System Decision Framework
Before adopting any design system approach, answer these questions as a balanced team:

#### Learn About Your Team
- What is the team's comfort level with design systems? (Gauge without judgment)
- Who has worked with design systems before? Which ones?
- What does the team love/hate about design systems?
- What has the design/dev handoff experience been like?
- What are the enablement goals for the engagement?
- How front-end-friendly is the group?
- What learning goals do team members have?

#### Learn About Your Product Needs
- Who is the audience for the app?
- How much style customization will you need?
- What are the delivery goals (time constraints)?
- What technical limitations or constraints exist?
- What is the ROI of using a system?
- How much can you afford to invest in customization?
- What are the accessibility requirements?
- What browser/device compatibility is needed?
- Is the product part of a portfolio of apps (now or planned)?

#### Decision Options and Trade-offs

| Approach | Description | Pros | Cons | When to Choose |
|----------|-------------|------|------|----------------|
| **Adopt** | Fully adopt an existing open-source system, stay within its lanes | Low cost. Shortcut to polish. Community support. | Low brand differentiation. Limited customization. System constraints become your constraints. | Speed matters more than brand uniqueness. Team is junior. Standard UX is acceptable. |
| **Adapt** | Adopt a base system and customize it (theming, tokens, component overrides) | Balance of speed and brand identity. Can evolve over time. | Customization cost. Upgrade path complexity. Risk of forking. | Need brand differentiation but want head start. Have resources to maintain customizations. |
| **Build** | Build a custom design system from scratch | Full control. Perfect brand fit. Tailored to exact needs. | High cost. Requires dedicated team. Slow time-to-value. Maintenance burden. | Strong brand requirements. Large team/product portfolio. Long-term investment justified. |
| **Bypass** | No formal design system; ad-hoc patterns per feature | No upfront cost. Maximum flexibility. | Inconsistency. Redesign costs. Slower over time. Onboarding friction. | Very short engagement. Single feature. Prototype/MVP. |

### Inheriting a Design System
When the decision is made for you (you inherit an existing system):
- Audit what you actually have (components, tokens, documentation, patterns)
- Identify gaps between what the system provides and what you need
- Learn the system's constraints before pushing against them
- Build relationships with the system team for lean negotiations
- Document what you learn for future team members

### Design System Governance
Once a design system is in place (adopted, adapted, or built):

| Governance Area | Practice |
|----------------|----------|
| **Contribution** | Clear process for proposing, reviewing, and adding new patterns |
| **Deprecation** | Mark patterns as deprecated before removing. Provide migration path. |
| **Versioning** | Semantic versioning for breaking changes. Changelog for all changes. |
| **Ownership** | Design system is a balanced team thing, not a "design thing" |
| **Adoption tracking** | Measure which teams/products use the system vs. bypass it |
| **Feedback loop** | Regular input from consumers (developers, designers, product) |
| **Quality bar** | Every component meets accessibility, performance, and documentation standards |

---

## Three-Tier Token Structure (DTCG)
1. **Primitive tokens** (raw values: color-blue-500, spacing-4)
2. **Semantic tokens** (meaning: primary, text-default)
3. **Component tokens** (specific: button.primary-bg)

**Rule**: Every value in a component must trace through the token chain. No hardcoded values at the component level.

---

## Research Methods
| Question | Method | Sample |
|----------|--------|--------|
| What do users need? | Interview | 5-8 |
| Can they use this? | Usability test | 5 |
| Which is better? | A/B test | 100+ |
| What's the mental model? | Card sorting | 15-30 |
| How big is the problem? | Survey | 100+ |
| What should we build next? | Opportunity scoring | 30+ |

---

## Fidelity Ladder
Paper sketches -> Wireframes -> Low-fi prototype -> High-fi prototype -> Coded prototype -> Production

**Rule**: Use the right fidelity for the question being asked. Don't prototype in high fidelity when a paper sketch answers the question.

---

## Accessibility Requirements (Design-Time)
- Color contrast: 4.5:1 normal text, 3:1 large text/UI
- Focus indicators: 3:1 contrast
- Touch targets: minimum 44x44px
- Text resizing: layout works at 200% zoom
- Color independence: not color alone
- Reduced-motion alternative
- Error identification: icon + text + color

---

## Design QA

### Component Specification Checklist
- [ ] All variants specified (default, hover, focus, active, disabled, loading, error)
- [ ] All states covered (empty, partial, full, error, loading)
- [ ] Responsive behavior defined (mobile, tablet, desktop)
- [ ] Token mapping complete (no hardcoded values)
- [ ] Accessibility annotations included (ARIA, focus order, screen reader text)
- [ ] Edge cases documented (long text, empty data, many items)
- [ ] Content rules defined (character limits, truncation, localization)

### Design System Compliance
- [ ] Component exists in design system before creating new
- [ ] New pattern follows existing pattern conventions
- [ ] Tokens used (not hardcoded values)
- [ ] Naming follows system conventions
- [ ] Documentation updated for new/modified patterns

---

## Self-Correction
- Design not tested with users? Go test it
- Design system bypassed? Reconcile — use existing patterns first
- Accessibility missed? Fix now, don't defer
- Terminology misaligned? Hold a norming session before proceeding
- Design doesn't solve the problem? Back to research
- Scope creeping beyond design system? Re-evaluate adoption vs. adaptation

## Metrics
| Metric | Target |
|--------|--------|
| Design system coverage | >90% |
| Design system adoption rate (teams using it) | >80% |
| Usability task completion | >85% |
| A11y violations (design) | 0 |
| User satisfaction (SUS) | >75 |
| Design QA first-pass rate | >80% |
| Terminology alignment session completed | Before any design system work |

## Integration Points
**Upstream**: Discovery (research insights), Shaping (solution requirements), CPO (value-driven design)
**Downstream**: Frontend Engineering (design specs, tokens), QA (acceptance criteria)
**Peer**: Product Management (strategic alignment), Frontend Engineering (feasibility), CTO (technical architecture)

## Skills Required
- UX research (interviews, usability testing, surveys)
- Interaction design (flows, states, edge cases)
- Visual design (typography, color, layout, hierarchy)
- Design system architecture (tokens, components, patterns, governance)
- Prototyping (Figma, Principle, or code)
- Accessibility (WCAG, inclusive design)
- Communication (present designs, defend with evidence)
- Technical literacy (understand implementation constraints)
- Facilitation (terminology alignment sessions, design critiques)

## References
- `design-sprint` skill: Structured 5-day design process
- `design-component` skill: Component specification
- `design-tokens` skill: Token architecture in DTCG format
- `design-review` skill: Design review against standards
- `ux-heuristics` skill: Heuristic evaluation
- `lean-ux` skill: Hypothesis-driven design
- `design-everyday-things` skill: Foundational design principles

## Invocation
Auto-triggered by: Shaping phase (solution design)
Auto-triggered by: Frontend Engineering (component design needs)
Auto-triggered by: Discovery (research execution)
Manual trigger: `/design <design-task-or-research-question>`