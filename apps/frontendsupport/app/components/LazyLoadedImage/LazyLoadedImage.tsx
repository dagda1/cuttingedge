import { blurhashToCssGradientString } from '@unpic/placeholder';
import { Image, type ImageProps } from '@unpic/react';
import { useCallback, useMemo, useState } from 'react';
import { getImagePropsFromMap } from './getImagePropsFromMap';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';
import { assert } from '@cutting/assert';

type Layout = ImageProps['layout'];

type LazyLoadedImageProps = Omit<ImageProps, 'layout'> & { layout?: Layout } & React.RefAttributes<HTMLImageElement>;

export function LazyLoadedImage({
  src,
  width,
  height,
  loading = 'lazy',
  layout = 'constrained',
  ...props
}: LazyLoadedImageProps): JSX.Element {
  const image = getImagePropsFromMap(src);
  const [loaded, setLoaded] = useState(false);

  const { blurhash, ...imageProps } = image;

  const placeholderStyle = useMemo(() => (loaded ? '' : blurhashToCssGradientString(blurhash)), [blurhash, loaded]);

  const imgLoadedHandler = useCallback(() => setLoaded(true), []);

  useIsomorphicLayoutEffect(() => {
    if (typeof global.document === 'undefined' || loaded) {
      return;
    }

    const img = document.createElement('img');

    img.addEventListener('load', imgLoadedHandler, { once: true });

    img.addEventListener('error', imgLoadedHandler);

    img.src = src;
  }, [imgLoadedHandler, loaded, src]);

  const resolvedWidth = layout === 'constrained' ? width ?? imageProps.width : undefined;
  const resolvedHeight = layout === 'constrained' ? height ?? imageProps.height : undefined;

  assert(typeof resolvedWidth === 'number');
  assert(typeof resolvedHeight === 'number');

  return (
    <Image
      loading={loading}
      layout={layout as any}
      width={resolvedWidth}
      height={resolvedHeight}
      background={placeholderStyle}
      src={src}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  );
}
