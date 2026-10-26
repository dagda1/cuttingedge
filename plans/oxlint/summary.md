# oxlint — build summary

Verdict: NEEDS_WORK · Rounds: 1 · Stopped because: no Required findings

## Needs your decision

- 1.2 skipped: `CheckableComponentProps` stays an intersection alias, not an interface.
- The commit command was denied, so the build made no checkpoint commits; all changes are uncommitted.
- I wrote the Oxlint rules by hand because `npx @oxlint/migrate` was denied; Oxlint accepts every rule.
- `Checkable` and `CheckableGroup` hoist the returned function, so they now need explicit return types for `explicit-module-boundary-types`.
- oxfmt also reformatted `rehype.css`, `styles.css` and `privacy.mdx`; the spec named only two files.
- oxfmt rewrites changeset front matter to single quotes; `.changeset/oxlint-oxfmt.md` keeps double quotes for the item 10 check.
- Only 16 `eslint.config.mjs` files existed, not 17; all 16 are deleted.
- `packages/devtools/src/scripts/ts-build.ts:28-42` still runs `eslint`; `@rbnlffl/rollup-plugin-eslint` stays in devtools.
- `.vscode/settings.json` still enables ESLint, and three READMEs keep a `prettier` badge.
- Node warns `MODULE_TYPELESS_PACKAGE_JSON` when it loads the root `oxlint.config.ts` and `oxfmt.config.ts`.
- `pnpm install` left a stale injected link for `@cutting/eslint-config`; I relinked `node_modules/@cutting/eslint-config` by hand.
