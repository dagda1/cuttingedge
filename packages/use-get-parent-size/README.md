# @cutting/use-parent - reusable react hooks for reusable things

[![npm version](https://img.shields.io/npm/v/@cutting/use-get-parent-size.svg)](https://www.npmjs.com/package/@cutting/use-get-parent-size)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## install 

```sh
pnpm add @cutting/use-get-parent-size

# or

npm install @cutting/use-get-parent-size
```

## useParentSize

A React hook that allows you to use a ResizeObserver to measure an element's size.

### usage

```ts
const { width, height } = useParentSize(ref, options);
```

`useParentSize` takes a react [ref object](https://reactjs.org/docs/refs-and-the-dom.html) and an optional `options` object.

### Options

```ts
export interface UseParentSizeOptions {
  debounceDelay: number;
  initialValues: Dimensions; // { width, height }
  transformFunc?: ({ width, height }: Dimensions) => Dimensions;  // default (x) => x
}
```

- `debounceDelay` - an optional `number` that will throttle the speed at which reize events are raised to the calling code.
- `initialValues` - initially, the `ref` will be `null` and no `width` or `height` values can be returned until it is mounted.  The `initialValues` option can return a specific `width` and `height` value until the `ref` actually references a valid DOM node.  e.g. `const { width, height } = useParentSize(ref, { width: 100, height: 50})`;

  Default is `{ width: 1, height: 1}`
- `transformFunc` optional function to transform the results, e.g. to halve the size of the parent
  ```ts
  transformFunc: ({width, height}) => ({width: width / 2, height: height /2})
  ```
  Default is identity, `(x) => x`

```ts
import { useRef } from 'react';
import type { UseParentSizeOptions } from '@cutting/use-get-parent-size';

export function ResponsiveSVG({
  children
}): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(ref, options);
  const aspect = width / height;

  const adjustedHeight = Math.ceil(width / aspect);

  return (
    <div ref={ref}>
      <svg
        viewBox={`${origin.x} ${origin.y} ${width} ${adjustedHeight}`}
      >
        {children}
      </svg>
    </div>
  );
};
```

