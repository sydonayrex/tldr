# PMCS Digital Form Replacement

**Date**: 2026-06-25
**Status**: Draft
**Author**: AI-assisted
**Branch**: N/A

---

## Overview

Replace the paper-based DA Form 2404 (Equipment Inspection and Maintenance Worksheet) with a Java-based web application that allows Soldiers to fill out, submit, and manage PMCS (Preventive Maintenance Checks and Services) records digitally. The system consists of a Spring Boot backend with PostgreSQL and a React frontend deployed as a single JAR war.

---

## Motivation

### Current State

Soldiers fill out **DA Form 2404** by hand on Motorpool day. The paper form uses columns, symbols, and free-text blocks that capture inspection results on a Small, single-sheet template. Key inefficiencies:

1. **Illegible handwriting** leads to misrecorded findings
2. **Manual paper routing** between inspectors and commanders
3. **No search/filter/past findings** for equipment maintenance history
4. **No validation** required for fields such as item #
5. **Paper supply dependency** — printers, physical formsheets lostdamage are

### Desired State

A web app that:
- Validates each field entry in real time
- Symbols become dropdown selections
- One-click form submission for commander signature
- Fast lookup of prior PMCS history by Registration No
- Extensible for PPMCS/Material Deficiency symbols via future ModRequests
- No Soldier login required; authentication=local accountability (design decision below)

### Form Structure Reference (DA Form 2404 Fields)

```
HEADER BLOCK
  1. ORGANIZATION
  2. NOMENCLATURE AND MODEL
  3. REGISTRATION / SERIAL / NSN
  3a. MILES (numeric)
  3b. HOURS (numeric)
  3c. ROUNDS FIRED (numeric)
  3d. HOT STARTS (numeric)
  5. DATE (date picker)
  6. TYPE INSPECTION (PMCS/Annual/Preventive/Other)
  7. APPLICABLE REFERENCES
      TM NUMBER (Text), TM DATE (Date) — repeat 2 times

SIGNATURE BLOCK
  8a. SIGNATURE — Person performing inspection (free text)
  8b. TIME (hours)
  9a. SIGNATURE — Maintenance Supervisor (free text)
  9b. TIME (hours)
  10. MANHOURS REQUIRED (numeric)

DATA TABLE (repeating, N items ≈ 13 row)
  a. TM ITEM NO (foreign key pattern)
  b. STATUS SYMBOL
      - (X)        Deficiency → Makes inoperable
      - (⊕ circled X) Deficiency → Limitations per command
      - ( – )    Check/Test Overdue (MWD, Inspection Interval)
      - ( / )      Defect / Correct to increase efficiency
      - (initials) Satisfactory condition
  c. DEFICIENCIES AND SHORTCOMINGS (free text)
  d. CORRECTIVE ACTION (free text)
  e. INITIAL WHEN CORRECTED (free text)

FOOTER
  Form ID: DA 2404 (FEB 2011), APD LC 1.3.0
  Certification acknowledgment (acceptance checkbox)
```

---

## Research Findings

### Comparison: Other Digital PMCS Projects

| Project        | Approach         | Strength        | Weakness          |
| -------------- | ---------------- | --------------- | ----------------- |
| LMD (AR 750-1) | Commercial CMS  | Vetted          | Costly, monolithic |
| TkCanvas + PG  | Python + Desktop | PDF fidelity    | Not web, no mobile|
| DA Form 2404 Excel | Spreadsheet    | Low barrier     | No version control |
| **Proposed**   | Java+Spring+React| Internal control, TDD, mobile ready | Initial dev cost |

### Key Finding

DA Form 2404 is a "worksheet" — not a workflow. Corrective actions are not multi-step processes; they'd be approved at the line level. This system has **no authorization flow beyond commander signature**.

---

## Design Decisions

| Decision            | Class        | Choice                    | Rationale                                                          |
| ------------------- | ------------ | ------------------------- | ------------------------------------------------------------------ |
| Backend Framework  | 1 evidence   | **Spring Boot 3 + Java 17** | Team capability, ORM, validation, mature ecosystem                |
| Frontend Framework  | 1 evidence   | **React + Vite**           | Modern component model, rapid dev deployment, worker-friendly UI  |
| Database            | 1 evidence   | **PostgreSQL 15**          | Relational integrity, JSONB for symbol metadata, ACID compliance  |
| Packaging           | 1 evidence   | **Executable WAR (Spring Boot)** | Single deployment artifact, no external app server required   |
| Authentication      | 2 coherence  | **Bypass — Local accountability** | Form 2404 is self-attesting signatures; auth relies on unit standard operating procedure rather than SSO |
| ORM Choice          | 2 coherence  | **Spring Data JPA**        | Rapid development, migration support via Flyway                  |
| Client Architecture | 3 taste       | **SPA with controlled-conditional-render components** | Reduces server roundtrip; dropdown-triggered status rules (auto-populate, visual warnings) |
| Form Versioning     | 2 coherence  | **Schema-locked to DA 2404 Feb 2011** | Do not build a generic "worksheet"; use the form's exact fields    |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     Browser (Tablet / Laptop)                     │
│                                                                   │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │  React Frontend (SPA)                                    │   │
│   │  ├── HeaderBlock    (organization, nomenclature, metrics) │   │
│   │  ├── ApplicableRef  (TM number + date, repeat=2)         │   │
│   │  ├── SignatureBlock (inspector + supervisor + manhours)  │   │
│   │  ├── DataTable      (N rows: itemNo, status, ...)        │   │
│   │  └── Acceptance    (certification checkbox + submit)     │   │
│   └─────────────────────────────────────────────────────────┘   │
│                              │ HTTP/JSON                           │
└──────────────────────────────┼──────────────────────────────────┘
                               │
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│               Spring Boot Backend (Embedded Tomcat)               │
│                                                                   │
│   ┌──────────────┐   ┌──────────────┐   ┌──────────────────┐   │
│   │  Controllers  │──▶│   Services    │──▶│  Repositories    │   │
│   │  (REST API)  │   │  (Business)   │   │  (Spring Data)   │   │
│   └──────────────┘   └──────────────┘   └──────────────────┘   │
│                              │                     │              │
│                              │                     ▼              │
│                              │            ┌──────────────────┐  │
│                              │            │  PostgreSQL DB    │  │
│                              │            │  tables:          │  │
│                              │            │  - pmcs_record    │  │
│                              │            │  - equipment_metric│ │
│                              │            │  - applicable_ref │  │
│                              │            │  - inspection_row │  │
│                              │            │  - digital_signature││
│                              │            └──────────────────┘  │
│                              ▼                                    │
│                     ┌──────────────────┐                         │
│                     │  Flyway Migrations│                         │
│                     └──────────────────┘                         │
└─────────────────────────────────────────────────────────────────┘

API Endpoints (Initial Set)
───────────────────────────
POST   /api/records                    — create new PMCS record
GET    /api/records/{id}               — fetch record by ID
GET    /api/records?regno=...          — lookup by Registration No (history)
PUT    /api/records/{id}               — update draft record
POST   /api/records/{id}/submit        — submit for signature (lock)
DELETE /api/records/{id}               — soft delete (admin only)

GET    /api/record/builder             — JSON schema for dynamic frontend build
                                      (optional future: admin modRequest)
```

---

## Implementation Plan

### Phase 1: Backend — Core Domain Model & Database

- [ ] **1.1** Initialize Spring Boot 3 project with dependencies: Web, JPA, Validation, PostgreSQL, Flyway, Lombok, Testcontainers, RestAssured
- [ ] **1.2** Define `PmcsRecord` entity (header fields: organization, nomenclature, regNo, miles, hours, roundsFired, hotStarts, inspectionDate, typeInspection, manhoursRequired)
- [ ] **1.3** Define `EquipmentMetric` embeddable (miles, hours, rounds, hotStarts)
- [ ] **1.4** Define `ApplicableReference` entity (tmNumber, tmDate) — 2 occurrences, ordered
- [ ] **1.5** Define `InspectionRow` entity (tmItemNo, statusSymbol, deficiencies, correctiveAction, initialCorrected)
- [ ] **1.6** Define `DigitalSignature` entity (inspectorName, supervisorName, inspectorTime, supervisorTime, certificationAccepted, acceptedAt)
- [ ] **1.7** Apply Flyway migration script to create all tables with foreign keys, indexes on `regNo` and `inspectionDate`
- [ ] **1.8** PostgreSQL local dev setup with Docker compose file (`docker-compose.yml` with db service + adminer)

#### TDD Test Plan (Phase 1)

**Unit Tests (JUnit 5 + Mockito)**

| Test Class | Target | Key Test Cases |
| ---------- | ------ | -------------- |
| `PmcsRecordTest` | Entity invariants | (1) Default status = DRAFT, (2) Cannot submit without signature, (3) regNo required + max 50 chars |
| `InspectionRowTest` | Row validity | (1) Valid symbol enum, (2) If symbol=X then deficiencies required, (3) If symbol=INITIAL then deficiencies empty/null, (4) tmItemNo numeric or blank |
| `ApplicableReferenceTest` | Reference fields | (1) tmNumber not blank, (2) tmDate not blank, (3) tmDate valid date format |
| `DigitalSignatureTest` | Signature completeness | (1) inspectorName required, (2) supervisorName required, (3) certificationAccepted true required for submit, (4) inspectorTime/supervisorTime not null |

**Integration Tests (Testcontainers + Spring Boot Test + RestAssured)**

| Test Class | Scenario | Assertion |
| ---------- | -------- | --------- |
| `PmcsRecordRepositoryTest` | Save and retrieve record by ID | Record persisted with all relations fetched correctly |
| `PmcsRecordRepositoryTest` | Lookup by regNo | Returns all records for equipment, ordered by date DESC |
| `PmcsRecordRepositoryTest` | Soft delete | deleted_at set; record not returned in default query |
| `PmcsRecordRepositoryTest** | Unique constraint on (regNo, inspectionDate) when active | ConstraintViolationException on duplicate |
| `PmcsRecordServiceTest` | Submit without signatures | Throws `InvalidStateException` |
| `PmcsRecordServiceTest` | Submit with all valid fields | Status → SUBMITTED, returned DTO matches input |
| `PmcsRecordServiceTest` | Update draft record | Fields updated, status remains DRAFT |
| `PmcsRecordServiceTest` | Modify submitted record | Throws `RecordLockedException` |

---

### Phase 2: Backend — REST API & Validation

- [ ] **2.1** Implement `PmcsRecordController` with CRUD endpoints
- [ ] **2.2** Implement `RecordBuilderController` (returns JSON schema for frontend dynamic rendering)
- [ ] **2.3** Add Bean Validation annotations + global exception handler with structured error response (`{field, message, code}`)
- [ ] **2.4** Add OpenAPI/Swagger doc at `/swagger-ui.html`
- [ ] **2.5** Configure CORS (allow localhost dev + network deployment)

#### TDD Test Plan (Phase 2)

**API Contract Tests (RestAssured)**

| Endpoint | Case | Expected Status | Body Assertion |
| -------- | ---- | --------------- | -------------- |
| `POST /api/records` | Valid payload | 201 Created | Response body matches schema, id assigned |
| `POST /api/records` | Missing organization | 400 Bad Request | Error: organization required |
| `POST /api/records` | Missing regNo | 400 Bad Request | Error: regNo required |
| `POST /api/records` | Invalid status symbol "Z" | 400 Bad Request | Error: must be valid StatusSymbol |
| `POST /api/records` | Negative miles value | 400 Bad Request | Error: miles >= 0 |
| `GET /api/records/{id}` | Existing record | 200 OK | Correct JSON |
| `GET /api/records/{id}` | Nonexistent | 404 Not Found | Error body present |
| `GET /api/records?regno=X` | Has records | 200 OK | Array, size ≥ 1, ordered by date DESC |
| `GET /api/records?regno=X` | No records for regno | 200 OK | Empty array |
| `PUT /api/records/{id}` | Update draft | 200 OK | Updated fields reflected |
| `PUT /api/records/{id}` | Update submitted | 409 Conflict | RecordLocked message |
| `POST /api/records/{id}/submit` | No signatures | 422 Unprocessable | Missing signatures |
| `POST /api/records/{id}/submit` | Full valid | 200 OK | Status=SUBMITTED |
| `DELETE /api/records/{id}` | Soft delete | 204 No Content | No body |
| `GET /api/record/builder` | Schema request | 200 OK | JSON with all field definitions, types, validation rules |

---

### Phase 3: Frontend — React UI Components

- [ ] **3.1** Initialize Vite + React + TypeScript project
- [ ] **3.2** Define TypeScript interface types matching backend DTOs
- [ ] **3.3** `HeaderBlock` component (organization, nomenclature, regNo, miles/hours/rounds/hotStarts, date picker, typeInspection dropdown)
- [ ] **3.4** `ApplicableReference` component (repeat=2 instances, TM number + date inputs)
- [ ] **3.5** `SignatureBlock` component (inspector name/time, supervisor name/time, manhours)
- [ ] **3.6** `DataTable` component (dynamic rows: add/remove, status symbol dropdown with visual indicator/deficiencies/correctiveAction/initialsCorrected)
- [ ] **3.7** `AcceptanceFooter` component (certification checkbox + submit button)
- [ ] **3.8** Form state management (React Hook Form + Zod resolver)
- [ ] **3.9** API client layer (fetch wrapper, error handling, loading states)
- [ ] **3.10** Lookup panel (search by regNo, display prior PMCS history)
- [ ] **3.11** Responsive layout (works on tablet at Motorpool)

#### TDD Test Plan (Phase 3)

**Unit Tests (Vitest)**

| Component | Test Case | Assertion |
| --------- | --------- | --------- |
| `HeaderBlock` | Renders all fields | DOM contains inputs for organization, nomenclature, regNo, miles, hours, roundsFired, hotStarts, inspectionDate, typeInspection |
| `HeaderBlock` | Metric validation — negative miles | Shows "Miles must be ≥ 0" error |
| `HeaderBlock` | Date picker valid | Sets date value on change |
| `ApplicableReference` | Two reference blocks | Renders 2 sets of TM number + date inputs |
| `ApplicableReference` | Invalid date format | Shows "Use YYYY-MM-DD format" |
| `DataTable` | Add/remove rows | Row count increments/decrements, correct index maintained |
| `DataTable` | Status dropdown — select X | Deficiencies field becomes required (red border/asterisk) |
| `DataTable` | Status dropdown — select INITIAL | Deficiencies field hidden or cleared |
| `DataTable` | Row validation — missing itemNo | Inline error "Item no. required" |
| `SignatureBlock` | Inspector name entered | Value captured in form state |
| `SignatureBlock` | Certification unchecked | Submit button disabled OR error on submit |
| `AcceptanceFooter` | Checkbox toggles | Submit enabled/disabled accordingly |

**Integration Tests (Vitest + MSW — Mock Service Worker)**

| Scenario | Mock Backend | Frontend Behavior |
| -------- | ----------- | ---------------- |
| Create new record | POST returns 201 | Redirect to record detail, flash "Saved" |
| Load record for editing | GET returns 200 | Form populates with fetched data |
| Lookup history | GET with regno returns array | History panel shows records |
| Submit invalid | POST returns 400 | Inline errors on each invalid field |
| Submit success | POST returns 200 | Confirmation screen, "Print-ready version" link |
| Save draft | PUT returns 200 | "Draft saved" notification |
| Network error | 500 | Retry button + "Contact support" message |

**End-to-End Tests (Playwright)**

| Scenario | Steps | Assertion |
| -------- | ----- | --------- |
| Full record creation | Fill header → add 3 rows → enter signature → accept → submit | Success message, record in history |
| Lookup flow | Search regNo from header | Prior records appear |
| Empty submit | Click submit without data | Validation errors displayed |
| Record locking | Submit → try to edit | "Record locked" message, fields read-only |

---

### Phase 4: Integration, Build & Deployment

- [ ] **4.1** Create Spring Boot multi-module setup: `pmcs-server` (backend) + `pmcs-web` (frontend)
- [ ] **4.2** Configure Maven build to copy Vite build output into `src/main/resources/static` (serve as static resources from embedded Tomcat)
- [ ] **4.3** Package as executable WAR: `mvn clean package` → `pmcs.war`
- [ ] **4.4** Docker image (optional): `Dockerfile` with OpenJDK 17 + WAR
- [ ] **4.5** CI pipeline (GitHub Actions): lint → test → build → package
- [ ] **4.6** Deployment guide: IP binding, port config, DB connection env vars

#### TDD Test Plan (Phase 4)

| Test | Type | Assertion |
| ---- | ---- | --------- |
| WAR packaging test | Integration | WAR contains React build in `WEB-INF/classes/static/` |
| WAR startup test | Integration | App starts, serves frontend at `/` and API at `/api/records` |
| Docker smoke test | E2E | Container starts on port 8080, health endpoint returns OK |
| Flyway migration test | Integration | Schema version matches latest migration; no migration errors |

---

## Edge Cases

### 1. Zero Equipment Metrics

1. Vehicle has 0 miles (new or reset)
2. Form allows `miles=0` with no error
3. Record saves successfully

### 2. Long Registration Number Field (regNo)

1. User enters regNo 50 chars (max allowed)
2. Everything works
3. User enters regNo 51 chars → validation error "Max 50 characters"
4. Error displays on field, not as top-level alert

### 3. Symbol "X" Without Deficiencies Text

1. User selects status=X on a row
2. User leaves "Deficiencies" field empty
3. On submit → validation error: "Deficiencies required when status is X"
4. Row highlighted with error border

### 4. Concurrent Edits on Same Record

1. Two users open the same record for editing
2. First user saves successfully
3. Second user receives "Record modified by another user" (optimistic locking)
4. Page refreshes with prior changes; user must reapply their edits

### 5. Very Old Inspection Date

1. User enters inspection date > 30 days in the past
2. Warning banner: "Inspection date is more than 30 days ago. Confirm date is correct."
3. User can still submit (warning only, not blocking)

### 6. No Internet / Standalone Laptop

1. Backend runs locally on laptop (localhost:8080)
2. PostgreSQL runs locally (same laptop via Docker or embedded)
3. Form still functions normally
4. Future: H2 fallback profile for true offline

---

## Open Questions

1. **Authentication vs Unit Accountability**
   - Options: (a) No auth — trust unit SOP, (b) Simple PIN/password per session, (c) CAC/PIV authentication
   - **Recommendation**: (a) — DA Form 2404 does not require identity verification on the form itself; signatures are personal accountability. Use unit physical security controls. Revisit if deployment expands beyond single-unit control.

2. **Multi-Equipment / Per-Day PMCS Sessions**
   - Options: (a) One record per equipment per day (current form), (b) Batch session: inspector checks multiple equipment, then produces N forms
   - **Recommendation**: (a) — matches existing DA 2404 exactly. Add session grouping as a future enhancement if needed.

3. **Offline / Disconnected Use**
   - Options: (a) Always-on network required, (b) Service worker with background sync, (c) PWA with IndexedDB offline storage
   - **Recommendation**: (a) v1 — Motorpool has network. Track (c) as future benefit for field maintenance.

4. **Report Generation (PDF Export)**
   - Options: (a) HTML-to-PDF on client, (b) Server-side JasperReports, (c) No PDF — JSON export only
   - **Recommendation**: (a) — client-side `window.print()` with print-specific CSS matching DA 2404 layout solves the requirement for paper backup.

5. **Status Symbol "Circled X"**
   - Options: (a) Same column as plain X (user differentiates by context), (b) Separate symbol type column, (c) Tooltip/label clarifies
   - **Recommendation**: (c) — dropdown includes descriptive label: "⊕ Circled X: Deficiency, OK to operate with limitations". No separate column needed.

---

## Decisions Log

- Keep `regNo` as plain varchar (not enum): Format varies across equipment types.
  Revisit when: unit imposes standardized equipment registry.

- Keep status symbol as single enum (not bitmask): DA 2404 is one symbol per row.
  Revisit when: higher form (DA 4377 or similar) requires multi-symbol cell.

- Keep frontend SPA (not SSR/mobile native): Targets laptop+tablet web, not app stores.
  Revisit when: form needs to be filled in disconnected field vehicles without any laptop.

---

## Success Criteria

- [ ] Backend starts with `java -jar pmcs.war` and serves API + frontend from single process
- [ ] All Phase 1 unit tests pass: entity invariants, repository queries
- [ ] All Phase 2 API contract tests pass: valid/invalid CRUD, error responses
- [ ] All Phase 3 component tests pass: field rendering, validation triggers, API integration
- [ ] Playwright E2E: full record creation → submit → lookup in history
- [ ] WAR packages cleanly with `mvn clean package` (0 errors, 0 warnings)
- [ ] PostgreSQL schema migrates cleanly via Flyway on fresh database
- [ ] Frontend renders correctly on tablet viewport (1024x768)
- [ ] Zero production secrets in config (DB creds from env vars)

---

## References

- `DA Form 2404 (Feb 2011)` — source form being digitized
- `DA PAM 750-8` — maintenance policy and procedures (proponent reference)
- Spring Boot 3.x reference — https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/
- React + Vite template — https://vitejs.dev/guide/
- Testcontainers for Java — https://www.testcontainers.org/
- Playwright testing — https://playwright.dev/

---

## Glossary

| Term | Definition |
| ---- | ---------- |
| PMCS | Preventive Maintenance Checks and Services — routine equipment inspections per technical manual intervals |
| DA Form 2404 | Paper-based Equipment Inspection and Maintenance Worksheet |
| TM | Technical Manual — the reference document containing inspection items for each equipment type |
| MWO | Modification Work Order — a deferred upgrade/hotfix item |
| regNo | Registration number — the identifier assigned to a piece of equipment (vehicle, weapon, etc.) |
