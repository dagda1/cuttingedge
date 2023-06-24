import type { ReactNode, Ref } from 'react';
import cs from 'classnames';
import { Box } from '@cutting/component-library';

interface PanelProps {
  className?: string;
  children: ReactNode;
  innerRef?: Ref<HTMLDivElement>;
}

export function Panel({ className, innerRef, children, ...props }: PanelProps) {
  return (
    <Box
      height="screen"
      width="screen"
      className={cs('panel', className)}
      ref={innerRef}
      {...props}
      style={{ marginRight: '30vw' }}
    >
      <Box height="screen" width="screen">
        {children}
      </Box>
    </Box>
  );
}
