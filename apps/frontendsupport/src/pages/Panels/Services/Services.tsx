import { Box, Heading, Stack } from '@cutting/component-library';
import { ContactButtons } from '@cutting/react-hook-form-components';

export function Services(): JSX.Element {
  return (
    <Box padding={{ mobile: 'small', tablet: 'none' }}>
      <Stack space="small" align="center">
        <Box marginBottom="medium">
          <Heading level="1">Need help now?</Heading>
        </Box>
        <Box zIndex="sticky">
          <ContactButtons justify="center" callType="chat" />
        </Box>
      </Stack>
    </Box>
  );
}
