import { Box, PageBlock } from '@cutting/component-library';
import { Outlet } from '@remix-run/react';
import { background } from '~/components/Posts/Posts.css';

export default function Services(): JSX.Element {
  return (
    <Box paddingTop="xxxlarge" display="flex" justifyContent="center" height="full">
      <PageBlock>
        <Outlet />
        <Box className={background} />
      </PageBlock>
    </Box>
  );
}
