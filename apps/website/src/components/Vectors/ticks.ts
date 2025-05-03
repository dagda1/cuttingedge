import { BufferGeometry, Line, LineBasicMaterial, type Scene, Vector3 } from 'three';

import type { Axis } from './types';

export function addTick(scene: Scene, position: number, axis: Axis, color = 0x000000): void {
  const tickSize = 0.1;
  let start: Vector3;
  let end: Vector3;

  function addTick(start: Vector3, end: Vector3) {
    const geometry = new BufferGeometry().setFromPoints([start, end]);
    const material = new LineBasicMaterial({ color: color });

    const tick = new Line(geometry, material);

    scene.add(tick);
  }

  switch (axis) {
    case 'x': {
      start = new Vector3(position, 0, 0).add(new Vector3(0, -tickSize, 0));
      end = new Vector3(position, 0, 0).add(new Vector3(0, tickSize, 0));

      addTick(start, end);

      break;
    }

    case 'y': {
      start = new Vector3(0, position, 0).add(new Vector3(-tickSize, 0, 0));
      end = new Vector3(0, position, 0).add(new Vector3(tickSize, 0, 0));

      addTick(start, end);
      break;
    }

    case 'z': {
      start = new Vector3(0, 0, position).add(new Vector3(-tickSize, 0, 0));
      end = new Vector3(0, 0, position).add(new Vector3(tickSize, 0, 0));

      addTick(start, end);
      break;
    }
  }
}
