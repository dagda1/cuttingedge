import '@cutting/component-library/styles.css';
import { ApplicationLayout } from '@cutting/component-library';
import { useRef } from 'react';
import {
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  PerspectiveCamera,
  WebGLRenderer,
  AxesHelper,
  Clock,
} from 'three';

import * as styles from './global.css.js';
import { useParentSize } from '../../src/useParentSize/useParentSize.js';

export function App(): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width, height, ...rest } = useParentSize(ref, {
    debounceDelay: 100,
    initialValues: { width: undefined, height: undefined },
  });

  const tickFrame = useRef<number>();

  useLayoutEffect(() => {
    if (!canvasRef.current || !ref.current) {
      return;
    }

    const scene = new Scene();

    const geometry = new BoxGeometry(1, 1, 1);
    const material = new MeshBasicMaterial({ color: 0xff0000 });
    const mesh = new Mesh(geometry, material);

    scene.add(mesh);

    const camera = new PerspectiveCamera(75, width / height);

    camera.position.z = 3;

    scene.add(camera);

    const axesHelper = new AxesHelper(2);

    scene.add(axesHelper);

    mesh.rotation.x = Math.PI * 0.25;
    mesh.rotation.y = Math.PI * 0.25;

    camera.lookAt(mesh.position);
    const renderer = new WebGLRenderer({
      canvas: canvasRef.current,
    });

    renderer.setSize(width, height);

    const clock = new Clock();

    const run = () => {
      const elapsedTime = clock.getElapsedTime();

      mesh.rotation.y = elapsedTime;
      // camera.position.x = Math.cos(elapsedTime);
      // camera.position.y = Math.sin(elapsedTime);

      renderer.render(scene, camera);

      tickFrame.current = requestAnimationFrame(run);
    };

    run();
  }, [height, rest, width]);

  return (
    <ApplicationLayout theme="salesTheme" innerRef={ref}>
      <section className={styles.parent}>
        <canvas ref={canvasRef} className="webgl"></canvas>
      </section>
    </ApplicationLayout>
  );
}
