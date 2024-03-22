import { TopNav } from './Top.js';
import { Box } from '@cutting/component-library';

export function Header(): JSX.Element {
  return (
    <Box component="header" position="fixed" width="full" zIndex="modal" top={0} style={{ background: 'inherit' }}>
      <Box
        height="xxxlarge"
        paddingX={{ mobile: 'medium', tablet: 'medium' }}
        display="flex"
        alignItems="center"
        justifyContent="spaceAround"
        paddingY="small"
        overflowX="hidden"
        width="full"
      >
        <TopNav />
      </Box>
    </Box>
  );
}
