import { assert } from '@cutting/assert';
import { Box } from '@cutting/component-library';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { useParentSize } from '@cutting/use-get-parent-size';
import { scaleLinear } from 'd3-scale';
import { useEffect, useRef } from 'react';
import type { BufferGeometry, Line, Material, NormalBufferAttributes, Object3DEventMap } from 'three';
import {
  LinearSRGBColorSpace,
  LineBasicMaterial,
  LineDashedMaterial,
  OrthographicCamera,
  PCFSoftShadowMap,
  Scene,
  Vector3,
  WebGLRenderer,
} from 'three';
import { DragControls } from 'three/examples/jsm/controls/DragControls.js';

import { ApplicationLayout } from '~/layouts/ApplicationLayout';

import { createTickMarks } from './axes';
import { createCircle, drawArc } from './circle';
import { AddLineToGraph, createLine, pointsFromLine, projectLineAOntoLineB } from './line';
import type { CartesianLine, DragEndEvent, DragStartEvent } from './types';

const RANGE = [-10, 10];

const LineA: CartesianLine = { start: { x: 0, y: 0 }, end: { x: 5, y: 8 } };

const LineB: CartesianLine = { start: { x: 0, y: 0 }, end: { x: 9, y: 2 } };

export function DotProduct2D(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(containerRef, { initialValues: { width: 0, height: 0 } });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<WebGLRenderer>();

  assert(typeof width === 'number');
  assert(typeof height === 'number');

  useEffect(() => {
    if (canvasRef.current) {
      const webGLRenderer = new WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
      });

      rendererRef.current = webGLRenderer;
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (!canvasRef.current || !rendererRef.current) {
      return;
    }

    const minUnit = Math.min(width, height);
    const xScale = scaleLinear().domain(RANGE).range([0, minUnit]);
    const yScale = scaleLinear().domain(RANGE).range([0, minUnit]);

    const inverseXScale = scaleLinear().domain([0, minUnit]).range(RANGE);
    const inverseYScale = scaleLinear().domain([0, minUnit]).range(RANGE);

    const scene = new Scene();

    const lineMaterial = new LineBasicMaterial({ color: 0xffffff });
    const tickMaterial = new LineBasicMaterial({ color: 0xffffff });
    const vectorMaterial = new LineBasicMaterial({ color: 0xff0000 });
    const projectionMaterial = new LineBasicMaterial({ color: 0x00ffff });
    const dashedMaterial = new LineDashedMaterial({
      color: 0xffffff,
      dashSize: 0.1,
      gapSize: 0.1,
      linewidth: 1,
    });

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

    const grapperA = createCircle(xScale, yScale, LineA, 'A', 0xffd700);

    scene.add(grapperA);

    const grabberB = createCircle(xScale, yScale, LineB, 'B');

    scene.add(grabberB);

    let projectionLine: Line<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>;

    const { acutalProjectionLine, cartesianProjectionLine } = projectLineAOntoLineB(
      xScale,
      yScale,
      LineA,
      LineB,
      projectionMaterial,
    );

    projectionLine = acutalProjectionLine;

    let arcLine = drawArc({ lineA: LineB, lineB: LineA, xScale, yScale });

    let dashedLine = AddLineToGraph(
      xScale,
      yScale,
      {
        start: { x: LineA.end.x, y: LineA.end.y },
        end: { x: cartesianProjectionLine.end.x, y: cartesianProjectionLine.end.y },
      },
      dashedMaterial,
    );

    dashedLine.computeLineDistances();

    scene.add(projectionLine);
    scene.add(arcLine);
    scene.add(dashedLine);

    const lines: Record<
      string,
      Line<BufferGeometry<NormalBufferAttributes>, Material | Material[], Object3DEventMap>
    > = {
      lineA,
      lineB,
      projectionLine,
    } as const;

    window.addEventListener('resize', () => {
      if (!rendererRef.current) {
        return;
      }

      camera.updateProjectionMatrix();

      rendererRef.current.setSize(minUnit, minUnit);
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    const camera = new OrthographicCamera(0, minUnit, minUnit, 0, -1, 1);
    camera.position.z = 1;

    rendererRef.current.outputColorSpace = LinearSRGBColorSpace;
    rendererRef.current.shadowMap.enabled = true;
    rendererRef.current.shadowMap.type = PCFSoftShadowMap;
    rendererRef.current.setClearColor('#262837');
    rendererRef.current.setSize(minUnit, minUnit);
    rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const controls = new DragControls([grapperA, grabberB], camera, rendererRef.current.domElement);

    controls.addEventListener('dragstart', function (_event: DragStartEvent) {});

    controls.addEventListener('drag', function (event: DragEndEvent) {
      const line = lines[`line${event.object.name}`];

      const positionAttribute = line.geometry.getAttribute('position');

      positionAttribute.setX(1, event.object.position.x);
      positionAttribute.setY(1, event.object.position.y);
      positionAttribute.setZ(1, 0);

      positionAttribute.needsUpdate = true;

      const newPointsA = pointsFromLine(inverseXScale, inverseYScale, lines.lineA);
      const newPointsB = pointsFromLine(inverseXScale, inverseYScale, lines.lineB);

      scene.remove(projectionLine);
      scene.remove(arcLine);
      scene.remove(dashedLine);

      setTimeout(() => {
        const { acutalProjectionLine, cartesianProjectionLine } = projectLineAOntoLineB(
          xScale,
          yScale,
          newPointsA,
          newPointsB,
          projectionMaterial,
        );
        projectionLine = acutalProjectionLine;

        arcLine = drawArc({ lineB: newPointsA, lineA: newPointsB, xScale, yScale });

        dashedLine = AddLineToGraph(
          xScale,
          yScale,
          {
            start: { x: newPointsA.end.x, y: newPointsA.end.y },
            end: { x: cartesianProjectionLine.end.x, y: cartesianProjectionLine.end.y },
          },
          dashedMaterial,
        );

        dashedLine.computeLineDistances();

        scene.add(projectionLine);
        scene.add(arcLine);
        scene.add(dashedLine);
      });
    });

    const tick = () => {
      if (!rendererRef.current) {
        return;
      }

      rendererRef.current.render(scene, camera);

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
