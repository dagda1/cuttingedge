import './style.css';
import { assert } from 'assert-ts';
import {
  Scene,
  WebGLRenderer,
  Mesh,
  LinearSRGBColorSpace,
  MeshBasicMaterial,
  BoxGeometry,
  PerspectiveCamera,
  PCFSoftShadowMap,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function run() {
  const canvas = document.querySelector<HTMLElement>('#scene');

  assert(!!canvas, `no element at #scene`);

  const scene = new Scene();

  const cube = new Mesh(new BoxGeometry(1, 1, 1), new MeshBasicMaterial());
  scene.add(cube);

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
  renderer.outputColorSpace = LinearSRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.setClearColor('#262837');
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const tick = () => {
    // Update controls
    controls.update();

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };
  tick();
}

run();
