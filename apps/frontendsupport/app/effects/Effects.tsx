import React, { useRef } from 'react';
import { EffectComposer, Vignette, Bloom, HueSaturation } from '@react-three/postprocessing';

import { CustomEffect } from './CustomEffect';
import { useControls } from 'leva';

export default function Effects() {
  const drunkProps = useControls('Drunk Effect', {
    frequency: { value: 2, min: 1, max: 20 },
    amplitude: { value: 0.1, min: 0, max: 1 },
  });

  const drunkRef = useRef();

  return (
    <EffectComposer disableNormalPass multisampling={0}>
      <Bloom mipmapBlur intensity={1.8} luminanceThreshold={0.9} radius={0.9} />
      <Vignette offset={0.1} darkness={0.85} eskil={false} />
      <HueSaturation
        hue={0.1} // hue in radians
        saturation={0.15} // saturation in radians
      />
      <CustomEffect ref={drunkRef} {...drunkProps} />
    </EffectComposer>
  );
}
