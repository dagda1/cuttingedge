import { Heading, C2Testimonial, Stack, Text } from '@cutting/component-library';

export default function Consultancy(): JSX.Element {
  return (
    <Stack space={{ mobile: 'small', desktop: 'large', wide: 'large' }}>
      <Heading level="2">Frontend as a service</Heading>
      <Text component="p">Unsure how to approach a critical frontend feature?</Text>
      <Heading level="2">Can't get the answers you want?</Heading>
      <Text component="p">We can get your critical frontend feature out the door with the minimum of fuss.</Text>
      <C2Testimonial />
      <Text component="p" size="large" tone="info" align="center">
        Get in touch with us today
      </Text>
    </Stack>
  );
}
