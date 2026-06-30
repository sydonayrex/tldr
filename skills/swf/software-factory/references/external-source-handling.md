# External Source Handling

## Rule
When synthesizing external content (websites, PDFs, articles) into factory skills, NEVER reference the source organization, authors, product names, or URLs in the skill files.

## What to Strip
- Organization names (e.g., "Pivotal Labs", "VMware", "Tanzu Labs")
- Author names (e.g., "Carolyn Haines", "Lauren Manuel")
- Product names that identify the source (e.g., "Pivotal Tracker")
- URLs to the source site
- Copyright notices from the source

## What to Keep
- Structural patterns (terminology tables, decision frameworks, process flows)
- Technical content (testing pyramid, cloud-native principles, story formats)
- Methodologies (TDD cycle, pairing mechanics, prioritization matrices)
- Generic examples (rename specific products to generic equivalents)

## How to Extract
1. Navigate to the URL in browser
2. For PDFs: download with `curl` then extract with `pdftotext`
3. For HTML: download with `curl`, strip tags, extract text content
4. Synthesize the patterns WITHOUT attribution
5. Write concise skill content that captures the value, not the volume

## Integration Notes from This Session
- Design system strategy patterns (terminology alignment, adoption trade-offs) → Product Design skill
- PM Playbook (vision/strategy/roadmap, lean experiments, user stories, backlog) → Product Management + CEO skills
- Application Development (pair programming, TDD, XP, cloud-native) → Pair Programming, XP, Platform Engineering, Backend Engineering skills