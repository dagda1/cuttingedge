import type { ReactNode, Ref } from 'react';
import cs from 'classnames';
import { Box } from '@cutting/component-library';

interface PanelProps {
  className?: string;
  children: ReactNode;
  innerRef?: Ref<HTMLDivElement>;
}

export function Panel({ className, innerRef, ...props }: PanelProps) {
  return <Box height="screen" className={cs('panel', className)} ref={innerRef} {...props} />;
}
