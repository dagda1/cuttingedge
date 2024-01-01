import type { BoxProps } from '@cutting/component-library';
import { Box } from '@cutting/component-library';
import { type ReactNode } from 'react';
import cs from 'classnames';
import * as styles from './HomePanel.css';

type HomePanelProps = {
  children: ReactNode;
  mode?: 'dark' | 'light';
  innerRef?: React.RefObject<HTMLDivElement>;
  className?: string;
} & BoxProps;

export function HomePanel({
  mode = 'dark',
  flexDirection = 'row',
  innerRef,
  className,
  children,
  ...rest
}: HomePanelProps): JSX.Element {
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
      zIndex="dropdown"
      {...rest}
    >
      {children}
    </Box>
  );
}
