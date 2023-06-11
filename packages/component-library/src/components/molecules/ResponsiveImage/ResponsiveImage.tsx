import { breakpoints } from '~/style';
import { Box, type BoxProps } from '../Box/Box';
import * as styles from './ResponsiveImage.css';

type ResponsiveImageProps = BoxProps & {
  mobile: string;
  tablet: string;
  mobileSize: string;
  src: string;
  alt: string;
};

export function ResponsiveImage({ mobile, mobileSize, tablet, src, alt, ...rest }: ResponsiveImageProps): JSX.Element {
  return (
    <Box className={styles.responsiveImageContainer} {...rest}>
      <img
        srcSet={`${mobile}, ${tablet}`}
        sizes={`(max-width: ${breakpoints.tablet}px) ${mobileSize},
100px`}
        src={src}
        alt={alt}
      />
    </Box>
  );
}
