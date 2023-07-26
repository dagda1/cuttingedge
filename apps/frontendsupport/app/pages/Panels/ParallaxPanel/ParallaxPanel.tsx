import { Box } from '@cutting/component-library';
import type { MotionImageProps } from '../../../components/MotionImage/MotionImage';
import type { ReactNode } from 'react';
import { Image } from '@unpic/react';

type Images = [MotionImageProps, MotionImageProps, MotionImageProps];

export interface ParallaxPanelProps {
  children: ReactNode;
  topImages: Images;
  bottomImages: Images;
}

type Resolution = 'mobile' | 'tablet';

export function ImageContainer({ images, resolution }: { images: Images; resolution: Resolution }): JSX.Element {
  const resolvedImages = resolution === 'mobile' ? [images[1]] : images;

  return (
    <Box
      justifyContent="spaceAround"
      alignItems="center"
      display={{
        mobile: resolution === 'mobile' ? 'flex' : 'none',
        tablet: resolution === 'tablet' ? 'flex' : 'none',
      }}
    >
      {resolvedImages.map(({ src, ...props }) => (
        <Image key={src} src={src as string} layout="constrained" className="parallax" {...props} />
      ))}
    </Box>
  );
}

export function ImagesContainer({ images }: { images: Images }): JSX.Element {
  const resolutions: Resolution[] = ['mobile', 'tablet'];

  return (
    <>
      {resolutions.map((resolution) => (
        <ImageContainer key={resolution} resolution={resolution} images={images} />
      ))}
    </>
  );
}

export function ParallaxPanel({ topImages, children, bottomImages }: ParallaxPanelProps): JSX.Element {
  return (
    <Box height="full" position="relative" display="flex" flexDirection="column" justifyContent="spaceAround">
      <ImagesContainer images={topImages} />
      <Box display="flex" justifyContent="center">
        {children}
      </Box>
      <ImagesContainer images={bottomImages} />
    </Box>
  );
}
