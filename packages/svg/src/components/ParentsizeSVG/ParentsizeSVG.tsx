import { CSSProperties, PropsWithChildren, RefObject, useEffect } from 'react';
import type { UseParentSizeOptions } from '@cutting/hooks';
import { useParentSize } from '@cutting/hooks';
import { ResponsiveSVG, ResponsiveSVGProps } from '../ResponsiveSVG/ResponsiveSVG';

export type ParentsizeSVGProps<E extends HTMLElement> = {
  elementRef: RefObject<E>;
  options?: Partial<UseParentSizeOptions> & { style?: CSSProperties };
} & Partial<Omit<ResponsiveSVGProps, 'innerRef' | 'height' | 'height'>>;

export const DefaultStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: '0%',
  overflow: 'hidden',
} as const;

export function ParentsizeSVG<E extends HTMLElement>({
  elementRef,
  children,
  options: { debounceDelay = 50, style = DefaultStyle, ...optionsRest } = {},
  ...rest
}: PropsWithChildren<ParentsizeSVGProps<E>>): JSX.Element | null {
  const { width, height } = useParentSize(elementRef, { debounceDelay, ...optionsRest });

  useEffect(() => {
    if (!elementRef.current) {
      return;
    }

    for (const [key, value] of Object.entries(style)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      elementRef.current.style[key as any] = value;
    }
  }, [elementRef, style]);

  return (
    <ResponsiveSVG width={width} height={height} {...rest}>
      {children}
    </ResponsiveSVG>
  );
}
