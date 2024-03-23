import './style.css';
import { assert } from '@cutting/assert';
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  BufferGeometry,
  LineBasicMaterial,
  Line,
  Vector3,
  EdgesGeometry,
  LineSegments,
} from 'three';
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
// import { axes } from './types';

type Axis = 'x' | 'y' | 'z';

function createTick(scene: Scene, position: number, axis: Axis, color = 0x000000) {
  const tickSize = 0.1;
  let start: Vector3;
  let end: Vector3;

  function addTick(start: Vector3, end: Vector3) {
    // Create the geometry and material for the tick mark
    const geometry = new BufferGeometry().setFromPoints([start, end]);
    const material = new LineBasicMaterial({ color: color });
    const tick = new Line(geometry, material);

    // Add the tick to the scene
    scene.add(tick);
  }

  switch (axis) {
    case 'x': {
      start = new Vector3(position, 0, 0).add(new Vector3(0, -tickSize, 0));
      end = new Vector3(position, 0, 0).add(new Vector3(0, tickSize, 0));

      addTick(start, end);

      break;
    }

    case 'y': {
      start = new Vector3(0, position, 0).add(new Vector3(-tickSize, 0, 0));
      end = new Vector3(0, position, 0).add(new Vector3(tickSize, 0, 0));

      addTick(start, end);
      break;
    }

    case 'z': {
      start = new Vector3(0, 0, position).add(new Vector3(-tickSize, 0, 0));
      end = new Vector3(0, 0, position).add(new Vector3(tickSize, 0, 0));

      addTick(start, end);
      break;
    }
  }
}

function createAxis(scene: Scene, start: Vector3, end: Vector3) {
  const material = new LineBasicMaterial({ color: 0x000000 });
  const points = [];
  points.push(start.clone());
  points.push(end.clone());

  const geometry = new BufferGeometry().setFromPoints(points);
  const line = new Line(geometry, material);
  scene.add(line);
}

function run() {
  const canvas = document.querySelector<HTMLElement>('#scene');

  assert(!!canvas, `no element at #scene`);

  const scene = new Scene();

  const cubeGeometry = new BoxGeometry(5, 5, 5);
  const cubeMaterial = new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
  const cube = new Mesh(cubeGeometry, cubeMaterial);
  scene.add(cube);

  const edges = new EdgesGeometry(cubeGeometry);
  const lineMaterial = new LineBasicMaterial({ color: 0x000000 }); // Black edges
  const edgesMesh = new LineSegments(edges, lineMaterial);
  scene.add(edgesMesh);

  const axisLength = 3;
  createAxis(scene, new Vector3(-axisLength, 0, 0), new Vector3(axisLength, 0, 0));
  createAxis(scene, new Vector3(0, -axisLength, 0), new Vector3(0, axisLength, 0));
  createAxis(scene, new Vector3(0, 0, -axisLength), new Vector3(0, 0, axisLength));

  const tickPositions = [-3, -2, -1, 0, 1, 2, 3];

  tickPositions.forEach((position) => {
    createTick(scene, position, 'x');
    createTick(scene, position, 'y');
    createTick(scene, position, 'z');
  });

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

  renderer.setClearColor(0xffffff, 1);
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const tick = () => {
    controls.update();

    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
  };
  tick();
}

run();
