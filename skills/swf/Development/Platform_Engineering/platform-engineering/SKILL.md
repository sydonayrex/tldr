---
name: platform-engineering
description: Designs and operates containerized infrastructure, Kubernetes orchestration, service mesh, and cloud-native platforms for all teams.
version: "1.0.0"
tags: [platform, kubernetes, containers, docker, cloud, infrastructure, terraform, cloud-native, twelve-factor, microservices]
---

# Platform Engineering

## Purpose
Builds and operates the foundation all teams deploy to. Ensures self-service infrastructure, reliable orchestration, consistent environments, cost efficiency, security hardening. Implements cloud-native principles to maximize developer velocity and operational reliability.

## Cloud Native Principles

### Three Major Outcomes
1. **Efficient, happier teams** — Big problems broken into smaller pieces for focused, efficient, responsive teams
2. **Higher automation, more determinism** — Infrastructure is self-healing, self-managed, available as self-service
3. **Improved non-functionalities** — Reliability, portability, deep security, higher efficiency, in-depth observability

### Application Architecture Concepts
| Concept | Definition |
|---------|-----------|
| **Twelve-factor application** | Twelve principles and practices for constructing applications optimized for modern cloud environments. Used to determine how well an application leverages cloud-native technologies. |
| **Microservice architecture** | Functionally decomposes an application into loosely coupled services. Alternative to monolithic software that ships infrequently and scales as a single unit. Not silver bullets — weigh drawbacks and benefits carefully. |
| **Cloud Native Patterns** | Catalog of reusable solutions to recurring problems in cloud-native applications. Each pattern describes an architectural problem, its solution, and benefits/drawbacks. |
| **Domain-Driven Design** | Encourages thinking in business domains at each step: discovery, architecture, design. Comprises practices (Event Storming) and concepts (Bounded Context) with a common "ubiquitous" language for collaboration. |

### Software Life-Cycle Concepts
| Concept | Definition |
|---------|-----------|
| **Containerization** | Package applications with dependencies for consistent deployment across environments |
| **CI/CD** | Automated build, test, deploy pipeline for rapid, reliable releases |
| **GitOps** | Declarative infrastructure and deployments managed through git |
| **Observability** | Logging, metrics, and traces for understanding system behavior |

### Infrastructure Concepts
| Concept | Definition |
|---------|-----------|
| **Kubernetes** | Container orchestration for automated deployment, scaling, management |
| **Service Mesh** | Infrastructure layer for service-to-service communication with observability |
| **Immutable Infrastructure** | Replace rather than modify; servers are cattle not pets |
| **Infrastructure as Code** | Manage infrastructure through version-controlled code |

### Team Culture Concepts
| Concept | Practice |
|---------|----------|
| **Self-service platform** | Developers provision infrastructure without tickets or waiting |
| **Blameless post-mortems** | Focus on system fixes, not individual blame |
| **Continuous improvement** | Regular retrospectives and process refinement |
| **Shared responsibility** | Platform and application teams share operational concerns |

## Platform Stack
```
Developer Portal (Backstage)
  -> GitOps (ArgoCD/Flux)
    -> Service Mesh (Istio/Linkerd)
      -> Ingress (NGINX/Traefik)
        -> Kubernetes (EKS/GKE/AKS)
          -> Infrastructure (Terraform)
            -> Cloud (AWS/GCP/Azure)
```

## Container Standards
- Multi-stage builds for minimal images
- Non-root user in container
- Minimal base image (Alpine, distroless)
- Health checks (liveness + readiness)
- Resource limits on every container
- No secrets in images
- Image scanning (Trivy/Snyk), block critical CVEs

## Kubernetes Standards
- Rolling updates (maxUnavailable: 0)
- HPA for autoscaling (CPU 70%, Memory 80%)
- Pod Security Standards (non-root, read-only FS)
- Network policies (default deny, allow specific)
- Resource requests AND limits on every pod

## IaC Rules
- Remote state backend with locking
- No manual changes (everything through IaC)
- Module reuse (no copy-paste between envs)
- Plan before apply, peer review plans
- Pin provider and module versions

## Self-Correction
- Manual change? Reconcile with IaC immediately
- Resource limits missing? Add before merge
- Security gap? Patch, notify Security
- Cost anomaly? Investigate, right-size

## Metrics
| Metric | Target |
|--------|--------|
| Cluster availability | 99.9% |
| Node utilization | 60-80% |
| Critical CVEs in prod images | 0 |
| Certificate expiry | >30 days always |
| Infrastructure drift | 0 |
