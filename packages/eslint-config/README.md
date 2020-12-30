# Cutting eslint-config

This package centralises eslint rules to a common package that can be consumed by other packages.

## Intstallation

Import this library:

```bash
yarn add @cutting/eslint-config -S
```

Create a `.eslintrc.json` in the root of the project that will consume this library.

The bare minimum that is required for a consuming package's `.eslintrc.json` is:

```json
{
  "extends": ["@cutting/eslint-config/react"]
}
```

### Packages.json scripts

Add the following lines to your package.json to enable linting and prettier to run on files without extensions:

```bash
  "scripts": {
    "lint": "eslint 'src/**/*.{ts,tsx}'",
    "lint:fix": "yarn run lint -- --fix"
  }
```

## VS Code extensions

ESLint

After installing the extension, we need to change some settings of VSCode under: File > Preferences > Settings . Here we want to go to the JSON view of our settings in the top right corner there is a Button with {} on it. Here we need to add this config 👇:

```json
"eslint.validate": [
  "javascript",
  "javascriptreact",
  {
    "language": "typescript",
    "autoFix": true
  },
  {
    "language": "typescriptreact",
    "autoFix": true
  }
]
```
## What rules are applied

The following sets of rules are implemented in this package:

## Typescript

@typescript-eslint/recommended (rules)

**React**
All typescript rules, plus (in order):

eslint-plugin-react/recommended (rules)
eslint-plugin-jsx-a11y (rules)
eslint-plugin-react-hooks (rules set manually)
eslint-plugin-jest (rules)
eslint-plugin-import (rules)
eslint-config-prettier (rules)
eslint-config-prettier/@typescript-eslint
eslint-plugin-jest-formatting (rules)
Overrides
Some rules are overriden. Please see `.eslintrc.json` in the package.

## Overrides

Rules can be overriden in the consuming project's `.eslintrc.json`, or you can disable rules in the files rule by adding the following types of comment

```javascript
/* eslint-disable: <rule> */

//eslint-disable-next-line <rule>
```
