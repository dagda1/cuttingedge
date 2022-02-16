import type { FC } from 'react';
import type { TickRendererProps } from '@visx/axis';
import { Group } from '@cutting/svg';
import { SVGMathJax } from '@cutting/use-mathjax';

export const BottomAxis: FC<TickRendererProps> = ({ formattedValue, x, y }) => {
  if (formattedValue === '$0$') {
    return <></>;
  }

  return (
    <Group transform={`translate(${x - 6}, ${y - 12})`}>
      <SVGMathJax expr={formattedValue || '$\\frac{\\pi}2$'} />
    </Group>
  );
};
