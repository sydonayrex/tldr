# Nested Directory Case Study: Software_Factory

## Challenge
Build a class-level skill umbrella (Software_Factory) with 46 sub-schemas organized in a 3-level hierarchy:
```
Software_Factory/
├── Intake/{Intake,Discovery,Shaping,Betting,Prioritization}/
├── Development/{Frontend_Engineering,Backend_Engineering,...,QA_Processes,...}/
└── Ship/{Release_Engineering,...,Rollback_Processes}/
```

## Problem Encountered
`skill_manage(action="create", ...)` does NOT support nested directory paths. The `category` field accepts only a single directory name (no slashes). Passing `category: "software-factory/intake"` fails validation.

**First attempt**: Created all skills flat under `software-factory/<name>/` — lost the hierarchy.

**User correction**: "why arent you using the correct directory structure in the skills folder for Software_Factory?"

## Solution (Workaround)
1. Create directory structure manually: `terminal("mkdir -p ~/.hermes/skills/Software_Factory/Intake/Intake/")`
2. Write SKILL.md files directly via `write_file` into the nested paths
3. Hermes scans `~/.hermes/skills/` recursively, so nested directories ARE discoverable

## Code Pattern
```python
# From execute_code tool:
from hermes_tools import write_file, terminal

# Step 1: Create directories
terminal("mkdir -p ~/.hermes/skills/Software_Factory/Intake/Intake/")
terminal("mkdir -p ~/.hermes/skills/Software_Factory/Development/Frontend_Engineering/")
# ... etc

# Step 2: Write SKILL.md files with proper frontmatter
write_file("/home/nelson/.hermes/skills/Software_Factory/Intake/Intake/intake-triage/SKILL.md",
"""---
name: intake-triage
description: Receives, classifies, and routes all incoming work requests. Use when new work enters the factory.
---
# Intake Triage
...
""")
```

## Key Lessons
1. `skill_manage` category = single directory name only (no nesting)
2. For nested hierarchies: `terminal(mkdir -p)` + `write_file` is the path
3. Each sub-skill needs its own YAML frontmatter (`name`, `description`) for individual discoverability
4. Root orchestrator skill lives at `Software_Factory/software-factory/SKILL.md` (top level of hierarchy)

## Result
46 skills across 3 levels, properly organized and discoverable by Hermes Agent.
