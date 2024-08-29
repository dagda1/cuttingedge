import { assert } from '@cutting/assert';

import blurhashMap from '../../json/blurhash_image_map.json';

interface BlurHashImage {
  id: string;
  url: string;
  blurhash: string;
  width: number;
  height: number;
}

export function getImagePropsFromMap(url: string): BlurHashImage {
  const urlParts = url.split('/');

  let fileName = urlParts.slice(-1)[0];

  if (fileName.endsWith('.png') === false) {
    fileName = `${fileName}.png`;
  }

  const image = blurhashMap.find((m) => m.id === fileName);

  assert(!!image, `no image with fileName ${fileName}`);

  return image;
}
