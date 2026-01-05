# Claude working agreement

## Goal

Build the smallest correct solution that matches the spec.

## Defaults

- No code comments (no `//`, `/* */`, `#`).
- Prefer small functions and descriptive names over comments.
- Don't change unrelated files.
- Avoid fixed pixels; use `vars.space` from `@cutting/component-library` for spacing.

## Output expectations

- Keep diffs minimal.
- If you change behavior, update any docs/tests that describe it.

## Commands

- Install: `npm install`
- Run: `npm run scan`
- Test: `npm test` (if no tests exist, add a single smoke test and wire this command)

## error handling

- Never swallow errors: don’t use empty catch blocks; if you catch, return a structured error and always log to stderr with enough context (site, step, message) and rethrow

## When unsure

Stop and ask for clarification before coding.

# Code Modification Policy

- Do NOT modify code unless explicitly asked
- When the user complains about something, ask if they want it changed
- Do not add features that weren't requested
- Do not add code comments
