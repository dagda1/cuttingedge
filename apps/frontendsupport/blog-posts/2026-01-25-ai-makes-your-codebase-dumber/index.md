---
meta:
  title: AI Makes Your Codebase Dumber (Unless You Fight Back)
  description: AI favours quick wins over maintainable code, here is how to stop it
  date: "2026-01-25T00:00:00.000Z"
  tags: ["AI", "slop"]
---

The [Ralph Wiggum pattern](https://ghuntley.com/ralph/), letting AI agents run unsupervised in infinite loops while you go away from the keyboard, has me convinced we've slipped into a parallel universe where "naive persistence" counts as engineering.

## AI Code smells to avoid

### 1. Speed Over Sustainability

AI optimises for the first thing that works, not the right solution. Ask it to fix a bug and it'll reach for the quickest hack: disable the feature, hardcode a value, bypass the problem entirely. Understanding the actual root cause takes effort, and effort isn't in the training data.

Recently I was debugging a table with virtualisation that wasn't rendering. The fix was `css min-height: 0` on the flex container. Instead of investigating, the AI blindly slapped on `css height: 600px`, a hack that "works" but breaks layout everywhere else.

### 2. Brute Force Over Optimization

AI defaults to the naive O(n²) approach every time. I had a search filter that needed to check nested objects. AI's solution was to loop through every field in every nested object on every keystroke. It would have blown the stack on any real dataset. I used a pre-computed `ts searchableText` field, building the search string once when data loads instead of on every filter operation. AI would never have suggested this.

## What Actually Works

### Treat AI as a Coding Assistant, Not a Code Generator

You own the code, you understand the code. AI explores solutions, you make decisions. The moment you stop catching it reaching for hacks, your codebase starts rotting.

### Demand Justification

"Why this approach?" "What are the tradeoffs?" "Is this the proper fix or a hack?" If AI can't answer these, it doesn't know what it's doing.

### Verify Everything

Don't assume AI remembers your codebase conventions. Even with a CLAUDE.md file, it needs constant reminding.

### Push for Optimization

AI won't suggest pre-computation, memoization, or debouncing unprompted. You have to ask "this loops on every keystroke, is there a better way?" or you'll ship O(n²) garbage.

### Say No to Hacks

"Don't just disable the feature." "No hardcoded pixel values." "Understand the actual problem first." "Do not duplicte" "Do not weaken the types". If you don't say this, AI will take the path of least resistance every time.
