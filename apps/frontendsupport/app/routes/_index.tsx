import { LightSource } from '~/effects/Lightsource';
import { Canvas } from '@react-three/fiber';
import { ACESFilmicToneMapping, LinearToneMapping } from 'three';
import { Suspense } from 'react';
import { Loader } from '@react-three/drei';
import { Leva } from 'leva';
import { Background } from '~/effects/Background';
import Effects from '~/effects/Effects';
import { Cursor } from '~/components/Cursor/Cursor';
import { Home as HomePage } from '~/pages/Home/Home';

export default function Home() {
  return (
    <>
      {/* <Canvas
        id="my-canvas"
        className="fixed"
        gl={{
          antialias: false,
          toneMapping: ACESFilmicToneMapping,
          outputEncoding: LinearToneMapping as any,
          toneMappingExposure: 3,
        }}
        dpr={1}
      >
        <Suspense fallback={null}>
          <LightSource />
          <Background />
          <Effects />
        </Suspense>
        <Leva collapsed hidden />
      </Canvas>
      <Cursor /> */}

      {/* <Overlay /> */}
      <HomePage />
      <Loader />
    </>
  );
}
