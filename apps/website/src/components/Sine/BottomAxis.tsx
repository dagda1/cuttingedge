import type { TickRendererProps } from '@visx/axis';
import { Group } from '@cutting/svg';
import { SVGMathJax } from '@cutting/use-mathjax';

export function BottomAxis({ formattedValue, x, y }: TickRendererProps): JSX.Element {
  if (formattedValue === '$0$') {
    return <></>;
  }

  return (
    <Group transform={`translate(${x - 6}, ${y - 12})`}>
      <SVGMathJax expr={formattedValue || '$\\frac{\\pi}2$'} />
    </Group>
  );
};
