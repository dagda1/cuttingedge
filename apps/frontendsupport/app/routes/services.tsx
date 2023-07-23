import { Box, PageBlock } from '@cutting/component-library';
import { Outlet } from '@remix-run/react';
import { background } from '~/pages/Panels/Services/Service.css';
import cs from 'classnames';
import { bg } from '~/pages/Home/HomeMobile.css';

export default function Services(): JSX.Element {
  return (
    <Box marginTop="xxxlarge" display="flex" justifyContent="center">
      <Box className={cs(bg, background)}></Box>
      <PageBlock>
        <Outlet />
      </PageBlock>
    </Box>
  );
}
