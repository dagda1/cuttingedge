import type { LegacyRef } from 'react';
import { useRef } from 'react';
import { useMathJax } from '../../hooks/useMathJax/useMathJax.js';
import type { MathJaxProps } from './types';

export function MathJax({ children }: MathJaxProps): JSX.Element {
  const ref = useRef<HTMLDivElement>();

  useMathJax({ elements: [ref.current as HTMLElement] });

  return <div ref={ref as LegacyRef<HTMLDivElement>}>{children}</div>;
}
