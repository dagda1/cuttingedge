import './style.css';
import { assert } from '@cutting/assert';
import {
  Scene,
  WebGLRenderer,
  LinearSRGBColorSpace,
  PCFSoftShadowMap,
  LineBasicMaterial,
  Vector2,
  BufferGeometry,
  Line,
  OrthographicCamera,
} from 'three';
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
// import { axes } from './types';

function run() {
  const canvas = document.querySelector<HTMLElement>('#scene');

  assert(!!canvas, `no element at #scene`);

  const scene = new Scene();

  const material = new LineBasicMaterial({ color: 0xffffff });

  // X Axis
  const pointsX = [new Vector2(-window.innerWidth / 2), new Vector2(window.innerWidth / 2, 0)];
  const geometryX = new BufferGeometry().setFromPoints(pointsX);
  const xAxis = new Line(geometryX, material);

  // Y Axis
  const pointsY = [new Vector2(0, -window.innerHeight / 2), new Vector2(0, window.innerHeight / 2)];
  const geometryY = new BufferGeometry().setFromPoints(pointsY);
  const yAxis = new Line(geometryY, material);

  // // Add axes to scene
  scene.add(xAxis);
  scene.add(yAxis);

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  const camera = new OrthographicCamera(
    window.innerWidth / -2, // Left
    window.innerWidth / 2, // Right
    window.innerHeight / 2, // Top
    window.innerHeight / -2, // Bottom
    1, // Near clipping plane
    1000, // Far clipping plane
  );

  // Position the camera
  camera.position.set(0, 0, 100);
  camera.lookAt(0, 0, 0);

  const renderer = new WebGLRenderer({
    canvas: canvas,
  });
  renderer.outputColorSpace = LinearSRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.setClearColor('#262837');
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const tick = () => {
    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };
  tick();
}

run();
