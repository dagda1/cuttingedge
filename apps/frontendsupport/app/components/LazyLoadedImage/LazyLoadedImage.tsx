import { blurhashToGradientCssObject } from '@unpic/placeholder';
import { Image, type ImageProps } from '@unpic/react';
import { useCallback, useMemo, useState } from 'react';
import { getImagePropsFromMap } from './getImagePropsFromMap.js';
import { useIsomorphicLayoutEffect } from '@cutting/hooks';

type Layout = ImageProps['layout'];

type LazyLoadedImageProps = Omit<ImageProps, 'layout'> & { layout?: Layout } & React.RefAttributes<HTMLImageElement>;

function BlurhashImage({
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

  const placeholderStyle = useMemo(() => (loaded ? {} : blurhashToGradientCssObject(blurhash)), [blurhash, loaded]);

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

  return (
    <Image
      loading={loading}
      layout={layout as any}
      width={width ?? imageProps.width}
      height={height ?? imageProps.height}
      src={src}
      // @ts-ignore
      style={placeholderStyle}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  );
}

export function LazyLoadedImage(props: LazyLoadedImageProps): JSX.Element {
  if (props.src.endsWith('gif')) {
    return <Image {...(props as any)} />;
  }

  return <BlurhashImage {...props} />;
}
