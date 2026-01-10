# Ground Rules for Better PRs

- Instruct the AI to prefer battle-tested open source over creating from scratch
- If not open source, then have we got anything existing in our packages (@intact/component-library, @intact/core, @harbour/core etc.)
- Avoid duplication - reuse existing helpers
- Maintain ownership of the code
- Small focused PRs (max files length) that must be deployable and show something working

## Hold AI to the Same Standards

- AI favours volume over precision and ownership
- You wouldn't accept a 100-file PR from a new dev - don't accept it from AI
- Don't reverse decades of hard-won practices (DRY, small PRs, code ownership) just because AI makes it easy to generate code, these came about because things when wrong
- PR reviews now take forever - too much volume for the eye to take in
- Open source/existing code has tests, is battle-hardened from real use, and edge cases are already solved - AI code has none of that

## Practical Steps

- Write tests first based on acceptance criteria from JIRA stories - gives AI better context
- Use Sonar quality gates to fail PRs that introduce duplication or don't meet standards (analyzes new code only)
- stricter eslint rules
- Use Danger.js to highlight (not block) when basic libraries are used instead of preferred alternatives (e.g. @mui/material table vs material-react-table)
- Sonar/jscpd can detect duplicated functions within the same PR
- Fail/warn on large new files (Danger.js or CI script to flag any new file over X lines)
- Fail/warn if a PR grows an existing file by more than Y lines
- Manually viewing the PR is the last step but still important

## AI Doesn't Extend, It Recreates

- When adding to complex existing code, AI errs on the side of caution and recreates everything instead of extending
- Example: DSL-to-react-json-schema-form transformer - adding a new feature resulted in an 800+ line file that recreated all types (weaker), all functions (worse), instead of extending what was there
- Funny side effect: GitHub hides large files by default - I missed the 800 page monster in the PR review initially :)
