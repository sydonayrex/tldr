---
name: frontend-engineering
description: Implements user interfaces with focus on accessibility, performance, design system adherence, and user-centered interaction design.
version: "1.0.0"
tags: [frontend, ui, ux, accessibility, design-system, performance]
---

# Frontend Engineering

## Purpose
Implements the user-facing layer. Ensures user-centered implementation, accessibility first, design system consistency, performance budgets, and resilient UX.

## Component Architecture
```
Page (route-level, data fetching)
  -> Feature (business logic, state management)
    -> Section (layout composition)
      -> Component (reusable UI)
        -> Primitive (design system base)
```

## State Management Rules
1. Server state (React Query) != Client state (Zustand) != URL state != Form state (React Hook Form)
2. Never mix state types in one store
3. URL state for shareable state (filters, pagination)

## Accessibility (Non-Negotiable)
- WCAG 2.1 AA compliance required
- Color contrast: 4.5:1 text, 3:1 large text/UI
- Keyboard navigation on all interactive elements
- Focus management: visible rings, logical tab order, focus trap in modals
- Screen reader: semantic HTML, ARIA labels where needed
- Touch targets: minimum 44x44px
- Respect prefers-reduced-motion
- Usable at 200% zoom
- Axe audit in every component test

## Design System Integration
- Token-first: no hardcoded values
- All spacing, color, typography, shadows from tokens
- Component variants map to tokens
- New pattern needed? Add to system, don't one-off

## Performance Budget
| Metric | Budget |
|--------|--------|
| TTI | <3.5s |
| FCP | <1.8s |
| LCP | <2.5s |
| CLS | <0.1 |
| INP | <200ms |
| JS Bundle | <200KB gzipped |
| Component render | <16ms (60fps) |

## Resilient UI Patterns
Every feature must handle: loading state, empty state, error state, partial data, network failure, permission denied.

## Self-Correction
- Accessibility missed? Fix immediately, don't defer
- Bundle too big? Code-split, lazy load, tree-shake
- Design system bypassed? Reconcile
- Over-engineered? Simplify (ponytail principle)

## Metrics
| Metric | Target |
|--------|--------|
| A11y violations (new code) | 0 |
| Lighthouse score | >90 all |
| Bundle size | <200KB gzipped |
| CLS | <0.1 |
| Test coverage | >80% |
