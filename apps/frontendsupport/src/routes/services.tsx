import { Box, PageBlock } from '@cutting/component-library';
import { Outlet } from 'react-router';

export default function Services(): JSX.Element {
  return (
    <Box paddingTop="xxxlarge" display="flex" justifyContent="center" height="full">
      <PageBlock>
        <Outlet />
      </PageBlock>
    </Box>
  );
}
