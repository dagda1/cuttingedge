import { assignInlineVars } from '@vanilla-extract/dynamic';

import { breakpoints, type Dimensions } from '~/style/breakpoints';

import { Box, type BoxProps } from '../Box/Box';
import * as styles from './ResponsiveImage.css';

interface Image {
  src: string;
  dimensions: Dimensions;
}

type ResponsiveImageProps = Omit<BoxProps, 'height' | 'width'> & {
  mobile: Image;
  tablet: Image;
  src: string;
  alt: string;
};

export function ResponsiveImage({ mobile, tablet, src, alt, ...rest }: ResponsiveImageProps): JSX.Element {
  return (
    <Box
      {...rest}
      className={styles.imageDimensions}
      style={assignInlineVars({
        [styles.mobileWidth]: `${mobile.dimensions.width}px`,
        [styles.mobileHeight]: `${mobile.dimensions.height}px`,
        [styles.tabletWidth]: `${tablet.dimensions.width}px`,
        [styles.tabletHeight]: `${tablet.dimensions.height}px`,
      })}
    >
      <img
        srcSet={`${mobile.src} ${mobile.dimensions.width}w, ${tablet.src} ${tablet.dimensions.width}w`}
        sizes={`(max-width: ${breakpoints.tablet}px) ${mobile.dimensions.width}px,
         ${tablet.dimensions.width}px`}
        src={src}
        alt={alt}
      />
    </Box>
  );
}
