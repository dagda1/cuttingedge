# oxlint

Status: approved
Branch: oxlint

## Goal

`@cutting/eslint-config` ships Oxlint and oxfmt configs in place of ESLint and Prettier, and this repo lints and formats with them. This removes ESLint and `typescript-eslint`, which block the move to TypeScript 7.

## Out of scope

- The TypeScript 7 upgrade.
- Deleting `packages/performance-scout`. Only its `eslint.config.mjs` goes.
- Type-aware lint rules (`tsgolint`). The current config has none.
- Changing the `version` field of any package. Changesets sets it.
- Renaming the package. It stays `@cutting/eslint-config`.

## Decisions

- The package exports `./eslint` → `index.mjs` (Oxlint config, the old base rules), `./react` → `react.mjs` (Oxlint config, base plus React rules) and `./oxfmt` → `oxfmt.mjs` (oxfmt config). Each file has a default export of a plain config object.
- The rules are the rules of the old ESLint config, as `npx @oxlint/migrate --js-plugins` converts them, with these changes:
  - Drop `prettier/prettier` and the `eslint-plugin-prettier` JS plugin. oxfmt does the formatting.
  - Drop `semi`. oxfmt adds semicolons.
  - Drop `react/require-render-return` (experimental in Oxlint; the repo has no class components) and the `react.pragma` setting.
  - Drop the converted override with `"files": [null]`. It is an artefact of `typescript-eslint/eslint-recommended`.
  - Keep `simple-import-sort/imports` and `simple-import-sort/exports` through `"jsPlugins": ["eslint-plugin-simple-import-sort"]`.
  - Keep the `**/*.js` override: `no-var`, `no-use-before-define` and `typescript/no-var-requires` off.
- The oxfmt config is `printWidth: 120, singleQuote: true, semi: true, tabWidth: 2, trailingComma: 'all', sortPackageJson: false`, with an override for `*.js` files of `printWidth: 140, trailingComma: 'none'`.
- The package `dependencies` are `oxlint`, `oxfmt` and `eslint-plugin-simple-import-sort`. Every ESLint and Prettier dependency and peer dependency goes. `vitest` is a dev dependency, and a `"test": "vitest run"` script is added.
- The package `files` list is `index.mjs`, `react.mjs`, `oxfmt.mjs`, `README.md` and `partial.html`. Test files and `oxlint-fixture.ts` are not published.
- The repo root gets one `oxlint.config.ts` that default-exports the `@cutting/eslint-config/react` config with `ignorePatterns` added for `packages/devtools/tools` and `packages/performance-scout/tools`. The React rules apply to every package.
- The repo root gets one `oxfmt.config.ts` that default-exports `@cutting/eslint-config/oxfmt`.
- All seventeen `eslint.config.mjs` files are deleted, including `packages/eslint-config/eslint.config.mjs`.
- Each package `lint` script is `oxlint ./src --fix && oxfmt ./src`. Both apps use `oxlint ./src ./server.mts --fix && oxfmt ./src ./server.mts`. The four `lint:fix` scripts are deleted. The Turbo `lint` task and the CI `pnpm lint` step stay as they are.
- `lint-staged` runs `oxlint --fix` then `oxfmt` on `*.{js,jsx,ts,tsx,mjs,cjs}`, and `oxfmt` on `*.{json,md}`. The `oxlint --fix` entry is the literal string `"oxlint --fix"`.
- Remove from the root `package.json`: `@eslint/compat`, `@eslint/eslintrc`, `@eslint/js`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `eslint`, `eslint-config-prettier`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `eslint-plugin-prettier`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `prettier`. Keep `eslint-plugin-simple-import-sort`. Add `oxlint` and `oxfmt`.
- Remove `eslint-config-prettier`, `eslint-plugin-prettier` and `prettier` from `apps/frontendsupport/package.json`. Remove `prettier`, `eslint-config-prettier`, `eslint-plugin-jsx-a11y`, `eslint-plugin-prettier`, `eslint-plugin-react` and `eslint-plugin-react-hooks` from `packages/devtools/package.json`.
- Fix the three new lint errors in code: add a `displayName` to the components returned in `Checkable.tsx` and `CheckableGroup.tsx`, and move the disable comment in `map-property.ts` to the line Oxlint reports. Accept oxfmt's changes to `packages/component-library/src/types/index.ts` and `packages/svg/src/types/types.ts`.
- Rewrite `packages/eslint-config/README.md` for Oxlint and oxfmt: install, the root `oxlint.config.ts` and `oxfmt.config.ts`, the lint script, the disable comments, and the rules applied.
- Add a changeset with `"@cutting/eslint-config": major`.

## Facts

- Oxlint is at 1.89.0 and oxfmt is at 0.74.0 on npm. — ran: `npm view oxlint version` → `1.89.0`; `npm view oxfmt version` → `0.74.0`
- `npx @oxlint/migrate --js-plugins` on `index.mjs` creates 33 rules and skips only `semi`. On `react.mjs` it creates 81 rules and skips `react/require-render-return` (nursery), `react/jsx-uses-react`, `react/jsx-uses-vars`, `react/no-deprecated` and `semi`. It warns that `react.pragma` is not migrated. — ran in the scratchpad, output: `✨ .oxlintrc.json created with 33 rules. Skipped 1 rules: semi` and `✨ react.oxlintrc.json created with 81 rules. Skipped 5 rules …`
- The migrated config maps `react-hooks/exhaustive-deps` to `react/exhaustive-deps` with `{ "additionalHooks": "(useIsomorphicLayoutEffect)" }`. Its diagnostic code is `react-hooks(exhaustive-deps)`. Without the option, Oxlint reports nothing for a missing dependency in `useIsomorphicLayoutEffect`. — ran: lint of a fixture with and without the option
- The diagnostic codes are `simple-import-sort(imports)` and `eslint(no-unused-vars)`. — ran: `oxlint -c trial.json --format json fx`
- Oxlint's `no-unused-vars` ignores names that start with `_` even without the `argsIgnorePattern`/`varsIgnorePattern` options. The options stay for parity. — ran: lint of the fixture with `"no-unused-vars": "error"` reported only `other` and `dead`
- An Oxlint `.oxlintrc.json` cannot `extends` a package name: `Unsupported named config "@x/cfg/base" in extends`. It accepts a file path. — ran: `oxlint` 1.89.0 in the scratchpad
- Oxlint auto-discovers `oxlint.config.ts` (not `oxlint.config.mjs`) and runs it under Node. It can import a package export and default-export it, or put it in `extends`. — ran: `oxlint src` with `import base from "@x/cfg/base"; export default base;` reported `eqeqeq`
- Oxlint run inside a sub-package folder finds and uses the `oxlint.config.ts` in a parent folder. — ran: `cd packages/p && oxlint src` reported `eqeqeq` from the root config
- A config file inside a package can import that package by its own name through `exports` (Node self-reference). — ran: `oxlint -c fx/oxlint.config.ts` with `import base from "@x/cfg/eslint"` inside package `@x/cfg`
- Oxlint `--format json` prints `{ "diagnostics": [{ "message", "code", "severity", "filename", … }], … }` and exits 1 when it finds errors. — ran
- Oxlint obeys both `// eslint-disable-next-line <rule>` and `// oxlint-disable-next-line <rule>`. — ran: only the line without a comment was reported
- oxfmt auto-discovers `oxfmt.config.ts`, can import a package export from it, and formats `.ts`, `.json` and `.md`. — ran: `oxfmt src` formatted all three with the imported config
- oxfmt with `-c <config> --stdin-filepath <file>` formats stdin and prints to stdout. Its default `printWidth` is below 108: with no config a 128-column `.ts` line wraps. — ran
- oxfmt sorts `package.json` keys unless `sortPackageJson: false`. — ran: `oxfmt --migrate=prettier` wrote `"sortPackageJson": false`
- oxfmt has no `--fix` flag: `Error: no such flag: --fix, did you mean --init?` — ran
- On the 429 lint target files, `oxfmt --check` takes 20 ms and `prettier --check` takes 1.4 s. — ran
- A trial of the migrated React config (without Prettier) on `packages/*/src apps/*/src apps/*/server.mts` reports exactly three errors: `react(display-name)` at `packages/component-library/src/components/atoms/Checkable/Checkable.tsx:9:8` and `packages/component-library/src/components/molecules/CheckableGroup/CheckableGroup.tsx:30:8`, and `typescript(explicit-module-boundary-types)` at `packages/component-library/src/style/util/map-property.ts:6:14`. ESLint reports none of them. — ran: `oxlint -c trial.json …` and `npx eslint` on the three files (exit 0)
- `map-property.ts:8` has `// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types` above the inner arrow function at line 9. Oxlint reports the outer arrow at line 6. — `packages/component-library/src/style/util/map-property.ts:6-9`
- oxfmt with the shared settings changes only `packages/component-library/src/types/index.ts` and `packages/svg/src/types/types.ts` among the lint targets. — ran: `oxfmt -c .oxfmtrc.json --list-different …` → those two files
- The repo has no Prettier config file. The Prettier settings exist only in the `prettier/prettier` rule. `.prettierignore` holds `*.ejs`. — `packages/eslint-config/index.mjs:57-66`, `.prettierignore:1`
- No code in `packages` or `apps` imports Prettier. — ran: grep for `prettier` in `.ts/.tsx/.js/.mjs/.mts` outside `eslint.config.mjs` and `packages/eslint-config` → no matches
- The repo has no class components. — ran: grep for `extends (React.)?(Pure)?Component` → no matches
- `apps/frontendsupport/server/` holds only Markdown blog posts. — ran: `git ls-files apps/frontendsupport/server`
- `packages/performance-scout` has no `src` folder and no `lint` script. — ran: `ls packages/performance-scout`; `packages/performance-scout/package.json`
- The seventeen ESLint configs: `packages/{assert,markdown,cloudinary-blurhash,performance-scout,devtools}/eslint.config.mjs` import `/eslint`; `packages/{svg,util,use-shortcuts,component-library,hooks,use-mathjax,use-get-parent-size,react-hook-form-components}/eslint.config.mjs` and `apps/{frontendsupport,website}/eslint.config.mjs` import `/react`; `packages/eslint-config/eslint.config.mjs` imports `./index.mjs`. `performance-scout` and `devtools` add `{ ignores: ['tools'] }`. — walked (sub-agent read each file at line 1 and 4)
- Lint scripts: `packages/assert/package.json:17`, `packages/cloudinary-blurhash/package.json:33`, `packages/devtools/package.json:26`, `packages/component-library/package.json:83`, `packages/hooks/package.json:19`, `packages/use-get-parent-size/package.json:20`, `packages/react-hook-form-components/package.json:23`, `packages/markdown/package.json:47`, `packages/svg/package.json:42`, `packages/use-mathjax/package.json:20`, `packages/use-shortcuts/package.json:23`, `packages/util/package.json:17`, `apps/frontendsupport/package.json:16`, `apps/website/package.json:20`. `lint:fix` scripts: `packages/hooks/package.json:20`, `packages/use-get-parent-size/package.json:21`, `packages/react-hook-form-components/package.json:24`, `packages/use-mathjax/package.json:21`. — ran: `grep -n '"lint' packages/*/package.json apps/*/package.json`
- `lint-staged` runs `eslint -c ./packages/eslint-config/react.mjs --fix --warn-ignored=false` on `*.{js,jsx,ts,tsx,mjs,cjs}` and `prettier --write` on `*.{json,md}`. — `package.json:100-107`
- The CI lint step is `pnpm lint`, which is `turbo run lint`. — `.github/workflows/validate.yml:49-50`, `package.json:14`
- The repo uses TypeScript 6.0.3, declared only at the root. — `package.json:89`
- `vitest` 5.0.5 is at the root and runs in `packages/eslint-config` through `pnpm exec`. — ran: `pnpm exec vitest --version` → `vitest/5.0.5`
- Changesets publish `@cutting/eslint-config` with public access. A changeset file is front matter of `"<package>": <bump>` lines. — `.changeset/config.json:6`, `git show 7cec84433:.changeset/lazy-coins-add.md`
- The acceptance tests pass against the trial configs (migrated rules, Prettier removed, oxfmt settings above) with oxlint 1.89.0, oxfmt 0.74.0 and `eslint-plugin-simple-import-sort` 14.0.0. — ran: `npx vitest run` in the scratchpad → `Test Files 3 passed (3), Tests 5 passed (5)`
- The oxfmt test fails with `printWidth: 125` and with `trailingComma: 'all'` in the `.js` override. — ran: `npx vitest run oxfmt.test.ts` in the scratchpad after each change → `Tests 1 failed | 1 passed (2)`
- The unused-variables test cannot fail on the `_` ignore-pattern options alone, because Oxlint ignores `_` names by default (see the fact above). It is a parity check. — walked

## Items

- [x] 1. The `/eslint` config reports imports that are not sorted.
  - check: `pnpm --filter @cutting/eslint-config exec vitest run index.test.ts -t 'sorts imports'`
  - test: `packages/eslint-config/index.test.ts`
- [x] 2. The `/eslint` config reports unused variables and parameters, except names that start with `_`.
  - check: `pnpm --filter @cutting/eslint-config exec vitest run index.test.ts -t 'unused variables'`
  - test: `packages/eslint-config/index.test.ts`
- [x] 3. The `/react` config reports missing dependencies in `useIsomorphicLayoutEffect`.
  - check: `pnpm --filter @cutting/eslint-config exec vitest run react.test.ts`
  - test: `packages/eslint-config/react.test.ts`
- [x] 4. The `/oxfmt` config wraps `.ts` files at 120 columns with trailing commas, and `.js` files at 140 columns without trailing commas.
  - check: `pnpm --filter @cutting/eslint-config exec vitest run oxfmt.test.ts`
  - test: `packages/eslint-config/oxfmt.test.ts`
- [x] 5. The root `oxlint.config.ts` and `oxfmt.config.ts` exist, and Oxlint and oxfmt report no problems on every lint target.
  - check: `test -f oxlint.config.ts && test -f oxfmt.config.ts && pnpm exec oxlint packages/*/src apps/*/src apps/*/server.mts && pnpm exec oxfmt --check packages/*/src apps/*/src apps/*/server.mts`
  - test: none — repo wiring, agreed in the interview
- [x] 6. Every package lint script runs Oxlint and oxfmt on its own files, and no `lint:fix` script remains.
  - check: `node plans/oxlint/check-lint-scripts.mjs`
  - test: none — repo wiring, agreed in the interview
- [x] 7. No ESLint config, ESLint dependency or Prettier dependency remains, and `lint-staged` runs Oxlint.
  - check: `test -z "$(find . -name node_modules -prune -o -name eslint.config.mjs -print)" && ! grep -nE '"(eslint|prettier|eslint-config-prettier|eslint-plugin-(import|jsx-a11y|prettier|react|react-hooks)|@typescript-eslint/[a-z-]+|@eslint/[a-z-]+)":|"(eslint|prettier) ' package.json apps/*/package.json packages/*/package.json && grep -q '"oxlint --fix"' package.json`
  - test: none — repo wiring, agreed in the interview
- [x] 8. The published package contains `index.mjs`, `react.mjs` and `oxfmt.mjs`, and no test files.
  - check: `cd packages/eslint-config && npm pack --dry-run --json 2>/dev/null | node -e 'const files = JSON.parse(require("fs").readFileSync(0, "utf8"))[0].files.map((file) => file.path); const ok = ["index.mjs", "react.mjs", "oxfmt.mjs"].every((name) => files.includes(name)) && !files.some((name) => name.endsWith(".ts")); process.exit(ok ? 0 : 1)'`
  - test: none — package wiring
- [x] 9. The package README describes the Oxlint and oxfmt setup and no longer describes ESLint setup.
  - check: `grep -q 'oxlint.config.ts' packages/eslint-config/README.md && grep -q 'oxfmt.config.ts' packages/eslint-config/README.md && ! grep -qE 'eslintrc|eslint\.validate' packages/eslint-config/README.md`
  - test: none — documentation
- [x] 10. A changeset releases `@cutting/eslint-config` as a major version.
  - check: `grep -q '"@cutting/eslint-config": major' .changeset/*.md`
  - test: none — release wiring
