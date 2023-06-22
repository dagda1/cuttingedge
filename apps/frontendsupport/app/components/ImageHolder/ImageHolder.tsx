import { Box } from '@cutting/component-library';
import type { ReactNode } from 'react';
import * as styles from './ImageHolder.css';

interface ImageHolderProps {
  children: ReactNode;
}
export function ImageHolder({ children }: ImageHolderProps): JSX.Element {
  return (
    <Box
      height="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      className={styles.imageHolder}
    >
      {children}
    </Box>
  );
}
