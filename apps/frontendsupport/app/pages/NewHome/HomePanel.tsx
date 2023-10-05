import type { BoxProps } from '@cutting/component-library';
import { Box } from '@cutting/component-library';
import { type ReactNode } from 'react';
import cs from 'classnames';
import * as styles from './HomePanel.css';

interface HomePanelProps {
  children: ReactNode;
  height?: BoxProps['height'];
  mode?: 'dark' | 'light';
}

export function HomePanel({ height = 'full', mode = 'dark', children }: HomePanelProps): JSX.Element {
  return (
    <Box
      component="section"
      className={cs('section', { [styles.white]: mode === 'light' })}
      position="relative"
      height={height}
      width="full"
      display="flex"
      justifyContent="center"
    >
      {children}
    </Box>
  );
}
