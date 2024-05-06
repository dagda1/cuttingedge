import { Box, Heading } from '@cutting/component-library';

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
      <Box
        height="full"
        width={{ mobile: 'full', desktop: '1/2' }}
        marginTop={{ mobile: 'xxsmall', desktop: 'xxxlarge' }}
      >
        <Box display="flex" flexDirection="column" justifyContent="center" height="full" marginTop="xxxlarge">
          <Heading level="1">Let's Talk</Heading>
          <script type="text/javascript" src="https://www.formlets.com/static/js/iframeResizer.min.js"></script>
          <Box
            component="iframe"
            title="let me know how I can help"
            className="formlets-iframe"
            src="https://www.formlets.com/forms/GjSjbg7O4bR8tOoE/?iframe=true&amp;nofocus=y"
            frameBorder="0"
            width="full"
            height="full"
          ></Box>
          <script type="text/javascript" src="https://www.formlets.com/static/js/iframe.js"></script>
        </Box>
      </Box>
    </Box>
  );
}
