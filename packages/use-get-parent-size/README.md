# @cutting/use-get-parent-size - Get resize events of an observed DOM element's height, width etc. from a resize-observer.

[![npm version](https://img.shields.io/npm/v/@cutting/use-get-parent-size.svg)](https://www.npmjs.com/package/@cutting/use-get-parent-size)
[![code style: oxfmt](https://img.shields.io/badge/code_style-oxfmt-ff69b4.svg)](https://oxc.rs/docs/guide/usage/formatter)

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

The element that the `ref` points to must render in the same commit as the component that calls `useParentSize`. If the `ref` is not attached to an element, the hook throws `useParentSize: the ref is not attached to an element`.

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
  transformFunc?: (entry: Partial<ResizeObserverContentRect>) => Partial<ResizeObserverContentRect>;
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

## Testing

jsdom has no `ResizeObserver`. Replace the global with a stub, render the component, send a size, and assert on the DOM. `vi.mock` is not necessary.

```tsx
import { act, render, screen } from '@testing-library/react';
import { beforeEach, expect, it, vi } from 'vitest';

let notifyResize: ResizeObserverCallback;

class ResizeObserverStub implements ResizeObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();

  constructor(callback: ResizeObserverCallback) {
    notifyResize = callback;
  }
}

function resizeTo(width: number, height: number): void {
  const entry = { contentRect: new DOMRectReadOnly(0, 0, width, height) } as ResizeObserverEntry;

  notifyResize([entry], new ResizeObserverStub(notifyResize));
}

beforeEach(() => {
  vi.stubGlobal('ResizeObserver', ResizeObserverStub);
});

it('draws at the measured size', () => {
  render(<Chart />);

  act(() => resizeTo(800, 400));

  expect(screen.getByRole('img').getAttribute('viewBox')).toBe('0 0 800 400');
});
```

- Call `resizeTo` inside `act`, because the hook sets state.
- The component must attach the `ref` to an element, or the hook throws.
- The hook delivers the first resize immediately. For a second resize in the same test, call `vi.useFakeTimers()` and advance the timers by `debounceDelay`.
- A resize of `maxDifference` or less in both `width` and `height` is ignored.

### With `isolate: false`

Test files in one worker share globals, so a stub from one file stays for the next file. Set `unstubGlobals: true` in the Vitest config. Vitest then restores the globals before each test.

```ts
export default defineConfig({
  test: {
    isolate: false,
    unstubGlobals: true,
  },
});
```

Keep the `vi.stubGlobal` call in `beforeEach`, so each test installs its own stub.
