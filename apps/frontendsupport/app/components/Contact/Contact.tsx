import { Box, Heading } from '@cutting/component-library';
import IframeResizer from 'iframe-resizer-react';

export function Contact(): JSX.Element {
  return (
    <Box
      height="full"
      width="full"
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box height="full" width={{ mobile: 'full', desktop: '1/2' }}>
        <Box display="flex" flexDirection="column" justifyContent="center" height="full">
          <Box marginTop={{ mobile: 'xxxlarge' }} marginBottom={{ mobile: 'small' }}>
            <Heading level="1">Let's Talk</Heading>
          </Box>
          <IframeResizer
            heightCalculationMethod="lowestElement"
            inPageLinks
            title="let me know how I can help"
            className="formlets-iframe"
            src="https://www.formlets.com/forms/GjSjbg7O4bR8tOoE/?iframe=true&amp;nofocus=y"
            width="100%"
            height="100%"
          />
          <script type="text/javascript" src="https://www.formlets.com/static/js/iframe.js"></script>
        </Box>
      </Box>
    </Box>
  );
}
