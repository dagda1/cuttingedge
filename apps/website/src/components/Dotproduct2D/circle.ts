import type { ScaleLinear } from 'd3-scale';
import type { ColorRepresentation, NormalBufferAttributes, Object3DEventMap } from 'three';
import {
  BufferGeometry,
  CircleGeometry,
  DoubleSide,
  Line,
  LineBasicMaterial,
  Mesh,
  MeshBasicMaterial,
  Vector3,
} from 'three';

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

export function drawArc({
  lineA,
  lineB,
  xScale,
  yScale,
  radius = 25,
}: {
  lineA: CartesianLine;
  lineB: CartesianLine;
  xScale: ScaleLinear<number, number, never>;
  yScale: ScaleLinear<number, number, never>;
  radius?: number;
}): Line<BufferGeometry<NormalBufferAttributes>, LineBasicMaterial, Object3DEventMap> {
  const startPoint = new Vector3(xScale(lineA.start.x), yScale(lineA.start.y));
  const endPointA = new Vector3(xScale(lineA.end.x), yScale(lineA.end.y));
  const endPointB = new Vector3(xScale(lineB.end.x), yScale(lineB.end.y));

  const vectorA = new Vector3().subVectors(endPointA, startPoint).normalize();
  const vectorB = new Vector3().subVectors(endPointB, startPoint).normalize();

  const dotProduct = vectorA.dot(vectorB);
  const clampedDotProduct = Math.max(-1, Math.min(1, dotProduct)); // Clamp to handle precision issues
  const angle = Math.acos(clampedDotProduct); //

  const startAngle = Math.atan2(vectorA.y, vectorA.x); // Starting angle relative to x-axis
  const endAngle = startAngle + angle; // End angle for the arc

  // Step 5: Create points along the arc
  const arcPoints = []; // Array to hold points of the arc
  const numPoints = 50; // Number of points along the arc

  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;
    const currentAngle = startAngle + t * (endAngle - startAngle);
    const x = startPoint.x + radius * Math.cos(currentAngle);
    const y = startPoint.y + radius * Math.sin(currentAngle);
    arcPoints.push(new Vector3(x, y, 0)); // z = 0 to stay in the 2D plane
  }

  // Step 6: Convert the points to a BufferGeometry
  const arcGeometry = new BufferGeometry().setFromPoints(arcPoints);

  // Step 7: Create the arc line and add it to the scene
  const arcMaterial = new LineBasicMaterial({ color: 0xffffff });
  return new Line(arcGeometry, arcMaterial);
}
