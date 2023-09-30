import type { BoxProps } from '@cutting/component-library';
import { Box } from '@cutting/component-library';
import { type ReactNode } from 'react';
import * as styles from './HomeMobile.css';
import { LazyBackgroundImage } from '~/components/LazyBackgroundImage/LazyBackgroundImage';

interface MobileContainerProps {
  children: ReactNode;
  backgroundImage: string;
  height?: BoxProps['height'];
}

export function MobileContainer({ backgroundImage, height = 'screen', children }: MobileContainerProps): JSX.Element {
  return (
    <Box
      component="section"
      className="section"
      position="relative"
      height={height}
      width="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box className={styles.bgWrap}>
        <LazyBackgroundImage backgroundImage={backgroundImage} backgroundStyle="repeat" />
      </Box>
      <LazyBackgroundImage className={styles.desktop} backgroundImage={backgroundImage} backgroundStyle="repeat" />
      {children}
    </Box>
  );
}
