// import { HomeDesktop } from './HomeDesktop';
import { HomeMobile } from './HomeMobile';
import { Box } from '@cutting/component-library';

export function Home(): JSX.Element {
  return (
    <Box height="full">
      {/* <FrontPage /> */}
      {/* <HomeDesktop /> */}
      <HomeMobile />
    </Box>
  );
}
