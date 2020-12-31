import type { PropsWithChildren, RefObject } from 'react';
import type { UseParentSizeOptions } from '@cutting/hooks';
import { useParentSize } from '@cutting/hooks';
import { ResponsiveSVG } from '../ResponsiveSVG/ResponsiveSVG';

export type ParentsizeSVGProps<E = HTMLElement> = {
  elementRef: RefObject<E>;
  options?: Partial<UseParentSizeOptions>;
};

export function ParentsizeSVG<E extends HTMLElement = HTMLElement>({
  elementRef,
  children,
  options = {},
}: PropsWithChildren<ParentsizeSVGProps<E>>): JSX.Element {
  const { width, height } = useParentSize(elementRef, options as UseParentSizeOptions);

  return (
    <ResponsiveSVG width={width} height={height}>
      {children}
    </ResponsiveSVG>
  );
}
