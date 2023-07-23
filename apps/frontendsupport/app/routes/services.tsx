import { Box, PageBlock } from '@cutting/component-library';
import { Outlet } from '@remix-run/react';

export default function Services(): JSX.Element {
  return (
    <Box marginTop="xxxlarge" display="flex" justifyContent="center">
      <PageBlock>
        <Outlet />
      </PageBlock>
    </Box>
  );
}
