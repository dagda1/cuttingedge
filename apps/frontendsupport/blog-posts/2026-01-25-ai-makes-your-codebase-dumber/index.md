---
meta:
  title: The good, the bad, and the downright dangerous of coding with AI
  description: AI Code Smells
  date: "2026-01-25T00:00:00.000Z"
  tags: ["AI", "slop"]
---

I use LLMs for coding daily. After months of usage, I've seen enough to have strong opinions about what they're good at and where they fall apart.

Billions have been poured into plausible-sounding text generators, deployed into production systems, and the humans still have to catch the mistakes.

I'm staggered by the [Ralph Wiggum pattern](https://ghuntley.com/ralph/). Letting AI agents run unsupervised in infinite loops while you go away from the keyboard. Autonomous agents chained together, no human in the loop, each one hallucinating into the next.

I don't want to be alarmist, but I can see medical misdiagnoses, legal filings with fake citations, and code vulnerabilities shipped to production. The body count just won't be tracked as "AI-caused."

LLMs are good at generating plausible-looking code fast, but "plausible-looking" isn't the same as correct, clean, or following a project's actual standards. I can't understand why more people aren't highlighting this. The gap between the marketing and real use is massive.

## WARNING!!! They're Just Next Token Predictors

LLMs don't understand your codebase. They don't reason about architecture. They predict what token comes next based on patterns in training data. That's it. When the output looks intelligent, it's because the training data had similar patterns. When it fails, it's because your situation wasn't in the training data. There's no understanding underneath.

Anthropic's CEO is writing [essays](https://darioamodei.com/machines-of-loving-grace) about autonomous AI driven drones wiping out humanity. Meanwhile, I watch AI struggle to position a checkbox correctly on a webpage.

## AI Code smells to avoid

### 1. Duplication on an Industrial Scale

LLMs are trained on tutorials, examples, and greenfield projects. Not on integrating changes into existing codebases. So they do what their training data shows: create new stuff. Need auth logic? They'll write it fresh, even if you already have it in three other places. Need a utility function? They'll inline it rather than find yours.

Left unchecked, every AI change increases entropy. More files, more duplication, more inconsistent patterns. The codebase becomes harder to reason about, which makes the next change even more likely to go wrong.

### 2. Hallucinations and Baffling Assumptions

LLMs are trained to sound confident, not to admit when they don't know. So they make things up instead of saying nothing.

AI confidently presents wrong code with the same tone as correct code. It invents APIs that don't exist, assumes libraries you're not using, and makes decisions about your codebase without asking. Every wrong assumption costs time: you have to spot it, understand why it's wrong, then fix it. The productivity gains vanish into cleanup.

### 3. Defensive Code That Hides Problems

AI doesn't fix bugs, it hides them. Optional chaining everywhere so undefined doesn't crash. Try/catch blocks that swallow exceptions silently. If statements that guard against data that shouldn't be null in the first place. The code "works" but the actual problem is buried. You end up with a codebase full of defensive checks that exist because nobody understood why the data was wrong.

### 4. Changing Code Without Permission

Ask AI to fix one thing and it'll "improve" three others. It refactors code you didn't ask it to touch, introduces bugs in files you weren't even discussing, and weakens types to make things compile. Ask it to move a function to a new file and it won't just move it. It'll rewrite it and introduce bugs. I've seen it modify a mock API file to fix a bug rather than fix the actual bug. Every change you didn't ask for is a change you have to review, understand, and probably revert.

### 5. False Promises

> "I won't change code you didn't ask me to touch."

AI will.

> "I'll always refer to CLAUDE.md before making changes."

AI won't.

AI will apologise and say it won't happen again. It will. Every session resets. Every prompt is a fresh opportunity to ignore everything you've told it. The promises mean nothing.

### 6. Brute Force Over Optimization

AI defaults to the naive O(n²) approach every time. I had a search filter that needed to check nested objects. AI's solution was to loop through every field in every nested object on every keystroke. It would have blown the stack on any real dataset. I used a pre-computed `ts searchableText` field, building the search string once when data loads instead of on every filter operation. AI would never have suggested this.

### 7. Speed Over Sustainability

AI optimises for the first thing that works, not the right solution. Ask it to fix a bug and it'll reach for the quickest hack: disable the feature, hardcode a value, bypass the problem entirely. Understanding the actual root cause takes effort, and effort isn't in the training data.

Recently I was debugging a table with virtualisation that wasn't rendering. The fix was `css min-height: 0` on the flex container. Instead of investigating, the AI blindly slapped on `css height: 600px`, a hack that "works" but breaks layout everywhere else.

## What Actually Works

### Treat AI as a Coding Assistant, Not a Code Generator

You own the code, you understand the code. AI explores solutions, you make decisions. The moment you stop catching it reaching for hacks, your codebase starts rotting.

### Demand Justification

"Why this approach?" "What are the tradeoffs?" "Is this the proper fix or a hack?" If AI can't answer these, it doesn't know what it's doing.

### Push for Optimization

AI won't suggest pre-computation, memoization, or debouncing unprompted. You have to ask "this loops on every keystroke, is there a better way?" or you'll ship O(n²) garbage.

### Say No to Hacks

"No hardcoded pixel values." "Understand the actual problem first." "Do not duplicate" "Do not weaken the types". If you don't say this, AI will take the path of least resistance every time.

## Verify Everything

The more you blindly trust AI, the more it will rot your codebase.
