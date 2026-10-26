# Cutting eslint-config

This package holds the shared [Oxlint](https://oxc.rs/docs/guide/usage/linter) and [oxfmt](https://oxc.rs/docs/guide/usage/formatter) configs that other packages use.

## Installation

```bash
pnpm add @cutting/eslint-config -D
```

The package installs `oxlint`, `oxfmt` and `eslint-plugin-simple-import-sort`.

## Configuration

Create one `oxlint.config.ts` in the root of the repo:

```ts
import config from '@cutting/eslint-config/react';

export default config;
```

Use `@cutting/eslint-config/eslint` instead for a repo with no React code.

Create one `oxfmt.config.ts` in the root of the repo:

```ts
import config from '@cutting/eslint-config/oxfmt';

export default config;
```

Oxlint and oxfmt find these files from any folder below the root, so a package needs no config file of its own.

### package.json scripts

Add a `lint` script to each package:

```json
  "scripts": {
    "lint": "oxlint ./src --fix && oxfmt ./src"
  }
```

### Format on save in VS Code

Install the [Oxc extension](https://marketplace.visualstudio.com/items?itemName=oxc.oxc-vscode) (`oxc.oxc-vscode`), and add this to `.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "oxc.oxc-vscode",
  "editor.formatOnSave": true
}
```

## Disable comments

Oxlint obeys `oxlint-disable` and `eslint-disable` comments:

```ts
// oxlint-disable-next-line typescript/no-explicit-any

/* oxlint-disable eqeqeq */
```

## What rules are applied

### `@cutting/eslint-config/eslint`

- The `@typescript-eslint/recommended` rules.
- `curly`, `eqeqeq`, `no-var`, `prefer-const` and `no-unused-vars` (names that start with `_` are ignored).
- `typescript/explicit-module-boundary-types` and `typescript/consistent-type-imports`.
- `import/first`, `import/newline-after-import` and `import/no-duplicates`.
- `simple-import-sort/imports` and `simple-import-sort/exports`, through the `eslint-plugin-simple-import-sort` JS plugin.

### `@cutting/eslint-config/react`

All the rules above, plus:

- The `eslint-plugin-react` recommended rules.
- The `eslint-plugin-jsx-a11y` recommended rules.
- `react/rules-of-hooks` and `react/exhaustive-deps`, which also checks `useIsomorphicLayoutEffect`.

### `@cutting/eslint-config/oxfmt`

- `printWidth: 120`, `singleQuote: true`, `semi: true`, `tabWidth: 2`, `trailingComma: 'all'`, `sortPackageJson: false`.
- `*.js` files use `printWidth: 140` and `trailingComma: 'none'`.

## Overrides

Spread the config and change its `rules` in the root `oxlint.config.ts`:

```ts
import config from '@cutting/eslint-config/react';

export default {
  ...config,
  rules: {
    ...config.rules,
    'no-var': 'off',
  },
};
```
