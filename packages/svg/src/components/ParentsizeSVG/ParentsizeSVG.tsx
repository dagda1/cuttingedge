import type { UseParentSizeOptions } from '@cutting/use-get-parent-size';
import { useParentSize } from '@cutting/use-get-parent-size';
import type { PropsWithChildren, RefObject } from 'react';

import type { ResponsiveSVGProps } from '../ResponsiveSVG/ResponsiveSVG';
import { ResponsiveSVG } from '../ResponsiveSVG/ResponsiveSVG';

type Align = 'none' | 'center';

export type ParentsizeSVGProps<E extends HTMLElement = HTMLElement> = {
  parentRef: RefObject<E>;
  align?: Align;
  scale?: number;
  options?: Partial<UseParentSizeOptions>;
} & Partial<Omit<ResponsiveSVGProps, 'innerRef' | 'height' | 'height'>>;

export function ParentsizeSVG<E extends HTMLElement>({
  parentRef,
  children,
  options,
  ...rest
}: PropsWithChildren<ParentsizeSVGProps<E>>): JSX.Element | null {
  const { width, height } = useParentSize(parentRef, options);

  return (
    <ResponsiveSVG width={width} height={height} {...rest}>
      {children}
    </ResponsiveSVG>
  );
}
