import './style.css';
import { assert } from '@cutting/assert';
import {
  Scene,
  WebGLRenderer,
  MeshBasicMaterial,
  Mesh,
  LineBasicMaterial,
  Vector3,
  ArrowHelper,
  BufferGeometry,
  Line,
  OrthographicCamera,
} from 'three';
import { addTick } from './utils/addTick';
import { addAxis } from './utils/addAxis';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { axes } from './types';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const AxisLength = 3;

function run() {
  const canvas = document.querySelector<HTMLElement>('#scene');

  assert(!!canvas, `no element at #scene`);

  const scene = new Scene();

  addAxis(scene, new Vector3(-AxisLength, 0, 0), new Vector3(AxisLength, 0, 0));
  addAxis(scene, new Vector3(0, -AxisLength, 0), new Vector3(0, AxisLength, 0));
  addAxis(scene, new Vector3(0, 0, -AxisLength), new Vector3(0, 0, AxisLength));

  const tickPositions = [-3, -2, -1, 0, 1, 2, 3];

  tickPositions.forEach((position) => {
    addTick(scene, position, 'x');
    addTick(scene, position, 'y');
    addTick(scene, position, 'z');
  });

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

  const GridPoints = [-3, -2.5, -2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2, 2.5, 3] as const;

  for (const x of GridPoints) {
    const start = new Vector3(x, 0, -AxisLength);

    const end = new Vector3(x, 0, AxisLength);

    const material = new LineBasicMaterial({ color: 0x000000 });

    const points = [];

    points.push(start.clone());
    points.push(end.clone());

    const geometry = new BufferGeometry().setFromPoints(points);
    const line = new Line(geometry, material);
    scene.add(line);
  }

  for (const x of GridPoints) {
    const start = new Vector3(-AxisLength, 0, x);

    const end = new Vector3(AxisLength, 0, x);

    const material = new LineBasicMaterial({ color: 0x000000 });

    const points = [];

    points.push(start.clone());
    points.push(end.clone());

    const geometry = new BufferGeometry().setFromPoints(points);
    const line = new Line(geometry, material);
    scene.add(line);
  }

  addAxis(scene, new Vector3(0, 0, 0), new Vector3(2, 2, 2), 0xff0000);

  addAxis(scene, new Vector3(0, 0, 0), new Vector3(1, 0, 1), 0x0000ff);

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

  const frustumSize = 8;
  const aspect = sizes.width / sizes.height;
  
  const camera = new OrthographicCamera(
    -aspect * frustumSize / 2,
    aspect * frustumSize / 2,
    frustumSize / 2,
    -frustumSize / 2,
    0.1,
    100,
  );
  camera.position.set(5, 5, 5);
  camera.lookAt(0, 0, 0);

  const renderer = new WebGLRenderer({
    canvas: canvas,
  });

  renderer.setClearColor(0xffffff, 1);
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.enableZoom = true;

  const tick = () => {
    controls.update();
    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
  };
  tick();
}

run();