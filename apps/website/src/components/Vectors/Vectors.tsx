import { assert } from '@cutting/assert';
import { Box } from '@cutting/component-library';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { useParentSize } from '@cutting/use-get-parent-size';
import { MathJax } from '@cutting/use-mathjax';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowHelper,
  BufferGeometry,
  Line,
  LineBasicMaterial,
  LineDashedMaterial,
  Mesh,
  MeshBasicMaterial,
  OrthographicCamera,
  Plane,
  Raycaster,
  Scene,
  SphereGeometry,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

import { ApplicationLayout } from '~/layouts/ApplicationLayout';

import { addCylinderLine } from './lines';
import { addTick } from './ticks';
import { axes } from './types';
import * as styles from './Vectors.css';

const AxisLength = 3;

interface ProjectionData {
  vectorA: { x: number; y: number };
  vectorB: { x: number; y: number };
  dotProduct: number;
  magnitudeA: number;
  magnitudeB: number;
  scalarProjection: number;
  angle: number;
  projVector: { x: number; y: number };
}

export function Vectors(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(containerRef, {
    debounceDelay: 500,
    initialValues: { width: 0, height: 0 },
  });
  const rendererRef = useRef<WebGLRenderer>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cameraRef = useRef<OrthographicCamera>(null);
  const [projectionData, setProjectionData] = useState<ProjectionData>({
    vectorA: { x: 2, y: 1 },
    vectorB: { x: 1, y: 2 },
    dotProduct: 4,
    magnitudeA: Math.sqrt(5),
    magnitudeB: Math.sqrt(5),
    scalarProjection: 4 / Math.sqrt(5),
    angle: Math.acos(4 / 5) * (180 / Math.PI),
    projVector: { x: 0.8, y: 1.6 },
  });

  assert(typeof width === 'number');
  assert(typeof height === 'number');

  useIsomorphicLayoutEffect(() => {
    if (!canvasRef.current || width === 0 || height === 0) {
      return;
    }

    if (!rendererRef.current) {
      rendererRef.current = new WebGLRenderer({
        canvas: canvasRef.current,
        alpha: true,
      });
    }

    const scene = new Scene();

    addCylinderLine(scene, new Vector3(-AxisLength, 0, 0), new Vector3(AxisLength, 0, 0), 0xffffff);
    addCylinderLine(scene, new Vector3(0, -AxisLength, 0), new Vector3(0, AxisLength, 0), 0xffffff);
    addCylinderLine(scene, new Vector3(0, 0, -AxisLength), new Vector3(0, 0, AxisLength), 0xffffff);

    const tickPositions = [-3, -2, -1, 0, 1, 2, 3];

    for (const position of tickPositions) {
      addTick(scene, position, 'x', 0xffffff);
      addTick(scene, position, 'y', 0xffffff);
      addTick(scene, position, 'z', 0xffffff);
    }

    const arrowSize = 0.1;
    const axesInfo = [
      { dir: new Vector3(1, 0, 0), color: 0xffffff, label: 'X' },
      { dir: new Vector3(0, 0, 1), color: 0xffffff, label: 'Y' },
      { dir: new Vector3(0, 1, 0), color: 0xffffff, label: 'Z' },
    ];

    for (const axis of axesInfo) {
      const arrowHelper = new ArrowHelper(axis.dir, new Vector3(0, 0, 0), AxisLength + 0.2, axis.color, arrowSize, 0.1);
      scene.add(arrowHelper);
    }

    const vectorA = new Vector3(2, 1, 0);
    const vectorB = new Vector3(1, 2, 0);
    const origin = new Vector3(0, 0, 0);

    let arrowA: ArrowHelper;
    let arrowB: ArrowHelper;
    let arrowProj: ArrowHelper;
    let perpLine: Line;
    let rightAngle: Line;

    const updateVectors = () => {
      if (arrowA) {
        scene.remove(arrowA);
      }
      if (arrowB) {
        scene.remove(arrowB);
      }
      if (arrowProj) {
        scene.remove(arrowProj);
      }
      if (perpLine) {
        scene.remove(perpLine);
      }
      if (rightAngle) {
        scene.remove(rightAngle);
      }

      const dotProduct = vectorA.dot(vectorB);
      const magnitudeA = vectorA.length();
      const magnitudeB = vectorB.length();
      const projScalar = dotProduct / vectorB.lengthSq();
      const projAonB = vectorB.clone().multiplyScalar(projScalar);
      const scalarProjection = dotProduct / magnitudeB;
      const cosAngle = dotProduct / (magnitudeA * magnitudeB);
      const angle = Math.acos(Math.min(1, Math.max(-1, cosAngle))) * (180 / Math.PI);

      setProjectionData({
        vectorA: { x: vectorA.x, y: vectorA.y },
        vectorB: { x: vectorB.x, y: vectorB.y },
        dotProduct,
        magnitudeA,
        magnitudeB,
        scalarProjection,
        angle,
        projVector: { x: projAonB.x, y: projAonB.y },
      });

      arrowA = new ArrowHelper(vectorA.clone().normalize(), origin, vectorA.length(), 0xff0000, 0.15, 0.1);
      arrowB = new ArrowHelper(vectorB.clone().normalize(), origin, vectorB.length(), 0x4da6ff, 0.15, 0.1);
      arrowProj = new ArrowHelper(projAonB.clone().normalize(), origin, projAonB.length(), 0x00ff00, 0.15, 0.1);

      const dashedMaterial = new LineDashedMaterial({ color: 0xffff00, dashSize: 0.1, gapSize: 0.05 });
      const perpGeometry = new BufferGeometry().setFromPoints([vectorA.clone(), projAonB]);
      perpLine = new Line(perpGeometry, dashedMaterial);
      perpLine.computeLineDistances();

      const rightAngleSize = 0.2;
      const bDir = vectorB.clone().normalize();
      const perpDir = vectorA.clone().sub(projAonB).normalize();
      const corner1 = projAonB.clone().add(bDir.clone().multiplyScalar(-rightAngleSize));
      const corner2 = corner1.clone().add(perpDir.clone().multiplyScalar(rightAngleSize));
      const corner3 = projAonB.clone().add(perpDir.clone().multiplyScalar(rightAngleSize));
      const rightAngleGeometry = new BufferGeometry().setFromPoints([corner1, corner2, corner3]);
      const rightAngleMaterial = new LineBasicMaterial({ color: 0xffff00 });
      rightAngle = new Line(rightAngleGeometry, rightAngleMaterial);

      scene.add(arrowA);
      scene.add(arrowB);
      scene.add(arrowProj);
      scene.add(perpLine);
      scene.add(rightAngle);
    };

    const sphereGeometry = new SphereGeometry(0.15, 16, 16);
    const sphereAMaterial = new MeshBasicMaterial({ color: 0xff0000 });
    const sphereBMaterial = new MeshBasicMaterial({ color: 0x4da6ff });

    const handleA = new Mesh(sphereGeometry, sphereAMaterial);
    const handleB = new Mesh(sphereGeometry, sphereBMaterial);

    handleA.position.copy(vectorA);
    handleB.position.copy(vectorB);

    scene.add(handleA);
    scene.add(handleB);

    updateVectors();

    const raycaster = new Raycaster();
    const mouse = new Vector2();
    const dragPlane = new Plane(new Vector3(0, 0, 1), 0);
    let dragging: Mesh | null = null;
    let dragVector: Vector3 | null = null;

    const onMouseDown = (event: MouseEvent) => {
      const rect = canvasRef.current!.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, cameraRef.current!);
      const intersects = raycaster.intersectObjects([handleA, handleB]);

      if (intersects.length > 0) {
        controls.enabled = false;
        dragging = intersects[0].object as Mesh;
        dragVector = dragging === handleA ? vectorA : vectorB;
      }
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!dragging || !dragVector) {
        return;
      }

      const rect = canvasRef.current!.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, cameraRef.current!);
      const intersectPoint = new Vector3();
      raycaster.ray.intersectPlane(dragPlane, intersectPoint);

      dragVector.copy(intersectPoint);
      dragging.position.copy(intersectPoint);
      updateVectors();
    };

    const onMouseUp = () => {
      dragging = null;
      dragVector = null;
      controls.enabled = true;
    };

    canvasRef.current.addEventListener('mousedown', onMouseDown);
    canvasRef.current.addEventListener('mousemove', onMouseMove);
    canvasRef.current.addEventListener('mouseup', onMouseUp);

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
      const fontColor = 0xffffff;

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

    rendererRef.current.setClearColor(0x000000, 0);
    rendererRef.current.setSize(width, height);
    rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const controls = new OrbitControls(cameraRef.current, rendererRef.current.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    let animationFrameId: number;

    const tick = () => {
      if (!rendererRef.current) {
        return;
      }

      if (!cameraRef.current) {
        return;
      }

      controls.update();
      rendererRef.current.render(scene, cameraRef.current);

      animationFrameId = window.requestAnimationFrame(tick);
    };
    tick();

    const canvas = canvasRef.current;

    return () => {
      cancelAnimationFrame(animationFrameId);
      controls.dispose();
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseup', onMouseUp);
    };
  }, [width, height]);

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
    <ApplicationLayout showFooter={false} heading="Vector Projection" centerHeading>
      <Box display="flex" height="full">
        <Box
          component="section"
          ref={containerRef}
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={styles.canvasContainer}
        >
          <canvas id="scene" ref={canvasRef} className={styles.canvas}></canvas>
        </Box>
        <Box className={styles.infoPanel}>
          <div className={styles.section}>
            <div className={styles.angleDisplay}>{projectionData.angle.toFixed(1)}°</div>
            <MathJax className={styles.formula}>{`$\\theta$ = angle between $\\vec{a}$ and $\\vec{b}$`}</MathJax>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Finding θ from dot product</h3>
            <MathJax
              className={styles.formula}
            >{`$\\cos(\\theta) = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{a}| |\\vec{b}|}$`}</MathJax>
            <MathJax className={styles.formula}>
              {`$\\cos(\\theta) = \\frac{${projectionData.dotProduct.toFixed(2)}}{${projectionData.magnitudeA.toFixed(2)} \\times ${projectionData.magnitudeB.toFixed(2)}} = ${(projectionData.dotProduct / (projectionData.magnitudeA * projectionData.magnitudeB)).toFixed(3)}$`}
            </MathJax>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Projection uses cos(θ)</h3>
            <MathJax
              className={styles.formula}
            >{`$\\text{proj}_{\\vec{b}}\\vec{a} = |\\vec{a}|\\cos(\\theta) \\cdot \\hat{b}$`}</MathJax>
            <MathJax className={styles.formula}>
              {`$= ${projectionData.magnitudeA.toFixed(2)} \\times ${(projectionData.dotProduct / (projectionData.magnitudeA * projectionData.magnitudeB)).toFixed(3)} \\cdot \\hat{b}$`}
            </MathJax>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Key insight</h3>
            <MathJax className={styles.formula}>{`$90°$ at projection point`}</MathJax>
            <MathJax
              className={styles.formula}
            >{`$\\vec{a} - \\text{proj}_{\\vec{b}}\\vec{a} \\perp \\vec{b}$`}</MathJax>
          </div>

          <div className={styles.section}>
            <div className={styles.legend}>
              <span className={styles.legendItem}>
                <span className={styles.colorDotA}></span> Vector a (drag me)
              </span>
              <span className={styles.legendItem}>
                <span className={styles.colorDotB}></span> Vector b (drag me)
              </span>
              <span className={styles.legendItem}>
                <span className={styles.colorDotProj}></span> Projection
              </span>
              <span className={styles.legendItem}>
                <span className={styles.colorDotPerp}></span> 90° indicator
              </span>
            </div>
          </div>
        </Box>
      </Box>
    </ApplicationLayout>
  );
}

export default Vectors;
