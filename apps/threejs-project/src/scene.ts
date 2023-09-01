import { assert } from 'assert-ts';
import {
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
  AxesHelper,
  Group,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function run() {
  const canvas = document.querySelector('#scene');

  assert(!!canvas, `no element at #scene`);

  const scene = new Scene();

  const axesHelper = new AxesHelper(2);
  scene.add(axesHelper);

  const group = new Group();
  scene.add(group);

  const mesh = new Mesh(
    new BoxGeometry(1, 1, 1, 5, 5, 5),
    new MeshBasicMaterial({
      color: 0xff0000,
    }),
  );

  group.add(mesh);

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
  });

  const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
  camera.position.z = 3;
  scene.add(camera);

  const controls = new OrbitControls(camera, canvas as HTMLElement);
  controls.enableDamping = true;

  const renderer = new WebGLRenderer({ canvas });

  renderer.setSize(sizes.width, sizes.height);

  const tick = () => {
    controls.update();

    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
  };

  tick();
}

run();
