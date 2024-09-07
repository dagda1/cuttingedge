import type { ScaleLinear } from 'd3-scale';
import { CircleGeometry, type ColorRepresentation, DoubleSide, Mesh, MeshBasicMaterial } from 'three';

import type { CartesianLine } from './types';

export function createCircle(
  xScale: ScaleLinear<number, number, never>,
  yScale: ScaleLinear<number, number, never>,
  line: CartesianLine,
  name: string,
  color?: ColorRepresentation,
): Mesh {
  const CircleRadius = 10;
  const CircleSegments = 32;
  const circleMaterial = new MeshBasicMaterial({ color: color ?? 0x0000ff, side: DoubleSide });

  const circleGeometry = new CircleGeometry(CircleRadius, CircleSegments);

  const circle = new Mesh(circleGeometry, circleMaterial);

  circle.position.set(xScale(line.end.x), yScale(line.end.y), 0);

  circle.name = name;

  return circle;
}
