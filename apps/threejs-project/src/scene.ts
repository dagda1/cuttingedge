import './style.css';
import { assert } from '@cutting/assert';
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  LineBasicMaterial,
  Vector3,
  EdgesGeometry,
  LineSegments,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { addTick } from './utils/addTick';
import { addAxis } from './utils/addAxis';

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
  addAxis(scene, new Vector3(-axisLength, 0, 0), new Vector3(axisLength, 0, 0));
  addAxis(scene, new Vector3(0, -axisLength, 0), new Vector3(0, axisLength, 0));
  addAxis(scene, new Vector3(0, 0, -axisLength), new Vector3(0, 0, axisLength));

  const tickPositions = [-3, -2, -1, 0, 1, 2, 3];

  tickPositions.forEach((position) => {
    addTick(scene, position, 'x');
    addTick(scene, position, 'y');
    addTick(scene, position, 'z');
  });

  // const loader = new FontLoader();

  // loader.load('/fonts/helvetiker_regular.typeface.json', function (font) {
  //   const tickPositions = [-3, -2, -1, 0, 1, 2, 3];
  //   const fontSize = 0.2;
  //   const fontHeight = 0.01;
  //   const fontColor = 0x000000;

  //   tickPositions.forEach((pos) => {
  //     const textGeometry = new TextGeometry(pos.toString(), {
  //       font: font,
  //       size: fontSize,
  //       height: fontHeight,
  //     });

  //     const textMaterial = new MeshBasicMaterial({ color: fontColor });
  //     const textMesh = new Mesh(textGeometry, textMaterial);

  //     textMesh.position.x = pos - 0.5;
  //     textMesh.position.y = pos - 0.5;
  //     textMesh.position.z = pos - 0.5;

  //     scene.add(textMesh);
  //   });
  // });

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
