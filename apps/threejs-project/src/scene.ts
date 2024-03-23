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
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
  camera.position.x = 4;
  camera.position.y = 2;
  camera.position.z = 5;
  scene.add(camera);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

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
