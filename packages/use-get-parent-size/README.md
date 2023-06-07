# @cutting/use-get-parent-size - Get resize events of an observed DOM element's height, width etc. from a resize-observer.

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

Returns the contentRect of the observed element:

```ts
interface DOMRectReadOnly {
  readonly bottom: number;
  readonly height: number;
  readonly left: number;
  readonly right: number;
  readonly top: number;
  readonly width: number;
  readonly x: number;
  readonly y: number;
  toJSON(): any;
}
```

### Options

```ts
export interface UseParentSizeOptions {
  debounceDelay: number;
  initialValues: Partial<ResizeObserverContentRect>;
  transformFunc?: (
    entry: Partial<ResizeObserverContentRect>
  ) => Partial<ResizeObserverContentRect>;
  maxDifference?: number;
  transformFunc?: ({ width, height }: Dimensions) => Dimensions;
  callback?(entry: ResizeObserverContentRect): void;
}
```

- `debounceDelay` - default 500ms. an optional `number` that will throttle the speed at which reize events are raised to the calling code.
- `initialValues` - initially, the `ref` will be `null` and no `width` or `height` values can be returned until it is mounted. The `initialValues` option can return a specific `width` and `height` value until the `ref` actually references a valid DOM node. e.g. `const { width, height } = useParentSize(ref, { width: 100, height: 50})`;

Default is an empty DomRect:

```js
{
 bottom: undefined,
 height: undefined,
 left: undefined,
 width: undefined,
 right: undefined,
 top: undefined,
 x: undefined,
 y: undefined,
};
```

- `transformFunc` optional function to transform the results, e.g. to halve the size of the parent

  ```ts
  transformFunc: ({ width, height }) => ({
    width: width / 2,
    height: height / 2,
  });
  ```

  Default is identity, `(x) => x`

- `maxDifference` (default 10) - useParentSize stores the current DomRect values in memory and if a resize event occurrs, these values are checked against the new DomRect values after the resize. If the difference between the two values is greater than the `maxDifference` option then clients are notified.

- `callback` a function can be provided that is executed on each resize.

## Usage

### Used to properly resize an svg

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

### Used with callback only

```ts
const Pipeline = () => {
  const controller = useVisualizationController();
  const containerRef = useRef<HTMLDivElement>(null);

  useParentSize(containerRef, {
    callback: () => {
      controller.getGraph().fit(70);
    },
    debounceDelay: 500,
  });
```
