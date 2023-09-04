import { assert } from 'assert-ts';
import {
  Scene,
  MeshBasicMaterial,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  TextureLoader,
  LoadingManager,
  MirroredRepeatWrapping,
  NearestFilter,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './style.css';

function run() {
  const canvas = document.querySelector('#scene');

  assert(!!canvas, `no element at #scene`);

  const scene = new Scene();

  const geometry = new BoxGeometry(1, 1, 1);

  const loadingManager = new LoadingManager();
  const textureLoader = new TextureLoader(loadingManager);
  const colorTexture = textureLoader.load('/textures/door/color.jpg');

  colorTexture.wrapS = MirroredRepeatWrapping;
  colorTexture.wrapT = MirroredRepeatWrapping;
  colorTexture.generateMipmaps = false;
  colorTexture.minFilter = NearestFilter;
  colorTexture.magFilter = NearestFilter;
  const material = new MeshBasicMaterial({
    map: colorTexture,
  });

  const mesh = new Mesh(geometry, material);

  scene.add(mesh);

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
  camera.position.x = 1;
  camera.position.y = 1;
  camera.position.z = 1;
  scene.add(camera);

  window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.height / sizes.width;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  const controls = new OrbitControls(camera, canvas as HTMLElement);
  controls.enableDamping = true;

  const renderer = new WebGLRenderer({ canvas });

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
