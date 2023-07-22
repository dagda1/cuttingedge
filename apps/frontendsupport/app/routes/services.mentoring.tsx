import { Heading, DSTestimonial, Stack, Text } from '@cutting/component-library';

export default function Mentoring(): JSX.Element {
  return (
    <Stack space={{ mobile: 'small', desktop: 'large', wide: 'large' }}>
      <Heading level="2">Rapid frontend skills mentoring</Heading>
      <Text component="p">Is your team missing critical frontend development skills?</Text>
      <Text component="p">Elevate your team's performance, versatility, and innovation potential.</Text>
      <Heading level="2">We don't just teach frameworks</Heading>
      <Text component="p">
        We know it's about more than just gaining a new skill set. We're about transforming the way your team
        collaborates, enhancing their ability to strategize frontend development, and supercharging their
        problem-solving capabilities.
      </Text>
      <DSTestimonial />
      <Text component="p" size="large" tone="info" align="center">
        Get in touch with us today
      </Text>
    </Stack>
  );
}
