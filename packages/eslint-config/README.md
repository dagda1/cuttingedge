# eslint-config-typescript

Shared eslint configuration

The following sets of rules are implemented in this package:

### Typescript

* @typescript-eslint/recommended ([rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules))

### React

All typescript rules, plus (in order):

* eslint-plugin-react/recommended ([rules](https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules))
* eslint-plugin-jsx-a11y ([rules](https://github.com/evcohen/eslint-plugin-jsx-a11y#supported-rules))
* eslint-plugin-react-hooks (rules set manually)
* eslint-plugin-jest ([rules](https://github.com/jest-community/eslint-plugin-jest#rules))
* eslint-plugin-import ([rules](https://github.com/benmosher/eslint-plugin-import#rules))
* eslint-config-prettier ([rules](https://github.com/prettier/eslint-config-prettier#special-rules))
* eslint-config-prettier/@typescript-eslint
* eslint-plugin-jest-formatting ([rules](https://github.com/dangreenisrael/eslint-plugin-jest-formatting#rule-documentation))

### Overrides

Some rules are overriden.  Please see `.eslintrc.json` in the package.

Further rules can be overriden in the projects `.eslintrc.json`, or you can disable rules in the files / for a line using the `/* eslint-disable: <rule> */`, or `//eslint-disable-next-line <rule>`, although these should be kept to a minimum.
