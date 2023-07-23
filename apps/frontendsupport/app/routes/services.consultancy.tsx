import { Heading, C2Testimonial, Stack, Text } from '@cutting/component-library';
import { ContactButtons } from '@cutting/react-hook-form-components';
export default function Consultancy(): JSX.Element {
  return (
    <Stack space={{ mobile: 'small', desktop: 'large', wide: 'large' }}>
      <Heading level="2">Frontend as a service</Heading>
      <Text component="p">Need help with how to approach a critical frontend feature?</Text>
      <Heading level="2">Need help getting the answers you want?</Heading>
      <Text component="p">We can get your critical frontend feature out the door with the minimum of fuss.</Text>
      <Text component="p">We can upskill your team to take this feature forward and beyond.</Text>
      <C2Testimonial />
      <Text component="p" size="large" tone="info" align="center">
        Get in touch with us today
      </Text>
      <ContactButtons justify="center" callType="consulting" />
    </Stack>
  );
}
