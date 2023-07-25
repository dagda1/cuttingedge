import { Box } from '@cutting/component-library';
import type { MotionImageProps } from '../../../components/MotionImage/MotionImage';
import type { ReactNode } from 'react';
import { Image } from '@unpic/react';

type Images = [MotionImageProps] | [MotionImageProps, MotionImageProps, MotionImageProps];

export interface ParallaxPanelProps {
  children: ReactNode;
  topImages: Images;
  bottomImages: Images;
}

export function ImagesContainer({ images }: { images: Images }): JSX.Element {
  return (
    <Box display="flex" justifyContent="spaceAround" alignItems="center">
      {images.map(({ src, ...props }) => (
        <Image key={src} src={src as string} layout="constrained" className="parallax" {...props} />
      ))}
    </Box>
  );
}

export function ParallaxPanel({ topImages, children, bottomImages }: ParallaxPanelProps): JSX.Element {
  return (
    <Box height="full" position="relative" display="flex" flexDirection="column" justifyContent="spaceAround">
      {/* <ImagesContainer images={topImages} /> */}
      <Box display="flex" justifyContent="center">
        {children}
      </Box>
      {/* <ImagesContainer images={bottomImages} /> */}
    </Box>
  );
}
