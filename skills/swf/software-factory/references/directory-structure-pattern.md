# Directory Structure Pattern for Nested Skill Sets

## Problem
`skill_manage(action='create')` creates skills in a flat namespace: `~/.hermes/skills/<category>/<name>/`. It does NOT support nested paths like `Software_Factory/Intake/Discovery/`.

## Solution
When the user specifies a nested directory structure, create the directories with `mkdir -p` and write SKILL.md files directly using `write_file()`. Do NOT rely on `skill_manage` for placement.

## Correct Pattern
```python
from hermes_tools import write_file, terminal

# Step 1: Create directories
terminal("mkdir -p ~/.hermes/skills/Software_Factory/Intake/Discovery")

# Step 2: Write SKILL.md directly
write_file("~/.hermes/skills/Software_Factory/Intake/Discovery/discovery/SKILL.md", content)
```

## Anti-Pattern (DO NOT DO THIS)
```python
# This creates flat structure, NOT nested
skill_manage(action='create', name='discovery', category='software-factory')
# Result: ~/.hermes/skills/software-factory/discovery/  (WRONG)
```

## Correct Result
```
~/.hermes/skills/Software_Factory/
├── Intake/
│   ├── Discovery/discovery/SKILL.md
│   ├── Shaping/shaping/SKILL.md
│   └── ...
├── Development/
│   ├── Frontend_Engineering/frontend-engineering/SKILL.md
│   └── ...
└── Ship/
    └── ...
```

## Note on Categories
The `category` field in `skill_manage` is a single directory name (no slashes allowed). It is NOT a path separator. Nested structures must be created manually.
