import { Box } from '@cutting/component-library';
import type { ReactNode } from 'react';
import * as styles from './HomeMobile.css';

interface MobileContainerProps {
  children: ReactNode;
}
export function MobileContainer({ children }: MobileContainerProps): JSX.Element {
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
      <Box className={styles.bg}></Box>
      {children}
    </Box>
  );
}
