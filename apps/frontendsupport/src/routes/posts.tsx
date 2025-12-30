import { Box, Heading, Stack } from '@cutting/component-library';
import { Outlet } from 'react-router';

import { ContactButtons } from '~/components/Contact/ContactButtons';

export default function Services(): JSX.Element {
  return (
    <>
      <Outlet />
      <Box>
        <Stack space="large" align="center">
          <Heading level="2">Do you need frontend help?</Heading>
          <Box marginBottom="large">
            <ContactButtons justify="center" />
          </Box>
        </Stack>
      </Box>
    </>
  );
}
