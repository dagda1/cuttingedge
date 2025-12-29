import { Box, Heading, Stack } from '@cutting/component-library';

import * as styles from './Contact.css';
import { ContactButtons } from './ContactButtons';

export function Contact(): JSX.Element {
  return (
    <Box
      paddingBottom="xxxlarge"
      marginBottom="xxxlarge"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      width="full"
      height="full"
      position="relative"
      zIndex="dropdown"
    >
      <Stack space="large" align="center">
        <Heading level="1">Let&apos;s Talk</Heading>
        <Heading level="2">I can help</Heading>
        <Box className={styles.container}>
          <ContactButtons />
        </Box>
      </Stack>
    </Box>
  );
}
