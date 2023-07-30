import { Box, Heading, Stack, Text } from '@cutting/component-library';
import { background } from '~/pages/Panels/Services/Service.css';
import { ContactForm } from '@cutting/react-hook-form-components';

export default function Contact(): JSX.Element {
  return (
    <>
      <Box className={background}></Box>
      <Box marginTop="xxxlarge" width="full" height="full" position="relative" zIndex="modal">
        <Stack space="large" align="center">
          <Heading level="1">Let's Talk</Heading>
          <Heading level="2">How can we help?</Heading>
          <ContactForm />
        </Stack>
      </Box>
    </>
  );
}
