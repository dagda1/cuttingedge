import { type ReactNode } from 'react';
import * as styles from './ContentBlock.css.js';
import type { BoxProps } from '../../molecules/Box/Box.js';
import { Box } from '../../molecules/Box/Box.js';

export interface ContentBlockProps {
  children: ReactNode;
  width?: BoxProps['maxWidth'];
  height?: BoxProps['height'];
}

export function ContentBlock({ width = 'medium', children }: ContentBlockProps): JSX.Element {
  return (
    <Box width="full" maxWidth={width} className={styles.marginAuto}>
      {children}
    </Box>
  );
}
