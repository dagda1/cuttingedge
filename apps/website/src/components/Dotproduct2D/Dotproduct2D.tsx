import { assert } from '@cutting/assert';
import { Box } from '@cutting/component-library';
import { useParentSize } from '@cutting/use-get-parent-size';
import { useRef } from 'react';
import { ApplicationLayout } from '~/layouts/ApplicationLayout';
import { Vector2 } from 'three';
import {
  Scene,
  WebGLRenderer,
  LinearSRGBColorSpace,
  PCFSoftShadowMap,
  LineBasicMaterial,
  OrthographicCamera,
} from 'three';
import { scaleLinear } from 'd3-scale';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { createLine, createTickMarks } from './axes';

const RANGE = [-10, 10];

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

    const xScale = scaleLinear().domain(RANGE).range([0, width]);
    const yScale = scaleLinear().domain(RANGE).range([height, 0]);

    const scene = new Scene();

    const lineMaterial = new LineBasicMaterial({ color: 0xffffff });
    const tickMaterial = new LineBasicMaterial({ color: 0xffffff });

    const xAxisStart = new Vector2(xScale(-10), yScale(0));
    const xAxisEnd = new Vector2(xScale(10), yScale(0));

    const xAxis = createLine(xAxisStart, xAxisEnd, lineMaterial);

    scene.add(xAxis);

    const yAxisStart = new Vector2(xScale(0), yScale(-10));
    const yAxisEnd = new Vector2(xScale(0), yScale(10));
    const yAxis = createLine(yAxisStart, yAxisEnd, lineMaterial);

    scene.add(yAxis);

    createTickMarks(scene, xScale, yScale, xScale, 'x', tickMaterial);
    createTickMarks(scene, xScale, yScale, yScale, 'y', tickMaterial);

    window.addEventListener('resize', () => {
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    const camera = new OrthographicCamera(0, width, height, 0, -1, 1);
    camera.position.z = 1;

    const renderer = new WebGLRenderer({
      canvas: canvasRef.current,
    });
    renderer.outputColorSpace = LinearSRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.setClearColor('#262837');
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const tick = () => {
      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };
    tick();
  }, [height, width]);

  return (
    <ApplicationLayout centerHeading heading="DOT PRODUCT 2D" showFooter={false}>
      <Box component="section" ref={containerRef}>
        <canvas id="scene" ref={canvasRef}></canvas>
      </Box>
    </ApplicationLayout>
  );
}

export default DotProduct2D;
