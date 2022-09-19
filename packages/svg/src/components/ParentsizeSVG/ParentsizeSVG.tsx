import type { CSSProperties, PropsWithChildren, RefObject } from 'react';
import type { ResponsiveSVGProps } from '../ResponsiveSVG/ResponsiveSVG.js';
import type { UseParentSizeOptions } from '@cutting/use-get-parent-size';
import { useEffect } from 'react';
import { useParentSize } from '@cutting/use-get-parent-size';
import { ResponsiveSVG } from '../ResponsiveSVG/ResponsiveSVG';

type Align = 'none' | 'center';

export type ParentsizeSVGProps<E extends HTMLElement = HTMLElement> = {
  parentRef: RefObject<E>;
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
  parentRef,
  children,
  style = DefaultStyle,
  scale = 1,
  align = 'none',
  options: { debounceDelay = 50, ...optionsRest } = {},
  ...rest
}: PropsWithChildren<ParentsizeSVGProps<E>>): JSX.Element | null {
  const { width, height } = useParentSize(parentRef, { debounceDelay, ...optionsRest });

  useEffect(() => {
    if (!parentRef.current) {
      return;
    }

    for (const [key, value] of Object.entries(style)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      parentRef.current.style[key as any] = value;
    }
  }, [parentRef, style]);

  const transform =
    align === 'center'
      ? `translate(${width / 2},${height / 2 - 20}) scale(${scale})`
      : `translate(0,0) scale(${scale})`;

  return (
    <ResponsiveSVG width={width} height={height} {...rest}>
      <g transform={transform}>{children}</g>
    </ResponsiveSVG>
  );
}
