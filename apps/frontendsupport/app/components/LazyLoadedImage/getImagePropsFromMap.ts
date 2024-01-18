import blurhashMap from '../../json/blurhash_image_map.json';
import { assert } from '@cutting/assert';

export function getImagePropsFromMap(url: string) {
  const urlParts = url.split('/');

  const fileName = urlParts.slice(-1)[0];

  const image = blurhashMap.find((m) => m.id === fileName);

  assert(!!image, `no image with fileName ${fileName}`);

  return image;
}
