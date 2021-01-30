import { PropsWithChildren, RefObject } from 'react';
import type { UseParentSizeOptions } from '@cutting/hooks';
import { useParentSize } from '@cutting/hooks';
import { ResponsiveSVG, ResponsiveSVGProps } from '../ResponsiveSVG/ResponsiveSVG';

export type ParentsizeSVGProps<E extends HTMLElement> = {
  elementRef: RefObject<E>;
  options?: Partial<UseParentSizeOptions>;
} & Partial<Omit<ResponsiveSVGProps, 'innerRef' | 'height' | 'height'>>;

export function ParentsizeSVG<E extends HTMLElement>({
  elementRef,
  children,
  options = { debounceDelay: 500 },
  ...rest
}: PropsWithChildren<ParentsizeSVGProps<E>>): JSX.Element | null {
  const { width, height } = useParentSize(elementRef, options);

  return (
    <ResponsiveSVG width={width} height={height} {...rest}>
      {children}
    </ResponsiveSVG>
  );
}
