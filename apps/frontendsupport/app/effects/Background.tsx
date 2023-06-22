import { useThree } from '@react-three/fiber';
import { Plane, useTexture } from '@react-three/drei';
import { RepeatWrapping, Vector2 } from 'three';
import displacement from '~/images/displacement.jpg';
import normalMap2 from '~/images/NormalMap2.png';

export function Background() {
  const { displacementMap, normalMap } = useTexture({ displacementMap: displacement, normalMap: normalMap2 });

  normalMap.anisotropy = 16;

  normalMap.wrapS = normalMap.wrapT = RepeatWrapping;
  normalMap.repeat = new Vector2(3, 3);

  displacementMap.wrapS = displacementMap.wrapT = RepeatWrapping;
  displacementMap.repeat = new Vector2(1, 1);

  displacementMap.anisotropy = 16;
  const viewport = useThree((state) => state.viewport);

  return (
    <group>
      <Plane
        scale={[viewport.width / 2, viewport.height / 0.95, 1]}
        rotation={[0, 0, 0]}
        position={[0, 0, 0]}
        args={[2, 1, 2, 2]}
      >
        <meshPhysicalMaterial
          color="#121423"
          metalness={0.9}
          roughness={0.3}
          displacementMap={displacementMap}
          displacementScale={0.1}
          normalMap={normalMap}
          normalScale={0.25 as any}
        />
      </Plane>
    </group>
  );
}
