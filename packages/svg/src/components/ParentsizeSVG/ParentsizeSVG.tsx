import { CSSProperties, PropsWithChildren, RefObject, useEffect } from 'react';
import type { UseParentSizeOptions } from '@cutting/hooks';
import { useParentSize } from '@cutting/hooks';
import { ResponsiveSVG, ResponsiveSVGProps } from '../ResponsiveSVG/ResponsiveSVG';

type Align = 'none' | 'center';

export type ParentsizeSVGProps<E extends HTMLElement> = {
  elementRef: RefObject<E>;
  style?: CSSProperties;
  align?: Align;
  scale?: number;
  options?: Partial<UseParentSizeOptions>;
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
  style = DefaultStyle,
  scale = 1,
  align = 'none',
  options: { debounceDelay = 50, ...optionsRest } = {},
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

  const transform =
    align === 'center' ? `translate(${width / 2},${height / 2 - 20}) scale(${scale})` : `0,0) scale(${scale})`;

  return (
    <ResponsiveSVG width={width} height={height} {...rest}>
      <g transform={transform}>{children}</g>
    </ResponsiveSVG>
  );
}
