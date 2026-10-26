# oxlint — build review

## Round 1 — since 767a63174b6874f7b87cc9dc99fff0729b5c1a95

Verdict: NEEDS_WORK · Required: 0 · Recommended: 1 · Consider: 1

The build made no commits: the commit command was denied, so the round reviewed the working tree against the merge base.

### 1.1 `CheckboxGroup` gets the display name `CheckableGroup(Radio)`

Result: Fixed — `Checkable` returns a `CheckableComponent` type with `displayName`, and `CheckableGroup` uses `Comp.displayName`.

Severity: Recommended · Skill: `frontend-component-structure`

`packages/component-library/src/components/molecules/CheckableGroup/CheckableGroup.tsx:117`

```ts
  CheckableGroup.displayName = `CheckableGroup(${Comp.name})`;
```

`Checkable('radio')` and `Checkable('checkbox')` both return the inner `function Radio`, so `Comp.name` is `'Radio'` for both groups.

### 1.2 The new props type is an intersection alias, not an interface

Result: Skipped — the alias replaces an inline intersection that was already there; changing it to an interface is a refactor the spec did not ask for.

Severity: Consider · Skill: `frontend-react-typescript`

`packages/component-library/src/components/atoms/Checkable/Checkable.tsx:9`

```ts
type CheckableComponentProps<V extends CheckableValueType> = CheckableProps<V> &
```

## Where to comment

| #   | Severity    | File                                                                           | Line | Result  |
| --- | ----------- | ------------------------------------------------------------------------------ | ---- | ------- |
| 1.1 | Recommended | `packages/component-library/src/components/molecules/CheckableGroup/CheckableGroup.tsx` | 117  | Fixed   |
| 1.2 | Consider    | `packages/component-library/src/components/atoms/Checkable/Checkable.tsx`       | 9    | Skipped |

## Positives

- The test helpers throw on a spawn error and on an unexpected exit status, with the file name and stderr.
- The fixture config imports `@cutting/eslint-config/...` by name, so the tests use the real export path.
- The oxfmt tests check both sides of each width limit and the trailing comma.
- `react.mjs` spreads the base config, so the React config cannot drift from it.
- One root `oxlint.config.ts` replaces 16 package configs.

## Outside the diff

The reviewer found these, with no changed line to cite:

- `packages/devtools/src/scripts/ts-build.ts:28-42` still runs `eslint` with `.eslintrc.json`.
- `.vscode/settings.json` still enables the ESLint extension.
- Three READMEs still show a `prettier` badge.
