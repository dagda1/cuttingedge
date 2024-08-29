import { Box } from '@cutting/component-library';

import { TopNav } from './Top.js';

export function Header(): JSX.Element {
  return (
    <Box component="header" position="fixed" width="full" zIndex="modal" style={{ background: 'inherit' }}>
      <Box
        height="xxxlarge"
        display="flex"
        alignItems="center"
        justifyContent="spaceAround"
        paddingY="small"
        width="full"
      >
        <TopNav />
      </Box>
    </Box>
  );
}
