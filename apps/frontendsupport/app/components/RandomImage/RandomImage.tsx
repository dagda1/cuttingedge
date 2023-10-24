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
  { src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1698165161/typescript_bptvjm.png' },
  { src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1691673246/github_wt7a34.png' },
  { src: 'https://res.cloudinary.com/ddospxsc8/image/upload/v1689953389/frontendsupport/react_ejegqn.png' },
];

const imageSets = [images1, images2];

interface RandomImageProps {
  imageSet: 1 | 2;
  delay?: number;
  display: 'mobile' | 'desktop' | 'both';
}

function randomImage({ imageSet }: Pick<RandomImageProps, 'imageSet'>): string {
  const images = imageSets[imageSet - 1];
  const index = Math.floor(Math.random() * images.length);
  return images[index].src;
}

export function RandomImage({ imageSet, display, delay = 1500 }: RandomImageProps): JSX.Element {
  const dimensions = { width: 227, height: 144 };
  const [image, setImage] = useState(randomImage({ imageSet }));

  useInterval(() => {
    const nextImage = randomImage({ imageSet });

    setImage(nextImage);
  }, delay);

  return (
    <Box className={cs('hero-img', { [styles.mobile]: display === 'mobile', [styles.desktop]: display === 'desktop' })}>
      <LazyLoadedImage width={dimensions.width} height={dimensions.height} alt="random" loading="lazy" src={image} />
    </Box>
  );
}
