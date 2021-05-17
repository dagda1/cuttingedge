import type { FC } from 'react';
import type { MathJaxProps } from './types';
import { MathJax } from './MathJax';

export const SVGMathJax: FC<MathJaxProps & { width?: number; height?: number }> = ({
  expr,
  width = 30,
  height = 30,
}) => {
  return (
    <foreignObject width={width} height={height}>
      <MathJax expr={expr} />
    </foreignObject>
  );
};
