---
meta:
  title: AI Builds Fast. Then You Pay For It
  description: What happens when AI-generated code hits production - duplication at industrial scale
  date: "2026-01-18T00:00:00.000Z"
  tags: ["AI", "slop"]
---

Here's what I'm seeing in codebases with the new wave of AI-generated code.

## The Duplication Problem

Here's what actually happens. A developer plans a feature with AI that needs a table with inline editing. AI builds one from scratch using [material-ui](https://mui.com/) primitives. It works. Ship it.

Next sprint, different feature, same need. AI builds another table. Slightly different. Also works. Ship it.

Six months later you have five bespoke table implementations across your codebase. Each one has its own bugs. Each one handles edge cases differently. None of them know the others exist.
Now someone asks for CSV export. That's five implementations. Pagination bug? Five places to fix - if you can find them all. Virtualisation for performance? Five separate efforts.

Meanwhile, [material-react-table](https://www.material-react-table.com/) exists. Three years of edge cases solved. Keyboard navigation, cell validation, copy/paste, accessibility, column resizing - all done. Tested by thousands of developers. But AI didn't know to use it, and nobody asked.

## Copy and Diverge Problem

When AI hits complex code it doesn't understand, it copies what it needs and loosens the types to make it compile. Now you have two versions - one battle-tested, one not. They drift apart. You fix a bug in the original, the copy still has it.

I reviewed a PR recently with an 800-line file - a near-copy of an existing utility with loosened types, no tests, and key behaviour stripped out. GitHub hides large files by default. I missed it the first time."

This is happening everywhere AI is used heavily. Tables, forms, modals, data fetching, auth flows - all being copied, loosened, and left to diverge.

## The Maths

Before AI, one developer might introduce some duplication. Code review would catch most of it. The rate was manageable.

Now every developer has a tool that generates plausible-looking code at high speed, and the bias is always toward creating something new rather than finding and extending what exists.

5 bespoke implementations × 10 features each = 50 things to maintain.

Each "quick win" becomes permanent maintenance burden. The codebase gets heavier with every feature. Velocity drops. Nobody understands why.

## What Should Happen

One table component, configured per use case. New feature added once, everyone benefits. That's basic software engineering. We learned this decades ago.

## What Actually Happens

AI doesn't have memory between sessions. It doesn't know your codebase has a preferred table library. It doesn't know someone on another team already solved this problem last month. It doesn't know that the quick solution will cost you ten times as much to maintain.

And if you need AI to understand your own codebase to work in it, you've already lost.

## "Can't You Just Train AI to Use Existing Components?"

You can try. I have a CLAUDE.md with explicit instructions - check for existing components first, use our design system, don't reinvent the wheel.

It still ignores them regularly.

AI instructions work some of the time, not reliably. And they require every developer to include the right context every time. New devs don't know the instructions exist. The AI doesn't know what it doesn't know - it can't check for components it was never told about.

Instructions are better than nothing. But they're not a solution.

## The Coming Reckoning

Right now we're in the hype phase. Everyone's excited about shipping faster. The teams that went hard on AI-generated code in 2025 will hit the wall in 2026. Can't maintain it. Can't scale it. Can't onboard new developers into the mess.

## The cleanup work is coming. The question is whether you'll need it.
