# Test review: oxlint

## Round 1 — since f73d30d5

Reviewer: `reviewer` subagent, against `tdd`, `frontend-testing`, `no-tautological-tests`, `code-test-colocation`, `code-style-defaults` and `code-error-handling`. Required findings: none.

### 1.1 The `.js` test does not check the 140 limit or `trailingComma: 'none'`

Result: Fixed — `oxfmt.test.ts` now checks that a 140-column `.js` line stays the same and a 141-column line wraps with no trailing comma. With `trailingComma: 'all'` in the `.js` override, the test fails (ran in the scratchpad).

Suggested. `packages/eslint-config/oxfmt.test.ts:55-57`. A 128-column line passed with any `printWidth` of 128 or more, and the `.js` trailing comma setting went unchecked.

### 1.2 The `.ts` test allows any width from 108 to 127

Result: Fixed — `oxfmt.test.ts` now checks that a 120-column `.ts` line stays the same and a 121-column line wraps with trailing commas. With `printWidth: 125`, the test fails (ran in the scratchpad).

Suggested. `packages/eslint-config/oxfmt.test.ts:40-53`.

### 1.3 The unused-variables test passes with Oxlint defaults

Result: Skipped — the user asked for this test as a parity check. The spec records under Facts that Oxlint ignores `_` names by default, so the test cannot fail on the ignore-pattern options alone.

Suggested. `packages/eslint-config/index.test.ts:14-32`.
