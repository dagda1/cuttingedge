# @cutting/hooks - reusable react hooks for reusable things

[![npm version](https://img.shields.io/npm/v/@cutting/hooks.svg)](https://www.npmjs.com/package/@cutting/hooks)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## install 

```sh
yarn add @cutting/hooks

# or

npm install @cutting/hooks
```

This package contains the following hooks:

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
}
```

- `debounceDelay` - an optional `number` that will throttle the speed at which reize events are raised to the calling code.
- `initialValues` - initially, the `ref` will be `null` and no `width` or `height` values can be returned until it is mounted.  The `initialValues` option can return a specific `width` and `height` value until the `ref` actually references a valid DOM node.  e.g. `const { width, height } = useParentSize(ref, { width: 100, height: 50})`;

```ts
import type { FC } from 'react';
import { useRef } from 'react';
import type { UseParentSizeOptions } from '@cutting/hooks';

export const ResponsiveSVG: FC = ({
  children
}) => {
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

