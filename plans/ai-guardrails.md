# AI Usage Best Practices Plan

## Goal

Position as a developer who uses AI thoughtfully—maximizing productivity while avoiding common pitfalls like code duplication and over-reliance.

## Current State

- [x] CLAUDE.md with project constraints
- [x] Explicit anti-patterns defined
- [ ] CI guardrails for duplication (in progress)

## Implementation Roadmap

### 1. CI Duplication Detection

**Problem:** AI tends to generate similar code rather than reuse existing abstractions.

**Solutions:**

- Add `jscpd` to CI pipeline for copy-paste detection
- Configure thresholds: fail on >5% duplication
- Add custom ESLint rules for project-specific patterns

```bash
npm install -D jscpd
```

### 3. Pre-commit AI Review Hook

**Checks to implement:**

- Bundle size delta
- New dependencies added
- Duplicate utility detection
- Naming convention violations

**Tool options:**

- Husky + custom scripts
- lint-staged with custom functions

### 4. Scoped Usage Guidelines

Document when AI helps vs hurts:

| Task                       | AI Recommended | Why                                   |
| -------------------------- | -------------- | ------------------------------------- |
| Boilerplate (types, tests) | Yes            | Repetitive, low risk                  |
| State management           | No             | Requires domain context               |
| Styling/layout             | Yes            | Follows patterns                      |
| Business logic             | No             | Needs human judgment                  |
| Refactoring                | Partial        | Good for suggestions, review manually |
| Code review                | Yes            | Catches patterns linters miss         |

### 5. Prompt Library

Create reusable prompts for common tasks:

```
/prompts
  component-scaffold.md
  test-generation.md
  pr-review.md
  refactor-check.md
```

Each prompt should include:

- Context requirements
- Expected output format
- Quality checks to apply after

### 6. AI-Assisted PR Review Checklist

Use AI to check:

- Does this duplicate existing utilities?
- Are naming conventions consistent?
- Could this be simplified?
- Are there abstraction opportunities?

Do NOT use AI to check:

- Business logic correctness
- Security implications
- Performance in production context

## Metrics to Track

- Duplication percentage over time
- PR review turnaround
- Bugs introduced in AI-assisted vs manual code
- Bundle size trends

## Talking Points for Marketing

1. "I use AI as a force multiplier, not a replacement for judgment"
2. "I've built guardrails that catch AI's common failure modes"
3. "I document when AI helps and when it hurts—that's the skill"
4. "AI is great at patterns, humans are great at context"

## Next Actions

1. [ ] Set up jscpd in CI
2. [ ] Create prompt library folder
3. [ ] Document team's scoped usage guidelines
4. [ ] Add pre-commit hook for bundle size check
