import { Box, Heading, Stack } from '@cutting/component-library';
import { background } from '~/pages/Panels/Services/Service.css';
import { ContactForm } from '@cutting/react-hook-form-components';
import * as styles from './Contact.css';

export function Contact(): JSX.Element {
  return (
    <>
      <Box className={background}></Box>
      <Box paddingTop="xxxlarge" width="full" height="full" position="relative" zIndex="dropdown">
        <Stack space="large" align="center">
          <Heading level="1">Let's Talk</Heading>
          <Heading level="2">How can we help?</Heading>
          <Box className={styles.container}>
            <ContactForm />
          </Box>
        </Stack>
      </Box>
    </>
  );
}
