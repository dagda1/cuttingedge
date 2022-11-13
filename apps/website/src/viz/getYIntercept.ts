import type { Point } from '@cutting/svg';

export function getYIntercept(vertex: Point, slope: number): number {
  return vertex.y - slope * vertex.x;
}
