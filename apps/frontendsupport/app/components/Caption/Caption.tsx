import { Box } from '@cutting/component-library';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function Caption({ children }: Props): JSX.Element {
  return <Box paddingX={{ mobile: 'medium', desktop: 'large' }}>{children}</Box>;
}
