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
} & Pick<BoxProps, 'height' | 'flexDirection' | 'paddingY' | 'paddingTop' | 'paddingBottom' | 'maxWidth'>;

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
      className={cs('section', { [styles.white]: mode === 'light' }, className)}
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
