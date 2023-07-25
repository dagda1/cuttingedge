import { Box, Heading, Stack, Text } from '@cutting/component-library';
import cs from 'classnames';
import { background } from '~/pages/Panels/Services/Service.css';
import { bg } from '~/pages/Home/HomeMobile.css';
import { ContactForm } from '@cutting/react-hook-form-components';

export default function Contact(): JSX.Element {
  return (
    <>
      <Box className={cs(bg, background)}></Box>
      <Box
        marginTop="xxxlarge"
        display="flex"
        justifyContent="center"
        width="full"
        height="full"
        style={{ border: '10px solid gold' }}
      >
        <Stack space="large">
          <Heading level="2">Let's Talk</Heading>
          <Text component="p">How can we help?</Text>
          <ContactForm />
        </Stack>
      </Box>
    </>
  );
}
