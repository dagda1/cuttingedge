import { Box } from '@cutting/component-library';
import type { ReactNode } from 'react';
import * as styles from './HomeMobile.css';

interface MobileContainerProps {
  children: ReactNode;
  backgroundImage?: string;
}
export function MobileContainer({ backgroundImage, children }: MobileContainerProps): JSX.Element {
  return (
    <Box
      component="section"
      className="section"
      position="relative"
      height="screen"
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
