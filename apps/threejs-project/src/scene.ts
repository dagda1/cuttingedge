import { assert } from 'assert-ts';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  LinearSRGBColorSpace,
  TextureLoader,
  AmbientLight,
  PointLight,
  MeshMatcapMaterial,
  Mesh,
  TorusGeometry,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './style.css';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

function run() {
  const canvas = document.querySelector('#scene');

  assert(!!canvas, `no element at #scene`);

  const scene = new Scene();

  const ambientLight = new AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const light = new PointLight(0xffffff, 0.5);
  light.position.x = 2;
  light.position.y = 3;
  light.position.z = 4;
  scene.add(light);

  const textureLoader = new TextureLoader();
  const matcapTexture = textureLoader.load('textures/matcaps/8.png');

  const fontLoader = new FontLoader();

  fontLoader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
    const material = new MeshMatcapMaterial({ matcap: matcapTexture });

    const textGeometry = new TextGeometry('Hello der man', {
      font,
      size: 0.5,
      height: 0.2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 5,
    });

    textGeometry.center();

    const text = new Mesh(textGeometry, material);
    scene.add(text);

    // Donuts
    const donutGeometry = new TorusGeometry(0.3, 0.2, 32, 64);

    for (let i = 0; i < 100; i++) {
      const donut = new Mesh(donutGeometry, material);
      donut.position.x = (Math.random() - 0.5) * 10;
      donut.position.y = (Math.random() - 0.5) * 10;
      donut.position.z = (Math.random() - 0.5) * 10;
      donut.rotation.x = Math.random() * Math.PI;
      donut.rotation.y = Math.random() * Math.PI;
      const scale = Math.random();
      donut.scale.set(scale, scale, scale);

      scene.add(donut);
    }
  });

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
  camera.position.x = 1;
  camera.position.y = 1;
  camera.position.z = 2;
  scene.add(camera);
  const controls = new OrbitControls(camera, canvas as HTMLElement);
  controls.enableDamping = true;

  const renderer = new WebGLRenderer({ canvas });
  renderer.outputColorSpace = LinearSRGBColorSpace;
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
