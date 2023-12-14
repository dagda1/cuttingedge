import './style.css.js';
import { assert } from 'assert-ts';
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  AmbientLight,
  Color,
  MeshStandardMaterial,
  Mesh,
  SphereGeometry,
  BoxGeometry,
  PlaneGeometry,
  TorusGeometry,
  DirectionalLight,
  DirectionalLightHelper,
  HemisphereLight,
  HemisphereLightHelper,
  PointLight,
  PointLightHelper,
  RectAreaLight,
  SpotLight,
  SpotLightHelper,
  Vector3,
  Clock,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js';

function run() {
  const canvas = document.querySelector('#scene');

  assert(!!canvas, `no element at #scene`);

  const scene = new Scene();

  const ambientLight = new AmbientLight();
  ambientLight.color = new Color(0xffffff);
  ambientLight.intensity = 0.5;
  scene.add(ambientLight);

  const directionalLight = new DirectionalLight(0x00fffc, 0.3);
  directionalLight.position.set(1, 0.25, 0);
  scene.add(directionalLight);

  const hemisphereLight = new HemisphereLight(0xff0000, 0x0000ff, 0.3);
  scene.add(hemisphereLight);

  const directionLightHelper = new DirectionalLightHelper(directionalLight, 0.2);
  scene.add(directionLightHelper);

  const pointLight = new PointLight(0xff9000, 0.5, 10, 2);
  pointLight.position.set(1, -0.5, 1);
  scene.add(pointLight);

  const rectAreaLight = new RectAreaLight(0x4e00ff, 2, 1, 1);
  rectAreaLight.position.set(-1.5, 0, 1.5);
  rectAreaLight.lookAt(new Vector3());
  scene.add(rectAreaLight);

  const spotLight = new SpotLight(0x78ff00, 0.5, 10, Math.PI * 0.1, 0.25, 1);
  spotLight.position.set(0, 2, 3);
  scene.add(spotLight);

  const hemisphereLightHelper = new HemisphereLightHelper(hemisphereLight, 0.2);
  scene.add(hemisphereLightHelper);

  const pointLightHelper = new PointLightHelper(pointLight, 0.2);
  scene.add(pointLightHelper);

  const rectArealLightHelper = new RectAreaLightHelper(rectAreaLight);
  scene.add(rectArealLightHelper);

  const spotLightHelper = new SpotLightHelper(spotLight);
  scene.add(spotLightHelper);

  const material = new MeshStandardMaterial();
  material.roughness = 0.4;

  const sphere = new Mesh(new SphereGeometry(0.5, 32, 32), material);
  sphere.position.x = -1.5;

  const cube = new Mesh(new BoxGeometry(0.75, 0.75, 0.75), material);

  const torus = new Mesh(new TorusGeometry(0.3, 0.2, 32, 64), material);
  torus.position.x = 1.5;

  const plane = new Mesh(new PlaneGeometry(5, 5), material);
  plane.rotation.x = -Math.PI * 0.5;
  plane.position.y = -0.65;

  scene.add(sphere, cube, torus, plane);

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
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const clock = new Clock();

  const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    sphere.rotation.y = 0.1 * elapsedTime;
    cube.rotation.y = 0.1 * elapsedTime;
    torus.rotation.y = 0.1 * elapsedTime;

    sphere.rotation.x = 0.15 * elapsedTime;
    cube.rotation.x = 0.15 * elapsedTime;
    torus.rotation.x = 0.15 * elapsedTime;

    controls.update();

    renderer.render(scene, camera);

    window.requestAnimationFrame(tick);
  };

  tick();
}

run();
