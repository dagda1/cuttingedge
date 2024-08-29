import { Box, Heading, Stack } from '@cutting/component-library';
import { ContactForm } from '@cutting/react-hook-form-components';

import * as styles from './Contact.css';

export function Contact(): JSX.Element {
  return (
    <Box paddingTop="xxxlarge" width="full" height="full" position="relative" zIndex="dropdown">
      <Stack space="large" align="center">
        <Heading level="1">Let's Talk</Heading>
        <Heading level="2">I can help!</Heading>
        <Box className={styles.container}>
          <ContactForm />
        </Box>
      </Stack>
    </Box>
  );
}
