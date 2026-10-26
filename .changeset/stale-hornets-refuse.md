---
'@cutting/oxc-config': major
---

Replace ESLint and Prettier with Oxlint and oxfmt. `./eslint` and `./react` now export Oxlint configs, and the new `./oxfmt` export is an oxfmt config. Consumers must replace `eslint.config.mjs` with a root `oxlint.config.ts` and `oxfmt.config.ts`, and change lint scripts to `oxlint ./src --fix && oxfmt ./src`.
