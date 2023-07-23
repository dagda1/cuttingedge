import { Box, Heading, PageBlock, Stack, Text } from '@cutting/component-library';
import cs from 'classnames';
import { background } from '~/pages/Panels/Services/Service.css';
import { bg } from '~/pages/Home/HomeMobile.css';
import { ContactForm } from '@cutting/react-hook-form-components';

export default function Contact(): JSX.Element {
  return (
    <Box marginTop="xxxlarge" display="flex" justifyContent="center">
      <Box className={cs(bg, background)}></Box>
      <PageBlock>
        <Stack space="large">
          <Heading level="2">Let's Talk</Heading>
          <Text component="p">How can we help?</Text>
          <ContactForm />
        </Stack>
      </PageBlock>
    </Box>
  );
}
