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
import gsap from 'gsap';

function run() {
  const canvas = document.querySelector('#scene');

  assert(!!canvas, `no element at #scene`);

  const scene = new Scene();

  const axesHelper = new AxesHelper(2);
  scene.add(axesHelper);

  const group = new Group();
  scene.add(group);

  const mesh = new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshBasicMaterial({
      color: 0xff0000,
    }),
  );

  group.add(mesh);

  const sizes = {
    width: 800,
    height: 600,
  };

  const camera = new PerspectiveCamera(75, sizes.width / sizes.height);
  camera.position.z = 3;
  scene.add(camera);

  const renderer = new WebGLRenderer({ canvas });

  renderer.setSize(sizes.width, sizes.height);

  gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });

  const tick = () => {
    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
  };

  tick();
}

run();
