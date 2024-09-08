import type { ScaleLinear } from 'd3-scale';
import type { Material, NormalBufferAttributes, Object3DEventMap } from 'three';
import { BufferGeometry, Line, Vector3 } from 'three';

import type { CartesianLine, TwoDVector } from './types';

export function createLine(start: Vector3, end: Vector3, material: Material): Line {
  const geometry = new BufferGeometry().setFromPoints([start, end]);

  return new Line(geometry, material);
}

function directionVector(line: CartesianLine): TwoDVector {
  return [line.end.x - line.start.x, line.end.y - line.start.y];
}

export function AddLineToGraph(
  xScale: ScaleLinear<number, number, never>,
  yScale: ScaleLinear<number, number, never>,
  line: CartesianLine,
  material: Material,
): Line<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap> {
  return createLine(
    new Vector3(xScale(line.start.x), yScale(line.start.y), 0),
    new Vector3(xScale(line.end.x), yScale(line.end.y), 0),
    material,
  );
}

export function projectLineAOntoLineB(
  xScale: ScaleLinear<number, number, never>,
  yScale: ScaleLinear<number, number, never>,
  lineA: CartesianLine,
  lineB: CartesianLine,
  material: Material,
): {
  acutalProjectionLine: Line<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>;
  cartesianProjectionLine: CartesianLine;
} {
  const directionVectorA = directionVector(lineA);
  const directionVectorB = directionVector(lineB);

  const dotProductAB = directionVectorA[0] * directionVectorB[0] + directionVectorA[1] * directionVectorB[1];
  const bSquared = directionVectorB[0] ** 2 + directionVectorB[1] ** 2;
  const p = dotProductAB / bSquared;

  const projbA = [directionVectorB[0] * p, directionVectorB[1] * p];

  const cartesianProjectionLine: CartesianLine = {
    start: { ...lineA.start },
    end: { x: lineA.start.x + projbA[0], y: lineA.start.y + projbA[1] },
  };

  const acutalProjectionLine = AddLineToGraph(xScale, yScale, cartesianProjectionLine, material);

  return { acutalProjectionLine, cartesianProjectionLine };
}

export function pointsFromLine(
  inverseXScale: ScaleLinear<number, number, never>,
  inverseYScale: ScaleLinear<number, number, never>,
  line: Line,
): CartesianLine {
  const [x1, y1, _z1, x2, y2, _z2] = line.geometry.getAttribute('position').array;

  return { start: { x: inverseXScale(x1), y: inverseYScale(y1) }, end: { x: inverseXScale(x2), y: inverseYScale(y2) } };
}
