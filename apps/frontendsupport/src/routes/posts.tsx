import { Box, Heading, Stack } from '@cutting/component-library';
import { ContactButtons } from '@cutting/react-hook-form-components';
import { Outlet } from 'react-router';

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
