import { Box } from '@cutting/component-library';
import type { MotionImageProps } from '../../../components/MotionImage/MotionImage';
import { MotionImage } from '../../../components/MotionImage/MotionImage';
import type { ReactNode } from 'react';

export interface ParallaxPanelProps {
  children: ReactNode;
  topImages: [MotionImageProps] | [MotionImageProps, MotionImageProps, MotionImageProps];
  bottomImages: [MotionImageProps] | [MotionImageProps, MotionImageProps, MotionImageProps];
}

export function ParallaxPanel({ topImages, children, bottomImages }: ParallaxPanelProps): JSX.Element {
  return (
    <Box height="full" position="relative" display="flex" flexDirection="column" justifyContent="spaceEvenly">
      <Box display="flex" justifyContent="spaceAround" alignItems="center">
        {topImages.map(({ src, ...props }) => (
          <MotionImage key={src} src={src} {...props} />
        ))}
      </Box>
      {children}
      <Box display="flex" justifyContent="spaceAround" alignItems="center">
        {bottomImages.map(({ src, ...props }) => (
          <MotionImage key={src} src={src} {...props} />
        ))}
      </Box>
    </Box>
  );
}
