import { assert } from '@cutting/assert';
import { Box } from '@cutting/component-library';
import { useParentSize } from '@cutting/use-get-parent-size';
import { useRef } from 'react';
import { ApplicationLayout } from '~/layouts/ApplicationLayout';
import type { BufferGeometry, Line, Material, NormalBufferAttributes, Object3DEventMap } from 'three';
import { CircleGeometry, DoubleSide, Mesh, MeshBasicMaterial, Vector3 } from 'three';
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
import { DragControls } from 'three/examples/jsm/controls/DragControls.js';
import type { DragEndEvent, DragStartEvent } from './types';

const RANGE = [-10, 10];

interface Point {
  x: number;
  y: number;
}

interface CartesianLine {
  start: Point;
  end: Point;
}

type TwoDVector = [number, number];

const LineA: CartesianLine = { start: { x: 1, y: 2 }, end: { x: 6, y: 5 } };

const LineB: CartesianLine = { start: { x: 1, y: 2 }, end: { x: 7, y: -4 } };

function directionVector(line: CartesianLine): TwoDVector {
  return [line.end.x - line.start.x, line.end.y - line.start.y];
}

function AddLineToGraph(
  xScale: ScaleLinear<number, number, never>,
  yScale: ScaleLinear<number, number, never>,
  line: CartesianLine,
  material: Material,
) {
  return createLine(
    new Vector3(xScale(line.start.x), yScale(line.start.y), 0),
    new Vector3(xScale(line.end.x), yScale(line.end.y), 0),
    material,
  );
}

function projectLineAOntoLineB(
  xScale: ScaleLinear<number, number, never>,
  yScale: ScaleLinear<number, number, never>,
  lineA: CartesianLine,
  lineB: CartesianLine,
  material: Material,
) {
  const directionVectorA = directionVector(lineA);
  const directionVectorB = directionVector(lineB);

  const dotProductAB = directionVectorA[0] * directionVectorB[0] + directionVectorA[1] * directionVectorB[1];
  const bSquared = directionVectorB[0] ** 2 + directionVectorB[1] ** 2;
  const p = dotProductAB / bSquared;

  const projbA = [directionVectorB[0] * p, directionVectorB[1] * p];

  const projectionLine: CartesianLine = {
    start: { ...LineA.start },
    end: { x: lineA.start.x + projbA[0], y: lineA.start.y + projbA[1] },
  };

  return AddLineToGraph(xScale, yScale, projectionLine, material);
}

function createCircle(
  xScale: ScaleLinear<number, number, never>,
  yScale: ScaleLinear<number, number, never>,
  line: CartesianLine,
  name: string,
): Mesh {
  const CircleRadius = 10;
  const CircleSegments = 32;
  const circleMaterial = new MeshBasicMaterial({ color: 0x0000ff, side: DoubleSide });

  const circleGeometry = new CircleGeometry(CircleRadius, CircleSegments);

  const circle = new Mesh(circleGeometry, circleMaterial);

  circle.position.set(xScale(line.end.x), yScale(line.end.y), 0);

  circle.name = name;

  return circle;
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
    const projectionMaterial = new LineBasicMaterial({ color: 0x00ffff });

    const xAxis = createLine(
      new Vector3(xScale(-10), yScale(0), 0),
      new Vector3(xScale(10), yScale(0), 0),
      lineMaterial,
    );

    scene.add(xAxis);

    const yAxis = createLine(
      new Vector3(xScale(0), yScale(-10), 0),
      new Vector3(xScale(0), yScale(10), 0),
      lineMaterial,
    );

    scene.add(yAxis);

    createTickMarks(scene, xScale, yScale, xScale, 'x', tickMaterial);
    createTickMarks(scene, xScale, yScale, yScale, 'y', tickMaterial);

    const lineA = AddLineToGraph(xScale, yScale, LineA, vectorMaterial);

    scene.add(lineA);

    const lineB = AddLineToGraph(xScale, yScale, LineB, vectorMaterial);

    scene.add(lineB);

    const grapperA = createCircle(xScale, yScale, LineA, 'A');

    scene.add(grapperA);

    const grabberB = createCircle(xScale, yScale, LineB, 'B');

    scene.add(grabberB);

    const projectionLine = projectLineAOntoLineB(xScale, yScale, LineA, LineB, projectionMaterial);

    scene.add(projectionLine);

    const lines: Record<
      string,
      Line<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>
    > = {
      lineA,
      lineB,
      projectionLine,
    } as const;

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

    const controls = new DragControls([grapperA, grabberB], camera, renderer.domElement);

    controls.addEventListener('dragstart', function (_event: DragStartEvent) {});

    controls.addEventListener('dragend', function (event: DragEndEvent) {
      const line = lines[`line${event.object.name}`];

      const positionAttribute = line.geometry.getAttribute('position');

      positionAttribute.setX(3, event.object.position.x);
      positionAttribute.setY(4, event.object.position.y);
      positionAttribute.setZ(5, 0);

      positionAttribute.needsUpdate = true;
    });

    const tick = () => {
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };
    tick();
  }, [height, width]);

  return (
    <ApplicationLayout showFooter={false} heading="dotproduct 2d" centerHeading>
      <Box component="section" ref={containerRef} display="flex" justifyContent="center">
        <canvas id="scene" ref={canvasRef}></canvas>
      </Box>
    </ApplicationLayout>
  );
}

export default DotProduct2D;
