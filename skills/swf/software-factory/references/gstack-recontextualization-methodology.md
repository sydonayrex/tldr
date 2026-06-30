# GStack Recontextualization Methodology

## Pattern
When building a new skill set from an existing library (like gstack), the methodology is:

1. **Inventory**: List all skills in the source library with their purpose and triggers
2. **Map to phases**: Sort skills into Intake / Development / Ship buckets based on when they activate
3. **Identify C-suite candidates**: Skills that provide executive oversight (review, audit, learn, health) map to C-suite roles
4. **Apply BML framing**: Map each C-suite role to Build-Measure-Learn:
   - **Build** roles: execution, feasibility, data (COO, CTO, CDO)
   - **Measure** roles: security, quality, value (CSO, CQO, CPO, CDO)
   - **Learn** roles: strategy, feedback, value hypothesis (CEO, CLO, CPO)
5. **Extract core methodology**: Each gstack skill has a distilled methodology (e.g., gstack /cso has STRIDE, confidence gates, active verification). Extract these into the new skill.
6. **Document mappings**: Maintain a table mapping source skills to new skills for traceability

## GStack -> Software Factory Mappings (v3.0)

| GStack Skill | SF Role | Key Methodology Transferred |
|-------------|------------------------------------|
| /office-hours | CEO + CPO | Six forcing questions, demand reality, desperate specificity |
| /plan-ceo-review | CEO | CEO-level plan review (10-star product) |
| /plan-eng-review | CTO | Architecture, data flow, edge cases, tests |
| /spec | CTO | Five-phase spec (vague intent -> precise executable) |
| /ship | COO | Ship workflow, PR creation, deploy |
| /autoplan | COO | Auto-review pipeline (sequential multi-perspective review) |
| /health | COO + CQO | Composite quality score (type check, lint, tests, dead code) |
| /cso | CSO | STRIDE, OWASP, confidence gates, active verification, FP filtering |
| /learn | CLO | Learning capture/search/prune/export lifecycle |
| /retro | CLO | Weekly retro with trend tracking, per-person breakdown |
| /qa | CQO | Systematic QA with iterative bug fixing, three tiers |
| /qa-only | CQO | Report-only QA testing |
| /investigate | Self-Correction | Systematic root cause, no fixes without investigation |
| /careful | Trust+Accountability | Warn before destructive commands |
| /freeze | Trust+Accountability | Lock edits to directory |
| /context-save/restore | CLO | Cross-session context persistence |
| /diagram | CDO + Architecture | English in, diagram out (data flow) |
| /mom-test | CPO | Interviewing without leading |
| /scrape | CDO | Data ingestion from web pages |
| /skillify | CLO | Codify successful flows into permanent skills |

## Key Insight
The BML (Build-Measure-Learn) cycle maps naturally to C-suite roles. Roles that span phases (like CPO spanning Intake and Ship) validate continuity of intent across the lifecycle.
