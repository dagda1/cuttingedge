import { identity, range } from '@cutting/util';
import type { ScaleLinear } from 'd3-scale';
import { scaleLinear } from '@visx/scale';
import type { Point } from '@cutting/svg';
import { parse } from 'mathjs';

export type Dimensions = { width: number; height: number };

type TrigLinear = ScaleLinear<number, number, never>;

type GetScalesProps = Dimensions & { a: number; b: number; c: number; d: number; trigFunction: string };
interface GetScalesResult {
  xScale: TrigLinear;
  yScale: TrigLinear;
  sineData: Point[];
}

export const TWO_PI = Math.PI * 2;

export function getScales({ a, b, c, d, trigFunction, width, height }: GetScalesProps): GetScalesResult {
  if (width === 1 && height === 1) {
    return {
      xScale: identity as TrigLinear,
      yScale: identity as TrigLinear,
      sineData: [],
    };
  }

  const xValues = [...range(-3 * Math.PI, 7 * Math.PI, Math.PI / 10)];

  const expression = parse(`y = a*${trigFunction}(b*x-c)+d`);

  const sineData = xValues.map((x) => ({ x, y: expression.evaluate({ a, b, c, d, x }) }));

  const xScale = scaleLinear()
    .domain([Math.PI * -2, TWO_PI])
    .range([0, width]);

  const yScale = scaleLinear().domain([-3, 3]).range([height, 0]);

  return {
    xScale,
    yScale,
    sineData,
  };
}
