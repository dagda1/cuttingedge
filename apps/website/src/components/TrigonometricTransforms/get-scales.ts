import { identity, range } from '@cutting/util';
import type { ScalePoint } from 'd3-scale';
import { scalePoint } from '@visx/scale';

export type Dimensions = { width: number; height: number };

type TrigLinear = ScalePoint<string>;

const xTicks = [...range(-10, 10)].map((x) => (x === 0 ? '$0$' : x === 1 ? '' : `$${String(x)}\\pi$`));

const yTicks = [...range(-6, 6)].map((y) => String(y));

console.dir({ xTicks });

export const getScales = ({
  width,
  height,
}: Dimensions): {
  xScale: TrigLinear;
  yScale: TrigLinear;
} => {
  if (width === 1 && height === 1) {
    return {
      xScale: identity as TrigLinear,
      yScale: identity as TrigLinear,
    };
  }

  const xScale = scalePoint({ domain: xTicks, range: [0, width] });
  const yScale = scalePoint({ domain: yTicks, range: [height, 0] });

  return {
    xScale,
    yScale,
  };
};
