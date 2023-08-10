import { Box, Heading } from '@cutting/component-library';
import { background } from '~/pages/Panels/Services/Service.css';

export default function ContactConfirmation(): JSX.Element {
  return (
    <>
      <Box className={background}></Box>
      <Box paddingTop="xxxlarge" width="full" height="full" display="flex" alignItems="center" justifyContent="center">
        <Heading level="1">Thank you for your enquiry, we'll get back to you soon.</Heading>
      </Box>
    </>
  );
}
