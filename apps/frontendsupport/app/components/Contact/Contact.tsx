import { Box, Heading, Stack } from '@cutting/component-library';
import * as styles from './Contact.css';

export function Contact(): JSX.Element {
  return (
    <Box
      height="full"
      width="full"
      position="relative"
      zIndex="dropdown"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box width="1/2">
        <Stack space="large" align="center">
          <Heading level="1">Let's Talk</Heading>
          <Heading level="2">I can help!</Heading>
          <Box className={styles.container}>
            <script type="text/javascript" src="https://www.formlets.com/static/js/iframeResizer.min.js"></script>
            <iframe
              title="let me know how I can help"
              className="formlets-iframe"
              src="https://www.formlets.com/forms/GjSjbg7O4bR8tOoE/?iframe=true&amp;nofocus=y"
              frameBorder="0"
              width="100%"
            ></iframe>
            <script type="text/javascript" src="https://www.formlets.com/static/js/iframe.js"></script>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
