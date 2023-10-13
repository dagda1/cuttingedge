import { Box } from '@cutting/component-library';
import { useInterval } from '@cutting/hooks';
import { useState } from 'react';
import { Image } from '@unpic/react';

function randomImage(images: string[] = []): string {
  const index = Math.floor(Math.random() * 5);

  console.log(index, images);

  // return images[index];
  return `https://picsum.photos/240/152.jpg?random=${Date.now()}`;
}

interface RandomImageProps {
  images?: string[];
  delay?: number;
}

export function RandomImage({ images, delay = 1500 }: RandomImageProps): JSX.Element {
  const [image, setImage] = useState(randomImage(images));

  useInterval(() => {
    const nextImage = randomImage(images);

    setImage(nextImage);
  }, delay);

  return (
    <Box className="hero-image">
      <Image layout="constrained" loading="eager" src={image} width={240} height={152} />
    </Box>
  );
}
