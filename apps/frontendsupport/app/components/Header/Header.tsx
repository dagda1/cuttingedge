import { TopNav } from './Top';
import { Box } from '@cutting/component-library';

export function Header(): JSX.Element {
  return (
    <Box component="header" position="fixed" width="full" zIndex="sticky" style={{ background: 'inherit' }}>
      <Box
        height="xxxlarge"
        paddingX={{ mobile: 'medium' }}
        display="flex"
        alignItems="center"
        justifyContent="spaceAround"
        paddingY="small"
        overflowX="hidden"
      >
        <TopNav />
      </Box>
    </Box>
  );
}
