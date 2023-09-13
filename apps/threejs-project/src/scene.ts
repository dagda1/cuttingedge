import './style.css';
import { assert } from 'assert-ts';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  MeshStandardMaterial,
  Mesh,
  SphereGeometry,
  PlaneGeometry,
  DirectionalLight,
  // DirectionalLightHelper,
  // TextureLoader,
  LinearSRGBColorSpace,
  // Clock,
  PCFSoftShadowMap,
  CameraHelper,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GUI } from 'lil-gui';

function run() {
  const canvas = document.querySelector('#scene');

  assert(!!canvas, `no element at #scene`);

  const gui = new GUI();
  const scene = new Scene();

  // const textureLoader = new TextureLoader();
  // const simpleShadow = textureLoader.load('/textures/simpleShadow.jpg');

  const ambientLight = new AmbientLight(0xffffff, 0.5);
  gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001);
  scene.add(ambientLight);

  const directionalLight = new DirectionalLight(0xffffff, 0.5);

  directionalLight.castShadow = false;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;

  directionalLight.position.set(2, 2, -1);
  gui.add(directionalLight, 'intensity').min(0).max(1).step(0.001);
  gui.add(directionalLight.position, 'x').min(-5).max(5).step(0.001);
  gui.add(directionalLight.position, 'y').min(-5).max(5).step(0.001);
  gui.add(directionalLight.position, 'z').min(-5).max(5).step(0.001);

  directionalLight.shadow.camera.near = 1;
  directionalLight.shadow.camera.far = 6;

  directionalLight.shadow.camera.top = 2;
  directionalLight.shadow.camera.right = 2;
  directionalLight.shadow.camera.bottom = -2;
  directionalLight.shadow.camera.left = -2;

  scene.add(directionalLight);

  const directionalLightHelper = new CameraHelper(directionalLight.shadow.camera);
  directionalLightHelper.visible = false;

  scene.add(directionalLightHelper);

  const material = new MeshStandardMaterial();
  material.roughness = 0.7;
  gui.add(material, 'metalness').min(0).max(1).step(0.001);
  gui.add(material, 'roughness').min(0).max(1).step(0.001);

  const sphere = new Mesh(new SphereGeometry(0.5, 32, 32), material);
  sphere.castShadow = true;

  const plane = new Mesh(new PlaneGeometry(5, 5), material);
  plane.rotation.x = -Math.PI * 0.5;
  plane.position.y = -0.5;

  scene.add(sphere, plane);

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
  camera.position.x = 1;
  camera.position.y = 1;
  camera.position.z = 2;
  scene.add(camera);

  const controls = new OrbitControls(camera, canvas as HTMLElement);
  controls.enableDamping = true;

  const renderer = new WebGLRenderer({ canvas });
  renderer.outputColorSpace = LinearSRGBColorSpace;

  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // const clock = new Clock();

  const tick = () => {
    // const elapsedTime = clock.getElapsedTime();

    // // Update the sphere
    // sphere.position.x = Math.cos(elapsedTime) * 1.5;
    // sphere.position.z = Math.sin(elapsedTime) * 1.5;
    // sphere.position.y = Math.abs(Math.sin(elapsedTime * 3));
    controls.update();

    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
  };

  tick();
}

run();
