import { useRef } from 'react';

import { useMathJax } from '../../hooks/useMathJax/useMathJax';
import type { MathJaxProps } from './types';

export function MathJax({ className, children }: MathJaxProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useMathJax({ elements: [ref.current as HTMLElement] });

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
