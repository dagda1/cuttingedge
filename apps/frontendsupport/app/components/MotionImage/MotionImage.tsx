import type { ImgHTMLAttributes } from 'react';
import cs from 'classnames';
import { Box, type BoxProps } from '@cutting/component-library';

type MotionImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt'> & {
  type: 'parallax' | 'static';
  alt: string;
} & Pick<BoxProps, 'position'>;

export function MotionImage({ type, children, alt, position, ...rest }: MotionImageProps): JSX.Element {
  return (
    <Box component="figure" position={position} className={cs({ parallax: type === 'parallax' })}>
      <img alt={alt} {...rest} />
    </Box>
  );
}
