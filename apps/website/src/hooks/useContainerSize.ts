import { assert } from '@cutting/assert';
import type { UseParentSizeOptions } from '@cutting/use-get-parent-size';
import { useParentSize } from '@cutting/use-get-parent-size';
import type { RefObject } from 'react';
import { useRef } from 'react';

interface ContainerSize {
  containerRef: RefObject<HTMLDivElement | null>;
  width: number;
  height: number;
}

export function useContainerSize(options: Partial<UseParentSizeOptions> = {}): ContainerSize {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(containerRef, { initialValues: { width: 0, height: 0 }, ...options });

  assert(typeof width === 'number');
  assert(typeof height === 'number');

  return { containerRef, width, height };
}
