import { CustomPass } from './CustomPass.js';
import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
export const CustomEffect = forwardRef<any, any>(function (props, ref) {
  const effect = new CustomPass(props);

  return <primitive ref={ref} object={effect} />;
});
