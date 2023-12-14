import { Box, Heading } from '@cutting/component-library';
import { LazyBackgroundImage } from '~/components/LazyBackgroundImage/LazyBackgroundImage.js';

export default function ContactConfirmation(): JSX.Element {
  return (
    <>
      <LazyBackgroundImage
        backgroundImage="https://res.cloudinary.com/ddospxsc8/image/upload/v1689953393/frontendsupport/pain_wide_jjmyp6.png"
        backgroundStyle="static"
      />
      <Box paddingTop="xxxlarge" width="full" height="full" display="flex" alignItems="center" justifyContent="center">
        <Heading level="1">Thank you for your enquiry, we'll get back to you as soon as possible.</Heading>
      </Box>
    </>
  );
}
