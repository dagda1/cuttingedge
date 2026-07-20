# <project name>

<One sentence: what this project is and does.>

## Layout

```
<top-level dirs and what lives in each — keep to the dirs an agent actually needs>
```

## Stack

<Language(s), framework(s), package manager, infra. One line each.>

## Commands that work

```bash
# install
# build
# test (single file + full suite)
# lint / typecheck
# run locally
```

Only list commands verified in this repo. If a command needs env vars, say which.

## Conventions

- <naming, file placement, error handling, testing style — only rules that differ from ecosystem defaults>
- Shared skills in `.claude/skills/` cover general conventions; list only project-specific rules here.

## Do not

- <things the agent must never do in this repo: files not to touch, patterns that are banned, commands that are destructive>

## Verification

<How the agent proves a change works before claiming done: which test command, which build, what output counts as passing.>

---

_Keep this file under 300 lines. Prune it when you touch it — every paragraph is standing context on every turn, in every session. CLAUDE.md is a symlink to this file so Claude Code and AGENTS.md-reading tools (Devin, Codex, Cursor) share one source of truth._
