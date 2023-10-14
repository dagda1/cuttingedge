import { Box } from '@cutting/component-library';
import { useInterval } from '@cutting/hooks';
import { useState } from 'react';

function randomImage({ width, height }: { width: number; height: number }): string {
  // const index = Math.floor(Math.random() * 5);
  // return images[index];
  return `https://picsum.photos/${width}/${height}.jpg?random=${Date.now()}`;
}

interface RandomImageProps {
  images?: string[];
  delay?: number;
  display: 'mobile' | 'desktop';
}

export function RandomImage({ display, delay = 1500 }: RandomImageProps): JSX.Element {
  const dimensions = display === 'mobile' ? { width: 131, height: 82 } : { width: 240, height: 152 };
  const [image, setImage] = useState(randomImage(dimensions));

  useInterval(() => {
    const nextImage = randomImage(dimensions);

    setImage(nextImage);
  }, delay);

  return (
    <Box
      className="hero-img"
      display={{ mobile: display === 'mobile' ? 'flex' : 'none', desktop: display === 'desktop' ? 'flex' : 'none' }}
    >
      <img
        alt="random"
        loading="lazy"
        src={image}
        width={dimensions.width}
        height={dimensions.height}
        style={{ maxWidth: dimensions.width, maxHeight: dimensions.height }}
      />
    </Box>
  );
}
