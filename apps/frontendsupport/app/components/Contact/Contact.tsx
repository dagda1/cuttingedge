import { Box, Heading, Stack } from '@cutting/component-library';
import { ContactForm } from '@cutting/react-hook-form-components';
import * as styles from './Contact.css.js';
import { LazyBackgroundImage } from '../LazyBackgroundImage/LazyBackgroundImage.js';

export function Contact(): JSX.Element {
  return (
    <>
      <LazyBackgroundImage
        backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/v1689953393/frontendsupport/pain_wide_jjmyp6.png"
        backgroundStyle="static"
      />
      <Box paddingTop="xxxlarge" width="full" height="full" position="relative" zIndex="dropdown">
        <Stack space="large" align="center">
          <Heading level="1">Let's Talk</Heading>
          <Heading level="2">We can help!</Heading>
          <Box className={styles.container}>
            <ContactForm />
          </Box>
        </Stack>
      </Box>
    </>
  );
}
