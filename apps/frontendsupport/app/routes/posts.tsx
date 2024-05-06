import { Box, Heading, Stack } from '@cutting/component-library';

import { Outlet } from '@remix-run/react';
import { ContactButtons } from '~/components/ContactButtons';

export default function Services(): JSX.Element {
  return (
    <>
      <Outlet />
      <Box>
        <Stack space="large" align="center">
          <Heading level="2">Do you need frontend help?</Heading>
          <Box marginBottom="large">
            <ContactButtons justify="center" callType="chat" />
          </Box>
        </Stack>
      </Box>
    </>
  );
}
