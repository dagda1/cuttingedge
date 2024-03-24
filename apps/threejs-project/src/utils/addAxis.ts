import { BufferGeometry, Line, LineBasicMaterial, type Scene, type Vector3 } from 'three';

export function addAxis(scene: Scene, start: Vector3, end: Vector3): void {
  const material = new LineBasicMaterial({ color: 0x000000 });
  const points = [];
  points.push(start.clone());
  points.push(end.clone());

  const geometry = new BufferGeometry().setFromPoints(points);
  const line = new Line(geometry, material);
  scene.add(line);
}
