# @cutting/hooks - reusable react hooks for reusable things

[![npm version](https://img.shields.io/npm/v/@cutting/hooks.svg)](https://www.npmjs.com/package/@cutting/hooks)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## install 

```sh
pnpm add @cutting/hooks

# or

npm install @cutting/hooks
```

This package contains the following hooks:

## useIsMounted

A React hook to let you know whether the component running the hook is still mounted.

### usage

```ts
import { useIsMounted } from '../useIsMounted/useIsMounted';

const MyComp(): JSX.Element {
  const isMounted = useIsMounted();

   if (isMounted) {
    debouncedCallback(newSize);
  }

  // etc.
}
```

## useScrollToTop

A React hook to bump the focus to the top of the viewport or to an optional ref

### usage

```ts
import { useScrollToTop } from '@cutting/hooks';

const MyComp(): JSX.Element {
  const root = useRef<HTMLDivElement>(null);

  useScrollToTop({ ref: root });

  // etc.
}
```

## usePrevious

### usage

```ts
import {usePrevious} from '@cutting/hooks';

const Demo = () => {
  const [count, setCount] = React.useState(0);
  const prevCount = usePrevious(count);

  return (
    <p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>
        Now: {count}, before: {prevCount}
      </p>
    </p>
  );
};
```
