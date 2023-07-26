import { Box, Heading, Stack, Text } from '@cutting/component-library';
import cs from 'classnames';
import { background } from '~/pages/Panels/Services/Service.css';
import { bg } from '~/pages/Home/HomeMobile.css';
import { ContactForm } from '@cutting/react-hook-form-components';

export default function Contact(): JSX.Element {
  return (
    <>
      <Box className={cs(bg, background)}></Box>
      <Box marginTop="xxxlarge" width="full" height="full">
        <Stack space="large" align="center">
          <Heading level="2">Let's Talk</Heading>
          <Text component="p">How can we help?</Text>
          <ContactForm />
        </Stack>
      </Box>
    </>
  );
}
