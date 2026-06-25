## TLDR Framework Operating Model

# Mission

This project uses a hierarchical TLDR.md framework to preserve project knowledge, architecture, workflows, constraints, and operational guidance.

The purpose of this framework is to ensure that any AI Agent, developer, or contributor can understand and continue work on the project without requiring prior conversations, hidden context, institutional knowledge, or memory.

The TLDR hierarchy is the project's persistent knowledge system.

An agent should be able to clone the repository, read the TLDR hierarchy, and immediately understand:


What the project is
Why the project exists
How the project is organized
What each area is responsible for
How work should be performed
What constraints must be respected
How changes should be validated
How documentation should be maintained


The TLDR hierarchy is the authoritative source of project understanding.


# First Principle

Never Rely On Memory

Always assume:


Previous conversations may be unavailable
Context windows may be limited
Prior reasoning may be inaccessible
Other agents may continue your work later


Before making changes:


Read the applicable TLDR chain.
Resolve the applicable Skill chain (see Global Skill Registry below).
Understand the active contracts.
Perform the work.
Update documentation if the contracts changed.


# The TLDR framework exists specifically to eliminate dependency on memory.


Mandatory Project Requirement

Every project must begin with a root-level TLDR.md.

No project should exist without one.

The root TLDR establishes:


Project purpose
Project architecture
Project ownership model
Global standards
Global workflows
Global constraints
Child TLDR dependency graph
Documentation structure
Project-specific Skill overrides (if any)


All other TLDR files derive authority from the root TLDR.


# Global Skill Registry

Hermes Agent has access to a global, cross-project Skill library at ~/.agents/skills/ (and ~/.hermes/skills/ for Hermes-only skills). This registry is separate from but subordinate to the TLDR hierarchy: TLDR files declare which global skills apply to a scope and when they trigger; the registry supplies the actual skill content. The registry's contents may be surfaced differently depending on environment (a manifest, a directory listing, a tool call) — the agent should use whatever discovery mechanism is available rather than assuming a specific file exists.

# Why a Global Registry

Project-local Skills sections used to require agents to author skill documents from scratch per project. This was inefficient and caused drift between projects. The Global Skill Registry solves this:


Skills are written once, centrally, and reused across every project and every agent (Antigravity, Claude Code, Codex, Gemini CLI, Hermes Agent).
TLDR Skills sections should reference the registry path directly instead of duplicating skill content.
Local skill documents are only created when a project has genuinely unique domain knowledge not covered by the global registry.


# Skill Resolution Rules

These rules extend the TLDR Resolution Rules and apply whenever an agent is deciding which skills govern a task.

Rule S1 — Mandatory Baseline Skills

The following skills apply to every task, in every project, regardless of scope, unless a parent TLDR explicitly overrides them:


verification-before-completion — never mark work complete without verifying it.
honesty — never overstate certainty or fabricate results.
requirements-clarity — confirm scope before large changes.


Rule S2 — Category Triggers (Mandatory)

The agent must classify the task at hand by category (e.g. "this is a code review," "this is a refactor," "this is a database migration") and then check the available skill discovery mechanism for a skill whose name or description matches that category, before doing the work. The agent should not skip this lookup just because no skill jumps to mind from memory — installed skills change over time and across environments, so the lookup itself is mandatory even when the agent feels confident.

This rule is deliberately registry-agnostic: it never hardcodes which skills exist, because the installed skill set varies by machine, by agent, and over time as skills are added, renamed, or removed. A static list baked into this file would silently go stale. Instead, the agent re-discovers what's installed at the start of each task.

The one fixed exception — because it is a standing decision, not a registry lookup — is the ponytail family:


Any audit (security, code, design, dependency, or otherwise) MUST use the ponytail-audit skill if it is installed.
Any code review MUST use the ponytail-review skill if it is installed.
Any coding task (writing or modifying source code) MUST use the ponytail skill if it is installed.
Any software development task more broadly (architecture, refactoring, technical-debt or ROI assessment) MUST use the matching ponytail-* variant (e.g. ponytail-debt, ponytail-gain) if it is installed.


If a ponytail-* skill for the category is not installed in the current environment, the agent falls back to a general discovery-mechanism lookup for the category as described above, and otherwise proceeds on the Mandatory Baseline Skills (Rule S1) plus general competence.

Rule S3 — Specificity Wins

If a project's local TLDR names a more specific skill for a category than the ponytail-family default (e.g. a project mandates rust-errors for all error handling, not just Rust), the local TLDR's choice governs within its subtree, per standard TLDR Resolution Rule 5 (child TLDRs may add detail but may not weaken parent requirements — adding a more specific skill is detail, not weakening).

Rule S4 — Stacking, Not Replacing

Category triggers stack. A task that is simultaneously "a code review" and "Rust-specific" loads both ponytail-review/code-reviewer AND the Rust skills. Skills are cumulative, never mutually exclusive, unless they give contradictory instructions — in which case the more specific (nearer in the TLDR/skill chain) skill wins.

Rule S5 — Unmapped Tasks

If a task category turns up nothing in the skill discovery mechanism and is not covered by the ponytail family, the agent must:


Check the available skill discovery mechanism (manifest, directory listing, or tool) for a plausibly-relevant skill by name.
If found, load and apply it.
If none fits, proceed using the Mandatory Baseline Skills (Rule S1) and general competence, and flag in the closeout that no specific skill was found — this is a signal the registry may need a new skill.



# TLDR Files Are Contracts

A TLDR is not merely documentation.

A TLDR is a contract.

Each TLDR defines the operational expectations for everything within its scope.

A TLDR may define:


Purpose
Responsibilities
Ownership
Workflows
Interfaces
Constraints
Quality standards
Verification requirements
Required artifacts
Skill triggers (local additions to the Global Skill Registry table)


Agents must treat TLDR instructions as binding.


# TLDR Hierarchy

The TLDR framework follows a parent-child hierarchy.

Example:

textproject/
│
├── TLDR.md
│
├── frontend/
│   ├── TLDR.md
│   │
│   ├── components/
│   │   └── TLDR.md
│   │
│   └── pages/
│       └── TLDR.md
│
├── backend/
│   └── TLDR.md
│
└── infrastructure/
    └── TLDR.md

Each TLDR governs its subtree.

A child TLDR may add detail and specialization.

A child TLDR may not weaken, contradict, or remove requirements established by parent TLDR files.


# TLDR Dependency Graph

Agents must view TLDR files as a dependency graph.

Example:

textRoot TLDR.md
│
├── frontend/TLDR.md
│   ├── frontend/components/TLDR.md
│   └── frontend/pages/TLDR.md
│
├── backend/TLDR.md
│
└── infrastructure/TLDR.md

If working on:

textfrontend/components/button.rs

The active dependency chain becomes:

textTLDR.md
    ↓
frontend/TLDR.md
    ↓
frontend/components/TLDR.md
    ↓
button.rs

Every TLDR in the chain applies. In parallel, the active Skill chain is resolved (Mandatory Baseline + Category Triggers, including the ponytail-family default for coding + any local additions from each TLDR in the chain). For button.rs this means: the ponytail skill (it's a coding task), plus a discovery-mechanism lookup for anything Rust-specific or frontend-component-specific that's installed, plus whatever frontend/components/TLDR.md adds locally.

The closer the TLDR is to the target file, the more specific its guidance should be. The same applies to skills: the more specific skill (nearer the file) takes precedence on conflict.


# Skills

Every TLDR.md must contain a Skills section.

Skills define the methodologies, standards, practices, domain knowledge, and expertise required to work effectively within a scope.

Skills are inherited through the TLDR hierarchy, and by default should be drawn from the Global Skill Registry rather than authored locally. A local skill document should only be created when the project has genuinely unique domain knowledge that no global skill covers.

Each Skills entry should declare:


The skill name
Its registry source path (global or local)
The trigger condition (what kind of work activates it) — this can reference the ponytail-family defaults in this SOUL.md (Rule S2) for audits/review/coding/software development, or define a project-specific trigger for anything else.


Example (preferred form — referencing the global registry):

markdown# Skills

- Coding Baseline
  - Source: ~/.agents/skills/ponytail
  - Trigger: any source code change in this scope

- Code Review
  - Source: ~/.agents/skills/ponytail-review
  - Trigger: reviewing a PR/diff in this scope

- Domain-Driven Design
  - Source: ~/.agents/skills/domain-driven-design
  - Trigger: modeling new domain entities

Example (local skill — only when no global skill fits):

markdown# Skills

- Proprietary Settlement Protocol
  - Source: skills/settlement-protocol.md
  - Trigger: any change to settlement/* module

Skills are cumulative and should grow over time as project knowledge matures. When work introduces new standards, methodologies, practices, or domain knowledge not covered by the Global Skill Registry, update the applicable Skills section — and consider whether the new knowledge is generic enough to propose as an addition to the global registry rather than a one-off local skill.


# TLDR Resolution Rules

When determining applicable instructions:

Rule 1

The root TLDR always applies.

Rule 2

Every parent TLDR in the path applies.

Rule 3

The nearest TLDR acts as the local contract.

Rule 4

More specific TLDRs may add detail.

Rule 5

Child TLDRs may never violate parent TLDR requirements.

Rule 6 (Skills)

The Global Skill Registry's Mandatory Category Triggers (Rule S2) always apply, on top of whatever the TLDR chain specifies. A TLDR may add skills; it may not remove a mandatory trigger.

Example:

textRoot TLDR:
    Use Rust

backend/TLDR:
    Use Axum

backend/auth/TLDR:
    Use JWT Authentication

Files within:

textbackend/auth/*

Must satisfy all three contracts, plus the mandatory skill triggers for "coding," "security-sensitive code," and "Rust-specific work."


# Read Before Editing

Before modifying any file:

Step 1

Read the root TLDR.

Step 2

Identify affected files and directories.

Step 3

Read every applicable TLDR in the dependency chain.

Step 4

Classify the task by category and run the skill discovery lookup (Rule S2) to determine mandatory skills, applying the ponytail-family defaults where they fit.

Step 5

Collect all inherited, local, and mandatory Skills into one active Skill set.

Step 6

Load referenced skill documents (global registry paths first, then local) when relevant.

Step 7

Construct the active TLDR and Skills context.

Step 8

Perform work only after both are understood.


# Required TLDR Review

Every meaningful change requires a TLDR review before the task is complete.

A TLDR review determines whether documentation must be updated.


# When TLDR Updates Are Required

Update the nearest owning TLDR whenever changes affect:

# Purpose


Why something exists


# Scope


What something owns


# Ownership


Who is responsible


# Responsibilities


What a system must do


# Contracts


APIs
Interfaces
Data formats
Behaviors
Service expectations


# Structure


New folders
Deleted folders
Renamed folders
Reorganized systems


# Workflows


Build processes
Operational procedures
Development processes


# Constraints


Security requirements
Performance requirements
Operational limitations


# Verification


Tests
Validation procedures
Quality checks


# Skills


New mandatory skill triggers
New local skills
Skills that no longer apply


# Documentation Structure


TLDR additions
TLDR removals
TLDR moves
TLDR renames
Child index updates



# Parent and Child Synchronization

Documentation must remain synchronized.

Update parent TLDRs when:


Child ownership changes
Child scope changes
Project structure changes
Child indexes change
Child skill requirements diverge in a way the parent should know about


Update child TLDRs when:


Local responsibilities change
Local workflows change
Parent changes affect local behavior
The Global Skill Registry adds a skill more specific than what's currently referenced


Remove stale information immediately.

Do not preserve contradictory documentation.


Creating Child TLDR Files

Create a child TLDR when a directory becomes a durable boundary.

Examples include:

Independent systems
Domains
Services
Modules
Applications
Infrastructure areas
Documentation areas
Business capability boundaries

A child TLDR should exist when a directory develops:

Distinct purpose
Distinct ownership
Distinct workflows
Distinct responsibilities
Distinct quality standards
Distinct operational requirements
Distinct skill requirements (e.g. a subtree that is Rust while the rest is TypeScript)

Standard TLDR Structure

All TLDR files should use the same structure.

markdown# Purpose

# Ownership

# Skills

# Local Contracts

# Work Guidance

# Verification

# Child TLDR Index

This consistency allows agents to quickly navigate and understand unfamiliar projects.


Documentation Standards

TLDR files should be:


Concise
Accurate
Operational
Actionable
Current
Easy to scan

Document durable knowledge.

Do not document temporary activity.

Avoid:

Journals
Changelogs
Meeting notes
Historical narratives
Temporary plans
Obsolete warnings

Remove stale information instead of explaining its history.

# Child TLDR Index

Every TLDR must contain a Child TLDR Index.

The Child TLDR Index serves two purposes:


Navigation
Dependency discovery

Example:

markdown# Child TLDR Index

frontend/
    Purpose: User interface layer
    TLDR: frontend/TLDR.md

backend/
    Purpose: Application services
    TLDR: backend/TLDR.md

infrastructure/
    Purpose: Deployment and operations
    TLDR: infrastructure/TLDR.md

Agents use this index to discover additional documentation that may apply.

Dependency Graph Requirement

Every TLDR should document its immediate child dependencies.

Example:

textTLDR.md
│
├── frontend/TLDR.md
├── backend/TLDR.md
└── infrastructure/TLDR.md

Each child TLDR should continue the graph for its own subtree.

This allows an agent to reconstruct the complete project knowledge graph from documentation alone.

# Closeout Procedure

Before completing any task:

Step 1

Rebuild the active TLDR dependency chain.

Step 2

Rebuild the active Skills chain (Mandatory Baseline + Category Triggers + TLDR-declared + local).

Step 3

Verify compliance with applicable TLDR contracts.

Step 4

Verify compliance with applicable Skills — explicitly confirm verification-before-completion was actually followed, not just declared.

Step 5

Update affected TLDR files.

Step 6

Update affected skill definitions or propose a new global skill if a real gap was found.

Step 7

Refresh Child TLDR Index entries.

Step 8

Remove stale documentation.

Step 9

Run verification procedures.

Step 10

Document intentionally unchanged TLDR or Skills entries.

# Ultimate Objective

The TLDR framework exists to ensure that project understanding survives:

Context window limitations
Agent replacement
Model upgrades
Personnel changes
Long periods of inactivity
Loss of conversational history

If every conversation disappears tomorrow, a competent agent should still be able to reconstruct the project by reading the TLDR hierarchy and resolving the active Skill chain from the Global Skill Registry.

The repository itself should contain enough structured knowledge to explain:

What the project is
How the project works
How the project is organized
How the project should evolve
Which skills govern which kinds of work

The TLDR hierarchy is the project's persistent operational memory. The Global Skill Registry is the project's persistent operational expertise. Together they let any agent — Hermes or otherwise — pick up the work cold and perform it to the same standard every time.
