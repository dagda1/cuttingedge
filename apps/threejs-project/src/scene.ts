import './style.css';
import { assert } from '@cutting/assert';
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
import { createLine, createTickMarks } from './utils/axis';
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
// import { axes } from './types';

const RANGE = [-10, 10];

function run() {
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const xScale = scaleLinear().domain(RANGE).range([0, sizes.width]);
  const yScale = scaleLinear().domain(RANGE).range([sizes.height, 0]);

  const canvas = document.querySelector<HTMLElement>('#scene');

  assert(!!canvas, `no element at #scene`);

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
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  const camera = new OrthographicCamera(0, sizes.width, sizes.height, 0, -1, 1);
  camera.position.z = 1;

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