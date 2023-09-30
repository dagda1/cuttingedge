import { StrictMode } from 'react';
import { HomeMobile } from './HomeMobile';
import { Box } from '@cutting/component-library';

export function Home(): JSX.Element {
  return (
    <StrictMode>
      <Box height="full">
        {/* <FrontPage /> */}
        {/* <HomeDesktop /> */}
        <HomeMobile />
      </Box>
    </StrictMode>
  );
}
