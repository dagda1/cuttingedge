import { Box } from '@cutting/component-library';
import type { ReactNode } from 'react';

interface TripleImageHolderProps {
  children: ReactNode;
}
export function TripleImageHolder({ children }: TripleImageHolderProps): JSX.Element {
  return (
    <Box
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      margin="xlarge"
      style={{ border: '10px solid red' }}
      flexGrow={1}
    >
      {children}
    </Box>
  );
}
