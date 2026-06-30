---
name: architecture-process
description: Architecture decision process and the Anchor role. How architecture decisions are proposed, reviewed, recorded (ADRs), and communicated. Includes the Anchor leadership model for balanced teams.
version: "2.0.0"
tags: [architecture, adr, decision-records, anchor, design-review, c4]
triggers:
  - architecture decision
  - ADR
  - architectural decision record
  - design review
  - anchor role
  - technical leadership
---

# Architecture Process

## Purpose
Defines how architecture decisions are proposed, reviewed, recorded, and communicated. Establishes the Anchor role as the engineering practice representative who ensures technical excellence without hierarchical leadership.

## The Anchor Role

### What Is an Anchor?
The anchor is the representative of the engineering practice on a balanced team. They monitor team dynamics, encourage best practices, and ask the tough questions needed to drive success. They will not be the only engineer doing this, but they will make sure it gets done.

### What an Anchor IS and IS NOT
| IS NOT | IS |
|--------|-----|
| A tech lead | Our answer to the "tech lead" |
| The decider | A facilitator for good team decisions |
| A boss | A teacher |
| An architect | The initiator of architectural conversations |
| A manager | An advocate for growth and empowerment |
| Responsible for client decisions | Responsible for due diligence with regard to technical excellence |

### Why Anchors Instead of Traditional Architects?
Architecture is fundamental to the practice, but empowered balanced teams are incompatible with hierarchical forms of leadership that stifle initiative and ownership. Teams don't execute a plan — they own every step of the product development journey.

---

## Anchor Types (Anchortypes)

Anchorship is performed differently depending on project context. The type of product, team structure, and overall experience level influence which style is most effective.

### 1. The Peer — Light-Touch Leader of a Strong Team
For mature, empowered teams where leadership can be indirect.

**Responsibilities:**
- Emphasize that all engineers have anchor responsibilities
- Promote more active feedback
- Rotate responsibilities as skilled pairs
- Give everyone on the team opportunities to grow

**Considerations:**
- Clients may want the anchor identified even if peer-oriented
- Unevenly distributed context makes it hard to know who has complete context

### 2. The Servant Leader — Master Facilitator and Coach
Makes space for the team to make decisions as a group. Steps up or steps back as needed.

**Responsibilities:**
- Facilitate conversations, especially through activities
- Keep the team moving forward
- Model values and norms for the team to imitate
- Make sure everyone has a voice in decision-making

**Challenges:**
- May put unreasonable expectations on themselves
- Manager-anchors have little time to pair and code

### 3. The Shield — Creates a Bubble for the Team
Handles blockers and interruptions to protect the team's focus.

**Responsibilities:**
- Keep the client liaison informed of issues and action items
- Create safety for the team
- Stay firm when others get off track
- Think strategically about stakeholder enablement
- Advocate for the team
- Point out risks and harmful behaviors

**Challenges:**
- Projects requiring frequent, tough conversations risk burnout

### 4. The Constant — Holds Context and Decisions
Preserves valuable knowledge over time and explains the "why" behind decisions.

**Responsibilities:**
- Hold and share the historical context of past decisions
- Share information when it's most needed
- On-board new team members

**Considerations:**
- On most teams, the majority of engineers are fully loaded on context
- Staying on too long may develop anxiety around holding the majority of context

### 5. The Expert — Builds Trust with Technical Chops
Uses deep technical experience to build trust with clients and teammates.

**Responsibilities:**
- Draw upon deep/broad technical experience when team is making decisions
- Identify opportunities for valuable team learning
- Surface the tradeoffs of architectural decisions
- Clearly communicate our approach and generate shared understanding

**Challenges:**
- Can take on an emotional burden of making sure decisions are right
- Must use influence wisely — implicit and gender biases can determine success

### 6. The Learner — Anchor-in-Training
A new anchor learning on a highly functioning team with mentor support.

**Responsibilities:**
- Learn in a low-risk, low-stress environment
- Grow into anchoring with a current anchor as mentor
- Rely upon team for help and knowledge

**Considerations:**
- Rotating anchors intentionally breaks the fear of losing a person
- Often, the anchor isn't, and doesn't have to be, the most technically experienced

### 7. The Captain — Rare Authoritative Leader
Makes unilateral decisions despite tradeoffs. Last resort only.

**Responsibilities:**
- Make a decision for a team that cannot or will not move forward
- Rally a divided team on a common goal

**Challenges:**
- Being unnecessarily vocal can impose dominance
- Difficult to reverse once employed
- Tales of Captain behavior usually got results but indicated undesirable team dynamics

### 8. The Bridge Builder — Connects Teams Within a Program
Coordinates and aligns with other teams or strategic client relationships.

**Responsibilities:**
- Leverage relationships with the client liaison to influence stakeholders
- Pay attention to problems shared across teams
- Demonstrate how to effectively work toward outcomes
- Know when to effectively engage with outside teams

---

## Anchor Scenarios and Recommendations

### Introducing the Anchor
When introducing roles to a new team, include a description of the anchor role. Counter pre-conceptions about engineering leadership. Make it clear the anchor is not the keeper of project lore — the team functions best when everyone has full context.

### Program Onboarding
When one team holds more context than new teams in a program:
1. The program client liaison and experienced anchor schedule one-on-one time with the onboarding anchor
2. The onboarding anchor asks questions and raises areas for both teams (fresh eyes are valuable)
3. Consider regular anchor planning meetings (APMs) to carry on the conversation

### Anchor Rotation
When an anchor must transition:
1. Avoid setting the expectation that anchors always remain until project end
2. Provide time for a new engineer to work with the outgoing anchor until they fully understand context
3. Try to avoid transitioning the anchor, PM, or designer at the same time
4. Encourage lightweight ADRs to support continuity during transitions

### Cross-Team Neural Network
For multi-team programs, use Anchor Planning Meetings (APMs) to surface issues relevant to all teams. Planning questions:
- Who needs to be present? (CLs, balanced team representatives, client pairs?)
- How often to meet? (Regular enough to surface emergent issues)

### Learning Anchorship
Identify prospective anchors and create opportunities to learn from experienced anchors:
1. Prospective shadow anchor's manager informs the team anchor
2. Shadow and primary anchor discuss goals, continue with regular 1:1s
3. Both participate in Anchor Planning Meetings and stakeholder calls
4. Primary anchor tees up opportunities and provides feedback
5. Both look for opportunities to swap roles

---

## Architectural Decision Records (ADRs)

### What Is an An ADR?
ADRs document the thought process behind important engineering decisions. Topics range from choosing an authorization backend to style guides or test refactor strategies. The record can be a single paragraph or multiple pages. It serves as a snapshot of the past.

### Benefits of ADRs
Like a journal, you get to flip back in time and review past thoughts. Like a historical lesson, you learn from past mistakes without repeating them. Like a report, it is easy for readers to understand your thoughts without asking for basic details.

### When to Write an ADR
- Choosing between architectural approaches
- Selecting technologies or platforms
- Making decisions that constrain future options
- Forking codebases or significant structural changes
- Any decision you might question "why did we do this?" six months later

### ADR Structure
Storytellers answer three questions — your ADR is a story about a task, the steps taken, and a happy ending:

#### 1. Why (the problem)
- Highlight your pain points
- Frame in terms of development speed — delayed releases delay customer satisfaction
- Avoid describing the solution immediately — give readers time to think of alternatives
- Describe what you knew at the time

#### 2. What Is This (the solution)
- Show alternative solutions, comparing pros and cons
- Add enough detail to convey the general idea (an algorithm or technique is enough)
- Don't add details that will quickly become obsolete (avoid naming specific helper libraries)
- Create a notes section for specifics if needed

#### 3. What Can We Do Now (the future)
- **Caveats** — Cons of the decision that may lead to difficulty (caching limitations, drift between projects)
- **Refactoring** — Architectural changes that may render tricky code blocks obsolete
- **New features** — Easy to brainstorm when code is easy to read

### ADR Storage and Formatting
- **Where**: In the repository, in a `docs/adr` folder. It's the only resource teammates and future engineers are guaranteed to look at.
- **Format**: Markdown. Readable as raw text and renders nicely on GitHub. Avoid Word/PDF.
- **Naming**: `YYYY-MM-DD-short-description.md` (e.g., `2021-06-20-fork-the-codebase.md`). Orders historically, scroll through decisions without rearranging.

### ADR Template
```markdown
# Title: [Short description of decision]

## Status
Accepted / Proposed / Superseded by [ADR-XXX]

## Context
[What is the issue we're addressing? What did we know at the time?
Highlight pain points. Frame in terms of impact.]

## Decision
[What did we decide? Show alternatives considered with pros/cons.
Add enough detail to convey the general idea without going obsolete.]

## Consequences
### Positive
[What becomes easier?]

### Negative (Caveats)
[What becomes harder? What limitations does this impose?]

## Future
[What refactoring or new features does this enable?
What might cause us to revisit this decision?]
```

---

## Self-Correction
- Architecture decision not recorded? Write an ADR retroactively
- Anchor role unclear? Discuss and set expectations with the team
- Anchor staying too long on one project? Rotate to spread knowledge and avoid key-person risk
- No cross-team alignment? Start Anchor Planning Meetings
- Architectural drift? Reconcile implementation with ADRs
- Team lacking technical leadership? Identify and develop anchor candidates

## Metrics
| Metric | Target |
|--------|--------|
| ADR coverage for significant decisions | 100% |
| ADRs stored in repo | 100% |
| Anchor identified per team | 100% |
| Anchor rotation frequency | Every major phase |
| Cross-team APMs (multi-team programs) | Bi-weekly or as needed |

## Integration Points
- **Upstream**: Technical Discovery (ADRs inform and are informed by discovery), Architecture decisions from any engineering team
- **Downstream**: All engineering skills (ADRs guide implementation), QA Engineering (test strategy informed by architecture)
- **Peer**: CTO (technical vision), Platform Engineering (infrastructure architecture), Backend/Frontend Engineering (system architecture)

## References
- technical-discovery skill: ADRs used during discovery
- platform-engineering skill: Infrastructure architecture decisions
- c4-architecture skill: C4 diagrams complement ADRs
- developer-rhythm skill: Anchor ensures practices are followed in daily work

## Invocation
Auto-triggered by: Architecture decisions, New project setup, Design reviews, Technical leadership discussions
Manual trigger: `/architecture <decision-or-review>`