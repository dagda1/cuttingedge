import { assert } from '@cutting/assert';
import { Box } from '@cutting/component-library';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { useParentSize } from '@cutting/use-get-parent-size';
import { useEffect, useRef } from 'react';
import { ArrowHelper, Mesh, MeshBasicMaterial, OrthographicCamera, Scene, Vector3, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

import { ApplicationLayout } from '~/layouts/ApplicationLayout';

import { addCylinderLine } from './lines';
import { addTick } from './ticks';
import { axes } from './types';
import * as styles from './Vectors.css';

const AxisLength = 3;

export function Vectors(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(containerRef, {
    debounceDelay: 500,
    initialValues: { width: 0, height: 0 },
  });
  const rendererRef = useRef<WebGLRenderer>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cameraRef = useRef<OrthographicCamera>(null);

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

    const scene = new Scene();

    addCylinderLine(scene, new Vector3(-AxisLength, 0, 0), new Vector3(AxisLength, 0, 0));
    addCylinderLine(scene, new Vector3(0, -AxisLength, 0), new Vector3(0, AxisLength, 0));
    addCylinderLine(scene, new Vector3(0, 0, -AxisLength), new Vector3(0, 0, AxisLength));

    const tickPositions = [-3, -2, -1, 0, 1, 2, 3];

    for (const position of tickPositions) {
      addTick(scene, position, 'x');
      addTick(scene, position, 'y');
      addTick(scene, position, 'z');
    }

    const arrowSize = 0.1;
    const axesInfo = [
      { dir: new Vector3(1, 0, 0), color: 0x000000, label: 'X' },
      { dir: new Vector3(0, 0, 1), color: 0x000000, label: 'Y' },
      { dir: new Vector3(0, 1, 0), color: 0x000000, label: 'Z' },
    ];

    for (const axis of axesInfo) {
      const arrowHelper = new ArrowHelper(axis.dir, new Vector3(0, 0, 0), AxisLength + 0.2, axis.color, arrowSize, 0.1);
      scene.add(arrowHelper);
    }

    const loader = new FontLoader();

    loader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
      for (const axis of axesInfo) {
        const textGeometry = new TextGeometry(axis.label, {
          font: font,
          size: 0.1,
          depth: 0.01,
          bevelThickness: 0.01,
        });

        const textMaterial = new MeshBasicMaterial({ color: axis.color });
        const textMesh = new Mesh(textGeometry, textMaterial);

        const offset = AxisLength + 0.3;
        textMesh.position.copy(axis.dir.clone().multiplyScalar(offset));

        scene.add(textMesh);
      }

      const tickPositions = [-3, -2, -1, 0, 1, 2, 3];
      const fontSize = 0.1;
      const fontHeight = 0.01;
      const fontColor = 0x000000;

      for (const axis of axes) {
        for (const pos of tickPositions) {
          const textGeometry = new TextGeometry(Number(pos).toString(), {
            font: font,
            size: fontSize,
            depth: fontHeight,
          });

          const textMaterial = new MeshBasicMaterial({ color: fontColor });
          const textMesh = new Mesh(textGeometry, textMaterial);

          switch (axis) {
            case 'x':
              textMesh.position.x = pos - 0.1;
              textMesh.position.y = -0.3;
              textMesh.position.z = 0;
              break;
            case 'y':
              textMesh.position.x = 0.1;
              textMesh.position.y = pos;
              textMesh.position.z = 0;
              break;
            case 'z':
              textMesh.position.x = 0.1;
              textMesh.position.y = 0;
              textMesh.position.z = pos;
              break;
          }

          scene.add(textMesh);
        }
      }
    });

    const frustumSize = 8;
    const aspect = width / height;

    cameraRef.current = new OrthographicCamera(
      (-aspect * frustumSize) / 2,
      (aspect * frustumSize) / 2,
      frustumSize / 2,
      -frustumSize / 2,
      0.1,
      100,
    );
    cameraRef.current.position.set(2, 2, 6);
    cameraRef.current.lookAt(0, 0, 0);

    const renderer = new WebGLRenderer({
      canvas: canvasRef.current,
    });

    renderer.setClearColor(0xffffff, 1);
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const controls = new OrbitControls(cameraRef.current, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    const tick = () => {
      if (!rendererRef.current) {
        return;
      }

      if (!cameraRef.current) {
        return;
      }

      rendererRef.current.render(scene, cameraRef.current);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };
    tick();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    if (!cameraRef.current) {
      return;
    }

    assert(!!rendererRef.current, `renderRef is null`);

    cameraRef.current.updateProjectionMatrix();

    rendererRef.current.setSize(width, height);
    rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }, [height, width]);

  return (
    <ApplicationLayout showFooter={false} heading="Equation of a line" centerHeading>
      <Box component="section" ref={containerRef} display="flex" justifyContent="center">
        <canvas id="scene" ref={canvasRef} className={styles.canvas}></canvas>
      </Box>
    </ApplicationLayout>
  );
}

export default Vectors;
