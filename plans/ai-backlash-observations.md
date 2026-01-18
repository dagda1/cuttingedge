# AI Backlash Observations

## Purpose

Document what you're seeing first-hand as AI-generated code hits reality. When the backlash comes, you'll have specific examples and language that resonates.

## The Hype Cycle

1. **Christmas 2024:** "I built an app with one prompt!"
2. **Early 2025:** "Look what AI can do!"
3. **3-6 months later:** "Why is this codebase unmaintainable?"
4. **Later:** "We need someone to fix this"

## Your Bet

The backlash comes before AI gets good enough to fix its own messes. Probably 1-2 years window.

## What to Track

- AI ignoring instructions (even with good CLAUDE.md / system prompts)
- Patterns that keep appearing despite guidance
- Codebases that become unmaintainable
- Teams struggling to onboard into AI-generated code
- "Rebuilt from scratch" stories
- Devs refusing to work on AI messes
- Founders realising they can't sell/raise with incomprehensible code

## Observations

### January 2025

**Exponential Duplication - The Core Problem**

AI duplicates on an industrial scale. Every solved problem gets re-solved badly, across every team, every codebase.

**Example: Table Components**

- Dev asks AI for "table with editing"
- AI builds from scratch using @mui primitives instead of using material-react-table (3+ years of edge cases solved, tested by thousands)
- Works for the demo
- Edge cases appear: keyboard navigation, cell validation, copy/paste, accessibility, column resizing
- Dev asks AI to fix each one, AI adds more code
- Repeat across multiple teams/features
- Now you have multiple bespoke table implementations, each with its own bugs

**The Multiplication Problem**

- 5 bespoke tables × 10 features = 50 implementations to maintain
- New requirement (export to CSV): 5 separate implementations
- Bug in pagination logic: 5 places to fix, if you can find them all
- Virtualisation, paging, sorting - every feature added to every table separately
- One team does it right, others don't know that solution exists

**The Timeline**

- Month 1: "AI is so fast, we shipped 5 features!"
- Month 6: "Why does everything take so long now?"
- Month 12: "We need to rebuild"

**What Should Happen**

One table component, configured per use case. New feature added once, everyone benefits.

**What AI Creates**

Fragmented, diverging copies. Each "quick win" becomes permanent maintenance burden. Codebase gets heavier with every feature.

**Key Talking Point**

"AI speed now becomes AI debt later. Most teams don't see it until they're drowning."

---

### Template for Each Observation

**Date:**
**Context:** (client work, personal project, community discussion)
**What happened:**
**What AI got wrong:**
**What a senior dev would have done differently:**
**Potential talking point:**

---

## Patterns Emerging

(summarise recurring themes as you collect observations)

## Language That Might Resonate

(phrases, framings, ways to describe the problem that non-technical buyers would understand)

## Signals the Backlash is Coming

- [ ] First "we rebuilt from scratch" posts appearing
- [ ] Hiring posts mentioning "clean up AI-generated code"
- [ ] VCs/founders complaining about technical debt from AI
- [ ] Devs publicly refusing AI-heavy roles
- [ ] Conference talks about AI code quality problems
