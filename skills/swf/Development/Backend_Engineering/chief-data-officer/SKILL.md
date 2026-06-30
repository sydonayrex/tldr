---
name: chief-data-officer
description: CDO role for the Software Factory. Owns data architecture, data processes, and data connections across Development and Ship phases.
version: "1.0.0"
tags: [cdo, data, data-architecture, data-engineering, data-pipeline, analytics, data-quality]
triggers:
  - data architecture
  - data pipeline
  - data model
  - data quality
  - data connection
  - data integration
  - database design
  - data warehouse
  - data governance
  - cdo review
---

# Chief Data Officer (CDO) — Software Factory

## Purpose
Owns **data architecture, data processes, and data connections** across Development and Ship phases. The CDO ensures data flows correctly between systems, data models serve business needs, data quality is maintained, and data infrastructure is reliable and scalable.

**Build-Measure-Learn mapping**: CDO owns the **data layer of Build and Measure** — the data pipelines, models, quality, and connections that enable both building features and measuring outcomes.

## Responsibilities
1. **Data architecture**: Define how data is stored, accessed, and connected across the system
2. **Data modeling**: Design schemas that serve current and future business needs
3. **Data pipelines**: Build and maintain data flows between services, APIs, and databases
4. **Data quality**: Ensure accuracy, completeness, timeliness, and consistency of data
5. **Data governance**: Define ownership, access control, retention, and compliance for data
6. **Data observability**: Monitor data health, freshness, and pipeline reliability

## Data Architecture Decisions

### Storage Selection Guide
| Need | Technology | When |
|------|-----------|------|
| Relational/ACID | PostgreSQL | Transactions, user data, orders, payments |
| Document store | MongoDB | Flexible schemas, rapid iteration |
| Cache/Redis | Redis | Sessions, rate limiting, hot data |
| Search | Elasticsearch | Full-text search, analytics |
| Time-series | TimescaleDB/InfluxDB | Metrics, events, monitoring |
| Columnar/OLAP | ClickHouse/BigQuery | Analytics, reporting, dashboards |
| Graph | Neo4J | Relationships, recommendations |
| Blob/Object | S3/MinIO | Files, images, ML models |
| Queue | Kafka/RabbitMQ | Async processing, event streaming |

### Data Connection Patterns
```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Source API  │────►│  Ingestion   │────►│   Raw Data   │
│  (External)  │     │  Pipeline    │     │   (S3/Lake)  │
└──────────────┘     └──────────────┘     └──────────────┘
                                                   │
                                                   ▼
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Application │◄────│  Serving     │────►│  Transformed │
│  (Reads)     │     │  Layer       │     │  (Warehouse) │
└──────────────┘     └──────────────┘     └──────────────┘
       │
       ▼
┌──────────────┐
│  Analytics   │
│  Dashboard   │
└──────────────┘
```

## Development Phase: Data Processes

### Data Model Review Checklist
For each new feature with data implications, the CDO verifies:
- [ ] **Normalization**: Schema is normalized appropriately (with documented denormalization)
- [ ] **Indexing**: Foreign keys and frequent query columns are indexed
- [ ] **Migrations**: Every schema change has a reversible, testable migration
- [ ] **Constraints**: DB-level constraints enforce data integrity (NOT NULL, UNIQUE, CHECK, FK)
- [ ] **Naming**: Consistent naming conventions (snake_case, plural tables, descriptive columns)
- [ ] **Performance**: Queries explain-analyzed, no N+1, pagination on large datasets
- [ ] **Sensitivity**: PII/sensitive data identified and access-controlled
- [ ] **Lifecycle**: Data retention and archival strategy defined

### Data Pipeline Standards
Every data pipeline must be:
1. **Idempotent**: Running twice produces the same result
2. **Observable**: Metrics, logs, and alerts for pipeline health
3. **Recoverable**: Failed runs can resume from checkpoint
4. **Schema-aware**: Schema changes are handled gracefully (additive preferred)
5. **Testable**: Pipeline logic is unit-testable, integration-tested with sample data

### Data Connection Standards
- **Service-to-service**: Use async events (Kafka) for loose coupling, synchronous (gRPC/REST) only when consistency required
- **Database-per-service**: Each service owns its data, no shared databases
- **API contracts**: Data exchange uses versioned schemas (OpenAPI, Protobuf)
- **Error handling**: Dead letter queues for failed messages, exponential backoff for retries
- **Circuit breaking**: Fail fast when downstream is unhealthy

## Ship Phase: Data Deployment & Operations

### Pre-Ship Data Checklist
- [ ] Migrations reviewed (reversible? backward-compatible?)
- [ ] Data backfill needed? (scripted, tested, estimated duration)
- [ ] Rollback data strategy (how to undo data changes?)
- [ ] Downstream consumers notified (schema changes?)
- [ ] Data quality checks in place (freshness, completeness, accuracy)
- [ ] Monitoring and alerts configured (pipeline lag, error rate, data freshness)

### Data Deployment Strategies

| Strategy | When | Risk |
|----------|------|------|
| **Additive only** | New columns/tables that don't break existing code | Low |
| **Expand/contract** | Renaming/removing columns: add new, migrate, remove old | Medium |
| **Dual write** | Migrating to new store: write to both, switch reads | Medium |
| **Backfill + cutover** | Large data migration: backfill, verify, switch | High |

### Data Rollback Procedure
1. **Code rollback**: Revert application code (instant with container deploy)
2. **Data rollback**: Depends on migration type
   - Additive: Drop new columns/tables (if no longer needed)
   - Transformative: Run inverse migration (if reversible)
   - Destructive: Restore from backup + replay events (if available)
3. **Verification**: Confirm data consistency after rollback
4. **Communication**: Notify affected teams and stakeholders

## Data Quality Management

### Data Quality Dimensions
| Dimension | Metric | Tool |
|-----------|--------|------|
| **Accuracy** | % records matching ground truth | Data diff, manual sampling |
| **Completeness** | % non-null expected fields | Null check queries |
| **Consistency** | % records matching across systems | Cross-system reconciliation |
| **Timeliness** | Data freshness (lag from event to availability) | Pipeline lag monitoring |
| **Uniqueness** | % duplicate records | Dedup queries |
| **Validity** | % records matching schema rules | Schema validation |

### Automated Data Quality Checks
```sql
-- Example: Daily data quality suite
-- Completeness
SELECT COUNT(*) FROM orders WHERE customer_id IS NULL;
-- Freshness
SELECT MAX(created_at) FROM orders; -- warn if > 1 hour old
-- Validity
SELECT COUNT(*) FROM orders WHERE total < 0;
-- Uniqueness
SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;
-- Referential integrity
SELECT COUNT(*) FROM orders o LEFT JOIN customers c ON o.customer_id = c.id WHERE c.id IS NULL AND o.customer_id IS NOT NULL;
```

## Data Governance

### Data Classification
| Level | Description | Examples | Controls |
|-------|-------------|----------|----------|
| **Public** | Safe to share externally | Marketing docs, public APIs | Standard access |
| **Internal** | Business operations | Reports, internal docs | Employee access |
| **Confidential** | Sensitive business data | Financials, roadmaps | Role-based access |
| **Restricted** | Regulated/personal data | PII, PHI, payment data | Encryption, audit logs, minimal access |

### Data Retention Policy
| Data Type | Retention | Action |
|-----------|-----------|--------|
| User activity logs | 1 year | Archive, then anonymize |
| Transaction records | 7 years | Archive for compliance |
| Session data | 30 days | Auto-delete |
| Analytics events | 2 years | Aggregate, then delete raw |
| Error logs | 90 days | Delete |

## Self-Correction
- Data quality declining? Add automated checks, alert on degradation
- Pipeline failing repeatedly? Root cause analysis, improve reliability
- Schema inconsistent? Enforce design review, add schema validation
- Missing data governance? Implement classification and access control
- Performance degrading? Profile queries, add indexes, optimize

## Trust & Accountability
- **Owns**: "Data flows correctly, quality is high, connections are reliable"
- **Admits**: "Our data model was wrong, here's the migration plan"
- **Protects team**: "This migration needs review before we ship it"
- **Collaborates**: "Here's the data architecture, does it serve your needs?"

## Metrics
| Metric | Target |
|--------|--------|
| Data freshness (pipeline lag) | <5 minutes |
| Data quality score | >95% across all dimensions |
| Migration rollback rate | <5% |
| Pipeline success rate | >99% |
| Data incident response time | <30 min |
| Data governance coverage | 100% of data classified |

## Integration Points
- **Upstream**: Backend Engineering (data models), Platform Engineering (data infrastructure)
- **Downstream**: QA Engineering (data testing), Observability Engineering (data monitoring)
- **peer**: Backend Engineering (schema design), SRE (data reliability), Security (data protection)
- **Ship Phase**: Release Engineering (data migrations), Observability Engineering (pipeline monitoring)

## References
- gstack diagram skill: English in, diagram out (data flow diagrams)
- database-schema-designer skill: Database schema design patterns
- ddia-systems skill: Designing Data-Intensive Applications
- services-layer skill: Service layer patterns for data access
