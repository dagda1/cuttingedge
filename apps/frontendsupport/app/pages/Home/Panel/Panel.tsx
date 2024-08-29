import type { BoxProps } from '@cutting/component-library';
import { Box } from '@cutting/component-library';
import cs from 'classnames';
import { type ReactNode } from 'react';

import * as styles from './Panel.css';

type PanelProps = {
  children: ReactNode;
  mode?: 'dark' | 'light';
  innerRef?: React.RefObject<HTMLDivElement>;
  className?: string;
} & BoxProps;

export function Panel({
  mode = 'dark',
  flexDirection = 'row',
  innerRef,
  className,
  children,
  ...rest
}: PanelProps): JSX.Element {
  return (
    <Box
      component="section"
      className={cs('section', { [styles.white]: mode === 'light', [styles.dark]: mode === 'dark' }, className)}
      position="relative"
      width="full"
      display="flex"
      flexDirection={flexDirection}
      justifyContent="center"
      alignItems="center"
      ref={innerRef}
      {...rest}
    >
      {children}
    </Box>
  );
}
