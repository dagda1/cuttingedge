import { Heading, DSTestimonial, Stack, Text } from '@cutting/component-library';
import { ContactButtons } from '@cutting/react-hook-form-components';

export default function Mentoring(): JSX.Element {
  return (
    <Stack space={{ mobile: 'small', desktop: 'large', wide: 'large' }}>
      <Heading level="2">Mentoring</Heading>
      <Text component="p">Is your team missing critical frontend development skills?</Text>
      <Heading level="2">We don't just teach frameworks</Heading>
      <Text component="p">We know it's about more than just gaining a new skill set.</Text>
      <Text>
        We're about transforming the way your team collaborates, enhancing their ability to strategize frontend
        development.
      </Text>
      <DSTestimonial />
      <Text component="p" size="large" tone="info" align="center">
        Get in touch with us today
      </Text>
      <ContactButtons justify="center" callType="mentoring" />
    </Stack>
  );
}
