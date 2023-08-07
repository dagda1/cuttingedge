import { Box, PageBlock } from '@cutting/component-library';
import { Outlet, useLocation } from '@remix-run/react';
import { background } from '~/components/Posts/Posts.css';
import cs from 'classnames';

export default function Services(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <Box paddingTop="xxxlarge" display="flex" justifyContent="center" height="full">
      <PageBlock>
        <Outlet />
        <Box className={cs({ [background]: pathname !== '/services/home' })} />
      </PageBlock>
    </Box>
  );
}
