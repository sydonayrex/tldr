# API Contract & Event-Based Story Patterns

## Source
Consumer-driven contracts guide and "Writing Agile User Stories for Event-Based Systems" — patterns for API design and story writing in non-UI systems.

## What Was Integrated

### Into Backend Engineering Skill → Consumer-Driven Contracts (CDC)
- When to use CDC: building related services, legacy modernization, need for API evolution
- How it works: consumers define contracts, producers implement to satisfy them
- Contract structure: separate HTTP and messaging test base classes, organized by consumer
- Modernization pattern: work backwards from consumer needs, not forwards from legacy data model

### Into Product Management Skill → Event-Based System Stories
- For systems without UIs (event streaming, data processing pipelines, IoT)
- Focus on actions, not personified components
- Identify real actors: processors, sinks, APIs
- Write from downstream consumer's perspective
- Acceptance criteria verify component outputs
- Watch for technical myopia (don't miss non-functional requirements)

## Key Insight: Inverting the API Question
Traditional: "What data should my domain model contain?"
CDC: "Nothing until a client says it needs something"

## Pitfall: Source Anonymization
The original event-based stories guide used a specific IoT monitoring system example ("temperature readings from internet-connected devices"). The example was generalized to maintain the pattern without the specific context.
