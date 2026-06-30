# External Source Handling

## Rule
When synthesizing external content (websites, PDFs, documentation) into skills, NEVER reference the source organization, authors, or product names in the skill files.

## What This Means
- Strip ALL attribution before writing skill content
- Do not cite the source URL, company names, author names, or product names in SKILL.md files
- Do not include phrases like "according to [source]" or "from the [company] documentation"
- The patterns, structures, and methodologies are what matter — not their origin

## What to Do Instead
- Integrate the knowledge as if it were general domain expertise
- Use neutral language: "industry practice", "modern approach", "standard pattern"
- If the source provided a useful example, anonymize it completely
- Document the integration in references/ files (for internal tracking only)

## Why
The user explicitly prohibited citing these sources:
- Pivotal Labs / Tanzu Labs / VMware
- Labs Practices website
- Authors of the learning paths
- Any products mentioned in the source material

## Examples

### WRONG
> According to VMware Tanzu Labs, balanced teams consist of...

### RIGHT
> A balanced team consists of...

### WRONG
> From the Labs Practices design systems learning path...

### RIGHT
> Design system terminology is loaded and context-dependent...

### WRONG
> As described in the PM Playbook by Pivotal...

### RIGHT
> Product managers articulate vision and strategy to...
