# Ground Rules for Better PRs

- Prefer battle-tested open source over building from scratch
- If no open source, check our packages first (@intact/component-library, @intact/core, @harbour/core)
- Reuse existing helpers. Don't duplicate.
- Don't copy logic to work around complexity. Fix or extend the original.
- Own your code. Be able to explain every line.
- Small focused PRs that deploy and show something working

## Hold AI to the Same Standards

- You wouldn't accept a 100-file PR from a new dev. Don't accept it from AI.
- AI favours volume over precision. Reviewers rubber-stamp because they can't review 100 files.
- DRY, small PRs, code ownership exist because we learned what happens without them.
- Open source is tested and battle-hardened. AI code has none of that.

## AI Doesn't Extend, It Recreates

- **Copy-and-diverge**: AI hits complex code, doesn't understand why it's complex, copies what it needs with looser types. Now you have two versions—one tested, one not. They'll drift.
- Recent PR: 800-line duplicated file. GitHub hides large files by default. I missed it first time.
- **NIH on steroids**: AI sees "table with editing" and builds one. It doesn't know material-react-table exists with years of bug fixes already solved.

## Practical Steps

- Tests first, based on acceptance criteria. Gives AI better context
- Sonar quality gates to fail PRs that introduce duplication (new code only)
- Danger.js to warn when basic libraries are used instead of preferred alternatives (e.g. @mui/material table vs material-react-table)
- Flag new files over X lines, or PRs that grow files by Y+ lines
- [jscpd](https://github.com/kucherenko/jscpd) to detect duplicated functions within the same PR
- Manual review is the last step, still important

## What Happens If We Don't

- You fix a bug in the original. The copy still has it. You don't know the copy exists.
- "AI will know" — AI has no memory between sessions. If you need AI to understand your own code, you've lost.
- Bugs ship that open source fixed years ago
- 2am incident, no one knows where to look

## Citations

- [SonarSource: Poor code quality in AI-accelerated codebases](https://www.sonarsource.com/blog/the-inevitable-rise-of-poor-code-quality-in-ai-accelerated-codebases)
