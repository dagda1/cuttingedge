import type { ColorRepresentation, CylinderGeometry, Mesh, MeshBasicMaterial, type Scene, Vector3 } from 'three';

export function addAxis(scene: Scene, start: Vector3, end: Vector3, color: ColorRepresentation = 0x000000): void {
  const direction = new Vector3().subVectors(end, start);
  const length = direction.length();
  const cylinderGeometry = new CylinderGeometry(0.02, 0.02, length, 8);
  const cylinderMaterial = new MeshBasicMaterial({ color });
  const cylinder = new Mesh(cylinderGeometry, cylinderMaterial);

  cylinder.position.x = (start.x + end.x) / 2;
  cylinder.position.y = (start.y + end.y) / 2;
  cylinder.position.z = (start.z + end.z) / 2;

  cylinder.lookAt(end);
  cylinder.rotateX(Math.PI / 2); // Align with the direction vector

  scene.add(cylinder);
}
