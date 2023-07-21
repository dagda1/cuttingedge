import { Box } from '@cutting/component-library';
import type { MotionImageProps } from '../../../components/MotionImage/MotionImage';
import type { ReactNode } from 'react';
import { Image } from '@unpic/react';

export interface ParallaxPanelProps {
  children: ReactNode;
  topImages: [MotionImageProps] | [MotionImageProps, MotionImageProps, MotionImageProps];
  bottomImages: [MotionImageProps] | [MotionImageProps, MotionImageProps, MotionImageProps];
}

export function ParallaxPanel({ topImages, children, bottomImages }: ParallaxPanelProps): JSX.Element {
  return (
    <Box
      height="full"
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent="spaceEvenly"
      marginX={{ mobile: 'medium', desktop: 'none' }}
    >
      <Box display="flex" justifyContent="spaceAround" alignItems="center">
        {topImages.map(({ src, ...props }) => (
          <Image key={src} src={src as string} className="parallax" {...props} />
        ))}
      </Box>
      <Box display="flex" justifyContent="center">
        {children}
      </Box>
      <Box display="flex" justifyContent="spaceAround" alignItems="center">
        {bottomImages.map(({ src, ...props }) => (
          <Image key={src} src={src as string} className="parallax" {...props} />
        ))}
      </Box>
    </Box>
  );
}
