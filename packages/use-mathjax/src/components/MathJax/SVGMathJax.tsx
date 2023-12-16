import type { MathJaxProps } from './types.js';
import { MathJax } from './MathJax.js';

type SVGMathJaxProps = MathJaxProps & { width?: number; height?: number };

export function SVGMathJax({ children, width = 30, height = 30 }: SVGMathJaxProps): JSX.Element {
  return (
    <foreignObject width={width} height={height}>
      <MathJax>{children}</MathJax>
    </foreignObject>
  );
}
