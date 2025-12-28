import { assert } from '@cutting/assert';
import type { BoxProps } from '@cutting/component-library';
import { Box } from '@cutting/component-library';
import { useInterval } from '@cutting/hooks';
import cs from 'classnames';
import { buildImageUrl, extractPublicId, setConfig } from 'cloudinary-build-url';
import { useState } from 'react';

import { LazyLoadedImage } from '../LazyLoadedImage/LazyLoadedImage';
import * as styles from './RandomImage.css';

setConfig({
  cloudName: 'ddospxsc8',
});

function buildCloudinaryUrl(imageUrl: string): string {
  return buildImageUrl(extractPublicId(imageUrl), {
    transformations: {
      resize: {
        type: 'scale',
        width: 200,
        height: 120,
      },
    },
  });
}

const images1 = [
  {
    src: buildCloudinaryUrl('https://res.cloudinary.com/ddospxsc8/image/upload/v1690894100/vr_fmjy7g.png'),
  },
  {
    src: buildCloudinaryUrl('https://res.cloudinary.com/ddospxsc8/image/upload/v1690027223/help_dkoexr.png'),
  },
  {
    src: buildCloudinaryUrl('https://res.cloudinary.com/ddospxsc8/image/upload/v1690453264/code_mmdqb8.png'),
  },
] as const;

const images2 = [
  { src: buildCloudinaryUrl('https://res.cloudinary.com/ddospxsc8/image/upload/v1690025905/struggle_yderkl.png') },
  {
    src: buildCloudinaryUrl('https://res.cloudinary.com/ddospxsc8/image/upload/v1690453218/rescue_xxxdk2.png'),
  },
  {
    src: buildCloudinaryUrl('https://res.cloudinary.com/ddospxsc8/image/upload/v1698238122/lock_vspq2e.png'),
  },
] as const;

const images3 = [
  {
    src: buildCloudinaryUrl('https://res.cloudinary.com/ddospxsc8/image/upload/v1698238140/man_llqfge.png'),
  },
  {
    src: buildCloudinaryUrl('https://res.cloudinary.com/ddospxsc8/image/upload/v1698238135/keyboard_n1w8x0.png'),
  },
  {
    src: buildCloudinaryUrl('https://res.cloudinary.com/ddospxsc8/image/upload/v1698238122/lock_vspq2e.png'),
  },
] as const;

const imageSets = [images1, images2, images3];

type RandomImageProps = {
  imageSet: 1 | 2 | 3;
  delay?: number;
  mode: 'mobile' | 'desktop' | 'both';
} & BoxProps;

function randomImage({ imageSet }: Pick<RandomImageProps, 'imageSet'>): string {
  const images = imageSets[imageSet - 1];

  assert(!!images, `no images at ${imageSet - 1}`);

  const index = Math.floor(Math.random() * images.length);

  const image = images[index];

  assert(!!image, `no image at index ${index}`);

  return image.src;
}

export function RandomImage({ imageSet, mode, delay = 1500, ...props }: RandomImageProps): JSX.Element {
  const dimensions = mode === 'mobile' ? { width: 200, height: 120 } : { width: 240, height: 153 };
  const [image, setImage] = useState(randomImage({ imageSet }));

  useInterval(() => {
    const nextImage = randomImage({ imageSet });

    setImage(nextImage);
  }, delay);

  return (
    <Box
      className={cs('hero-img', styles.container, {
        [styles.mobile]: mode === 'mobile',
        [styles.desktop]: mode === 'desktop',
      })}
      width="full"
      height="full"
      {...props}
    >
      <LazyLoadedImage width={dimensions.width} height={dimensions.height} alt="random" loading="lazy" src={image} />
    </Box>
  );
}
