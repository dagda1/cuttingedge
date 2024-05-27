import { assert } from '@cutting/assert';
import { Box } from '@cutting/component-library';
import { useParentSize } from '@cutting/use-get-parent-size';
import { useRef } from 'react';
import { ApplicationLayout } from '~/layouts/ApplicationLayout';
import type { Material } from 'three';
import { Vector2 } from 'three';
import {
  Scene,
  WebGLRenderer,
  LinearSRGBColorSpace,
  PCFSoftShadowMap,
  LineBasicMaterial,
  OrthographicCamera,
} from 'three';
import type { ScaleLinear } from 'd3-scale';
import { scaleLinear } from 'd3-scale';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { createLine, createTickMarks } from './axes';

const RANGE = [-10, 10];

interface Point {
  x: number;
  y: number;
}

interface Line {
  start: Point;
  end: Point;
}

type TwoDVector = [number, number];

const LineA: Line = { start: { x: 1, y: 2 }, end: { x: 6, y: 8 } };

const LineB: Line = { start: { x: 1, y: 2 }, end: { x: 7, y: -4 } };

function directionVector(line: Line): TwoDVector {
  return [line.end.x - line.start.x, line.end.y - line.start.y];
}

function AddLineToGraph(
  xScale: ScaleLinear<number, number, never>,
  yScale: ScaleLinear<number, number, never>,
  line: Line,
  material: Material,
) {
  return createLine(
    new Vector2(xScale(line.start.x), yScale(line.start.y)),
    new Vector2(xScale(line.end.x), yScale(line.end.y)),
    material,
  );
}

function projectLineAOntoLineB(
  xScale: ScaleLinear<number, number, never>,
  yScale: ScaleLinear<number, number, never>,
  lineA: Line,
  lineB: Line,
  material: Material,
) {
  const directionVectorA = directionVector(lineA);
  const directionVectorB = directionVector(lineB);

  const dotProductAB = directionVectorA[0] * directionVectorB[0] + directionVectorA[1] * directionVectorB[1];
  const bSquared = directionVectorB[0] ** 2 + directionVectorB[1] ** 2;
  const p = dotProductAB / bSquared;

  const projbA = [directionVectorB[0] * p, directionVectorB[1] * p];

  const projectionLine: Line = {
    start: { ...LineA.start },
    end: { x: lineA.start.x + projbA[0], y: lineA.start.y + projbA[1] },
  };

  console.log({ projbA, projectionLine });

  AddLineToGraph(xScale, yScale, projectionLine, material);
}

export function DotProduct2D(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(containerRef, { initialValues: { width: 0, height: 0 } });
  const canvasRef = useRef<HTMLCanvasElement>(null);

  assert(typeof width === 'number');
  assert(typeof height === 'number');

  useIsomorphicLayoutEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const minUnit = Math.min(width, height);
    const xScale = scaleLinear().domain(RANGE).range([0, minUnit]);
    const yScale = scaleLinear().domain(RANGE).range([0, minUnit]);

    const scene = new Scene();

    const lineMaterial = new LineBasicMaterial({ color: 0xffffff });
    const tickMaterial = new LineBasicMaterial({ color: 0xffffff });
    const vectorMaterial = new LineBasicMaterial({ color: 0xff0000 });
    const projectionMaterial = new LineBasicMaterial({ color: 0x0000ff });

    const xAxis = createLine(new Vector2(xScale(-10), yScale(0)), new Vector2(xScale(10), yScale(0)), lineMaterial);

    scene.add(xAxis);

    const yAxis = createLine(new Vector2(xScale(0), yScale(-10)), new Vector2(xScale(0), yScale(10)), lineMaterial);

    scene.add(yAxis);

    createTickMarks(scene, xScale, yScale, xScale, 'x', tickMaterial);
    createTickMarks(scene, xScale, yScale, yScale, 'y', tickMaterial);

    const lineA = AddLineToGraph(xScale, yScale, LineA, vectorMaterial);

    scene.add(lineA);

    const lineB = AddLineToGraph(xScale, yScale, LineB, vectorMaterial);

    scene.add(lineB);

    projectLineAOntoLineB(xScale, yScale, LineA, LineB, projectionMaterial);

    window.addEventListener('resize', () => {
      camera.updateProjectionMatrix();

      renderer.setSize(minUnit, minUnit);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    const camera = new OrthographicCamera(0, minUnit, minUnit, 0, -1, 1);
    camera.position.z = 1;

    const renderer = new WebGLRenderer({
      canvas: canvasRef.current,
    });
    renderer.outputColorSpace = LinearSRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.setClearColor('#262837');
    renderer.setSize(minUnit, minUnit);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const tick = () => {
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };
    tick();
  }, [height, width]);

  return (
    <ApplicationLayout centerHeading heading="DOT PRODUCT 2D" showFooter={false}>
      <Box component="section" ref={containerRef} display="flex" justifyContent="center">
        <canvas id="scene" ref={canvasRef}></canvas>
      </Box>
    </ApplicationLayout>
  );
}

export default DotProduct2D;
