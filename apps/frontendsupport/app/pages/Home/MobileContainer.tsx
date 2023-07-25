import type { BoxProps } from '@cutting/component-library';
import { Box } from '@cutting/component-library';
import type { ReactNode } from 'react';
import * as styles from './HomeMobile.css';

interface MobileContainerProps {
  children: ReactNode;
  backgroundImage?: string;
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
      <Box
        style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
        className={styles.bg}
      ></Box>
      {children}
    </Box>
  );
}
