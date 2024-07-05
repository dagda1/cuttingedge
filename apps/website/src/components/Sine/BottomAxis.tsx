import { Group } from '@cutting/svg';
import { SVGMathJax } from '@cutting/use-mathjax';
import type { TickRendererProps } from '@visx/axis';

export function BottomAxis({ formattedValue, x, y }: TickRendererProps): JSX.Element {
  if (formattedValue === '$0$') {
    return <></>;
  }

  return (
    <Group transform={`translate(${x - 6}, ${y - 12})`}>
      <SVGMathJax>{formattedValue || '$\\frac{\\pi}2$'}</SVGMathJax>
    </Group>
  );
}
