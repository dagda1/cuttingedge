import { blurhashToCssGradientString } from '@unpic/placeholder';
import { Image, type ImageProps } from '@unpic/react';
import { useMemo } from 'react';
import { getImagePropsFromMap } from './getImagePropsFromMap';

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

  const { blurhash, ...imageProps } = image;

  const placeholder = useMemo(() => blurhashToCssGradientString(blurhash), [blurhash]);

  return (
    <Image
      loading={loading}
      layout={layout as any}
      width={width ?? imageProps.width}
      height={height ?? imageProps.height}
      background={placeholder}
      src={src}
      {...props}
    />
  );
}
