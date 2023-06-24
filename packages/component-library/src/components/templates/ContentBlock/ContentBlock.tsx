import { type ReactNode } from 'react';
import * as styles from './ContentBlock.css';
import type { BoxProps } from '../../molecules/Box/Box';
import { Box } from '../../molecules/Box/Box';

export interface ContentBlockProps {
  children: ReactNode;
  width?: BoxProps['maxWidth'];
}

export function ContentBlock({ width = 'medium', children }: ContentBlockProps): JSX.Element {
  return (
    <Box width="full" maxWidth={width} className={styles.marginAuto}>
      {children}
    </Box>
  );
}
