import { CSSProperties, PropsWithChildren, RefObject, useEffect } from 'react';
import type { UseParentSizeOptions } from '@cutting/hooks';
import { useParentSize } from '@cutting/hooks';
import { ResponsiveSVG, ResponsiveSVGProps } from '../ResponsiveSVG/ResponsiveSVG';

export type ParentsizeSVGProps<E extends HTMLElement> = {
  elementRef: RefObject<E>;
  options?: Partial<UseParentSizeOptions>;
} & Partial<Omit<ResponsiveSVGProps, 'innerRef' | 'height' | 'height'>>;

export const defaultStyles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  flex: '1',
  overflow: 'hidden',
} as const;

export function ParentsizeSVG<E extends HTMLElement>({
  elementRef,
  children,
  options = { debounceDelay: 50 },
  ...rest
}: PropsWithChildren<ParentsizeSVGProps<E>>): JSX.Element | null {
  const { width, height } = useParentSize(elementRef, options);

  useEffect(() => {
    if (!elementRef.current) {
      return;
    }

    for (const [key, value] of Object.entries(defaultStyles)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      elementRef.current.style[key as any] = value;
    }
  }, [elementRef]);

  return (
    <ResponsiveSVG width={width} height={height} {...rest}>
      {children}
    </ResponsiveSVG>
  );
}
