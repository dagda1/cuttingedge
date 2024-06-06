import type { ScaleLinear } from 'd3-scale';
import type { Material, Scene } from 'three';
import { BufferGeometry, Line, Mesh, MeshBasicMaterial, Vector2 } from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

export function createLine(start: Vector2, end: Vector2, material: Material): Line {
  const geometry = new BufferGeometry().setFromPoints([start, end]);

  return new Line(geometry, material);
}

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
        start = new Vector2(xScale(tick), yScale(0) - tickSize);
        end = new Vector2(xScale(tick), yScale(0) + tickSize);
        labelPos = new Vector2(xScale(tick) - 3, yScale(0) + tickSize - 30);
      } else if (orientation === 'y') {
        start = new Vector2(xScale(0) - tickSize, yScale(tick));
        end = new Vector2(xScale(0) + tickSize, yScale(tick));
        labelPos = new Vector2(xScale(0) + tickSize - 30, yScale(tick) - 4);
      }
      const tickMark = createLine(start as Vector2, end as Vector2, tickMaterial);
      scene.add(tickMark);

      // Create text label
      const textGeometry = new TextGeometry(tickValue, {
        font: font,
        size: 10,
        height: 1,
        curveSegments: 12,
        bevelEnabled: false,
      });
      const textMesh = new Mesh(textGeometry, textMaterial);
      textMesh.position.set(labelPos.x, labelPos.y, 0);
      scene.add(textMesh);
    }
  });
}
