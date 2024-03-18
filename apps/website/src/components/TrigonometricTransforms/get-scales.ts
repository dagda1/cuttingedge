import { identity, range } from '@cutting/util';
import type { ScaleLinear } from 'd3-scale';
import { type ScalePoint } from 'd3-scale';
import { scalePoint, scaleLinear } from '@visx/scale';
import { extent } from 'd3-array';
import type { Point } from '@cutting/svg';

export type Dimensions = { width: number; height: number };

type TrigPoint = ScalePoint<string>;
type TrigLinear = ScaleLinear<number, number, never>;

const xTicks = [...range(-10, 10)].map((x) => (x === 0 ? '$0$' : x === 1 ? '' : `$${String(x)}\\pi$`));

const yTicks = [...range(-6, 6)].map((y) => String(y));

console.dir({ xTicks });

interface GetScales {
  xScale: TrigPoint;
  yScale: TrigPoint;
  xSineScale: TrigLinear;
  ySineScale: TrigLinear;
  data: Point[];
}

export function getScales({ width, height }: Dimensions): GetScales {
  if (width === 1 && height === 1) {
    return {
      xScale: identity as TrigPoint,
      yScale: identity as TrigPoint,
      xSineScale: identity as TrigLinear,
      ySineScale: identity as TrigLinear,
      data: [],
    };
  }

  const xScale = scalePoint({ domain: xTicks, range: [0, width] });
  const yScale = scalePoint({ domain: yTicks, range: [height, 0] });

  const data: Point[] = [];
  for (let i = 0; i <= 100; i++) {
    const x = (i / 100) * 1 * Math.PI; // Adjust frequency by multiplying
    const y = Math.sin(x);
    data.push({ x, y });
  }

  const xSineScale = scaleLinear({
    domain: extent(data, (d) => d.x) as [number, number],
    range: [0, width],
  });
  const ySineScale = scaleLinear({
    domain: [-1, 1],
    range: [height],
  });

  return {
    xScale,
    yScale,
    xSineScale,
    ySineScale,
    data,
  };
}
