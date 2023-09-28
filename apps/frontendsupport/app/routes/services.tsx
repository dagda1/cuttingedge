import { Box, PageBlock } from '@cutting/component-library';
import { Outlet, useLocation } from '@remix-run/react';
import { LazyBackgroundImage } from '~/components/LazyBackgroundImage/LazyBackgroundImage';

export default function Services(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <Box paddingTop="xxxlarge" display="flex" justifyContent="center" height="full">
      <PageBlock>
        <Outlet />
        {pathname !== '/services/home' && (
          <LazyBackgroundImage
            backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/o_20/v1690453264/code_mmdqb8.png"
            backgroundStyle="static"
          />
        )}
      </PageBlock>
    </Box>
  );
}
