// Copied and modified from https://github.com/grrowl/react-keyed-flatten-children/blob/0b4fd6dad491905e73551c9d4496198f6b87eb41/index.ts
import type { ReactElement, ReactNode } from 'react';
import { Children, cloneElement, isValidElement } from 'react';
import { isFragment } from 'react-is';

type ReactChild = ReactElement | string | number;

export default function flattenChildren(children: ReactNode, depth = 0, keys: (string | number)[] = []): ReactChild[] {
  return Children.toArray(children).reduce((acc: ReactChild[], node, nodeIndex) => {
    if (isFragment(node)) {
      acc.push(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...flattenChildren((node.props as any).children, depth + 1, keys.concat((node.key as string) || nodeIndex)),
      );
    } else if (isValidElement(node)) {
      acc.push(
        cloneElement(node, {
          key: keys.concat(String(node.key)).join('.'),
        }),
      );
    } else if (typeof node === 'string' || typeof node === 'number') {
      acc.push(node);
    }
    return acc;
  }, []);
}
