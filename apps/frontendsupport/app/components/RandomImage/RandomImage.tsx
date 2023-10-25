import { Box } from '@cutting/component-library';
import { useInterval } from '@cutting/hooks';
import { useState } from 'react';
import * as styles from './RandomImage.css';
import cs from 'classnames';
import { LazyLoadedImage } from '../LazyLoadedImage/LazyLoadedImage';

const images1 = [
  { src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1690894100/vr_fmjy7g.png' },
  { src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1690027223/help_dkoexr.png' },
  { src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1690453264/code_mmdqb8.png' },
] as const;

const images2 = [
  { src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1690025905/struggle_yderkl.png' },
  { src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1690453218/rescue_xxxdk2.png' },
  { src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1690028939/clients_bwtgkq.png' },
];

const images3 = [
  { src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1698238140/man_llqfge.png' },
  { src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1698238135/keyboard_n1w8x0.png' },
  { src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1698238122/lock_vspq2e.png' },
];

const imageSets = [images1, images2, images3];

interface RandomImageProps {
  imageSet: 1 | 2 | 3;
  delay?: number;
  display: 'mobile' | 'tablet' | 'both';
}

function randomImage({ imageSet }: Pick<RandomImageProps, 'imageSet'>): string {
  const images = imageSets[imageSet - 1];
  const index = Math.floor(Math.random() * images.length);
  return images[index].src;
}

export function RandomImage({ imageSet, display, delay = 1500 }: RandomImageProps): JSX.Element {
  const dimensions = { width: 240, height: 153 };
  const [image, setImage] = useState(randomImage({ imageSet }));

  useInterval(() => {
    const nextImage = randomImage({ imageSet });

    setImage(nextImage);
  }, delay);

  return (
    <Box
      className={cs('hero-img', styles.container, {
        [styles.mobile]: display === 'mobile',
        [styles.tablet]: display === 'tablet',
      })}
      width="full"
      height="full"
    >
      <LazyLoadedImage width={dimensions.width} height={dimensions.height} alt="random" loading="lazy" src={image} />
    </Box>
  );
}
