# @rbnlffl/rollup-plugin-eslint

[![latest version on npm](https://img.shields.io/npm/v/@rbnlffl/rollup-plugin-eslint)](https://www.npmjs.com/package/@rbnlffl/rollup-plugin-eslint)
[![npm downloads a month](https://img.shields.io/npm/dm/@rbnlffl/rollup-plugin-eslint)](https://www.npmjs.com/package/@rbnlffl/rollup-plugin-eslint)
[![required node version](https://img.shields.io/node/v/@rbnlffl/rollup-plugin-eslint)](https://github.com/nodejs/Release)
[![dependency status](https://img.shields.io/david/robinloeffel/rollup-plugin-eslint)](https://david-dm.org/robinloeffel/rollup-plugin-eslint)
[![eslint dependency](https://img.shields.io/npm/dependency-version/@rbnlffl/rollup-plugin-eslint/eslint?label=eslint%20dep)](https://github.com/eslint/eslint)
[![rollup peer dependency](https://img.shields.io/npm/dependency-version/@rbnlffl/rollup-plugin-eslint/peer/rollup?label=rollup%20peer%20dep)](https://github.com/rollup/rollup)
[![package license](https://img.shields.io/npm/l/@rbnlffl/rollup-plugin-eslint)](license)

> Lint your [Rollup](https://github.com/rollup/rollup) bundles with [ESLint](https://github.com/eslint/eslint). 🐝

Nicely integrates the most recent version of [`eslint`](https://github.com/eslint/eslint) into a [`rollup`](https://github.com/rollup/rollup) plugin.

## How

```sh
yarn add @rbnlffl/rollup-plugin-eslint --dev
```

```js
import eslint from '@rbnlffl/rollup-plugin-eslint';

export default {
  // ..
  plugins: [
    eslint()
    // ..
  ]
};
```

## Config

This plugin respects your [ESLint configuration](https://eslint.org/docs/user-guide/configuring) as per default. It also takes a configuration object intended for the [ESLint constructor](https://eslint.org/docs/developer-guide/nodejs-api#-new-eslintoptions) with the addition of a `throwOnWarning`, `throwOnError`, `filterInclude` and `filterExclude` prop. The most popular configuration options are as follows:

### `fix`

Type: `boolean`<br>
Default: `false`<br>
Utilized by: [ESLint constructor](https://eslint.org/docs/developer-guide/nodejs-api#-new-eslintoptions)

Controls whether to enable or disable the autofix feature of ESLint.

### `extensions`

Type: `string[]`<br>
Default: `null`<br>
Utilized by: [ESLint constructor](https://eslint.org/docs/developer-guide/nodejs-api#-new-eslintoptions)

Controls what type of files ESLint should look at. The default of `null` is equal to `[ '.js' ]`.

### `throwOnWarning`

Type: `boolean`<br>
Default: `false`<br>
Utilized by: [The plugin itself](https://github.com/robinloeffel/rollup-plugin-eslint/blob/master/src/index.js#L34)

Controls whether or not to throw an error and exit the process when ESLint reports any warnings.

### `throwOnError`

Type: `boolean`<br>
Default: `false`<br>
Utilized by: [The plugin itself](https://github.com/robinloeffel/rollup-plugin-eslint/blob/master/src/index.js#L38)

Controls whether or not to throw an error and exit the process when ESLint reports any errors.

### `filterInclude`

Type: [`FilterPattern`](https://github.com/rollup/plugins/tree/master/packages/pluginutils#include-and-exclude)<br>
Default: `undefined`<br>
Utilized by: [`@rollup/pluginutils`](https://github.com/rollup/plugins/tree/master/packages/pluginutils#createfilter)

A single [`picomatch`](https://github.com/micromatch/picomatch) pattern or an array of patterns controlling which files this plugin should explicitly include. Gets forwarded to the [`createFilter`](https://github.com/rollup/plugins/tree/master/packages/pluginutils#createfilter) method of `@rollup/pluginutils`.

### `filterExclude`

Type: [`FilterPattern`](https://github.com/rollup/plugins/tree/master/packages/pluginutils#include-and-exclude)<br>
Default: `'node_modules/**'`<br>
Utilized by: [`@rollup/pluginutils`](https://github.com/rollup/plugins/tree/master/packages/pluginutils#createfilter)

A single [`picomatch`](https://github.com/micromatch/picomatch) pattern or an array of patterns controlling which files this plugin should explicitly exclude. Gets forwarded to the [`createFilter`](https://github.com/rollup/plugins/tree/master/packages/pluginutils#createfilter) method of `@rollup/pluginutils`.

## Why a new plugin?

Because [`rollup-plugin-eslint`](https://github.com/TrySound/rollup-plugin-eslint) seems to be dead and relies on [`eslint^6.0.0`](https://github.com/TrySound/rollup-plugin-eslint/blob/master/package.json#L42), which resolves to `v6.8.0`, resulting in unexpected errors when using rules introduced in versions 7 and up.

## License

MIT
