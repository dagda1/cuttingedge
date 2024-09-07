import type { ScaleLinear } from 'd3-scale';
import type { Material, Scene } from 'three';
import { Mesh, MeshBasicMaterial, Vector3 } from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

import { createLine } from './line';

export function createTickMarks(
  scene: Scene,
  xScale: ScaleLinear<number, number, never>,
  yScale: ScaleLinear<number, number, never>,
  scale: ScaleLinear<number, number, never>,
  orientation: 'x' | 'y',
  tickMaterial: Material,
  tickSize = 8,
): void {
  const fontLoader = new FontLoader();
  const textMaterial = new MeshBasicMaterial({ color: 0xffffff });

  // Load a font and create the tick marks and labels
  fontLoader.load('/fonts/helvetiker_regular.typeface.json', function (font) {
    for (const tick of scale.ticks()) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let start, end, labelPos: any;
      const tickValue = tick.toString();
      if (orientation === 'x') {
        start = new Vector3(xScale(tick), yScale(0) - tickSize, 0);
        end = new Vector3(xScale(tick), yScale(0) + tickSize, 0);
        labelPos = new Vector3(xScale(tick) - 3, yScale(0) + tickSize - 30, 0);
      } else if (orientation === 'y') {
        start = new Vector3(xScale(0) - tickSize, yScale(tick), 0);
        end = new Vector3(xScale(0) + tickSize, yScale(tick), 0);
        labelPos = new Vector3(xScale(0) + tickSize - 30, yScale(tick) - 4, 0);
      }
      const tickMark = createLine(start as Vector3, end as Vector3, tickMaterial);
      scene.add(tickMark);

      // Create text label
      const textGeometry = new TextGeometry(tickValue, {
        font: font,
        size: 10,
        depth: 1,
        curveSegments: 12,
        bevelEnabled: false,
      });
      const textMesh = new Mesh(textGeometry, textMaterial);
      textMesh.position.set(labelPos.x, labelPos.y, 0);
      scene.add(textMesh);
    }
  });
}
