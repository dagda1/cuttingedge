import { Heading, Redhatestimonial, Stack, Text } from '@cutting/component-library';
import { ContactButtons } from '@cutting/react-hook-form-components';

export default function Rescue(): JSX.Element {
  return (
    <Stack space={{ mobile: 'small', desktop: 'large', wide: 'large' }}>
      <Heading level="2">Your Rescue Team is waiting</Heading>
      <Text component="p">
        Is your frontend software project spiraling into the abyss? Complexities, delays, and unexpected issues throwing
        you off course? We can be your beacon in the storm of frontend software development.
      </Text>
      <Heading level="2">Set Your Project Soaring</Heading>
      <Text component="p">
        We don't stop at fixing the problem. We turn challenges into opportunities. Once we've set your project back on
        track, we equip your team with the knowledge and tools needed to maintain momentum and avoid similar hiccups in
        the future.
      </Text>
      <Text component="p">Ready to pull your frontend project out of the abyss and set it soaring to new heights?</Text>
      <Redhatestimonial />
      <Text component="p" size="large" tone="info" align="center">
        Get in touch with us today – your rescue team is waiting.
      </Text>
      <ContactButtons callType="frontend-productivity-transformation" />
    </Stack>
  );
}
