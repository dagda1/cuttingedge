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
  LinearSRGBColorSpace,
  TextureLoader,
  Group,
  BoxGeometry,
  ConeGeometry,
  RepeatWrapping,
  PointLight,
  Fog,
  PCFSoftShadowMap,
  Clock,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GUI } from 'lil-gui';

function run() {
  const canvas = document.querySelector<HTMLElement>('#scene');

  assert(!!canvas, `no element at #scene`);

  const gui = new GUI();
  const scene = new Scene();
  const textureLoader = new TextureLoader();

  const doorColorTexture = textureLoader.load('/textures/door/color.jpg');
  const doorAlphaTexture = textureLoader.load('/textures/door/alpha.jpg');
  const doorAmbientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg');
  const doorHeightTexture = textureLoader.load('/textures/door/height.jpg');
  const doorNormalTexture = textureLoader.load('/textures/door/normal.jpg');
  const doorMetalnessTexture = textureLoader.load('/textures/door/metalness.jpg');
  const doorRoughnessTexture = textureLoader.load('/textures/door/roughness.jpg');

  const bricksColorTexture = textureLoader.load('/textures/bricks/color.jpg');
  const bricksAmbientOcclusionTexture = textureLoader.load('/textures/bricks/ambientOcclusion.jpg');
  const bricksNormalTexture = textureLoader.load('/textures/bricks/normal.jpg');
  const bricksRoughnessTexture = textureLoader.load('/textures/bricks/roughness.jpg');

  const grassColorTexture = textureLoader.load('/textures/grass/color.jpg');
  const grassAmbientOcclusionTexture = textureLoader.load('/textures/grass/ambientOcclusion.jpg');
  const grassNormalTexture = textureLoader.load('/textures/grass/normal.jpg');
  const grassRoughnessTexture = textureLoader.load('/textures/grass/roughness.jpg');

  grassColorTexture.repeat.set(8, 8);
  grassAmbientOcclusionTexture.repeat.set(8, 8);
  grassNormalTexture.repeat.set(8, 8);
  grassRoughnessTexture.repeat.set(8, 8);

  grassColorTexture.wrapS = RepeatWrapping;
  grassAmbientOcclusionTexture.wrapS = RepeatWrapping;
  grassNormalTexture.wrapS = RepeatWrapping;
  grassRoughnessTexture.wrapS = RepeatWrapping;

  grassColorTexture.wrapT = RepeatWrapping;
  grassAmbientOcclusionTexture.wrapT = RepeatWrapping;
  grassNormalTexture.wrapT = RepeatWrapping;
  grassRoughnessTexture.wrapT = RepeatWrapping;

  /**
   * House
   */
  // House container
  const house = new Group();
  scene.add(house);

  // Walls
  const walls = new Mesh(
    new BoxGeometry(4, 2.5, 4),
    new MeshStandardMaterial({
      map: bricksColorTexture,
      aoMap: bricksAmbientOcclusionTexture,
      normalMap: bricksNormalTexture,
      roughnessMap: bricksRoughnessTexture,
    }),
  );
  walls.castShadow = true;
  walls.position.y = 1.25;
  house.add(walls);

  // Roof
  const roof = new Mesh(new ConeGeometry(3.5, 1, 4), new MeshStandardMaterial({ color: '#b35f45' }));
  roof.rotation.y = Math.PI * 0.25;
  roof.position.y = 2.5 + 0.5;
  house.add(roof);

  // Door
  const door = new Mesh(
    new PlaneGeometry(2, 2, 100, 100),
    new MeshStandardMaterial({
      map: doorColorTexture,
      transparent: true,
      alphaMap: doorAlphaTexture,
      aoMap: doorAmbientOcclusionTexture,
      displacementMap: doorHeightTexture,
      displacementScale: 0.1,
      normalMap: doorNormalTexture,
      metalnessMap: doorMetalnessTexture,
      roughnessMap: doorRoughnessTexture,
    }),
  );
  door.position.y = 1;
  door.position.z = 2 + 0.01;
  house.add(door);

  // Bushes
  const bushGeometry = new SphereGeometry(1, 16, 16);
  const bushMaterial = new MeshStandardMaterial({ color: '#89c854' });

  const bush1 = new Mesh(bushGeometry, bushMaterial);
  bush1.castShadow = true;
  bush1.scale.set(0.5, 0.5, 0.5);
  bush1.position.set(0.8, 0.2, 2.2);

  const bush2 = new Mesh(bushGeometry, bushMaterial);
  bush2.castShadow = true;
  bush2.scale.set(0.25, 0.25, 0.25);
  bush2.position.set(1.4, 0.1, 2.1);

  const bush3 = new Mesh(bushGeometry, bushMaterial);
  bush3.castShadow = true;
  bush3.scale.set(0.4, 0.4, 0.4);
  bush3.position.set(-0.8, 0.1, 2.2);

  const bush4 = new Mesh(bushGeometry, bushMaterial);
  bush4.castShadow = true;
  bush4.scale.set(0.15, 0.15, 0.15);
  bush4.position.set(-1, 0.05, 2.6);

  house.add(bush1, bush2, bush3, bush4);

  // Graves
  const graves = new Group();
  scene.add(graves);

  const graveGeometry = new BoxGeometry(0.6, 0.8, 0.1);
  const graveMaterial = new MeshStandardMaterial({ color: '#727272' });

  for (let i = 0; i < 50; i++) {
    const angle = Math.random() * Math.PI * 2; // Random angle
    const radius = 3 + Math.random() * 6; // Random radius
    const x = Math.cos(angle) * radius; // Get the x position using cosinus
    const z = Math.sin(angle) * radius; // Get the z position using sinus

    // Create the mesh
    const grave = new Mesh(graveGeometry, graveMaterial);
    grave.castShadow = true;

    // Position
    grave.position.set(x, 0.3, z);

    // Rotation
    grave.rotation.z = (Math.random() - 0.5) * 0.4;
    grave.rotation.y = (Math.random() - 0.5) * 0.4;

    // Add to the graves container
    graves.add(grave);
  }

  // Floor
  const floor = new Mesh(
    new PlaneGeometry(20, 20),
    new MeshStandardMaterial({
      map: grassColorTexture,
      aoMap: grassAmbientOcclusionTexture,
      normalMap: grassNormalTexture,
      roughnessMap: grassRoughnessTexture,
    }),
  );
  floor.receiveShadow = true;
  floor.rotation.x = -Math.PI * 0.5;
  floor.position.y = 0;
  scene.add(floor);

  /**
   * Lights
   */
  // Ambient light
  const ambientLight = new AmbientLight('#b9d5ff', 0.3);
  gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001);
  scene.add(ambientLight);

  // Directional light
  const moonLight = new DirectionalLight('#b9d5ff', 0.12);
  moonLight.castShadow = true;
  moonLight.shadow.mapSize.width = 256;
  moonLight.shadow.mapSize.height = 256;
  moonLight.shadow.camera.far = 15;
  moonLight.position.set(4, 5, -2);
  gui.add(moonLight, 'intensity').min(0).max(1).step(0.001);
  gui.add(moonLight.position, 'x').min(-5).max(5).step(0.001);
  gui.add(moonLight.position, 'y').min(-5).max(5).step(0.001);
  gui.add(moonLight.position, 'z').min(-5).max(5).step(0.001);
  scene.add(moonLight);

  // Door light
  const doorLight = new PointLight('#ff7d46', 1, 7);
  doorLight.castShadow = true;
  doorLight.shadow.mapSize.width = 256;
  doorLight.shadow.mapSize.height = 256;
  doorLight.shadow.camera.far = 7;

  doorLight.position.set(0, 2.2, 2.7);
  house.add(doorLight);

  /**
   * Ghosts
   */
  const ghost1 = new PointLight('#ff00ff', 3, 3);
  ghost1.castShadow = true;
  ghost1.shadow.mapSize.width = 256;
  ghost1.shadow.mapSize.height = 256;
  ghost1.shadow.camera.far = 7;
  scene.add(ghost1);

  const ghost2 = new PointLight('#00ffff', 3, 3);
  ghost2.castShadow = true;
  ghost2.shadow.mapSize.width = 256;
  ghost2.shadow.mapSize.height = 256;
  ghost2.shadow.camera.far = 7;
  scene.add(ghost2);

  const ghost3 = new PointLight('#ff7800', 3, 3);
  ghost3.castShadow = true;
  ghost3.shadow.mapSize.width = 256;
  ghost3.shadow.mapSize.height = 256;
  ghost3.shadow.camera.far = 7;
  scene.add(ghost3);

  /**
   * Fog
   */
  const fog = new Fog('#262837', 1, 15);
  scene.fog = fog;

  /**
   * Sizes
   */
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  /**
   * Camera
   */
  // Base camera
  const camera = new PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
  camera.position.x = 4;
  camera.position.y = 2;
  camera.position.z = 5;
  scene.add(camera);

  // Controls
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;

  /**
   * Renderer
   */
  const renderer = new WebGLRenderer({
    canvas: canvas,
  });
  renderer.outputColorSpace = LinearSRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.setClearColor('#262837');
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  /**
   * Animate
   */
  const clock = new Clock();

  const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Ghosts
    const ghost1Angle = elapsedTime * 0.5;
    ghost1.position.x = Math.cos(ghost1Angle) * 4;
    ghost1.position.z = Math.sin(ghost1Angle) * 4;
    ghost1.position.y = Math.sin(elapsedTime * 3);

    const ghost2Angle = -elapsedTime * 0.32;
    ghost2.position.x = Math.cos(ghost2Angle) * 5;
    ghost2.position.z = Math.sin(ghost2Angle) * 5;
    ghost2.position.y = Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5);

    const ghost3Angle = -elapsedTime * 0.18;
    ghost3.position.x = Math.cos(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32));
    ghost3.position.z = Math.sin(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.5));
    ghost3.position.y = Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5);

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
