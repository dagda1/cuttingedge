import type { Clock, Object3D } from 'three';

function rotate(object: Object3D, clock: Clock, radiansPerSecond: number = Math.PI * 2): void {
  const rotationAngle = clock.getElapsedTime() * radiansPerSecond;
  object.rotation.y = rotationAngle;
}

function bounce(object: Object3D, clock: Clock, bounceSpeed = 1.5, amplitude = 0.4, yLowerBound = 0.5): void {
  const elapsed = clock.getElapsedTime();
  const yPos = Math.abs(Math.sin(elapsed * bounceSpeed) * amplitude);
  object.position.y = yPos + yLowerBound;
}

export { rotate, bounce };
