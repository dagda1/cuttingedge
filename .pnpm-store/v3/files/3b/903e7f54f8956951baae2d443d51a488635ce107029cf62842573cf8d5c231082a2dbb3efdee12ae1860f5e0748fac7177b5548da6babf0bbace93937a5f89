# @cutting/rollup-plugin-md

markdown plugin for [rollup](https://github.com/rollup/rollup) using [marked](https://www.npmjs.com/package/marked).

Forked from [rollup-plugin-md](https://github.com/xiaofuzi/rollup-plugin-md).

## Install

```bash
# npm
npm install @cutting/rollup-plugin-md --save

# yarn
yarn add @cutting/rollup-plugin-md -D
```

## usage

```js
import md from './test.md';
console.log( `Template for render: ${md}` );
```

```js
import { rollup } from 'rollup';
import { md } from '@cutting/rollup-plugin-md';

rollup({
  entry: 'main.js',
  plugins: [
    md({
      marked: {
        //marked options
      }
    })
  ]
});
```
