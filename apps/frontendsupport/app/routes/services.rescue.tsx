import { Box, Heading, Redhatestimonial, Stack, Text } from '@cutting/component-library';
import { ContactButtons } from '@cutting/react-hook-form-components';

export default function Rescue(): JSX.Element {
  return (
    <Box marginBottom="large">
      <Stack space={{ mobile: 'small', desktop: 'large', wide: 'large' }}>
        <Heading level="2">Get back on track now</Heading>
        <Text component="p">We don't stop at fixing the problem. We turn challenges into opportunities.</Text>
        <Text component="p">
          Once we've set your project back on track, we equip your team with the knowledge and tools needed to maintain
          momentum and avoid similar hiccups in the future.
        </Text>
        <Text component="p">
          Ready to pull your frontend project out of the abyss and set it soaring to new heights?
        </Text>
        <Redhatestimonial />
        <Text component="p" size="large" tone="info" align="center">
          Get in touch with us today – your rescue team is waiting.
        </Text>
        <ContactButtons justify="center" callType="rescue" />
      </Stack>
    </Box>
  );
}
