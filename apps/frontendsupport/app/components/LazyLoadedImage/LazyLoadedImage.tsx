import { blurhashToGradientCssObject } from '@unpic/placeholder';
import { Image, type ImageProps } from '@unpic/react';
import { useMemo } from 'react';
import { getImagePropsFromMap } from './getImagePropsFromMap';

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

  const { blurhash, ...imageProps } = image;

  const placeholderStyle = useMemo(() => blurhashToGradientCssObject(blurhash), [blurhash]);

  console.dir({ placeholderStyle });

  return (
    <Image
      loading={loading}
      layout={layout as any}
      width={width ?? imageProps.width}
      height={height ?? imageProps.height}
      style={placeholderStyle}
      src={src}
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
