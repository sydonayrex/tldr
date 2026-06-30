---
name: backend-engineering
description: Backend engineering skill - designs and implements APIs, services, data models, and business logic with focus on correctness, performance, security, and evolvability. Cloud-native by default.
version: "2.0.0"
tags: [backend, api, services, data-model, domain-driven-design, microservices, rest, graphql, event-driven, cloud-native, twelve-factor]
---

# Backend Engineering

## Purpose
Backend Engineering implements the **server-side logic, APIs, and data layer** of the Software Factory. This skill ensures:

1. **Correct business logic**: Domain rules enforced accurately and consistently
2. **Clean API contracts**: Stable, versioned, well-documented interfaces
3. **Data integrity**: Transactions, constraints, migrations done right
4. **Performance at scale**: Query optimization, caching, async processing
5. **Security by design**: Auth, input validation, rate limiting, audit logging
6. **Cloud-native design**: Applications built for cloud environments — scalable, resilient, observable

## API Design Principles
1. RESTful resources for CRUD, GraphQL for complex queries, events for cross-service
2. Version from day one (/v1/, /v2/)
3. OpenAPI specification for every endpoint
4. Consistent error format across all endpoints
5. Pagination by default for list endpoints

## Cloud-Native Application Design

### Twelve-Factor Principles (Summary)
Build applications optimized for cloud environments:
1. **Codebase**: One codebase tracked in revision control, many deploys
2. **Dependencies**: Explicitly declare and isolate dependencies
3. **Config**: Store config in the environment (not in code)
4. **Backing services**: Treat backing services as attached resources
5. **Build, release, run**: Strictly separate build and run stages
6. **Processes**: Execute the app as one or more stateless processes
7. **Port binding**: Export services via port binding
8. **Concurrency**: Scale out via the process model
9. **Disposability**: Fast startup and graceful shutdown
10. **Dev/prod parity**: Keep development, staging, and production as similar as possible
11. **Logs**: Treat logs as event streams
12. **Admin processes**: Run admin/management tasks as one-off processes

### Microservice Architecture
- Functionally decompose into loosely coupled services
- Each service owns its data and logic
- Communicate via APIs (synchronous) or events (asynchronous)
- Scale independently based on demand
- **Caution**: Microservices are not silver bullets. Weigh operational complexity against agility benefits.

### Domain-Driven Design (DDD)
- Think in business domains at each step: discovery, architecture, design
- Use **Bounded Contexts** to define service boundaries
- Establish a **ubiquitous language** shared between business and engineering
- Practices like Event Storming help discover domain events
- Apply as much or as little as benefits the project — not all-or-nothing

## Data Modeling Rules
1. Normalize first, denormalize only after measuring
2. Every table: id, created_at, updated_at, deleted_at (soft delete)
3. Constraints at DB level: NOT NULL, UNIQUE, FK, CHECK
4. Migrations are reversible (up + down)
5. No business logic in triggers

## Business Logic Patterns
- Domain service encapsulates business rules
- Result type for expected failures, exceptions for unexpected
- Transactional boundaries around state changes
- Domain events for cross-aggregate communication

## Security Requirements
- Authenticate every endpoint (JWT, session, API key)
- Authorize every endpoint (RBAC, ABAC)
- Validate input at boundary (schema validation)
- Rate limit per-user, per-endpoint
- Audit log: who did what, when
- Sanitize output (no sensitive data leakage)

## Performance Rules
- N+1 forbidden (use JOINs, batch loading)
- Index foreign keys and frequent queries
- EXPLAIN ANALYZE queries touching >1000 rows
- Cursor-based pagination for large datasets
- Background jobs for non-blocking work

## API Contract Strategies

### Consumer-Driven Contracts (CDC)
In a microservices architecture, services expose two kinds of APIs: RESTful (HTTP) and message-based (events). Consumer-driven contracts invert the traditional API design question — instead of the producer dictating the API, consumers define what they need.

**When to use CDC:**
- Building many related services simultaneously during modernization
- Team knows the domain language but not individual aggregate/event payload properties
- Legacy application with large data model — don't want to port 100% to microservices
- Need to add/remove API fields without breaking downstream clients
- Need to discover who is using your service
- Need short release cycles with continuous delivery

**How it works:**
1. Consumer defines a contract specifying what they need from the producer
2. Contract covers both HTTP (RESTful) and messaging (event) tiers
3. Producer implements to satisfy all consumer contracts
4. Tests verify contracts are maintained on both sides

**Benefits:**
- Add to an API without breaking downstream clients
- Remove from a service without breaking downstream clients
- Service developers can find out who is using their service
- Enables short release cycles and continuous delivery
- Inverts the question from "what data should my domain model contain?" to "nothing until a client says it needs something"

**Contract structure:**
- Separate test base classes for HTTP and messaging concerns
- Contracts organized by consumer: `contracts/<consumer>/http/` and `contracts/<consumer>/messaging/`
- REST contracts define: method, URL, request body/headers, expected response status/body
- Messaging contracts define: trigger method, output message destination, expected payload

**Modernization use case:**
- When breaking down a monolithic legacy application
- Team knows the bounded context but not individual properties
- Not all legacy functionality needs to be ported
- Work backwards from consumer needs rather than forwards from legacy data model

## Self-Correction
- Breaking API change? Version it
- Slow query? Profile, index, optimize
- Business logic wrong? Fix, don't workaround
- Security gap? Fix immediately, notify Security

## Metrics
| Metric | Target |
|--------|--------|
| API p99 latency | <200ms |
| Error rate | <0.1% |
| Test coverage | >80% |
| API doc coverage | 100% |
| Security vulnerabilities (critical/high) | 0 |
| DB query p95 | <50ms |
