import type { ReactNode, Ref } from 'react';
import cs from 'classnames';
import { Box } from '@cutting/component-library';
import * as styles from './Panel.css';

interface PanelProps {
  className?: string;
  children: ReactNode;
  innerRef?: Ref<HTMLDivElement>;
}

export function Panel({ className, innerRef, children, ...props }: PanelProps) {
  return (
    <Box height="full" width="full" className={cs(styles.panel, 'panel', className)} ref={innerRef} {...props}>
      {children}
    </Box>
  );
}
